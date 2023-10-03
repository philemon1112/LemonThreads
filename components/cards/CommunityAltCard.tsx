"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

interface Props {
    id: string
    name: string
    username: string
    imgUrl: string
    personType: string
}
async function CommunityAltCard({id, name, username, imgUrl, personType}: Props) {

    const router = useRouter();
  return (
    <article className="flex flex-wrap items-center gap-3 ">
        <div className="relative h-12 w-12">
            <Image
                src={imgUrl}
                alt="logo"
                fill
                className='rounded-full object-cover'
            />
        </div>
        <div className="">
                 <h4 className='text-base-semibold text-light-1'>{name}</h4>
                 <p className="text-small-medium text-gray-1">@{username}</p>
            </div>

        <Button className='user-card_btn right-0 items-end' onClick={()=> router.push(`/communities/${id}`)}>
            View
        </Button>
    </article>
  )
}

export default CommunityAltCard