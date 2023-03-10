import type { RenderOptions } from '@builder.io/qwik/server'
import { renderToString } from '@builder.io/qwik/server'
import Root from './root'

export default function (opts: RenderOptions) {
  return renderToString(<Root />, opts)
}
