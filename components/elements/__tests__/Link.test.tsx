import { create } from "react-test-renderer"

import { Link } from "../Link"

test("renders correctly", () => {
  const tree = create(<Link href="/">Link test</Link>).toJSON()

  expect(tree).toMatchSnapshot()
})