declare module 'mxgraph' {
  /**
   * Optional global config variable to toggle loading of the two resource files in mxGraph and mxEditor.
   * Default is true.
   * NOTE: This is a global variable, not a variable of mxClient.
   * If this is false, you can use mxClient.loadResources with its callback to load the default bundles asynchronously.
   * @default true
   * @example
   * ```html
   * <script type="text/javascript">
   *   var mxLoadResources = false;
   * </script>
   * <script type="text/javascript" src="/path/to/core/directory/js/mxClient.js"></script>
   * ```
   */
  export let mxLoadResources: boolean;

  /**
   * Optional global config variable to force loading the JavaScript files in development mode.
   * Default is undefined.  NOTE: This is a global variable, not a variable of mxClient.
   * @default undefined
   * @example
   * ```html
   * <script type="text/javascript">
   *   var mxLoadResources = true;
   * </script>
   * <script type="text/javascript" src="/path/to/core/directory/js/mxClient.js"></script>
   * ```
   */
  export let mxForceIncludes: boolean;

  /**
   * Optional global config variable to specify the extension of resource files.
   * Default is true.
   * NOTE: This is a global variable, not a variable of mxClient.
   * @default true
   * @example
   * ```html
   * <script type="text/javascript">
   *   var mxResourceExtension = '.txt';
   * </script>
   * <script type="text/javascript" src="/path/to/core/directory/js/mxClient.js"></script>
   * ```
   */
  export let mxResourceExtension: string | boolean;

  /**
   * Optional global config variable to toggle loading of the CSS files when the library is initialized.
   * Default is true.
   * NOTE: This is a global variable, not a variable of mxClient.
   * @default true
   * @example
   * ```html
   * <script type="text/javascript">
   *   var mxLoadStylesheets = false;
   * </script>
   * <script type="text/javascript" src="/path/to/core/directory/js/mxClient.js"></script>
   * ```
   */
  export let mxLoadStylesheets: boolean;

  /**
   * Basepath for all URLs in the core without trailing slash.
   * Default is ‘.’.
   * Set mxBasePath prior to loading the mxClient library as follows to override this setting:
   * @default '.'
   * @example
   * ```html
   * <script type="text/javascript">
   *   mxBasePath = '/path/to/core/directory';
   * </script>
   * <script type="text/javascript" src="/path/to/core/directory/js/mxClient.js"></script>
   * ```
   * When using a relative path, the path is relative to the URL of the page that contains the assignment.
   * Trailing slashes are automatically removed.
   */
  export let mxBasePath: string;

  /**
   * Basepath for all images URLs in the core without trailing slash.
   * Default is mxClient.basePath + ‘/images’.
   * Set mxImageBasePath prior to loading the mxClient library as follows to override this setting:
   * @default mxClient.basePath + ‘/images’
   * @example
   * ```html
   * <script type="text/javascript">
   *   mxImageBasePath = '/path/to/image/directory';
   * </script>
   * <script type="text/javascript" src="/path/to/core/directory/js/mxClient.js"></script>
   * ```
   * When using a relative path, the path is relative to the URL of the page that contains the assignment.
   * Trailing slashes are automatically removed.
   */
  export let mxImageBasePath: string;

  /**
   * Defines the language of the client, eg. en for english, de for german etc.
   * The special value ‘none’ will disable all built-in internationalization and resource loading.
   * See mxResources.getSpecialBundle for handling identifiers with and without a dash.
   *
   * Set mxLanguage prior to loading the mxClient library as follows to override this setting:
   * @example
   * ```html
   * <script type="text/javascript">
   *   mxLanguage = 'en';
   * </script>
   * <script type="text/javascript" src="js/mxClient.js"></script>
   * ```
   */
  export let mxLanguage: string;

  /**
   * Defines the default language which is used in the common resource files.
   * Any resources for this language will only load the common resource file,
   * but not the language-specific resource file.
   * Set mxDefaultLanguage prior to loading the mxClient library as follows to override this setting:
   * @default 'en'
   * @example
   * ```html
   * <script type="text/javascript">
   *   mxDefaultLanguage = 'de';
   * </script>
   * <script type="text/javascript" src="js/mxClient.js"></script>
   * ```
   */
  export let mxDefaultLanguage: string;

  /**
   * Defines the optional array of all supported language extensions.
   * The default language does not have to be part of this list.
   * @see mxResources.isLanguageSupported.
   * @example
   * ```html
   * <script type="text/javascript">
   *   mxLanguages = ['de', 'it', 'fr'];
   * </script>
   * <script type="text/javascript" src="js/mxClient.js"></script>
   * ```
   * This is used to avoid unnecessary requests to language files, ie. if a 404 will be returned.
   */
  export let mxLanguages: Array<string>;

