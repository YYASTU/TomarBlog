import React from 'react'
import ChatImage from '../Assets/ChatImage'

function Message() {
  return (
    <>
    <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
  <div class="shrink-0">
   <ChatImage/>
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-slate-500">You have a new message!</p>
  </div>
</div>
    </>
  )
}

export default Message