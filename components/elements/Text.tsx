import { clsx } from "clsx"
import {
  Text as DefaultText,
  type TextProps as DefaultTextProps
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
        "text-black dark:text-white",
        mono && "font-mono font-normal"
      )}
      {...props}
    />
  )
}
