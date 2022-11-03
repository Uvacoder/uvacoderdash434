import * as styles from './styles'

interface StyleState {
  asideStyle: string
  asideScrollbarsStyle: string
  asideBrandStyle: string
  asideMenuItemStyle: string
  asideMenuItemActiveStyle: string
  asideMenuDropdownStyle: string
  navBarItemLabelStyle: string
  navBarItemLabelHoverStyle: string
  navBarItemLabelActiveColorStyle: string
  overlayStyle: string
  darkMode: boolean
}

export const initialStyleState: StyleState = {
  asideStyle: styles.basic.aside,
  asideScrollbarsStyle: styles.basic.asideScrollbars,
  asideBrandStyle: styles.basic.asideBrand,
  asideMenuItemStyle: styles.basic.asideMenuItem,
  asideMenuItemActiveStyle: styles.basic.asideMenuItemActive,
  asideMenuDropdownStyle: styles.basic.asideMenuDropdown,
  navBarItemLabelStyle: styles.basic.navBarItemLabel,
  navBarItemLabelHoverStyle: styles.basic.navBarItemLabelHover,
  navBarItemLabelActiveColorStyle: styles.basic.navBarItemLabelActiveColor,
  overlayStyle: styles.basic.overlay,
  darkMode: false,
}

interface MainState {
  userName: string
  userEmail: null | string
  userAvatar: null | string
  isFieldFocusRegistered: boolean
}

export const initialMainState: MainState = {
  /* User */
  userName: '',
  userEmail: null,
  userAvatar: null,

  /* Field focus with ctrl+k (to register only once) */
  isFieldFocusRegistered: false,
}
