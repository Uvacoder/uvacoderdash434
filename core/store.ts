import debug from 'debug'
import create from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

import {
  initialMainState,
  initialStyleState,
  MainState,
  StyleState,
} from './initialState'

const logger = debug('store')

export interface iAppState {
  darkMode: boolean
  setDarkMode(): void
  main: MainState
  // eslint-disable-next-line no-unused-vars
  setMain(state: MainState): void
  style: StyleState
  // eslint-disable-next-line no-unused-vars
  setStyle(state: StyleState): void
  user: any
  // eslint-disable-next-line no-unused-vars
  setUser(state: any): void
}

export const useAppStore = create<iAppState>()(
  immer(
    persist<iAppState>(
      (set, get) => ({
        darkMode: false,
        setDarkMode: () => set(() => ({ darkMode: !get().darkMode })),
        main: initialMainState,
        setMain: (mainState) =>
          set((state: iAppState) => ({
            main: { ...state.main, ...mainState },
          })),
        style: initialStyleState,
        setStyle: (styleState) =>
          set((state: iAppState) => ({
            style: { ...state.style, ...styleState },
          })),
        user: {},
        setUser: (useState) =>
          set((state: iAppState) => ({ user: { ...state.user, ...useState } })),
      }),
      {
        name: 'pol-store',
        onRehydrateStorage: () => {
          logger('hydration starts')
          return (state, error) => {
            if (error) {
              logger('an error happened during hydration', error)
            } else {
              logger('hydration finished', { state })
            }
          }
        },
      }
    )
  )
)
