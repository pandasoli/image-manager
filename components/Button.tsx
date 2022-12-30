import { JSX, ComponentChildren } from 'preact'


type Props = {
  icon?: (
    { size, color, stroke, ...props }: {
      // deno-lint-ignore no-explicit-any
      [x: string]: any
      size?: number | undefined
      color?: string | undefined
      stroke?: number | undefined
    }
  ) => JSX.Element
  disabled?: boolean | undefined
  outline?: boolean | undefined
  label?: boolean | undefined
  // type?: 'normal' | 'outline' | 'text'
  children?: ComponentChildren
  onClick?: () => void
}


const Button = (props: Props) =>
  <div
    onClick={ () => props.disabled && props.onClick?.() }
    class={
      'group flex gap-3 items-center py-1 px-5 rounded transition-colors cursor-pointer m-2 ' +
      (
        props.label ?
          props.disabled
            ? 'text-snow-storm-I'
            : 'hover:text-frost-I'
        :
        props.outline ?
          'border-1 ' + (
            props.disabled
              ? 'border-snow-storm-I text-snow-storm-I'
              : 'border-polar-night-IIII hover:(border-frost-I text-frost-I)'
          )
        :
        props.disabled
          ? 'bg-snow-storm-I text-white'
          : 'bg-frost-II hover:bg-frost-I'
      )
    }
  >
    { props.icon && <props.icon class='pointer-events-none' size={ 24 }/> }
    <label class='pointer-events-none'>
      { props.children }
    </label>
  </div>


export default Button
