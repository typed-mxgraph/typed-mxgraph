declare module 'mxgraph' {
  /**
   * Implements a canvas to be used for rendering VML. Here is an example of implementing a
   * fallback for SVG images which are not supported in VML-based browsers.
   * @example
   * ```javascript
   * (code)
   * var mxVmlCanvas2DImage = mxVmlCanvas2D.prototype.image;
   * mxVmlCanvas2D.prototype.image = function(x, y, w, h, src, aspect, flipH, flipV)
   * {
   *   if (src.substring(src.length - 4, src.length) == '.svg')
   *   {
   *     src = 'http://www.jgraph.com/images/mxgraph.gif';
   *   }
   *
   *   mxVmlCanvas2DImage.apply(this, arguments);
   * };
   * ```
   *
   * To disable anti-aliasing in the output, use the following code.
   * @example
   * ```javascript
   * document.createStyleSheet().cssText = mxClient.VML_PREFIX + '\\:*{antialias:false;)}';
   * ```
   *
   * Note that there is a known issue in VML where gradients are painted using the outer
   * bounding box of rotated shapes, not the actual bounds of the shape. See
   * also {@link text} for plain text label restrictions in shapes for VML.
   */
  class mxVmlCanvas2D extends mxAbstractCanvas2D {
    constructor(root: Element);

    /**
     * Reference to the container for the SVG content.
     */
    root: Element;

    /**
     * Holds the current DOM node.
     */
    node: Element;

    /**
     * Specifies if text output should be enabled.
     * @default true
     */
    textEnabled: boolean;

    /**
     * Contains the string used for moving in paths.
     * @default 'm'
     */
    moveOp: string;

    /**
     * Contains the string used for moving in paths.
     * @default 'l'
     */
    lineOp: string;

    /**
     * Contains the string used for bezier curves.
     * @default 'c'
     */
    curveOp: string;

    /**
     * Holds the operator for closing curves.
     * @default 'x'
     */
    closeOp: string;

    /**
     * Background color for rotated HTML. This can be set to eg.
     * white to improve rendering of rotated text in VML for IE9.
     * @default ''
     */
    rotatedHtmlBackground: string;

    /**
     * Specifies the scale used to draw VML shapes.
     * @default 1
     */
    vmlScale: number;

    /**
     * Creates the given element using the document.
     */
    createElement(name: string): HTMLElement;

    /**
     * Creates a new element using {@link createElement} and prefixes the given name with
     * {@link mxClient.VML_PREFIX}.
     */
    createVmlElement(name: string): HTMLElement;

    /**
     * Adds the current node to the {@link root}.
     */
    addNode(filled: boolean, stroked: boolean): void;

    /**
     * Creates a transparent fill.
     */
    createTransparentFill(): HTMLElement;

    /**
     * Creates a fill for the current state.
     */
    createFill(): HTMLElement;

    /**
     * Creates a fill for the current state.
     */
    createStroke(): HTMLElement;

    /**
     * Returns a VML dash pattern for the current dashPattern.
     * See http://msdn.microsoft.com/en-us/library/bb264085(v=vs.85).aspx
     */
    getVmlDashStyle(): string;

    /**
     * Creates a shadow for the given node.
     */
    createShadow(node: Element, filled: boolean, stroked: boolean): Element;

    /**
     * Creates the fill for the shadow.
     */
    createShadowFill(): HTMLElement;

    /**
     * Creates the stroke for the shadow.
     */
    createShadowStroke(): HTMLElement;

    /**
     * Sets the rotation of the canvas. Note that rotation cannot be concatenated.
     */
    rotate(theta: number, flipH: boolean, flipV: boolean, cx: number, cy: number): void;

    /**
     * Extends superclass to create path.
     */
    begin(): void;

    /**
     * Replaces quadratic curve with bezier curve in VML.
     */
    quadTo(x1: number, y1: number, x2: number, y2: number): void;

    /**
     * Sets the glass gradient.
     */
    createRect(nodeName: string, x: number, y: number, w: number, h: number): HTMLElement;

    /**
     * Function: rect
     *
     * Sets the current path to a rectangle.
     */
    rect(x: number, y: number, w: number, h: number): void;

    /**
     * Sets the current path to a rounded rectangle.
     */
    roundrect(x: number, y: number, w: number, h: number, dx: number, dy: number): void;

    /**
     * Sets the current path to an ellipse.
     */
    ellipse(x: number, y: number, w: number, h: number): void;

    /**
     * Paints an image.
     */
    image(
      x: number,
      y: number,
      w: number,
      h: number,
      src: string,
      aspect: boolean,
      flipH: boolean,
      flipV: boolean
    ): void;

    /**
     * Creates the innermost element that contains the HTML text.
     */
    createDiv(str: string, align: string, valign: string, overflow: string): HTMLElement;

    /**
     * Paints the given text. Possible values for format are empty string for plain
     * text and html for HTML markup. Clipping, text background and border are not
     * supported for plain text in VML.
     */
    text(
      x: number,
      y: number,
      w: number,
      h: number,
      str: string,
      align: string,
      valign: string,
      wrap: string,
      format: string,
      overflow: string,
      clip: string,
      rotation: number,
      dir: string
    ): void;

    /**
     * Paints the outline of the current path.
     */
    plainText(
      x: number,
      y: number,
      w: number,
      h: number,
      str: string,
      align: string,
      valign: string,
      wrap: string,
      overflow: string,
      clip: string,
      rotation: number,
      dir: string
    ): void;

    /**
     * Paints the outline of the current path.
     */
    stroke(): void;

    /**
     * Fills the current path.
     */
    fill(): void;

    /**
     * Fills and paints the outline of the current path.
     */
    fillAndStroke(): void;
  }
}
