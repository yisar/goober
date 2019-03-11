import { styled } from "goober";
import { addStyledProps } from "../src/without-proxy";
import { commonTagNames } from "../src/common-tagnames";

jest.mock("goober", () => ({
  styled: jest.fn().mockReturnValue("styled()")
}));

describe("with-proxy", () => {
  it("calls styled with tagname", () => {
    addStyledProps(styled, commonTagNames);
    commonTagNames.forEach(tagName => expect(styled).toBeCalledWith(tagName));
  });
  it("styled has tagName prop", () => {
    addStyledProps(styled, commonTagNames);
    commonTagNames.forEach(tagName => expect(styled[tagName]).toBe("styled()"));
  });
});
