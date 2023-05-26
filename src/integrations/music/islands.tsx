/** @jsxImportSource react */

import { qwikify$ } from '@builder.io/qwik-react'

import { ModeToggle as ModeToggleReact } from './mode-toggle'
import { MusicApp as MusicAppReact } from './index-react'
import { Main as MainReact } from './components/main'
import { Menu as MenuReact } from './components/menu'
import { Sidebar as SidebarReact } from './components/sidebar'

export const MusicApp = qwikify$(MusicAppReact)
export const ModeToggle = qwikify$(ModeToggleReact)
export const Menu = qwikify$(MenuReact)
export const Sidebar = qwikify$(SidebarReact)
export const Main = qwikify$(MainReact)
