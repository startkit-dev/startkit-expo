import { clsx } from "clsx"
import {
  Text as DefaultText,
  TextProps as DefaultTextProps
} from "react-native"

export type TextProps = DefaultTextProps & {
  /**
   * Toggle to use the default monospace font
   */
  mono?: boolean
}

/**
 * A Wrapper round the <Text> component which applies our basic styles,
 * considering dark mode, etc.
 */
export function Text({ mono, ...props }: TextProps) {
  return (
    <DefaultText
      className={clsx(
        "text-gray-900 dark:text-gray-50",
        mono && "font-mono font-normal"
      )}
      {...props}
    />
  )
}
