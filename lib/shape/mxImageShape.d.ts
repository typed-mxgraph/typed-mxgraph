declare module 'mxgraph' {
  /**
   * Extends {@link mxShape} to implement an image shape.
   * This shape is registered under {@link mxConstants.SHAPE_IMAGE} in {@link mxCellRenderer}.
   *
   * @class mxImageShape
   * @extends {mxRectangleShape}
   */
  class mxImageShape extends mxRectangleShape {
    /**
     * Constructs a new image shape.
     * @param {mxRectangle} bounds     {@link mxRectangle} that defines the bounds.  This is stored in {@link mxShape.bounds}.
     * @param {string} image           String that specifies the URL of the image.  This is stored in <image>.
     * @param {string} [fill]          String that defines the fill color.  This is stored in <fill>.
     * @param {string} [stroke]        String that defines the stroke color.  This is stored in <stroke>.
     * @param {number} [strokewidth]   Optional integer that defines the stroke width.  Default is 0.  This is stored in <strokewidth>.
     */
    constructor(bounds: mxRectangle, image: string, fill?: string, stroke?: string, strokewidth?: number);

    /**
     * Switch to preserve image aspect. Default is true.
     * @default true
     */
    preserveImageAspect: boolean;

    /**
     * Disables offset in IE9 for crisper image output.
     */
    getSvgScreenOffset(): number;

    /**
     * Overrides {@link mxShape.apply} to replace the fill and stroke colors with the
     * respective values from {@link mxConstants.STYLE_IMAGE_BACKGROUND} and
     * {@link mxConstants.STYLE_IMAGE_BORDER}.
     *
     * Applies the style of the given {@link mxCellState} to the shape. This
     * implementation assigns the following styles to local fields:
     *
     * - {@link mxConstants.STYLE_IMAGE_BACKGROUND} => fill
     * - {@link mxConstants.STYLE_IMAGE_BORDER} => stroke
     *
     * @param {mxCellState} state   {@link mxCellState} of the corresponding cell.
     */
    apply(state: mxCellState): void;

    /**
     * Returns true if HTML is allowed for this shape. This implementation always
     * returns false.
     */
    isHtmlAllowed(): boolean;

    /**
     * Creates and returns the HTML DOM node(s) to represent
     * this shape. This implementation falls back to <createVml>
     * so that the HTML creation is optional.
     */
    createHtml(): HTMLElement;

    /**
     * Disables inherited roundable support.
     */
    isRoundable(): boolean;
    isRoundable(c: mxAbstractCanvas2D, x: number, y: number, w: number, h: number): boolean;

    /**
     * Generic background painting implementation.
     */
    paintVertexShape(c: mxAbstractCanvas2D, x: number, y: number, w: number, h: number): void;

    /**
     * Overrides <mxShape.redraw> to preserve the aspect ratio of images.
     */
    redrawHtmlShape(): void;
  }
}
