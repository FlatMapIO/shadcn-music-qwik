import { component$ } from '@builder.io/qwik'

import { playlists } from './data/playlists'
import { Main, Menu, Sidebar } from './islands'

export const Music = component$(() => {
  return (
    <div data-section='music'>
      <div>
        <Menu client:hover />
        <div class='border-t'>
          <div class='bg-background'>
            <div class='grid lg:grid-cols-5'>
              <Sidebar
                playlists={playlists}
                className='hidden lg:block'
                client:hover
              />
              <div class='col-span-3 lg:col-span-4 lg:border-l'>
                <div class='h-full px-4 py-6 lg:px-8'>
                  <Main client:hover />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})
