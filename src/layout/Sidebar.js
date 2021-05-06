import React, { useState } from 'react'
import SideLink from '../components/SideLink'
import UserBox from '../components/UserBox'
import {
  HomeIcon,
  ExploreIcon,
  NotificationsIcon,
  MessagesIcon,
  BookmarksIcon,
  ListsIcon,
  ProfileIcon,
  MoreIcon
} from '../icons/Icon'

import twitterLogo from '../images/twitter.svg'

const sideLinks = [
  {
    name: 'Home',
    icon: HomeIcon
  },
  {
    name: 'Explore',
    icon: ExploreIcon
  },
  {
    name: 'Notifications',
    icon: NotificationsIcon
  },
  {
    name: 'Messages',
    icon: MessagesIcon
  },
  {
    name: 'Bookmarks',
    icon: BookmarksIcon
  },
  {
    name: 'Lists',
    icon: ListsIcon
  },
  {
    name: 'Profile',
    icon: ProfileIcon
  },
  {
    name: 'More',
    icon: MoreIcon
  }
]

const Sidebar = () => {
  const [active, setActive] = useState('Home')

  const handleMenuItemClick = (name) => {
    setActive(name)
  }

  return (
    <div className="flex flex-col justify-between px-2 w-72">
      <div>
        <div className="mt-1 mb-4 ml-1 hover:bg-gray-lightest flex items-center justify-center w-12 h-12 rounded-full transform transition-colors duration-200">
          <img src={twitterLogo} alt="twitter-logo" className="w-8 h-8" />
        </div>
        <nav className="mb-4">
          <ul>
            {sideLinks.map(({ name, icon }) => (
              <SideLink
                key={name}
                name={name}
                Icon={icon}
                active={active}
                onMenuItemClick={handleMenuItemClick}
              />
            ))}
          </ul>
        </nav>
        <button className="bg-primary-base text-white rounded-full py-3 px-8 w-11/12 shadow-lg hover:bg-primary-dark transform transition-colors duration-200">
          Tweet
        </button>
      </div>
      <UserBox />
    </div>
  )
}

export default Sidebar
