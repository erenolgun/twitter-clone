/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

const UserBox = () => {
  return (
    <div className="flex items-center mb-6 hover:bg-primary-light cursor-pointer rounded-full py-2 px-4 transform transition-colors duration-200">
      <img
        className="w-11 rounded-full mr-4"
        src="https://pbs.twimg.com/profile_images/1364893929250947073/gswvInyH_400x400.jpg"
        alt="user-photo"
      />
      <div className="flex flex-col mr-12">
        <span className="font-bold text-md text-black">Eren Olgun</span>
        <span className="text-sm text-gray-dark">@erenolgun</span>
      </div>

      <div className="flex space-x-0.5">
        <div className="w-1 h-1 bg-gray-600 rounded-full" />
        <div className="w-1 h-1 bg-gray-600 rounded-full" />
        <div className="w-1 h-1 bg-gray-600 rounded-full" />
      </div>
    </div>
  )
}

export default UserBox
