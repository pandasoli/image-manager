import { AppProps } from '$fresh/server.ts'
import { Head } from '$fresh/runtime.ts'


const App = ({ Component }: AppProps) =>
  <>
    <Head>
      <link rel='stylesheet' href='/fonts/Rubik/rubik.css'/>

      <link rel='icon' href='/favicon.ico' sizes='32x32'/>
      <link rel='icon' href='/logo.svg' type='image/svg+xml'/>
    </Head>

    <Component/>
  </>


export default App
