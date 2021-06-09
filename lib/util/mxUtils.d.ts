declare module 'mxgraph' {
  class mxUtils {
    /**
     * Returns the remainder of division of n by m. You should use this instead
     * of the built-in operation as the built-in operation does not properly
     * handle negative numbers.
     *
     * @param {number} n
     * @param {number} m
     */
    static mod(n: number, m: number): number;

    /**
     * Returns the value for the given key in the given associative array or the given default value if the value is null.
     * @param array           Associative array that contains the value for the key.
     * @param key             Key whose value should be returned.
     * @param defaultValue    Value to be returned if the value for the given key is null.
     */
    static getValue(
      array: Record<string | number | symbol, any> | undefined,
      key: string | number | symbol,
      defaultValue: any
    ): any;

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
    static bind<T extends Function>(scope: any, func: T): T;

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
    ): any;

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
     * @param {*} [linefeed]            Optional string that linefeeds are converted into.  Default is &#xa;
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

    /**
     * Configures the given DOM element to act as a drag source for the
     * specified graph. Returns a a new {@link mxDragSource}. If
     * {@link mxDragSource.guideEnabled} is enabled then the x and y arguments must
     * be used in funct to match the preview location.
     *
     * @param {HTMLElement} element DOM element to make draggable.
     * @param {mxGraph} graphF {@link mxGraph} that acts as the drop target or a function that takes a mouse event and returns the current {@link mxGraph}.
     * @param {Function} funct Function to execute on a successful drop.
     * @param {Node} [dragElement] Optional DOM node to be used for the drag preview.
     * @param {number} [dx] Optional horizontal offset between the cursor and the drag preview.
     * @param {number} [dy] Optional vertical offset between the cursor and the drag preview.
     * @param {boolean} [autoscroll] Optional boolean that specifies if autoscroll should be used. Default is {@link mxGraph.autoscroll}.
     * @param {boolean} [scalePreview=false] Optional boolean that specifies if the preview element
     * should be scaled according to the graph scale. If this is true, then
     * the offsets will also be scaled. Default is false.
     * @param {boolean} [highlightDropTargets=true] Optional boolean that specifies if dropTargets
     * should be highlighted. Default is true.
     * @param {Function} [getDropTarget] Optional function to return the drop target for a given
     * location (x, y). Default is {@link mxGraph.getCellAt}.
     */
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

    /**
     * Returns a new, empty XML document.
     */
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

    /**
     * Cross browser implementation for document.importNode. Uses document.importNode
     * in all browsers but IE, where the node is cloned by creating a new node and
     * copying all attributes and children into it using importNode, recursively.
     *
     * @param {*} doc Document to import the node into.
     * @param {*} node Node to be imported.
     * @param {*} allChildren If all children should be imported.
     */
    static importNode(doc: any, node: any, allChildren: any): any;

    /**
     * Removes the sibling text nodes for the given node that only consists
     * of tabs, newlines and spaces.
     * @param {Node} node DOM node whose siblings should be removed.
     * @param {boolean} [before] Optional boolean that specifies the direction of the traversal.
     */
    static removeWhitespace(node: Node, before: boolean): void;

    /**
     * Returns true if the overflow CSS property of the given node is either
     * scroll or auto.
     *
     * @param {Node} node DOM node whose style should be checked for scrollbars.
     */
    static hasScrollbars(node: Node): boolean;

    /**
     * Recursively clones the specified object ignoring all field names in the given array of transient fields.
     * {@link mxObjectIdentity.FIELD_NAME} is always ignored by this function.
     *
     *
     * @param {Object} obj Object to be cloned.
     * @param {Array<string>} [transients] Optional array of strings representing the field name to be ignored.
     * @param {boolean} [shallow=false] Optional boolean argument to specify if a shallow clone should be created, that is, one where all
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
     * @param {string} message The message to be displayed.
     * @param {number} width   The width of the window.
     * @param {boolean} [close]   Optional boolean indicating whether to add a close button.
     * @param {string} [icon]    Optional icon for the window decoration (path to the icon).
     */
    static error(message: string, width: number, close?: boolean, icon?: string): void;

    /**
     * Specifies the resource key for the title of the error window. If the
     * resource for this key does not exist then the value is used as
     * the title. Default is 'error'.
     *
     * @default 'error'
     */
    static errorResource: 'error' | '';

    /**
     * Specifies the resource key for the label of the close button. If the
     * resource for this key does not exist then the value is used as
     * the label. Default is 'close'.
     *
     * @default 'close'
     */
    static closeResource: 'close' | '';

    /**
     * Defines the image used for error dialogs.
     */
    static errorImage: string;

    /**
     * Removes the cursors from the style of the given DOM node and its
     * descendants.
     *
     * @param {Node} element DOM node to remove the cursor style from.
     */
    static removeCursors(element: Node): void;

    /**
     * Returns the current style of the specified element.
     */
    static getCurrentStyle(): any;

    /**
     * Parses the given CSS numeric value adding handling for the values thin,
     * medium and thick (2, 4 and 6).
     *
     * @param {string} value
     */
    static parseCssNumber(value: string): number;

    /**
     * Adds the given style with the standard name and an optional vendor prefix for the current
     * browser.
     *
     * @example
     * ```javascript
     * mxUtils.setPrefixedStyle(node.style, 'transformOrigin', '0% 0%');
     * ```
     */
    static setPrefixedStyle(): void;

    /**
     * Evaluates the given expression using eval and returns the JavaScript
     * object that represents the expression result. Supports evaluation of
     * expressions that define functions and returns the function object for
     * these expressions.
     *
     * @param {string} expr A string that represents a JavaScript expression.
     */
    static eval(expr: string): any;

    /**
     * Returns the first node where attr equals value.
     * This implementation does not use XPath.
     *
     * @param {*} node
     * @param {*} attr
     * @param {*} value
     */
    static findNode(node: any, attr: any, value: any): null;

    /**
     * Returns the name for the given function.
     *
     * @param {Object} f JavaScript object that represents a function.
     */
    static getFunctionName(f: {}): string;

    /**
     * Returns the index of obj in array or -1 if the array does not contain
     * the given object.
     *
     * @param {Array<any>} array Array to check for the given obj.
     * @param {Object} obj Object to find in the given array.
     */
    static indexOf(array: Array<any>, obj: {}): number;

    /**
     * Calls the given function for each element of the given array and returns
     * the array.
     *
     * @param {Array<any>} array Array that contains the elements.
     * @param {Function} fn Function to be called for each object.
     */
    static forEach(array: Array<any>, fn: Function): Array<any>;

    /**
     * Removes all occurrences of the given object in the given array or
     * object. If there are multiple occurrences of the object, be they
     * associative or as an array entry, all occurrences are removed from
     * the array or deleted from the object. By removing the object from
     * the array, all elements following the removed element are shifted
     * by one step towards the beginning of the array.
     *
     * The length of arrays is not modified inside this function.
     *
     * @param {Object} obj Object to find in the given array.
     * @param {Array<any>} array Array to check for the given obj.
     */
    static remove(obj: {}, array: Array<any>): {};

    /**
     * Returns true if the given value is an XML node with the node name
     * and if the optional attribute has the specified value.
     *
     * This implementation assumes that the given value is a DOM node if the
     * nodeType property is numeric, that is, if isNaN returns false for
     * value.nodeType.
     *
     * @param {Object} value Object that should be examined as a node.
     * @param {string} nodeName String that specifies the node name.
     * @param {string} [attributeName] Optional attribute name to check.
     * @param {*} [attributeValue] Optional attribute value to check.
     */
    static isNode(value: {}, nodeName: string, attributeName?: string, attributeValue?: any): boolean;

    /**
     * Returns an array of child nodes that are of the given node type.
     *
     * @param {Node} node Parent DOM node to return the children from.
     * @param {*} [nodeType] Optional node type to return. Default is {@link mxConstants.NODETYPE_ELEMENT}.
     */
    static getChildNodes(node: Node, nodeType?: any): Array<Node>;

    /**
     * Full DOM API implementation for importNode without using importNode API call.
     *
     * @param {*} doc Document to import the node into.
     * @param {Node} node Node to be imported.
     * @param {boolean} allChildren If all children should be imported.
     */
    static importNodeImplementation(doc: any, node: Node, allChildren: boolean): any;

    /**
     * Returns a new, empty Microsoft.XMLDOM document using ActiveXObject.
     */
    static createMsXmlDocument(): any;

    /**
     * Clears the current selection in the page.
     */
    static clearSelection(): void;

    /**
     * Replaces characters (less than, greater than, newlines and quotes) with
     * their HTML entities in the given string and returns the result.
     *
     * @param {string} s String that contains the characters to be converted.
     * @param {boolean} newline If newlines should be replaced. Default is true.
     */
    static htmlEntities(s: string, newline?: boolean): string;

    /**
     * Returns true if the given node is in the VML namespace.
     *
     * @param {*} node DOM node whose tag urn should be checked.
     */
    static isVml(node: any): boolean;

    /**
     * Returns a pretty printed string that represents the XML tree for the
     * given node. This method should only be used to print XML for reading,
     * use {@link getXml} instead to obtain a string for processing.
     *
     * @param {XMLDocument} node DOM node to return the XML for.
     * @param {string} [tab='  '] Optional string that specifies the indentation for one level. Default is two spaces.
     * @param {string} [indent=''] Optional string that represents the current indentation. Default is an empty string.
     * @param {string} [newline='\n'] Option string that represents a linefeed. Default is '\n'.
     * @param ns
     */
    static getPrettyXml(node: XMLDocument, tab?: string, indent?: string, newline?: string, ns?: any): string;

    /**
     * Returns the text content of the specified node.
     *
     * @param {*} elems DOM nodes to return the text for.
     */
    static extractTextWithWhitespace(elems: any): string;

    /**
     * Replaces each trailing newline with the given pattern.
     *
     * @param {string} str
     * @param {string} pattern
     */
    static replaceTrailingNewlines(str: string, pattern: string): string;

    /**
     * Returns the text content of the specified node.
     *
     * @param {Node} node DOM node to return the text content for.
     */
    static getTextContent(node: Node): string;

    /**
     * Sets the text content of the specified node.
     *
     * @param {Node} node DOM node to set the text content for.
     * @param {string} text String that represents the text content.
     */
    static setTextContent(node: Node, text: string): void;

    /**
     * Returns the inner HTML for the given node as a string or an empty string
     * if no node was specified. The inner HTML is the text representing all
     * children of the node, but not the node itself.
     */
    static getInnerHtml(): string;

    /**
     * Returns the outer HTML for the given node as a string or an empty
     * string if no node was specified. The outer HTML is the text representing
     * all children of the node including the node itself.
     */
    static getOuterHtml(): string;

    /**
     * Creates a text node for the given string and appends it to the given
     * parent. Returns the text node.
     *
     * @param {Node} parent DOM node to append the text node to.
     * @param {string} text String representing the text to be added.
     */
    static write(parent: Node, text: string): Node;

    /**
     * Creates a text node for the given string and appends it to the given
     * parent with an additional linefeed. Returns the text node.
     *
     * @param {Node} parent DOM node to append the text node to.
     * @param {string} text String representing the text to be added.
     */
    static writeln(parent: Node, text: string): Node;

    /**
     * Appends a linebreak to the given parent and returns the linebreak.
     *
     * @param {Node} parent DOM node to append the linebreak to.
     * @param {number} count
     */
    static br(parent: Node, count: number): Node;

    /**
     * Returns a new button with the given level and function as an onclick
     * event handler.
     *
     * @example
     * ```javascript
     * document.body.appendChild(mxUtils.button('Test', function(evt)
     * {
     *   alert('Hello, World!');
     * }));
     * ```
     *
     * @param {string} label String that represents the label of the button.
     * @param {Function} funct Function to be called if the button is pressed.
     * @param {Document} [doc] Optional document to be used for creating the button. Default is the current document.
     */
    static button(label: string, funct: Function, doc?: Document): Element;

    /**
     * Appends a new paragraph with the given text to the specified parent and
     * returns the paragraph.
     *
     * @param {Node} parent DOM node to append the text node to.
     * @param {string} text String representing the text for the new paragraph.
     */
    static para(parent: Node, text: string): Element;

    /**
     * Adds a transparent background to the filter of the given node. This
     * background can be used in IE8 standards mode (native IE8 only) to pass
     * events through the node.
     *
     * @param {*} node
     */
    static addTransparentBackgroundFilter(node: any): void;

    /**
     * Adds a hyperlink to the specified parent that invokes action on the specified editor.
     *
     * @param {Node} parent DOM node to contain the new link.
     * @param {string} text String that is used as the link label.
     * @param {mxEditor} editor {@link mxEditor} that will execute the action.
     * @param {string} action String that defines the name of the action to be executed.
     * @param {number} [pad=0] Optional left-padding for the link. Default is 0.
     */
    static linkAction(parent: Node, text: string, editor: mxEditor, action: string, pad?: number): HTMLElement;

    /**
     * Adds a hyperlink to the specified parent that invokes the specified
     * function on the editor passing along the specified argument. The
     * function name is the name of a function of the editor instance,
     * not an action name.
     *
     * @param {Node} parent DOM node to contain the new link.
     * @param {string} text String that is used as the link label.
     * @param {mxEditor} editor {@link mxEditor} instance to execute the function on.
     * @param {string} functName String that represents the name of the function.
     * @param {Object} arg Object that represents the argument to the function.
     * @param {number} [pad=0] Optional left-padding for the link. Default is 0.
     */
    static linkInvoke(
      parent: Node,
      text: string,
      editor: mxEditor,
      functName: string,
      arg: {},
      pad?: number
    ): HTMLElement;

    /**
     *
     * @param {Node} parent DOM node to contain the new link.
     * @param {string} text String that is used as the link label.
     * @param {Function} funct Function to execute when the link is clicked.
     * @param {number} [pad=0] Optional left-padding for the link. Default is 0.
     */
    static link(parent: Node, text: string, funct: Function, pad?: number): HTMLElement;

    /**
     * Returns the client size for the current document as an {@link mxRectangle}.
     */
    static getDocumentSize(): mxRectangle;

    /**
     * Makes sure the given node is inside the visible area of the window. This
     * is done by setting the left and top in the style.
     *
     * @param {Node} node
     */
    static fit(node: Node): void;

    /**
     * Posts the specified params to the given URL *asynchronously* and invokes
     * the given functions depending on the request status. Returns the
     * <mxXmlRequest> in use. Both functions take the <mxXmlRequest> as the
     * only parameter. Make sure to use encodeURIComponent for the parameter
     * values.
     *
     * @example
     *
     * ```javascript
     * mxUtils.post(url, 'key=value', function(req)
     * {
     * 	mxUtils.alert('Ready: '+req.isReady()+' Status: '+req.getStatus());
     *  // Process req.getDocumentElement() using DOM API if OK...
     * });
     * ```
     *
     * @param {string} url URL to get the data from.
     * @param {*} params Parameters for the post request.
     * @param {Function} [onload] Optional function to execute for a successful response.
     * @param {Function} [onerror] Optional function to execute on error.
     */
    static post(
      url: string,
      params: any,
      onload?: (req: mxXmlRequest) => void,
      onerror?: (req: mxXmlRequest) => void
    ): mxXmlRequest;

    /**
     * Submits the given parameters to the specified URL using
     * {@link mxXmlRequest.simulate} and returns the {@link mxXmlRequest}.
     * Make sure to use encodeURIComponent for the parameter values.
     *
     * @param {string} url URL to get the data from.
     * @param {*} params Parameters for the form.
     * @param {Document} doc Document to create the form in.
     * @param {*} target Target to send the form result to.
     */
    static submit(url: string, params: any, doc: Document, target: any): mxXmlRequest;

    /**
     * Loads the specified URL *asynchronously* into the specified document,
     * invoking onload after the document has been loaded. This implementation
     * does not use {@link mxXmlRequest}, but the document.load method.
     *
     * @param {string} url URL to get the data from.
     * @param {Document} doc The document to load the URL into.
     * @param {Function} onload Function to execute when the URL has been loaded.
     */
    static loadInto(url: string, doc: Document, onload: (req: mxXmlRequest) => void): void;

    /**
     * Returns the numeric value for the given key in the given associative
     * array or the given default value (or 0) if the value is null. The value
     * is converted to a numeric value using the Number function.
     *
     * @param {Array<any>} array Associative array that contains the value for the key.
     * @param {string} key Key whose value should be returned.
     * @param {number} [defaultValue=0] Value to be returned if the value for the given key is null. Default is 0.
     */
    static getNumber(array: Array<any>, key: string, defaultValue: number): number;

    /**
     * Returns the color value for the given key in the given associative
     * array or the given default value if the value is null. If the value
     * is {@link mxConstants.NONE} then null is returned.
     *
     * @param {Array<any>} array Associative array that contains the value for the key whose value should be returned.
     * @param {*} key Key whose value should be returned.
     * @param {*} defaultValue Value to be returned if the value for the given key is null. Default is null.
     */
    static getColor(array: Array<any>, key: any, defaultValue: any): any | null;

    /**
     * Compares all mxPoints in the given lists.
     *
     * @param {Array<mxPoint>} a Array of {@link mxPoints} to be compared.
     * @param {Array<mxPoint>} b Array of {@link mxPoints} to be compared.
     */
    static equalPoints(a: Array<mxPoint>, b: Array<mxPoint>): boolean;

    /**
     * Returns true if all properties of the given objects are equal. Values with NaN are equal to NaN and unequal to any other value.
     *
     * @param {Object} a First object to be compared.
     * @param {Object} b Second object to be compared.
     */
    static equalEntries(a: {}, b: {}): boolean;

    /**
     * Removes all duplicates from the given array.
     *
     * @param {Array<any>} arr
     */
    static removeDuplicates<T>(arr: Array<T>): Array<T>;

    /**
     * Returns true if the given value is of type number and isNaN returns true.
     *
     * @param {*} value
     */
    static isNaN(value: any): boolean;

    /**
     * Assigns a copy of the superclass prototype to the subclass prototype.
     * Note that this does not call the constructor of the superclass at this
     * point, the superclass constructor should be called explicitely in the
     * subclass constructor.
     *
     * @example
     * ```javascript
     * MyGraph = function(container, model, renderHint, stylesheet)
     * {
     *   mxGraph.call(this, container, model, renderHint, stylesheet);
     * }
     *
     * mxUtils.extend(MyGraph, mxGraph);
     * ```
     *
     * @param {Function} ctor Constructor of the subclass.
     * @param {Function} superCtor Constructor of the superclass.
     */
    static extend(ctor: Function, superCtor: Function): void;

    /**
     * Returns a textual representation of the specified object.
     *
     * @param {Object} obj Object to return the string representation for.
     */
    static toString(obj: {}): string;

    /**
     * Converts the given degree to radians.
     *
     * @param {number} deg
     */
    static toRadians(deg: number): number;

    /**
     * Converts the given radians to degree.
     *
     * @param {number} rad
     */
    static toDegree(rad: number): number;

    /**
     * Converts the given arc to a series of curves.
     *
     * @param {number} x0
     * @param {number} y0
     * @param {number} r1
     * @param {number} r2
     * @param {number} angle
     * @param {number} largeArcFlag
     * @param {number} sweepFlag
     * @param {number} x
     * @param {number} y
     */
    static arcToCurves(
      x0: number,
      y0: number,
      r1: number,
      r2: number,
      angle: number,
      largeArcFlag: number,
      sweepFlag: number,
      x: number,
      y: number
    ): Array<any>;

    /**
     * Returns the bounding box for the rotated rectangle.
     *
     * @param {mxRectangle} rect {@link mxRectangle} to be rotated.
     * @param {number} rotation
     * @param {mxPoint} [cx] Optional {@link mxPoint} that represents the rotation center.
     * If no rotation center is given then the center of rect is used.
     */
    static getBoundingBox(rect: mxRectangle, rotation: number, cx?: mxPoint): mxRectangle;

    /**
     * Rotates the given point by the given cos and sin.
     *
     * @param {*} pt
     * @param {number} cos
     * @param {number} sin
     * @param {*} c
     */
    static getRotatedPoint(pt: any, cos: number, sin: number, c: any): mxPoint;

    /**
     * Returns an integer mask of the port constraints of the given map
     *
     * @param {mxCellState} terminal {@link mxCellState} that represents the terminal.
     * @param {mxCellState} edge {@link mxCellState} that represents the edge.
     * @param {boolean} source Boolean that specifies if the terminal is the source terminal.
     * @param {*} defaultValue Default value to be returned.
     */
    static getPortConstraints(terminal: mxCellState, edge: mxCellState, source: boolean, defaultValue: any): any;

    /**
     * Reverse the port constraint bitmask. For example, north | east becomes south | west
     *
     * @param {*} constraint
     */
    static reversePortConstraints(constraint: any): any;

    /**
     * Finds the index of the nearest segment on the given cell state for the specified coordinate pair.
     *
     * @param {*} state
     * @param {number} x
     * @param {number} y
     */
    static findNearestSegment(state: any, x: number, y: number): number;

    /**
     * Adds the given margins to the given rectangle and rotates and flips the rectangle according to the respective styles in style.
     *
     * @param {*} rect
     * @param {*} m
     * @param {*} style
     * @param {*} flipH
     * @param {*} flipV
     */
    static getDirectedBounds(rect: any, m: any, style: any, flipH: any, flipV: any): mxRectangle;

    /**
     * Returns the intersection between the polygon defined by the array of points and the line between center and point.
     *
     * @param {*} pts
     * @param {*} center
     * @param {*} point
     */
    static getPerimeterPoint(pts: any, center: any, point: any): any | null;

    /**
     * Returns true if the given rectangle intersects the given segment.
     *
     * @param {mxRectangle} bounds {@link mxRectangle} that represents the rectangle.
     * @param {mxPoint} p1 {@link mxPoint} that represents the first point of the segment.
     * @param {mxPoint} p2 {@link mxPoint} that represents the second point of the segment.
     */
    static rectangleIntersectsSegment(bounds: mxRectangle, p1: mxPoint, p2: mxPoint): boolean;

    /**
     * Returns true if the two rectangles intersect.
     *
     * @param {mxRectangle} a {@link mxRectangle} to be checked for intersection.
     * @param {mxRectangle} b {@link mxRectangle} to be checked for intersection.
     */
    static intersects(a: mxRectangle, b: mxRectangle): boolean;

    /**
     * Returns true if the state and the hotspot intersect.
     *
     * @param {mxCellState} state {@link mxCellState}
     * @param {number} x X-coordinate.
     * @param {number} y Y-coordinate.
     * @param {number} [hotspot] Optional size of the hostpot.
     * @param {number} [min] Optional min size of the hostpot.
     * @param {number} [max] Optional max size of the hostpot.
     */
    static intersectsHotspot(
      state: mxCellState,
      x: number,
      y: number,
      hotspot?: number,
      min?: number,
      max?: number
    ): boolean;

    /**
     * Returns the scroll origin of the given document or the current document if no document is given.
     *
     * @param {Document} doc
     */
    static getDocumentScrollOrigin(doc: Document): mxPoint;

    /**
     * Strips all whitespaces from the beginning of the string. Without the
     * second parameter, this will trim these characters:
     * - " " (ASCII 32 (0x20)), an ordinary space
     * - "\t" (ASCII 9 (0x09)), a tab
     * - "\n" (ASCII 10 (0x0A)), a new line (line feed)
     * - "\r" (ASCII 13 (0x0D)), a carriage return
     * - "\0" (ASCII 0 (0x00)), the NUL-byte
     * - "\x0B" (ASCII 11 (0x0B)), a vertical tab
     *
     * @param {string} str
     * @param {string} chars
     */
    static ltrim(str: string, chars?: string): string | null;

    /**
     * Strips all whitespaces from the end of the string. Without the second
     * parameter, this will trim these characters:
     *
     * - " " (ASCII 32 (0x20)), an ordinary space
     * - "\t" (ASCII 9 (0x09)), a tab
     * - "\n" (ASCII 10 (0x0A)), a new line (line feed)
     * - "\r" (ASCII 13 (0x0D)), a carriage return
     * - "\0" (ASCII 0 (0x00)), the NUL-byte
     * - "\x0B" (ASCII 11 (0x0B)), a vertical tab
     *
     * @param {string} str
     * @param {string} chars
     */
    static rtrim(str: string, chars?: string): string | null;

    /**
     * Strips all whitespaces from both end of the string.
     * Without the second parameter, Javascript function will trim these
     * characters:
     *
     * - " " (ASCII 32 (0x20)), an ordinary space
     * - "\t" (ASCII 9 (0x09)), a tab
     * - "\n" (ASCII 10 (0x0A)), a new line (line feed)
     * - "\r" (ASCII 13 (0x0D)), a carriage return
     * - "\0" (ASCII 0 (0x00)), the NUL-byte
     * - "\x0B" (ASCII 11 (0x0B)), a vertical tab
     *
     * @param {string} str
     * @param {string} chars
     */
    static trim(str: string, chars?: string): string | null;

    /**
     * Returns true if the specified value is numeric, that is, if it is not
     * null, not an empty string, not a HEX number and isNaN returns false.
     *
     * @param {string} n String representing the possibly numeric value.
     */
    static isNumeric(n: string): boolean;

    /**
     * Returns true if the given value is an valid integer number.
     *
     * @param n String representing the possibly numeric value.
     */
    static isInteger(n: string): boolean;

    /**
     * Returns the intersection of two lines as an {@link mxPoint}.
     *
     * @param {number} x0 X-coordinate of the first line's startpoint.
     * @param {number} y0 X-coordinate of the first line's startpoint.
     * @param {number} x1 X-coordinate of the first line's endpoint.
     * @param {number} y1 Y-coordinate of the first line's endpoint.
     * @param {number} x2 X-coordinate of the second line's startpoint.
     * @param {number} y2 Y-coordinate of the second line's startpoint.
     * @param {number} x3 X-coordinate of the second line's endpoint.
     * @param {number} y3 Y-coordinate of the second line's endpoint.
     */
    static intersection(
      x0: number,
      y0: number,
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      x3: number,
      y3: number
    ): mxPoint | null;

    /**
     * Returns the square distance between a segment and a point. To get the
     * distance between a point and a line (with infinite length) use
     * {@link mxUtils.ptLineDist}.
     *
     * @param {number} x1 X-coordinate of the startpoint of the segment.
     * @param {number} y1 Y-coordinate of the startpoint of the segment.
     * @param {number} x2 X-coordinate of the endpoint of the segment.
     * @param {number} y2 Y-coordinate of the endpoint of the segment.
     * @param {number} px X-coordinate of the point.
     * @param {number} py Y-coordinate of the point.
     */
    static ptSegDistSq(x1: number, y1: number, x2: number, y2: number, px: number, py: number): number;

    /**
     * Returns the distance between a line defined by two points and a point.
     * To get the distance between a point and a segment (with a specific
     * length) use {@link mxUtils.ptSeqDistSq}.
     *
     * @param {number} x1 X-coordinate of point 1 of the line.
     * @param {number} y1 Y-coordinate of point 1 of the line.
     * @param {number} x2 X-coordinate of point 1 of the line.
     * @param {number} y2 Y-coordinate of point 1 of the line.
     * @param {number} px X-coordinate of the point.
     * @param {number} py Y-coordinate of the point.
     */
    static ptLineDist(x1: number, y1: number, x2: number, y2: number, px: number, py: number): number;

    /**
     * Returns 1 if the given point on the right side of the segment, 0 if its
     * on the segment, and -1 if the point is on the left side of the segment.
     *
     * @param {number} x1 X-coordinate of the startpoint of the segment.
     * @param {number} y1 Y-coordinate of the startpoint of the segment.
     * @param {number} x2 X-coordinate of the endpoint of the segment.
     * @param {number} y2 Y-coordinate of the endpoint of the segment.
     * @param {number} px X-coordinate of the point.
     * @param {number} py Y-coordinate of the point.
     */
    static relativeCcw(x1: number, y1: number, x2: number, y2: number, px: number, py: number): number;

    /**
     * See {@link mxEffects.animateChanges}. This is for backwards compatibility and will be removed later.
     *
     * @param {*} graph
     * @param {*} changes
     */
    static animateChanges(graph: any, changes: any): void;

    /**
     * See {@link mxEffects.cascadeOpacity}. This is for backwards compatibility and will be removed later.
     *
     * @param {*} graph
     * @param {*} cell
     * @param {*} opacity
     */
    static cascadeOpacity(graph: any, cell: any, opacity: any): void;

    /**
     * See {@link mxEffects.fadeOut}. This is for backwards compatibility and will be removed later.
     *
     * @param {Node} node
     * @param {*} from
     * @param {*} remove
     * @param {*} step
     * @param {*} delay
     * @param {*} isEnabled
     */
    static fadeOut(node: Node, from: any, remove: any, step: any, delay: any, isEnabled: boolean): void;

    /**
     * Sets or toggles the flag bit for the given key in the cell's styles.
     * If value is null then the flag is toggled.
     *
     * @example
     * ```javascript
     * var cells = graph.getSelectionCells();
     * mxUtils.setCellStyleFlags(graph.model,
     * 			cells,
     * 			mxConstants.STYLE_FONTSTYLE,
     * 			mxConstants.FONT_BOLD);
     * ```
     *
     * Toggles the bold font style.
     *
     * @param {mxGraphModel} model {@link mxGraphModel} that contains the cells.
     * @param {mxCell} cells Array of {@link mxCell} to change the style for.
     * @param {string} key Key of the style to be changed.
     * @param {number} flag Integer for the bit to be changed.
     * @param {boolean} [value] Optional boolean value for the flag.
     */
    static setCellStyleFlags(
      model: mxGraphModel,
      cells: Array<mxCell>,
      key: string,
      flag: number,
      value?: boolean
    ): void;

    /**
     * Sets or removes the given key from the specified style and returns the
     * new style. If value is null then the flag is toggled.
     *
     * @param {string} style String of the form [(stylename|key=value);].
     * @param {string} key Key of the style to be changed.
     * @param {number} flag Integer for the bit to be changed.
     * @param {boolean} [value] Optional boolean value for the given flag.
     */
    static setStyleFlag(style: string, key: string, flag: number, value?: boolean): string;

    /**
     * Returns an {@link mxPoint} that represents the horizontal and vertical alignment
     * for numeric computations. X is -0.5 for center, -1 for right and 0 for
     * left alignment. Y is -0.5 for middle, -1 for bottom and 0 for top
     * alignment. Default values for missing arguments is top, left.
     *
     * @param {*} align
     * @param {*} valign
     */
    static getAlignmentAsPoint(align: any, valign: any): mxPoint;

    /**
     * Returns an {@link mxRectangle} with the size (width and height in pixels) of
     * the given string. The string may contain HTML markup. Newlines should be
     * converted to <br> before calling this method. The caller is responsible
     * for sanitizing the HTML markup.
     *
     * @example
     * ```javascript
     * var label = graph.getLabel(cell).replace(/\n/g, "<br>");
     * var size = graph.getSizeForString(label);
     * ```
     *
     * @param {string} text String whose size should be returned.
     * @param {number} fontSize Integer that specifies the font size in pixels. Default is <mxConstants.DEFAULT_FONTSIZE>.
     * @param {string} fontFamily String that specifies the name of the font family. Default is <mxConstants.DEFAULT_FONTFAMILY>.
     * @param {number} [textWidth] Optional width for text wrapping.
     * @param {string} [fontStyle] Optional font style.
     */
    static getSizeForString(
      text: string,
      fontSize: number,
      fontFamily: string,
      textWidth?: number,
      fontStyle?: string
    ): mxRectangle;

    /**
     *
     * @param {*} graph
     * @param {*} scale
     * @param {*} cells
     * @param {number} x0
     * @param {number} y0
     */
    static getViewXml(graph: any, scale: any, cells: any, x0: number, y0: number): any;

    /**
     * Returns the scale to be used for printing the graph with the given
     * bounds across the specifies number of pages with the given format. The
     * scale is always computed such that it given the given amount or fewer
     * pages in the print output. See {@link mxPrintPreview} for an example.
     *
     * @param {number} pageCount Specifies the number of pages in the print output.
     * @param {mxGraph} graph {@link mxGraph} that should be printed.
     * @param {mxRectangle} pageFormat Optional {@link mxRectangle} that specifies the page format. Default is {@link mxConstants.PAGE_FORMAT_A4_PORTRAIT}.
     * @param {number} border The border along each side of every page.
     */
    static getScaleForPageCount(pageCount: number, graph: mxGraph, pageFormat: mxRectangle, border: number): number;

    /**
     * Copies the styles and the markup from the graph's container into the
     * given document and removes all cursor styles. The document is returned.
     *
     * This function should be called from within the document with the graph.
     * If you experience problems with missing stylesheets in IE then try adding
     * the domain to the trusted sites.
     *
     * @param {mxGraph} graph {@link mxGraph} to be copied.
     * @param {Document} doc Document where the new graph is created.
     * @param {number} x0=0 X-coordinate of the graph view origin. Default is 0.
     * @param {number} y0=0 Y-coordinate of the graph view origin. Default is 0.
     * @param {number} [w] Optional width of the graph view.
     * @param {number} [h] Optional height of the graph view.
     */
    static show(graph: mxGraph, doc: Document, x0: number, y0: number, w: number, h: number): Document;

    /**
     * Prints the specified graph using a new window and the built-in print
     * dialog. This function should be called from within the document with the graph.
     *
     * @param {mxGraph} graph {@link mxGraph} to be printed.
     */
    static printScreen(graph: mxGraph): void;

    /**
     * Shows the specified text content in a new {@link mxWindow} or a new browser
     * window if isInternalWindow is false.
     *
     * @param {string} content String that specifies the text to be displayed.
     * @param {boolean} [isInternalWindow=false] Optional boolean indicating if an mxWindow should be
     * used instead of a new browser window. Default is false.
     */
    static popup(content: string, isInternalWindow: boolean): void;

    /**
     * Displays the given message in a prompt dialog. This implementation uses
     * the built-in prompt function.
     *
     * @param {string} message String specifying the message to be displayed.
     * @param {string} [defaultValue] Optional string specifying the default value.
     */
    static prompt(message: string, defaultValue: string): string;

    /**
     * Displays the given message in a confirm dialog. This implementation uses the built-in confirm function.
     *
     * @param {string} message String specifying the message to be displayed.
     */
    static confirm(message: string): boolean;
  }
}
