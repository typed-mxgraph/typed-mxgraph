declare module 'mxgraph' {
  class mxUrlConverter {
    constructor();

    /**
     * Variable: enabled
     *
     * Specifies if the converter is enabled. Default is true.
     */
    enabled: boolean;

    /**
     * Variable: baseUrl
     *
     * Specifies the base URL to be used as a prefix for relative URLs.
     */
    baseUrl: string;

    /**
     * Variable: baseDomain
     *
     * Specifies the base domain to be used as a prefix for absolute URLs.
     */
    baseDomain: string;

    /**
     * Function: updateBaseUrl
     *
     * Private helper function to update the base URL.
     */
    updateBaseUrl(): void;

    /**
     * Function: isEnabled
     *
     * Returns <enabled>.
     */
    isEnabled(): boolean;

    /**
     * Function: setEnabled
     *
     * Sets <enabled>.
     */
    setEnabled(value: boolean): void;

    /**
     * Function: getBaseUrl
     *
     * Returns <baseUrl>.
     */
    getBaseUrl(): string;

    /**
     * Function: setBaseUrl
     *
     * Sets <baseUrl>.
     */
    setBaseUrl(value: string): void;

    /**
     * Function: getBaseDomain
     *
     * Returns <baseDomain>.
     */
    getBaseDomain(): string;

    /**
     * Function: setBaseDomain
     *
     * Sets <baseDomain>.
     */
    setBaseDomain(value: string): void;

    /**
     * Function: isRelativeUrl
     *
     * Returns true if the given URL is relative.
     */
    isRelativeUrl(url: string): boolean;

    /**
     * Function: convert
     *
     * Converts the given URL to an absolute URL with protol and domain.
     * Relative URLs are first converted to absolute URLs.
     */
    convert(url: string): string;
  }
}
