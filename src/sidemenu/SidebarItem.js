import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarItem = [
 
  {
    title: 'MyProfile',
    path: '/myProfile',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'OtherUserList',
    path: '/otherUserList',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  
];