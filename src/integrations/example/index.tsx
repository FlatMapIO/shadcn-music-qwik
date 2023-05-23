/** @jsxImportSource react */

import { qwikify$ } from '@builder.io/qwik-react'

import { ModeToggle as ModeToggleReact } from './mode-toggle'
import { MusicApp as MusicAppReact } from './music'

export const MusicApp = qwikify$(MusicAppReact)
export const ModeToggle = qwikify$(ModeToggleReact, { eagerness: 'hover' })
