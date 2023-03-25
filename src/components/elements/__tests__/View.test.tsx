import { create } from "react-test-renderer"

import { Text } from "../Text"
import { View } from "../View"

test("renders correctly", () => {
  const tree = create(
    <View>
      <Text>View test</Text>
    </View>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})
