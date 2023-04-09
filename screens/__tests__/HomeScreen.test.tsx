import { create } from "react-test-renderer"

import { HomeScreen } from "@/screens/HomeScreen"
import { renderScreen } from "@/test-helpers/react-navigation"

test("renders correctly", () => {
  const tree = create(renderScreen(HomeScreen)).toJSON()

  expect(tree).toMatchSnapshot()
})
