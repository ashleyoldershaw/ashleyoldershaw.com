interface CcLicenceInfo {
  no_derivatives: boolean;
  non_commercial: boolean;
  share_alike: boolean;
}

interface CcLicenceOutput {
  text: string;
  link: string;
}

export class CcError extends Error {
  constructor(msg: string) {
    super(msg);

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, CcError.prototype);
  }
}

enum CcLicenceLinks {
  BY = "https://creativecommons.org/licenses/by/4.0/",
  BY_SA = "https://creativecommons.org/licenses/by-sa/4.0/",
  BY_NC = "https://creativecommons.org/licenses/by-nc/4.0/",
  BY_NC_SA = "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  BY_ND = "https://creativecommons.org/licenses/by-nd/4.0/",
  BY_NC_ND = "https://creativecommons.org/licenses/by-nc-nd/4.0/",
}

enum CcLicenceText {
  BY = "CC-BY",
  BY_SA = "CC-BY-SA",
  BY_NC = "CC-BY-NC",
  BY_NC_SA = "CC-BY-NC-SA",
  BY_ND = "CC-BY-ND",
  BY_NC_ND = "CC-BY-NC-ND",
}

export const generateCreativeCommonsInfo = ({
  no_derivatives,
  non_commercial,
  share_alike,
}: CcLicenceInfo): CcLicenceOutput => {
  if (no_derivatives && share_alike) {
    throw new CcError(`Can't share alike and have no derivatives`);
  }
  if (!no_derivatives && !non_commercial && !share_alike) {
    return { text: CcLicenceText.BY, link: CcLicenceLinks.BY };
  }
  if (share_alike && !non_commercial) {
    return { text: CcLicenceText.BY_SA, link: CcLicenceLinks.BY_SA };
  }
  if (!share_alike && non_commercial && !no_derivatives) {
    return { text: CcLicenceText.BY_NC, link: CcLicenceLinks.BY_NC };
  }
  if (share_alike && non_commercial) {
    return { text: CcLicenceText.BY_NC_SA, link: CcLicenceLinks.BY_NC_SA };
  }
  if (no_derivatives && !non_commercial) {
    return { text: CcLicenceText.BY_ND, link: CcLicenceLinks.BY_ND };
  }
  if (no_derivatives && non_commercial) {
    return { text: CcLicenceText.BY_NC_ND, link: CcLicenceLinks.BY_NC_ND };
  }
};
