import { clsx } from "clsx"
import { type LucideProps, X } from "lucide-react-native"

/**
 * List all icons used in the app here.
 *
 * This is used to limit the bundle size by only importing the icons we use.
 */
export const icons = {
  x: X
}

export type IconProps = LucideProps & {
  name: keyof typeof icons
}

/**
 * A dark-mode aware wrapper around the Lucide vector icon component which
 * applies our basic styles.
 *
 * If a color is provided, it will be used. Otherwise, the default color will be
 * used.
 *
 * For icons, see: https://lucide.dev
 */
export function Icon({ name, color, ...props }: IconProps) {
  const LucideIcon = icons[name]

  return (
    <LucideIcon
      className={clsx(!color && "text-black dark:text-white")}
      color={color}
      {...props}
    />
  )
}
