import { Link } from "expo-router"
import { create } from "react-test-renderer"

test("renders correctly", () => {
  jest.mock("expo-router")
  const tree = create(<Link href="/">Link test</Link>).toJSON()

  expect(tree).toMatchSnapshot()
})
