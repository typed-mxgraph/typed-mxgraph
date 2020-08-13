declare module 'mxgraph' {
  class mxUtils {
    static mod(n: number, m: number): number;

    /**
     * Returns the value for the given key in the given associative array or the given default value if the value is null.
     * @param array           Associative array that contains the value for the key.
     * @param key             Key whose value should be returned.
     * @param defaultValue    Value to be returned if the value for the given key is null.
     */
    static getValue(array: any, key: any, defaultValue: any): any;

    /**
     * Returns true if the specified point (x, y) is contained in the given rectangle.
     * @param bounds  mxRectangle that represents the area
     * @param x       X-coordinate of the point.
     * @param y       Y-coordinate of the point.
     */
    static contains(bounds: mxRectangle, x: number, y: number): boolean;

    /**
     * Returns a wrapper function that locks the execution scope of the given function to the specified scope.  Inside funct, the “this” keyword becomes a reference to that scope.
     * @param scope
     * @param func
     */
    static bind(scope: any, func: Function): Function;

    /**
     * Converts the specified point (x, y) using the offset of the specified container and returns a new mxPoint with the result.
     * @param container DOM node to use for the offset.
     * @param x         X-coordinate of the point to be converted.
     * @param y         Y-coordinate of the point to be converted.
     */
    static convertPoint(container: HTMLElement, x: number, y: number): mxPoint;

    /**
     * Sets the opacity of the specified DOM node to the given value in %.
     * @param node    DOM node to set the opacity for.
     * @param value   Opacity in %.  Possible values are between 0 and 100.
     */
    static setOpacity(node: HTMLElement, value: number): void;

    /**
     * Creates and returns an image (IMG node) or VML image (v:image) in IE6 in
     * quirks mode.
     *
     * @static
     * @param {string} src          URL that points to the image to be displayed.
     * @returns {HTMLImageElement}
     */
    public static createImage(src: string): HTMLImageElement;

    /**
     * Sorts the given cells according to the order in the cell hierarchy.
     * Ascending is optional and defaults to true.
     *
     * @static
     * @param {Array<mxCell>} cells
     * @param {boolean} [ascending]
     * @returns {Array<mxCell>}
     */
    public static sortCells(cells: Array<mxCell>, ascending?: boolean): Array<mxCell>;

    /**
     * Returns the stylename in a style of the form [(stylename|key=value);] or
     * an empty string if the given style does not contain a stylename.
     *
     * @author 鸿则 <hungtcs@163.com>
     * @date 2020-07-17
     * @static
     * @param {string} style    String of the form [(stylename|key=value);]
     * @returns {string}
     */
    public static getStylename(style: string): string;

    /**
     * Returns the stylenames in a style of the form [(stylename|key=value);]
     * or an empty array if the given style does not contain any stylenames.
     *
     * @author 鸿则 <hungtcs@163.com>
     * @date 2020-07-17
     * @static
     * @param {string} style        String of the form [(stylename|key=value);]
     * @returns {Array<string>}
     */
    public static getStylenames(style: string): Array<string>;

    /**
     * Returns the index of the given stylename in the given style. This
     * returns -1 if the given stylename does not occur (as a stylename) in the
     * given style, otherwise it returns the index of the first character.
     *
     * @author 鸿则 <hungtcs@163.com>
     * @date 2020-07-17
     * @static
     * @param {string} style
     * @param {string} stylename
     * @returns {number}
     */
    public static indexOfStylename(style: string, stylename: string): number;

    /**
     * Adds the specified stylename to the given style if it does not already
     * contain the stylename.
     *
     * @author 鸿则 <hungtcs@163.com>
     * @date 2020-07-17
     * @static
     * @param {string} style
     * @param {string} stylename
     * @returns {string}
     */
    public static addStylename(style: string, stylename: string): string;

    /**
     * Removes all occurrences of the specified stylename in the given style
     * and returns the updated style. Trailing semicolons are not preserved.
     *
     * @author 鸿则 <hungtcs@163.com>
     * @date 2020-07-17
     * @static
     * @param {string} style
     * @param {string} stylename
     * @returns {string}
     */
    public static removeStylename(style: string, stylename: string): string;

    /**
     * Removes all stylenames from the given style and returns the updated style.
     *
     * @author 鸿则 <hungtcs@163.com>
     * @date 2020-07-17
     * @static
     * @param {string} style
     * @returns {string}
     */
    public static removeAllStylenames(style: string): string;

    /**
     * Assigns the value for the given key in the styles of the given cells, or
     * removes the key from the styles if the value is null.
     *
     * @author 鸿则 <hungtcs@163.com>
     * @date 2020-07-17
     * @static
     * @param {mxGraphModel} model                {@link mxGraphModel} to execute the transaction in.
     * @param {Array<mxCell>} cells               Array of {@link mxCell } to be updated.
     * @param {string} key                        Key of the style to be changed.
     * @param {(string | number | null)} value    New value for the given key.
     */
    public static setCellStyles(
      model: mxGraphModel,
      cells: Array<mxCell>,
      key: string,
      value: string | number | null
    ): void;

    /**
     * Adds or removes the given key, value pair to the style and returns the
     * new style. If value is null or zero length then the key is removed from
     * the style. This is for cell styles, not for CSS styles.
     *
     * @author 鸿则 <hungtcs@163.com>
     * @date 2020-07-17
     * @static
     * @param {string} style                  String of the form [(stylename|key=value);].
     * @param {string} key                    Key of the style to be changed.
     * @param {(string|number|null)} value    New value for the given key.
     * @returns {string}
     */
    public static setStyle(style: string, key: string, value: string | number | null): string;

    /**
     * Loads the specified URL asynchronously and invokes the given functions depending on the request status.
     * Returns the mxXmlRequest in use.
     * Both functions take the mxXmlRequest as the only parameter.
     * See mxUtils.load for a synchronous implementation.
     */
    static get(
      url: string,
      onload?: (req: mxXmlRequest) => void,
      onerror?: (req: mxXmlRequest) => void,
      binary?: boolean,
      timeout?: number,
      ontimeout?: (req: mxXmlRequest) => void
    ): void;

    /**
     * Loads the specified URL synchronously and returns the mxXmlRequest.
     * Throws an exception if the file cannot be loaded.
     * See mxUtils.get for an asynchronous implementation.
     * @param url URL to get the data from.
     */
    static load(url: string): mxXmlRequest;

    /**
     * Loads the URLs in the given array asynchronously and invokes the given function if all requests returned with a valid 2xx status.
     * The error handler is invoked once on the first error or invalid response.
     */
    static getAll(urls: Array<string>, onload: (req: mxXmlRequest) => void, onerror: (err: mxXmlRequest) => void): void;

    /**
     * Returns the XML content of the specified node.
     * For Internet Explorer, all \r\n\t[\t]* are removed from the XML string and the remaining \r\n are replaced by \n.
     * All \n are then replaced with linefeed, or &#xa; if no linefeed is defined.
     *
     * @author 鸿则 <hungtcs@163.com>
     * @date 2019-12-27
     * @static
     * @param {XMLDocument} node      DOM node to return the XML for.
     * @param {*} linefeed            Optional string that linefeeds are converted into.  Default is &#xa;
     */
    static getXml(node: XMLDocument, linefeed?: string): string;

    /**
     * Parses the specified XML string into a new XML document and returns the new document.
     *
     * @author 鸿则 <hungtcs@163.com>
     * @date 2019-12-27
     * @static
     * @param {string} xml
     * @returns {XMLDocument}
     */
    static parseXml(xml: string): XMLDocument;

    /**
     * Returns true if the given ancestor is an ancestor of the given DOM node in the DOM.
     * This also returns true if the child is the ancestor.
     *
     * @author 鸿则 <hungtcs@163.com>
     * @date 2020-01-07
     * @static
     * @param {Node} ancestor DOM node that represents the ancestor.
     * @param {Node} child    DOM node that represents the child.
     * @returns {boolean}
     */
    static isAncestorNode(ancestor: Node, child: Node): boolean;

    static makeDraggable(
      element: HTMLElement,
      graphF: mxGraph,
      funct: Function,
      dragElement?: Node,
      dx?: number,
      dy?: number,
      autoscroll?: boolean,
      scalePreview?: boolean,
      highlightDropTargets?: boolean,
      getDropTarget?: (graph: mxGraph, x: number, y: number, evt: PointerEvent) => mxCell
    ): mxDragSource;

    static createXmlDocument(): XMLDocument;

    /**
     * Returns the offset for the specified container as an mxPoint.
     * The offset is the distance from the top left corner of the container to the top left corner of the document.
     *
     * @author 鸿则 <hungtcs@163.com>
     * @date 2020-01-09
     * @static
     * @param {HTMLElement} container
     * @param {boolean} scrollOffset
     * @returns {mxPoint}
     */
    static getOffset(container: HTMLElement, scrollOffset?: boolean): mxPoint;

    /**
     * Returns the top, left corner of the viewrect as an mxPoint.
     *
     * @author 鸿则 <hungtcs@163.com>
     * @date 2020-01-09
     * @static
     * @param {HTMLElement} node
     * @param {boolean} [includeAncestors]
     * @param {boolean} [includeDocument]
     * @returns {mxPoint}
     */
    static getScrollOrigin(node: HTMLElement, includeAncestors?: boolean, includeDocument?: boolean): mxPoint;

    static importNode(doc: Document, node: any, allChildren: any): any;

    static removeWhitespace(node: any, before: boolean): void;

    static hasScrollbars(container: HTMLElement): boolean;

    /**
     * Recursively clones the specified object ignoring all field names in the given array of transient fields.
     * {@link mxObjectIdentity.FIELD_NAME} is always ignored by this function.
     *
     *
     * @param obj Object to be cloned.
     * @param transients Optional array of strings representing the field name to be ignored.
     * @param shallow Optional boolean argument to specify if a shallow clone should be created, that is, one where all
     *                object references are not cloned or, in other words, one where only atomic (strings, numbers) values
     *                are cloned. Default is false.
     */
    static clone(obj: any, transients?: Array<string>, shallow?: boolean): any;

    /**
     * Displays the given alert in a new dialog. This implementation uses the
     * built-in alert function. This is used to display validation errors when
     * connections cannot be changed or created.
     *
     * @param message The message to be displayed.
     */
    static alert(message: string): void;

    /**
     * Displays the given error message in a new <mxWindow> of the given width.
     * If close is true then an additional close button is added to the window.
     * The optional icon specifies the icon to be used for the window. Default
     * is {@link mxUtils.errorImage}.
     *
     * @param message The message to be displayed.
     * @param width   The width of the window.
     * @param close   Optional boolean indicating whether to add a close button.
     * @param icon    Optional icon for the window decoration (path to the icon).
     */
    static error(message: string, width: number, close?: boolean, icon?: string): void;
  }
}
