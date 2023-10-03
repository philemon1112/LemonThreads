import React from 'react'
import SuggestedUsers from '../data/SuggestedUsers'
import SuggestedCommunity from '../data/SuggestedCommunity'

function RightSidebar() {
  return (
    <section className='custom-scollbar rightsidebar'>
        <div className="flex flex-1 flex-col justify-start">
            <h3 className='text-heading4-medium text-light-1'>Suggested Communities</h3>
            <SuggestedCommunity />
        </div>

        <div className="flex flex-1 flex-col justify-start">
            <h3 className='text-heading4-medium text-light-1 mb-2'>Suggested Users</h3>
            <SuggestedUsers />
        </div>
    </section>
  )
}

export default RightSidebar
