import { Slot, component$, useStyles$ } from '@builder.io/qwik'

import { ModeToggle, MusicApp } from '~/integrations/example'
import styles from './styles.css?inline'

export default component$(() => {
  useStyles$(styles)

  return (
    <div data-section='music'>
      <div class='text-right p-4'>
        <ModeToggle />
      </div>
      <Slot />
    </div>
  )
})
