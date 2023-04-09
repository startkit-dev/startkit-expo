/**
 * This file contains the types for the navigation stack.
 * See more: https://reactnavigation.org/docs/typescript
 */
import type { NativeStackScreenProps } from "@react-navigation/native-stack"

/**
 * The screen/param list for the root-level stack
 */
export type RootStackParamList = {
  Home: undefined
  Settings: undefined
}

/**
 * Native Stack type to use on the root-level screens
 *
 * Usage
 *  function ScreenA({ navigation, route }: RootStackScreenProps<'ScreenA'>) { ... }
 */
export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>

/**
 * Extend the global React Navigation type to use `RootStackParamList` as the
 * default type for `useNavigation` and `useRoute` hooks.
 *
 * See https://reactnavigation.org/docs/typescript/#specifying-default-types-for-usenavigation-link-ref-etc
 */
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface RootParamList extends RootStackParamList {}
  }
}
