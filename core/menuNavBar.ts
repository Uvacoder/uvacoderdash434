import {
  mdiAccount,
  // mdiClockOutline,
  // mdiCloud,
  mdiCogOutline,
  // mdiCrop,
  mdiEmail,
  // mdiGithub,
  mdiLogout,
  // mdiMenu,
  mdiThemeLightDark,
} from '@mdi/js'

import { MenuNavBarItem } from '../interfaces'

const menuNavBar: MenuNavBarItem[] = [
  // {
  //   icon: mdiMenu,
  //   label: 'Menu',
  //   menu: [
  //     {
  //       icon: mdiClockOutline,
  //       label: 'Item One',
  //     },
  //     {
  //       icon: mdiCloud,
  //       label: 'Item Two',
  //     },
  //     {
  //       isDivider: true,
  //     },
  //     {
  //       icon: mdiCrop,
  //       label: 'Item Last',
  //     },
  //   ],
  // },
  {
    isCurrentUser: true,
    menu: [
      {
        icon: mdiAccount,
        label: 'My Profile',
        // href: '/profile',
      },
      {
        icon: mdiCogOutline,
        label: 'Settings',
      },
      {
        icon: mdiEmail,
        label: 'Messages',
      },
      {
        isDivider: true,
      },
      {
        icon: mdiLogout,
        label: 'Log Out',
        isLogout: true,
      },
    ],
  },
  {
    icon: mdiThemeLightDark,
    label: 'Light/Dark',
    isDesktopNoLabel: true,
    isToggleLightDark: true,
  },
  // {
  //   icon: mdiGithub,
  //   label: 'GitHub',
  //   isDesktopNoLabel: true,
  //   href: 'https://github.com/polpenaloza/react-me.com',
  //   target: '_blank',
  // },
  // {
  //   icon: mdiLogout,
  //   label: 'Log out',
  //   isDesktopNoLabel: true,
  //   isLogout: true,
  // },
]

export default menuNavBar
