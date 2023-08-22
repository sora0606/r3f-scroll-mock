import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SceneFront, SceneBack } from '@components/Scene'

export default function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <SceneFront style={{pointerEvents: 'none', zIndex: "110"}} />
      <SceneBack style={{pointerEvents: 'none', zIndex: "0"}} />
      <Component {...pageProps} />
    </>
  )
}