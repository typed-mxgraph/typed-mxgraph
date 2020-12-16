declare module 'mxgraph' {
  /**
   * Extends {@link mxShape} to implement a swimlane shape.
   * This shape is registered under {@link mxConstants.SHAPE_SWIMLANE} in {@link mxCellRenderer}.
   * Use the {@link mxConstants.STYLE_STYLE_STARTSIZE} to define the size of the title
   * region, {@link mxConstants.STYLE_SWIMLANE_FILLCOLOR} for the content area fill,
   * {@link mxConstants.STYLE_SEPARATORCOLOR} to draw an additional vertical separator and
   * {@link mxConstants.STYLE_SWIMLANE_LINE} to hide the line between the title region and
   * the content area.
   * The {@link mxConstants.STYLE_HORIZONTAL} affects the orientation of this shape,
   * not only its label.
   *
   * @class mxSwimlane
   * @extends {mxShape}
   */
  class mxSwimlane extends mxShape {
    /**
     * Constructs a new swimlane shape.
     * @param {mxRectangle} bounds      {@link mxRectangle} that defines the bounds.  This is stored in mxShape.bounds.
     * @param {string} fill             String that defines the fill color.  This is stored in <fill>.
     * @param {string} stroke           String that defines the stroke color.  This is stored in <stroke>.
     * @param {number} [strokewidth]    Optional integer that defines the stroke width.  Default is 1.  This is stored in <strokewidth>.
     */
    constructor(bounds: mxRectangle, fill: string, stroke: string, strokewidth?: number);

    /**
     *
     * Default imagewidth and imageheight if an image but no imagewidth
     * and imageheight are defined in the style. Value is 16.
     * @type {number}
     * @default 16
     */
    imageSize: number;

    /**
     * Adds roundable support.
     * @param {mxAbstractCanvas2D} c
     * @param {number} x
     * @param {number} y
     * @param {number} w
     * @param {number} h
     * @returns {boolean}
     */
    isRoundable(): boolean;
    isRoundable(c?: mxAbstractCanvas2D, x?: number, y?: number, w?: number, h?: number): boolean;

    /**
     * Returns the bounding box for the gradient box for this shape.
     */
    getTitleSize(): number;

    /**
     * Returns the bounding box for the gradient box for this shape.
     */
    getLabelBounds(rect: mxRectangle): mxRectangle;

    /**
     * Returns the bounding box for the gradient box for this shape.
     */
    getGradientBounds(c: mxAbstractCanvas2D, x: number, y: number, w: number, h: number): mxRectangle;

    /**
     * Returns the arcsize for the swimlane.
     */
    // TODO 'start' marked optional otherwise, as super method does not have this argument, a TSC error occurs
    // in mxgraph@4.2.0, this method has been renamed into 'getSwimlaneArcSize'
    getArcSize(w: number, h: number, start?: number): number;

    /**
     * Paints the swimlane vertex shape.
     */
    isHorizontal(): boolean;

    /**
     * Paints the swimlane vertex shape.
     */
    paintVertexShape(c: mxAbstractCanvas2D, x: number, y: number, w: number, h: number): void;

    /**
     * Paints the swimlane vertex shape.
     */
    paintSwimlane(
      c: mxAbstractCanvas2D,
      x: number,
      y: number,
      w: number,
      h: number,
      start: number,
      fill: string,
      swimlaneLine: boolean
    ): void;

    /**
     * Paints the swimlane vertex shape.
     */
    paintRoundedSwimlane(
      c: mxAbstractCanvas2D,
      x: number,
      y: number,
      w: number,
      h: number,
      start: number,
      r: number,
      fill: string,
      swimlaneLine: boolean
    ): void;

    /**
     * Paints the divider between swimlane title and content area.
     */
    paintDivider(
      c: mxAbstractCanvas2D,
      x: number,
      y: number,
      w: number,
      h: number,
      start: number,
      shadow: boolean
    ): void;

    /**
     * Paints the vertical or horizontal separator line between swimlanes.
     */
    paintSeparator(
      c: mxAbstractCanvas2D,
      x: number,
      y: number,
      w: number,
      h: number,
      start: number,
      color: string
    ): void;

    /**
     * Paints the swimlane vertex shape.
     */
    getImageBounds(x: number, y: number, w: number, h: number): mxRectangle;
  }
}
