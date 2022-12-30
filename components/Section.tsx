import { ComponentChildren } from 'preact'


type Props = {
  type?: 1 | 2 | 3 | 4
  children?: ComponentChildren
}


const Section = (props: Props) =>
  <section
    class={
      'flex flex-col w-full ' + (
        props.type === 1 ?
          'bg-[#fff]'
        :
        props.type === 2 ?
          'bg-[#f8f9fb]'
        :
        props.type === 3 ?
          'bg-[#2e3440]'
        :
        props.type === 4 ?
          'bg-[#fbfbfc]'
        : ''
      )
    }
  >
    <div class='flex flex-col items-center w-full p-1.802'>
      { props.children }
    </div>

    {
      props.type === 1 ?
        <svg class='block w-full select-none align-middle' viewBox='0 0 1920 157.327'>
          <path fill='#f8f9fb' d='M303.719 110.734a3330.42 3330.42 0 0 0 168.09 4.234 3320.491 3320.491 0 0 0 159.313-3.813c135.609-6.535 268.979-21.525 396.41-44.547C1296.81 17.949 1525.27 3.983 1669.51.833c151.12-3.304 243.74 4.253 250.49 4.822v151.672H0v-77.97c12.939 2.334 128.5 22.508 303.719 31.377z'/>
        </svg>
      :
      props.type === 2 ?
        <svg class='block w-full select-none align-middle' viewBox='0 0 1920 240'>
          <path fill='#2e3440' d='M0 0c62.028 23.301 207.726 31.062 355.345 10.956 194.93-26.548 329.274 58.551 412.36 95.275 113.991 50.379 161.026 36.177 242.491 47.604 81.464 11.428 80.28 30.32 167.409 35.339 99.802 5.746 258.527-51.115 385.457-10.565 156.954 50.136 300.814-6.06 356.938 1.225V240H0V0z'/>
        </svg>
      :
      props.type === 3 ?
        <svg class='block w-full select-none align-middle' viewBox='0 0 1440 47'>
          <path fill='#fbfbfc' d='M0 .058c117.505 18.386 269.602 22.114 456.294 11.185C562.076 5.051 730.784.911 885.297 3.273 1157.177 7.432 1386.981 21.329 1440 38.39v8.55H0V.058z'/>
        </svg>
      :
      props.type === 4 ?
        <svg class='block w-full select-none align-middle' viewBox='0 0 1440 120'>
          <path fill='#fff' d='M1440 21.21V120H0V21.21C120 35.07 240 42 360 42s240-6.93 360-20.79c88.328-8.794 154.574-14.333 198.738-16.618A3120.562 3120.562 0 0 1 1080 .42c120 0 240 6.93 360 20.79z'/>
        </svg>
      : ''
    }
  </section>


export default Section
