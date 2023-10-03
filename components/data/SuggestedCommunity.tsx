import React from 'react'
import UserCard from '../cards/UserCard'
import { currentUser } from '@clerk/nextjs';
import { fetchUser, fetchUsers } from '@/lib/actions/user.actions';
import { redirect } from 'next/navigation';
import { fetchCommunities } from '@/lib/actions/community.actions';
import CommunityAltCard from '../cards/CommunityAltCard';

async function SuggestedCommunity() {

    const user = await currentUser();

    if(!user) return null;

    const userInfo = await fetchUser(user?.id);
    if(!userInfo?.onboarded) redirect('/onboarding')

    // Fetch Users
    const result = await fetchCommunities({
        searchString: '',
        pageNumber: 1,
        pageSize: 25
    });

    // key={community.id}
    //             id={community.id}
    //             name={community.name}
    //             username={community.username}
    //             imgUrl={community.image}
    //             bio={community.bio}
    //             members={community.members}

  return (
    <div className="mt-4 flex flex-col gap-6">
        {result?.communities?.length === 0 ? (
                <p className='no-result'>No Communities</p>
            ): (
            <>
                {result.communities.map((community)=> (
                    <CommunityAltCard
                        key={community.id}
                        id={community.id}
                        name={community.name}
                        username={community.username}
                        imgUrl={community.image}
                        personType="User" 
                    />
                ))}
            </>
        )}
    </div>
  )
}

export default SuggestedCommunity