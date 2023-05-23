import { component$ } from '@builder.io/qwik'

import { MusicApp } from '~/integrations/example'


export default component$(() => {
  return       <MusicApp client:hover />
})
