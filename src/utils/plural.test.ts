import { plural } from "./plural";

describe("plural", () => {
  test("plural", () => {
    expect(plural(1, ["one", "two", "few"])).toEqual("one");
    expect(plural(2, ["one", "two", "few"])).toEqual("two");
    expect(plural(5, ["one", "two", "few"])).toEqual("few");
  });
});
