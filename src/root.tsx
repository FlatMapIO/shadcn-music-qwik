import { component$ } from '@builder.io/qwik'
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from '@builder.io/qwik-city'

import { RouterHead } from './components/router-head/router-head'
import '~/styles/global.css'
import 'virtual:uno.css'
import { QwikPartytown } from './components/partytown/partytown'
import { TailwindIndicator } from './components/tailwind-indicator'

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charSet='utf-8' />
        <link rel='manifest' href='/manifest.json' />
        <RouterHead />
        {/* <QwikPartytown forward={[]} /> */}
      </head>
      <body lang='en' class='font-sans antialiased h-screen'>
        <RouterOutlet />
        <ServiceWorkerRegister />
        <TailwindIndicator />
      </body>
    </QwikCityProvider>
  )
})
