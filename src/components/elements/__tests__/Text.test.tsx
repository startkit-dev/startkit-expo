import { create } from "react-test-renderer"

import { Text } from "../Text"

test("renders correctly", () => {
  const tree = create(<Text>Text test</Text>).toJSON()

  expect(tree).toMatchSnapshot()
})

test("renders mono text", () => {
  const tree = create(<Text mono>Mono text test</Text>).toJSON()

  expect(tree).toMatchSnapshot()
})
