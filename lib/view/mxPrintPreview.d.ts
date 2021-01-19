declare module 'mxgraph' {
  /**
   * @class mxPrintPreview
   *
   * Implements printing of a diagram across multiple pages. The following opens
   * a print preview for an existing graph:
   *
   * @example
   * ```javascript
   * var preview = new mxPrintPreview(graph);
   * preview.open();
   * ```
   *
   * Use {@link mxUtils.getScaleForPageCount} as follows in order to print the graph
   * across a given number of pages:
   *
   * @example
   * ```javascript
   * var pageCount = mxUtils.prompt('Enter page count', '1');
   *
   * if (pageCount != null)
   * {
   *   var scale = mxUtils.getScaleForPageCount(pageCount, graph);
   *   var preview = new mxPrintPreview(graph, scale);
   *   preview.open();
   * }
   * ```
   *
   * ### Additional pages
   *
   * To add additional pages before and after the output, {@link getCoverPages} and
   * {@link getAppendices} can be used, respectively.
   *
   * @example
   * ```javascript
   * var preview = new mxPrintPreview(graph, 1);
   *
   * preview.getCoverPages(w, h)
   * {
   *   return [this.renderPage(w, h, 0, 0, mxUtils.bind(this, function(div)
   *   {
   *     div.innerHTML = '<div style="position:relative;margin:4px;">Cover Page</p>'
   *   }))];
   * };
   *
   * preview.getAppendices(w, h)
   * {
   *   return [this.renderPage(w, h, 0, 0, mxUtils.bind(this, function(div)
   *   {
   *     div.innerHTML = '<div style="position:relative;margin:4px;">Appendix</p>'
   *   }))];
   * };
   *
   * preview.open();
   * ```
   *
   * ### CSS
   *
   * The CSS from the original page is not carried over to the print preview.
   * To add CSS to the page, use the css argument in the {@link open} function or
   * override {@link writeHead} to add the respective link tags as follows:
   *
   * @example
   * ```javascript
   * var writeHead = preview.writeHead;
   * preview.writeHead(doc, css)
   * {
   *   writeHead.apply(this, arguments);
   *   doc.writeln('<link rel="stylesheet" type="text/css" href="style.css">');
   * };
   * ```
   *
   * ### Padding
   *
   * To add a padding to the page in the preview (but not the print output), use
   * the following code:
   *
   * @example
   * ```javascript
   * preview.writeHead(doc)
   * {
   *   writeHead.apply(this, arguments);
   *
   *   doc.writeln('<style type="text/css">');
   *   doc.writeln('@media screen {');
   *   doc.writeln('  body > div { padding-top:30px;padding-left:40px;box-sizing:content-box; }');
   *   doc.writeln('}');
   *   doc.writeln('</style>');
   * };
   * ```
   *
   * ### Headers
   *
   * Apart from setting the title argument in the mxPrintPreview constructor you
   * can override {@link renderPage} as follows to add a header to any page:
   *
   * @example
   * ```javascript
   * var oldRenderPage = renderPage;
   * renderPage(w, h, x, y, content, pageNumber)
   * {
   *   var div = oldRenderPage.apply(this, arguments);
   *
   *   var header = document.createElement('div');
   *   header.style.position = 'absolute';
   *   header.style.top = '0px';
   *   header.style.width = '100%';
   *   header.style.textAlign = 'right';
   *   mxUtils.write(header, 'Your header here');
   *   div.firstChild.appendChild(header);
   *
   *   return div;
   * };
   * ```
   *
   * The pageNumber argument contains the number of the current page, starting at
   * 1. To display a header on the first page only, check pageNumber and add a
   * vertical offset in the constructor call for the height of the header.
   *
   * ### Page Format
   *
   * For landscape printing, use {@link mxConstants.PAGE_FORMAT_A4_LANDSCAPE} as
   * the pageFormat in {@link mxUtils.getScaleForPageCount} and {@link mxPrintPreview}.
   * Keep in mind that one can not set the defaults for the print dialog
   * of the operating system from JavaScript so the user must manually choose
   * a page format that matches this setting.
   *
   * You can try passing the following CSS directive to {@link open} to set the
   * page format in the print dialog to landscape. However, this CSS
   * directive seems to be ignored in most major browsers, including IE.
   *
   * @example
   * ```javascript
   * @page {
   *   size: landscape;
   * }
   * ```
   *
   * Note that the print preview behaves differently in IE when used from the
   * filesystem or via HTTP so printing should always be tested via HTTP.
   *
   * If you are using a DOCTYPE in the source page you can override {@link getDoctype}
   * and provide the same DOCTYPE for the print preview if required. Here is
   * an example for IE8 standards mode.
   *
   * @example
   * ```javascript
   * var preview = new mxPrintPreview(graph);
   * preview.getDoctype()
   * {
   *   return '<!--[if IE]><meta http-equiv="X-UA-Compatible" content="IE=5,IE=8" ><![endif]-->';
   * };
   * preview.open();
   * ```
   */
  class mxPrintPreview {
    /**
     * @constructor mxPrintPreview
     *
     * Constructs a new print preview for the given parameters.
     *
     * @param graph {@link mxGraph} to be previewed.
     * @param scale Optional scale of the output. Default is 1 / {@link mxGraph.pageScale}.
     * @param pageFormat {@link mxRectangle} that specifies the page format (in pixels).
     * @param border Border in pixels along each side of every page. Note that the
     * actual print function in the browser will add another border for
     * printing.
     * This should match the page format of the printer. Default uses the
     * {@link mxGraph.pageFormat} of the given graph.
     * @param x0 Optional left offset of the output. Default is 0.
     * @param y0 Optional top offset of the output. Default is 0.
     * @param borderColor Optional color of the page border. Default is no border.
     * Note that a border is sometimes useful to highlight the printed page
     * border in the print preview of the browser.
     * @param title Optional string that is used for the window title. Default
     * is 'Printer-friendly version'.
     * @param pageSelector Optional boolean that specifies if the page selector
     * should appear in the window with the print preview. Default is true.
     */
    constructor(
      graph: mxGraph,
      scale?: number,
      pageFormat?: '',
      border?: number,
      x0?: number,
      y0?: number,
      borderColor?: string,
      title?: string,
      pageSelector?: boolean
    );

    /**
     * Reference to the {@link mxGraph} that should be previewed.
     */
    graph: mxGraph;

    /**
     * Holds the {@link mxRectangle} that defines the page format.
     */
    pageFormat: mxRectangle;

    /**
     * Holds the scale of the print preview.
     */
    scale: number;

    /**
     * The border inset around each side of every page in the preview. This is set
     * to 0 if autoOrigin is false.
     * @default 0
     */
    border: number;

    /**
     * The margin at the top of the page (number).
     * @default 0
     */
    marginTop: number;

    /**
     * The margin at the bottom of the page (number).
     * @default 0
     */
    marginBottom: number;

    /**
     * Holds the horizontal offset of the output.
     */
    x0: number;

    /**
     * Holds the vertical offset of the output.
     */
    y0: number;

    /**
     * Specifies if the origin should be automatically computed based on the top,
     * left corner of the actual diagram contents. The required offset will be added
     * to {@link x0} and {@link y0} in {@link open}.
     * @default true
     */
    autoOrigin: boolean;

    /**
     * Specifies if overlays should be printed.
     * @default false
     */
    printOverlays: boolean;

    /**
     * Specifies if controls (such as folding icons) should be printed. Default is
     * false.
     */
    printControls: boolean;

    /**
     * Specifies if the background image should be printed.
     * @default false
     */
    printBackgroundImage: boolean;

    /**
     * Holds the color value for the page background color.
     * @default '#ffffff'
     */
    backgroundColor: string;

    /**
     * Holds the color value for the page border.
     */
    borderColor: string;

    /**
     * Holds the title of the preview window.
     */
    title: string;

    /**
     * Boolean that specifies if the page selector should be
     * displayed.
     * @default true
     */
    pageSelector: boolean;

    /**
     * Reference to the preview window.
     */
    wnd: Window;

    /**
     * Assign any window here to redirect the rendering in {@link open}.
     */
    targetWindow: Window;

    /**
     * Holds the actual number of pages in the preview.
     */
    pageCount: number;

    /**
     * Specifies is clipping should be used to avoid creating too many cell states
     * in large diagrams. The bounding box of the cells in the original diagram is
     * used if this is enabled.
     * @default true
     */
    clipping: boolean;

    /**
     * Returns {@link wnd}.
     */
    getWindow(): Window;

    /**
     * Returns the string that should go before the HTML tag in the print preview
     * page. This implementation returns an X-UA meta tag for IE5 in quirks mode,
     * IE8 in IE8 standards mode and edge in IE9 standards mode.
     */
    getDoctype(): string;

    /**
     * Adds the given graph to the existing print preview.
     *
     * @param css Optional CSS string to be used in the head section.
     * @param targetWindow Optional window that should be used for rendering. If
     * this is specified then no HEAD tag, CSS and BODY tag will be written.
     */
    appendGraph(
      graph: mxGraph,
      scale: number,
      x0: number,
      y0: number,
      forcePageBreaks: boolean,
      keepOpen: boolean
    ): void;

    /**
     * Shows the print preview window. The window is created here if it does
     * not exist.
     *
     * @param css Optional CSS string to be used in the head section.
     * @param targetWindow Optional window that should be used for rendering. If
     * this is specified then no HEAD tag, CSS and BODY tag will be written.
     */
    open(css?: string, targetWindow?: Window, forcePageBreaks?: boolean, keepOpen?: boolean): Window;

    /**
     * Adds a page break to the given document.
     */
    addPageBreak(doc: Document): void;

    /**
     * Writes the closing tags for body and page after calling {@link writePostfix}.
     */
    closeDocument(): void;

    /**
     * Writes the HEAD section into the given document, without the opening
     * and closing HEAD tags.
     */
    writeHead(doc: Document, css: string): void;

    /**
     * Called before closing the body of the page. This implementation is empty.
     */
    writePostfix(doc: Document): any;

    /**
     * Creates the page selector table.
     */
    createPageSelector(vpages: number, hpages: number): HTMLTableElement;

    /**
     * Creates a DIV that prints a single page of the given
     * graph using the given scale and returns the DIV that
     * represents the page.
     *
     * @param w Width of the page in pixels.
     * @param h Height of the page in pixels.
     * @param dx Optional horizontal page offset in pixels (used internally).
     * @param dy Optional vertical page offset in pixels (used internally).
     * @param content Callback that adds the HTML content to the inner div of a page.
     * Takes the inner div as the argument.
     * @param pageNumber Integer representing the page number.
     */
    renderPage(w: number, h: number, dx?: number, dy?: number, content?: Function, pageNumber?: number): HTMLDivElement;

    /**
     * Returns the root cell for painting the graph.
     */
    getRoot(): mxCell;

    /**
     * Adds a graph fragment to the given div.
     *
     * @param dx Horizontal translation for the diagram.
     * @param dy Vertical translation for the diagram.
     * @param scale Scale for the diagram.
     * @param pageNumber Number of the page to be rendered.
     * @param div Div that contains the output.
     * @param clip Contains the clipping rectangle as an {@link mxRectangle}.
     */
    addGraphFragment(
      dx: number,
      dy: number,
      scale: number,
      pageNumber: number,
      div: HTMLDivElement,
      clip: mxRectangle
    ): void;

    /**
     * Returns the link for the given cell state. This returns null.
     */
    getLinkForCellState(state: mxCellState): string;

    /**
     * Inserts the background image into the given div.
     */
    insertBackgroundImage(div: HTMLDivElement, dx: number, dy: number): void;

    /**
     * Returns the pages to be added before the print output. This returns null.
     */
    getCoverPages(): any;

    /**
     * Returns the pages to be added after the print output. This returns null.
     */
    getAppendices(): any;

    /**
     * Opens the print preview and shows the print dialog.
     *
     * Parameters:
     *
     * @param css Optional CSS string to be used in the head section.
     */
    print(css?: string): void;

    /**
     * Closes the print preview window.
     */
    close(): void;
  }
}
