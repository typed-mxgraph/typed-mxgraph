declare module 'mxgraph' {
  /**
   * Extends {@link mxActor} to implement a cloud shape.
   *
   * This shape is registered under {@link mxConstants.SHAPE_CLOUD} in {@link mxCellRenderer}.
   */
  class mxCloud extends mxActor {
    /**
     * Constructs a new actor shape.
     *
     * @param bounds         {@link mxRectangle} that defines the bounds. This is stored in {@link mxShape.bounds}.
     * @param fill           String that defines the fill color. This is stored in {@link mxShape.fill}.
     * @param stroke         String that defines the stroke color. This is stored in {@link mxShape.stroke}.
     * @param strokewidth    Optional integer that defines the stroke width. Default is 1. This is stored in {@link mxShape.strokewidth}.
     */
    constructor(bounds: mxRectangle, fill: string, stroke: string, strokewidth?: number);

    /**
     * Draws the path for this shape.
     */
    redrawPath(c: mxAbstractCanvas2D, x: number, y: number, w: number, h: number): void;
  }
}
