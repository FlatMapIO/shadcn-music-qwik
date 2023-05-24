import { component$ } from '@builder.io/qwik'

import { MusicApp } from '~/integrations/example'
import { Toaster } from '~/integrations/sonner'

export default component$(() => {
  return (
    <>
      <MusicApp client:hover />
      <Toaster />
    </>
  )
})
