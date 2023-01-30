import { Head } from '$fresh/runtime.ts'
import { useState } from 'preact/hooks'
import { createRef } from 'preact'

import IconDeviceDesktop from 'https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/device-desktop.tsx'
import CutIcon from 'https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/cut.tsx'
import RefreshIcon from 'https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/refresh.tsx'

import { Btn, Section } from '@components/index.ts'


const HomePage = () => {
  const [ Image, SetImage ] = useState<string | ArrayBuffer | null>()

  const $File = createRef<HTMLInputElement>()


  const previewFile = (file?: File) => {
    if (!file) return

    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onloadend = () =>
      SetImage(reader.result)
  }

  return <div class='flex flex-col items-center w-full'>
    <Head>
      <title>Image Manager</title>
    </Head>

    <input
      type='file'
      class='hidden'
      ref={ $File }
      onInput={ () => previewFile($File.current?.files?.[0]) }
    />

    <Section type={ 1 }>
      {
        Image?.toString() ?
          <img
            src={ Image?.toString() }
            alt='Imported picture...'
            class='w-[90%] h-80 rounded-2xl transition-colors border(2 dashed snow-storm-I) hover:(border-polar-night-IIII) cursor-pointer object-contain'
            onClick={ () => $File.current?.click() }
          />
          :
          <div
            class='flex flex-col justify-evenly items-center w-[90%] h-80 rounded-2xl transition-colors border(2 dashed snow-storm-I) hover:(border-polar-night-IIII) cursor-pointer'
            onClick={ () => $File.current?.click() }
          >
            <h1 class='text-2.027 font-bold'>Select a image</h1>

            <div>
              <Btn label icon={ IconDeviceDesktop }>From your computer</Btn>
            </div>
          </div>
      }
    </Section>

    <Section type={ 2 }>
      Image infos
    </Section>

    <Section type={ 3 }>
      <Btn disabled={ !Image } night outline>
        <CutIcon size={ 24 }/>
        Crop Image
      </Btn>
      <Btn disabled night outline>
        <CutIcon size={ 24 }/>
        Resize Image
      </Btn>
      <Btn disabled night outline>
        <RefreshIcon size={ 24 }/>
        Convert Image
      </Btn>
    </Section>

    <Section type={ 4 }>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ipsam consequuntur et, provident animi accusamus dolorem asperiores labore vitae, quas itaque. Blanditiis maiores saepe facere dignissimos dolore impedit odio eligendi.
    </Section>

    <br/>
  </div>
}


export default HomePage
