import { Feather } from "@expo/vector-icons"

import type { ComponentProps } from "react"

export type IconProps = ComponentProps<typeof Feather>

/**
 * A dark-mode aware wrapper around the <Feather> vector icon component which
 * applies our basic styles.
 */
export function Icon(props: IconProps) {
  return <Feather className="text-black dark:text-white" {...props} />
}
