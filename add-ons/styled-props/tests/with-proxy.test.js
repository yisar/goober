import { styled } from "goober";
import { addProxiedStyledProps } from '../src/with-proxy';

jest.mock("goober", () => ({
  styled: jest.fn().mockReturnValue("styled()")
}));

describe("with-proxy", () => {
  it("calls styled with tagname", () => {
    const proxiedStyled = addProxiedStyledProps(styled);
    proxiedStyled.tagname;
    expect(styled).toBeCalledWith("tagname");
  });
});