  /**
   * Bootstrapping mechanism for the mxGraph thin client.
   * The production version of this file contains all code required to run the mxGraph thin client,
   * as well as global constants to identify the browser and operating system in use.
   * You may have to load chrome://global/content/contentAreaUtils.js in your page to
   * disable certain security restrictions in Mozilla.
   */
  class mxClient {
    /**
     * Contains the current version of the mxGraph library.
     */
    static VERSION: string;
    /**
     * True if the current browser is Internet Explorer 10 or below.
     */
    static IS_IE: boolean;
    /**
     * True if the current browser is Internet Explorer 6.x.
     */
    static IS_IE6: boolean;
    /**
     * True if the current browser is Internet Explorer 11.x.
     */
    static IS_IE11: boolean;
    /**
     * True if the current browser is Microsoft Edge.
     */
    static IS_EDGE: boolean;
    /**
     * True if the current browser is Internet Explorer and it is in quirks mode.
     */
    static IS_QUIRKS: boolean;
    /**
     * True if the browser is IE11 in enterprise mode (IE8 standards mode).
     */
    static IS_EM: boolean;
    /**
     * Prefix for VML namespace in node names.
     */
    static VML_PREFIX: string;
    /**
     * Prefix for VML office namespace in node names.
     */
    static OFFICE_PREFIX: string;
    /**
     * True if the current browser is Netscape (including Firefox).
     */
    static IS_NS: boolean;
    /**
     * True if the current browser is Opera.
     */
    static IS_OP: boolean;
    /**
     * True if -o-transform is available as a CSS style, ie for Opera browsers based on a Presto engine with version 2.5 or later.
     */
    static IS_OT: boolean;
    /**
     * True if the current browser is Safari.
     */
    static IS_SF: boolean;
    /**
     * Returns true if the user agent contains Android.
     */
    static IS_ANDROID: boolean;
    /**
     * Returns true if the user agent is an iPad, iPhone or iPod.
     */
    static IS_IOS: boolean;
    /**
     * Returns the major version number for iOS devices or 0 if the device is not an iOS device.
     */
    static IOS_VERSION: string;
    /**
     * True if the current browser is Google Chrome.
     */
    static IS_GC: boolean;
    /**
     * True if the this is running inside a Chrome App.
     */
    static IS_CHROMEAPP: boolean;
    /**
     * True if the current browser is Firefox.
     */
    static IS_FF: boolean;
    /**
     * True if -moz-transform is available as a CSS style.
     */
    static IS_MT: boolean;
    /**
     * True if the browser supports VML.
     */
    static IS_VML: boolean;
    /**
     * True if the browser supports SVG.
     */
    static IS_SVG: boolean;
    /**
     * True if foreignObject support is not available.
     */
    static NO_FO: boolean;
    /**
     * True if the client is a Windows.
     */
    static IS_WIN: boolean;
    /**
     * True if the client is a Mac.
     */
    static IS_MAC: boolean;
    /**
     * True if the client is a Chrome OS.
     */
    static IS_CHROMEOS: boolean;
    /**
     * True if this device supports touchstart/-move/-end events (Apple iOS, Android, Chromebook and Chrome Browser on touch-enabled devices).
     */
    static IS_TOUCH: boolean;
    /**
     * True if this device supports Microsoft pointer events (always false on Macs).
     */
    static IS_POINTER: boolean;
    /**
     * True if the documents location does not start with http:// or https://.
     */
    static IS_LOCAL: boolean;
    /**
     * Contains the base names of the default bundles if mxLoadResources is false.
     */
    static defaultBundles: string;

    /**
     * Returns true if the current browser is supported, that is,
     * if <mxClient.IS_VML> or <mxClient.IS_SVG> is true.
     * @example
     * ```
     * if (!mxClient.isBrowserSupported())
     * {
     *   mxUtils.error('Browser is not supported!', 200, false);
     * }
     * ```
     */
    static isBrowserSupported(): boolean;

    /**
     * link
     * @example
     * ```
     * mxClient.link('stylesheet', filename);
     * ```
     */
    static link(rel: string, href: string, doc?: Node, id?: string): void;

    /**
     * Helper method to load the default bundles if mxLoadResources is false.
     * @param {Function} fn   Function to call after all resources have been loaded.
     * @param {string}   lan  Optional string to pass to mxResources.add.
     */
    static loadResources(fn: Function, lan?: string): void;

    /**
     * Dynamically adds a script node to the document header.
     * In production environments, the includes are resolved in the mxClient.js
     * file to reduce the number of requests required for client startup.
     * This function should only be used in development environments,
     * but not in production systems.
     */
    static include(src: string): void;
  }
}
