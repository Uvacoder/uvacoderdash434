import {
  mdiMonitor,
  mdiGithub,
  mdiAbacus,
  mdiAlarm,
  mdiRoad,
  mdiLock,
} from '@mdi/js'

import { MenuAsideItem } from '../interfaces'

const menuAside: MenuAsideItem[] = [
  {
    href: '/',
    icon: mdiAbacus,
    label: 'Home',
  },
  {
    href: '/dashboard',
    icon: mdiMonitor,
    label: 'Dashboard',
  },
  {
    href: '/binary-clock',
    icon: mdiAlarm,
    label: 'Binary Clock',
  },
  {
    href: '/details?id=1',
    icon: mdiRoad,
    label: 'Dynamic Details',
  },
  {
    // href: '/login',
    label: 'Login',
    icon: mdiLock,
  },
  // {
  //   label: 'Dropdown',
  //   icon: mdiViewList,
  //   menu: [
  //     {
  //       label: 'Item One',
  //     },
  //     {
  //       label: 'Item Two',
  //     },
  //   ],
  // },
  {
    href: 'https://github.com/polpenaloza/react-me.com',
    label: 'GitHub',
    icon: mdiGithub,
    target: '_blank',
  },
]

export default menuAside
