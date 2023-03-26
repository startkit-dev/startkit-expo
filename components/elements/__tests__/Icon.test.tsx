import { create } from "react-test-renderer"

import { Icon } from "../Icon"

test("renders correctly", () => {
  const tree = create(<Icon name="x" />).toJSON()

  expect(tree).toMatchSnapshot()
})
