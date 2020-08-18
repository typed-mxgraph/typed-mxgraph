declare module 'mxgraph' {
  /**
   * Maintains the size of a div element in Internet Explorer. This is a
   * workaround for the right and bottom style being ignored in IE.
   *
   * If you need a div to cover the scrollwidth and -height of a document,
   * then you can use this class as follows:
   *
   * @example
   * ```javascript
   * var resizer = new mxDivResizer(background);
   * resizer.getDocumentHeight()
   * {
   *   return document.body.scrollHeight;
   * }
   * resizer.getDocumentWidth()
   * {
   *   return document.body.scrollWidth;
   * }
   * resizer.resize();
   * ```
   *
   * @class mxDivResizer
   */
  class mxDivResizer {
    /**
     *
     * Constructs an object that maintains the size of a div
     * element when the window is being resized. This is only
     * required for Internet Explorer as it ignores the respective
     * stylesheet information for DIV elements.
     *
     * @param div - Reference to the DOM node whose size should be maintained.
     * @param container - Optional Container that contains the div. Default is the
     * window.
     */
    constructor(div: HTMLElement, container?: HTMLElement | Window);

    /**
     * Boolean specifying if the width should be updated.
     */
    resizeWidth: boolean;

    /**
     * Boolean specifying if the height should be updated.
     */
    resizeHeight: boolean;

    /**
     * Boolean specifying if the width should be updated.
     */
    handlingResize: boolean;

    /**
     * Updates the style of the DIV after the window has been resized.
     */
    resize(): void;

    /**
     * Hook for subclassers to return the width of the document (without
     * scrollbars).
     */
    getDocumentWidth(): number;

    /**
     * Hook for subclassers to return the height of the document (without
     * scrollbars).
     */
    getDocumentHeight(): number;
  }
}
