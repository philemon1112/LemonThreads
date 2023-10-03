import React from 'react'
import UserCard from '../cards/UserCard'
import { currentUser } from '@clerk/nextjs';
import { fetchUser, fetchUsers } from '@/lib/actions/user.actions';
import { redirect } from 'next/navigation';

async function SuggestedUsers() {

    const user = await currentUser();

    if(!user) return null;

    const userInfo = await fetchUser(user?.id);
    if(!userInfo?.onboarded) redirect('/onboarding')

    // Fetch Users
    const result = await fetchUsers({
        userId: user.id,
        searchString: '',
        pageNumber: 1,
        pageSize: 25
    })

  return (
    <div className="mt-4 flex flex-col gap-6">
            {result.users.length === 0 ? (
                <p className='no-result'>No users</p>
            ): (
                <>
                    {result.users.map((person)=> (
                        <UserCard
                            key={person.id}
                            id={person.id}
                            name={person.name}
                            username={person.username}
                            imgUrl={person.image}
                            personType="User" 
                        />
                    ))}
                </>
            )}
        </div>
  )
}

export default SuggestedUsers