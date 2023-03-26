import { create } from "react-test-renderer"

import { Pressable } from "../Pressable"
import { Text } from "../Text"

test("renders correctly", () => {
  const tree = create(
    <Pressable>
      <Text>Pressable test</Text>
    </Pressable>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})
