import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
	{
		title: 'Home',
		path: '/',
		icon: <AiIcons.AiFillHome />,
	},
  	{
    title: 'Math',
    path: '/Math',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Algebra',
        path: '/math/math1',
        icon: <IoIcons.IoIosPaper />
      },
      // {
      //   title: 'Geometry',
      //   path: '/math/math2',
      //   icon: <IoIcons.IoIosPaper />
      // },
	  {
        title: 'Trigonometry',
        path: '/math/math3',
        icon: <IoIcons.IoIosPaper />
      },
	  {
        title: 'Probability',
        path: '/math/math4',
        icon: <IoIcons.IoIosPaper />
      },
	  {
        title: 'Mensuration',
        path: '/math/math5',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Biology',
    path: '/biology',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Life Processes',
        path: '/biology/biology1',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Control and Coordination',
        path: '/biology/biology2',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Heredity and Evolution',
        path: '/biology/biology3',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Chemistry',
    path: '/chemistry',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Acids, Bases and Salts',
        path: '/chemistry/chemistry1',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Chemical Reactions and Equations',
        path: '/chemistry/chemistry2',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Metals and Non-Metals',
        path: '/chemistry/chemistry3',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Physics',
    path: '/physics',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Electricity',
        path: '/physics/physics1',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Light: Reflection and Refraction',
        path: '/physics/physics2',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Magentic Effects of Electric Current',
        path: '/physics/physics3',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
//   {
//     title: 'Messages',
//     path: '/messages',
//     icon: <FaIcons.FaEnvelopeOpenText />,

//     iconClosed: <RiIcons.RiArrowDownSFill />,
//     iconOpened: <RiIcons.RiArrowUpSFill />,

//     subNav: [
//       {
//         title: 'Message 1',
//         path: '/messages/message1',
//         icon: <IoIcons.IoIosPaper />
//       },
//       {
//         title: 'Message 2',
//         path: '/messages/message2',
//         icon: <IoIcons.IoIosPaper />
//       }
//     ]
//   },
  {
    title: 'About',
    path: '/about',
    icon: <IoIcons.IoMdHelpCircle />
  }
];