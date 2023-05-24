import { Slot, component$, useStyles$ } from '@builder.io/qwik'

import { ModeToggle, MusicApp } from '~/integrations/example'
import { Toaster } from '~/integrations/sonner'
import styles from './styles.css?inline'

export default component$(() => {
  useStyles$(styles)

  return (
    <div data-section='music'>
      {/* <div class='flex justify-end px-4 py-2'>
        <ModeToggle client:only />
      </div> */}
      <Slot />
      <Toaster />
    </div>
  )
})
