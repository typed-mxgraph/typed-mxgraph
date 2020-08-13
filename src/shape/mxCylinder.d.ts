declare module 'mxgraph' {
  /**
   * Extends {@link mxShape} to implement an cylinder shape. If a custom shape with one filled area and an overlay path is
   * needed, then this shape's {@link redrawPath} should be overridden.
   *
   * This shape is registered under {@link mxConstants.SHAPE_CYLINDER} in {@link mxCellRenderer}.
   */
  class mxCylinder extends mxShape {
    /**
     * Constructs a new cylinder shape.
     *
     * @param bounds         {@link mxRectangle} that defines the bounds. This is stored in {@link mxShape.bounds}.
     * @param fill           String that defines the fill color. This is stored in {@link mxShape.fill}.
     * @param stroke         String that defines the stroke color. This is stored in {@link mxShape.stroke}.
     * @param strokewidth    Optional integer that defines the stroke width. Default is 1. This is stored in {@link mxShape.strokewidth}.
     */
    constructor(bounds: mxRectangle, fill: string, stroke: string, strokewidth?: number);

    /**
     * Defines the maximum height of the top and bottom part of the cylinder shape.
     */
    maxHeight: number;

    /**
     * Sets stroke tolerance to 0 for SVG.
     */
    svgStrokeTolerance: number;

    /**
     * Redirects to redrawPath for subclasses to work.
     */
    paintVertexShape(c: mxAbstractCanvas2D, x: number, y: number, w: number, h: number): void;

    getCylinderSize(x: number, y: number, w: number, h: number): number;

    /**
     * Draws the path for this shape.
     */
    redrawPath(c: mxAbstractCanvas2D, x: number, y: number, w: number, h: number, isForeground: boolean): void;
  }
}
