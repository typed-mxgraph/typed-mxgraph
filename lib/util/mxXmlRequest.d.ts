declare module 'mxgraph' {
  /**
   * XML HTTP request wrapper. See also: {@link mxUtils.get}, {@link mxUtils.post} and
   * {@link mxUtils.load}. This class provides a cross-browser abstraction for Ajax
   * requests.
   *
   * ### Encoding:
   *
   * For encoding parameter values, the built-in encodeURIComponent JavaScript
   * method must be used. For automatic encoding of post data in {@link mxEditor} the
   * {@link mxEditor.escapePostData} switch can be set to true (default). The encoding
   * will be carried out using the conte type of the page. That is, the page
   * containting the editor should contain a meta tag in the header, eg.
   * <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
   *
   * @example
   * ```JavaScript
   * var onload = function(req)
   * {
   *   mxUtils.alert(req.getDocumentElement());
   * }
   *
   * var onerror = function(req)
   * {
   *   mxUtils.alert('Error');
   * }
   * new mxXmlRequest(url, 'key=value').send(onload, onerror);
   * ```
   *
   * Sends an asynchronous POST request to the specified URL.
   *
   * @example
   * ```JavaScript
   * var req = new mxXmlRequest(url, 'key=value', 'POST', false);
   * req.send();
   * mxUtils.alert(req.getDocumentElement());
   * ```
   *
   * Sends a synchronous POST request to the specified URL.
   *
   * @example
   * ```JavaScript
   * var encoder = new mxCodec();
   * var result = encoder.encode(graph.getModel());
   * var xml = encodeURIComponent(mxUtils.getXml(result));
   * new mxXmlRequest(url, 'xml='+xml).send();
   * ```
   *
   * Sends an encoded graph model to the specified URL using xml as the
   * parameter name. The parameter can then be retrieved in C# as follows:
   *
   * (code)
   * string xml = HttpUtility.UrlDecode(context.Request.Params["xml"]);
   * (end)
   *
   * Or in Java as follows:
   *
   * (code)
   * String xml = URLDecoder.decode(request.getParameter("xml"), "UTF-8").replace("\n", "&#xa;");
   * (end)
   *
   * Note that the linefeeds should only be replaced if the XML is
   * processed in Java, for example when creating an image.
   */
  class mxXmlRequest {
    /**
     * Constructs an XML HTTP request.
     * @param url Target URL of the request.
     * @param params Form encoded parameters to send with a POST request.
     *
     * @param method String that specifies the request method. Possible values are POST and GET. Default is POST.
     * @default 'POST'
     *
     * @param async Boolean specifying if an asynchronous request should be used. Default is true.
     * @default true
     *
     * @param username String specifying the username to be used for the request.
     * @param password String specifying the password to be used for the request.
     */
    constructor(url: string, params: any, method: 'POST' | 'GET', async: boolean, username: string, password: string);

    /**
     * Boolean indicating if the request is binary. This option is ignored in IE.
     * In all other browsers the requested mime type is set to
     * text/plain; charset=x-user-defined. Default is false.
     *
     * @default false
     */
    binary: boolean;

    /**
     * Specifies if withCredentials should be used in HTML5-compliant browsers. Default is false.
     *
     * @default false
     */
    withCredentials: boolean;

    /**
     * Holds the inner, browser-specific request object.
     */
    request: any;

    /**
     * Specifies if request values should be decoded as URIs before setting the
     * textarea value in {@link simulate}. Defaults to false for backwards compatibility,
     * to avoid another decode on the server this should be set to true.
     */
    decodeSimulateValues: boolean;

    /**
     * Returns {@link binary}.
     */
    isBinary(): boolean;

    /**
     * Sets {@link binary}.
     *
     * @param value
     */
    setBinary(value: boolean): void;

    /**
     * Returns the response as a string.
     */
    getText(): string;

    /**
     * Returns true if the response is ready.
     */
    isReady(): boolean;

    /**
     * Returns the document element of the response XML document.
     */
    getDocumentElement(): XMLDocument;

    /**
     * Returns the response as an XML document. Use {@link getDocumentElement} to get
     * the document element of the XML document.
     */
    getXml(): XMLDocument;

    /**
     * Returns the status as a number, eg. 404 for "Not found" or 200 for "OK".
     * Note: The NS_ERROR_NOT_AVAILABLE for invalid responses cannot be cought.
     */
    getStatus(): number;

    /**
     * Creates and returns the inner {@link request} object.
     */
    create(): any;

    /**
     * Send the <request> to the target URL using the specified functions to
     * process the response asychronously.
     *
     * Note: Due to technical limitations, onerror is currently ignored.
     *
     * @param onload Function to be invoked if a successful response was received.
     * @param onerror Function to be called on any error. Unused in this implementation, intended for overriden function.
     * @param timeout Optional timeout in ms before calling ontimeout.
     * @param ontimeout Optional function to execute on timeout.
     */
    send(onload: Function, onerror: Function, timeout?: number, ontimeout?: Function): void;

    /**
     * Sets the headers for the given request and parameters. This sets the
     * content-type to application/x-www-form-urlencoded if any params exist.
     *
     * @example
     * ```JavaScript
     * request.setRequestHeaders = function(request, params)
     * {
     *   if (params != null)
     *   {
     *     request.setRequestHeader('Content-Type',
     *             'multipart/form-data');
     *     request.setRequestHeader('Content-Length',
     *             params.length);
     *   }
     * };
     * ```
     *
     * Use the code above before calling {@link send} if you require a
     * multipart/form-data request.
     *
     * @param request
     * @param params
     */
    setRequestHeaders(request: any, params: any): void;

    /**
     * Creates and posts a request to the given target URL using a dynamically
     * created form inside the given document.
     *
     * @param doc Document that contains the form element.
     * @param target Target to send the form result to.
     */
    simulate(doc: any, target: any): void;
  }
}
