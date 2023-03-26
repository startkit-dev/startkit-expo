import { create } from "react-test-renderer"

import { ModalView } from "../ModalView"
import { Text } from "../Text"

test("renders correctly", () => {
  const tree = create(
    <ModalView>
      <Text>ModalView test</Text>
    </ModalView>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})
