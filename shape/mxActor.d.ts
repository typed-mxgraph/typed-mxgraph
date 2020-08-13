declare module 'mxgraph' {
  /**
   * Extends {@link mxShape} to implement an actor shape. If a custom shape with one
   * filled area is needed, then this shape's {@link redrawPath} method should be overridden.
   *
   * This shape is registered under {@link mxConstants.SHAPE_ACTOR} in {@link mxCellRenderer}.
   *
   * @example
   * ```javascript
   * function SampleShape() { }
   *
   * SampleShape.prototype = new mxActor();
   * SampleShape.prototype.constructor = vsAseShape;
   *
   * mxCellRenderer.registerShape('sample', SampleShape);
   * SampleShape.prototype.redrawPath = function(path, x, y, w, h)
   * {
   *   path.moveTo(0, 0);
   *   path.lineTo(w, h);
   *   // ...
   *   path.close();
   * }
   * ```
   */
  class mxActor extends mxShape {
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
     * Redirects to redrawPath for subclasses to work.
     */
    paintVertexShape(c: mxAbstractCanvas2D, x: number, y: number, w: number, h: number): void;

    /**
     * Draws the path for this shape.
     */
    redrawPath(c: mxAbstractCanvas2D, x: number, y: number, w: number, h: number): void;
  }
}
