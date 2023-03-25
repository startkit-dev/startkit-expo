import { clsx } from "clsx"
import {
  View as DefaultView,
  ViewProps as DefaultViewProps
} from "react-native"

export type ViewProps = DefaultViewProps & {
  transparent?: boolean
}

/**
 * A Wrapper round the <View> component which applies our basic styles,
 * considering dark mode, etc.
 */
export function View({ transparent, ...props }: ViewProps) {
  return (
    <DefaultView
      className={clsx(
        transparent ? "bg-transparent" : "bg-white dark:bg-black"
      )}
      {...props}
    />
  )
}
