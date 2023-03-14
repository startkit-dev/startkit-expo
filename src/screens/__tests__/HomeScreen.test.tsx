import { create } from "react-test-renderer";

import HomeScreen from "@/screens/HomeScreen";

test("renders correctly", () => {
  const tree = create(<HomeScreen />).toJSON();

  expect(tree).toMatchSnapshot();
});
