import React, { useState } from 'react'
import PostingPets from './PostingPets'
import AdoptingRequests from './AdoptingRequests'
import AdoptedHistory from './AdoptedHistory'
import ApprovedRequests from './ApprovedRequests'

const AdminScreen = () => {
  const [screen, setScreen] = useState('postingPet')

  return (
    <div className='admin-screen-container'>
      <div className='admin-screen-left'>
        <div>
          <p onClick={() => setScreen('postingPet')}>Post Blood Requests</p>
          <p onClick={() => setScreen('approvedRequests')}>Approved Blood Requests</p>
          <p onClick={() => setScreen('adoptingPet')}>Acquire Blood Requests</p>
          <p onClick={() => setScreen('adoptedHistory')}>History</p>

        </div>
      </div>
      <div className='admin-screen-right'>
        {screen === 'postingPet' && <PostingPets />}
        {screen === 'approvedRequests' && <ApprovedRequests />}
        {screen === 'adoptingPet' && <AdoptingRequests />}
        {screen === 'adoptedHistory' && <AdoptedHistory />}
      </div>
    </div>
  )
}

export default AdminScreen
