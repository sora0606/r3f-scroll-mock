import { Inter } from 'next/font/google'
import { SmoothScrollbar } from '@14islands/r3f-scroll-rig'
import { ExampleComponentBack, ExampleComponentFront } from '@/components/example'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <SmoothScrollbar>
      {(bind) => (
        <article {...bind}>
          <header>@14islands/r3f-scroll-rig</header>
          <section>
            <h1>Scene Front example</h1>
          </section>
          <ExampleComponentFront />
          <section>
            <h1>Scene Back example</h1>
          </section>
          <ExampleComponentBack />
          <footer></footer>
        </article>
      )}
    </SmoothScrollbar>
  )
}
