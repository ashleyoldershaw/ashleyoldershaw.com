import { CcError, generateCreativeCommonsInfo } from "./ccHelpers";

describe("community commons testing", () => {
  test("by", () => {
    const licence_info = {
      no_derivatives: false,
      non_commercial: false,
      share_alike: false,
    };

    const output = generateCreativeCommonsInfo(licence_info);
    const expected = {
      text: "CC-BY",
      link: "https://creativecommons.org/licenses/by/4.0/",
    };
    expect(output).toEqual(expected);
  });
  test("by-sa", () => {
    const licence_info = {
      no_derivatives: false,
      non_commercial: false,
      share_alike: true,
    };

    const output = generateCreativeCommonsInfo(licence_info);
    const expected = {
      text: "CC-BY-SA",
      link: "https://creativecommons.org/licenses/by-sa/4.0/",
    };
    expect(output).toEqual(expected);
  });
  test("by-nc", () => {
    const licence_info = {
      no_derivatives: false,
      non_commercial: true,
      share_alike: false,
    };

    const output = generateCreativeCommonsInfo(licence_info);
    const expected = {
      text: "CC-BY-NC",
      link: "https://creativecommons.org/licenses/by-nc/4.0/",
    };
    expect(output).toEqual(expected);
  });
  test("by-nc-sa", () => {
    const licence_info = {
      no_derivatives: false,
      non_commercial: true,
      share_alike: true,
    };

    const output = generateCreativeCommonsInfo(licence_info);
    const expected = {
      text: "CC-BY-NC-SA",
      link: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
    };
    expect(output).toEqual(expected);
  });
  test("by-nd", () => {
    const licence_info = {
      no_derivatives: true,
      non_commercial: false,
      share_alike: false,
    };

    const output = generateCreativeCommonsInfo(licence_info);
    const expected = {
      text: "CC-BY-ND",
      link: "https://creativecommons.org/licenses/by-nd/4.0/",
    };
    expect(output).toEqual(expected);
  });
  test("by-nc-nd", () => {
    const licence_info = {
      no_derivatives: true,
      non_commercial: true,
      share_alike: false,
    };

    const output = generateCreativeCommonsInfo(licence_info);
    const expected = {
      text: "CC-BY-NC-ND",
      link: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
    };
    expect(output).toEqual(expected);
  });

  test("conflict", () => {
    const licence_info = {
      no_derivatives: true,
      non_commercial: false,
      share_alike: true,
    };

    expect(() => generateCreativeCommonsInfo(licence_info)).toThrow(CcError);
  });
  test("conflict with non-commercial", () => {
    const licence_info = {
      no_derivatives: true,
      non_commercial: true,
      share_alike: true,
    };

    expect(() => generateCreativeCommonsInfo(licence_info)).toThrow(CcError);
  });
});
