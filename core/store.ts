import create from 'zustand'

import {
  StyleState,
  MainState,
  initialStyleState,
  initialMainState,
} from './initialState'

export interface iAppState {
  darkMode: boolean
  setDarkMode(): void
  main: MainState
  setMain(state: MainState): void
  style: StyleState
  setStyle(state: StyleState): void
  user: any
  setUser(state: any): void
}

export const useAppStore = create<iAppState>((set) => ({
  darkMode: false,
  setDarkMode: () => set((state: iAppState) => ({ darkMode: !state.darkMode })),
  main: initialMainState,
  setMain: (mainState) =>
    set((state: iAppState) => ({ main: { ...state.main, ...mainState } })),
  style: initialStyleState,
  setStyle: (styleState) =>
    set((state: iAppState) => ({ style: { ...state.style, ...styleState } })),
  user: {},
  setUser: (useState) =>
    set((state: iAppState) => ({ user: { ...state.user, ...useState } })),
}))
