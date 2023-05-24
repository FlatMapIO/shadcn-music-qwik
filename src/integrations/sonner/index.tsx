/** @jsxImportSource react  */

import { qwikify$ } from '@builder.io/qwik-react'
import { Toaster as ToasterReact } from 'sonner'
export {toast} from 'sonner'
export const Toaster = qwikify$(ToasterReact, { clientOnly: true })
