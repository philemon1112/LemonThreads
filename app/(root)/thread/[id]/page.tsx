import ThreadCard from '@/components/cards/ThreadCard'
import Comment from '@/components/forms/Comment';
import { fetchThreadById } from '@/lib/actions/thread.actions';
import { fetchUser } from '@/lib/actions/user.actions';
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

async function page({params}: {params: {id: string}}) {
    const user = await currentUser();

    if(!user) return null;
    if (!params?.id) return null;

    const userInfo = await fetchUser(user?.id);
    if(!userInfo?.onboarded) redirect('/onboarding')

    const thread = await fetchThreadById(params?.id)

    console.log(thread?.community, 'cm')

  return (
    <section className="relative">
        <div>
            <ThreadCard
                key={thread?._id}
                id={thread?._id}
                currentUserId = {user?.id || " "}
                parentId={thread?.parentId}
                content={thread?.text}
                author={thread.author} 
                community={thread.community} 
                createdAt={thread.createdAt} 
                comments={thread.children}
            />
        </div>

        <div className="mt-7">
            <Comment
                threadId={thread?.id}
                currentUserImg={userInfo?.image}
                currentUserId={JSON.stringify(userInfo?._id)}
            />
        </div>

        <div>
            {thread.children.map((commentItem: any)=> (
                <ThreadCard
                    key={commentItem?._id}
                    id={commentItem?._id}
                    currentUserId = {user?.id || " "}
                    parentId={commentItem?.parentId}
                    content={commentItem?.text}
                    author={commentItem.author} 
                    community={commentItem.community} 
                    createdAt={commentItem.createdAt} 
                    comments={commentItem.children}
                    isComment
                />
            ))}
        </div>
    </section>
  )
}

export default page