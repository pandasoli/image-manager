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
  night?: boolean | undefined

  // type?: 'normal' | 'outline' | 'text'
  children?: ComponentChildren
  onClick?: () => void
}


const Button = (props: Props) => {
  const styles = {
    label: {
      _: 'hover:text-frost-I',
      disabled: props.night
        ? 'text-polar-night-III'
        : 'text-snow-storm-I'
    },
    outline: {
      _: 'border-1 ' + (
        props.night
          ? 'border-snow-storm-I text-snow-storm-I hover:(border-frost-I text-frost-I)'
          : 'border-polar-night-IIII text-polar-night-III hover:(border-snow-storm-I text-snow-storm-I)'
      ),
      disabled: props.night
        ? 'border-polar-night-III text-polar-night-III'
        : 'border-snow-storm-I text-snow-storm-I'
    }
  }

  return <div
    onClick={ () => props.disabled && props.onClick?.() }
    class={
      [
        'group flex gap-3 items-center py-1 px-5 rounded transition-colors m-2 select-none',

        props.label ?
          props.disabled ? styles.label.disabled : styles.label._
        :
        props.disabled ? styles.outline.disabled : styles.outline._,

        !props.disabled ? 'cursor-pointer' : 'cursor-default'
      ].join(' ')
    }
  >
    { props.icon && <props.icon class='pointer-events-none' size={ 24 }/> }
    { props.children }
  </div>
}


export default Button
