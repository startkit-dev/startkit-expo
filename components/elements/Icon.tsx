import { Feather } from "@expo/vector-icons"
import { clsx } from "clsx"

import type { ComponentProps } from "react"

export type IconProps = ComponentProps<typeof Feather>

/**
 * A dark-mode aware wrapper around the <Feather> vector icon component which
 * applies our basic styles.
 *
 * If a color is provided, it will be used. Otherwise, the default color will be
 * used.
 */
export function Icon({ color, ...props }: IconProps) {
  return (
    <Feather
      className={clsx(!color && "text-black dark:text-white")}
      color={color}
      {...props}
    />
  )
}
