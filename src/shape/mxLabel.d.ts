declare module 'mxgraph' {
  class mxLabel extends mxRectangleShape {
    /**
     * Constructs a new label shape.
     *
     * @param {mxRectangle} bounds    {@link mxRectangle} that defines the bounds. This is stored in {@link mxShape.bounds}.
     * @param {string} fill           String that defines the fill color.  This is stored in <fill>.
     * @param {string} stroke         String that defines the stroke color.  This is stored in <stroke>.
     * @param {number} [strokewidth]  Optional integer that defines the stroke width.  Default is 1.  This is stored in <strokewidth>.
     */
    constructor(bounds: mxRectangle, fill: string, stroke: string, strokewidth?: number);

    /**
     * Default width and height for the image.
     * @default mxConstants.DEFAULT_IMAGESIZE
     */
    imageSize: number;

    /**
     * Default value for image spacing
     * @type {number}
     * @default 2
     */
    spacing: number;

    /**
     * Default width and height for the indicicator.
     * @type {number}
     * @default 10
     */
    indicatorSize: number;

    /**
     * Default spacing between image and indicator
     * @default 2
     * @type {number}
     */
    indicatorSpacing: number;

    /**
     * Initializes the shape and the <indicator>.
     */
    init(container: HTMLElement): void;

    /**
     * Reconfigures this shape. This will update the colors of the indicator
     * and reconfigure it if required.
     */
    redraw(): void;

    /**
     * Returns true for non-rounded, non-rotated shapes with no glass gradient and
     * no indicator shape.
     */
    isHtmlAllowed(): boolean;

    /**
     * Generic background painting implementation.
     * @param {mxAbstractCanvas2D} c
     * @param {number} x
     * @param {number} y
     * @param {number} w
     * @param {number} h
     */
    paintForeground(c: mxAbstractCanvas2D, x: number, y: number, w: number, h: number): void;

    /**
     * Generic background painting implementation.
     * @param {mxAbstractCanvas2D} c
     * @param {number} x
     * @param {number} y
     * @param {number} w
     * @param {number} h
     */
    paintImage(c: mxAbstractCanvas2D, x: number, y: number, w: number, h: number): void;

    /**
     * Generic background painting implementation.
     * @param {number} x
     * @param {number} y
     * @param {number} w
     * @param {number} h
     */
    getImageBounds(x: number, y: number, w: number, h: number): mxRectangle;

    /**
     * Generic background painting implementation.
     * @param {mxAbstractCanvas2D} c
     * @param {number} x
     * @param {number} y
     * @param {number} w
     * @param {number} h
     */
    paintIndicator(c: mxAbstractCanvas2D, x: number, y: number, w: number, h: number): void;

    /**
     * Generic background painting implementation.
     * @param {number} x
     * @param {number} y
     * @param {number} w
     * @param {number} h
     * @returns {mxRectangle}
     */
    getIndicatorBounds(x: number, y: number, w: number, h: number): mxRectangle;

    /**
     * Generic background painting implementation.
     */
    redrawHtmlShape(): void;
  }
}
