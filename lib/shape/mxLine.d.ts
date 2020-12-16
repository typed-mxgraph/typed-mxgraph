declare module 'mxgraph' {
  /**
   * Extends {@link mxShape} to implement a horizontal line shape.
   * This shape is registered under {@link mxConstants.SHAPE_LINE} in {@link mxCellRenderer}.
   * @class mxLine
   * @extends {mxShape}
   */
  class mxLine extends mxShape {
    /**
     * Constructs a new line shape.
     * @param {mxRectangle} bounds    {@link mxRectangle} that defines the bounds.  This is stored in {@link mxShape.bounds}.
     * @param {string} stroke         String that defines the stroke color.  Default is ‘black’.  This is stored in <stroke>.
     * @param {number} strokewidth    Optional integer that defines the stroke width.  Default is 1.  This is stored in <strokewidth>.
     */
    constructor(bounds: mxRectangle, stroke: string, strokewidth: number);

    /**
     * Redirects to redrawPath for subclasses to work.
     * @param {mxAbstractCanvas2D} c
     * @param {number} x
     * @param {number} y
     * @param {number} w
     * @param {number} h
     */
    paintVertexShape(c: mxAbstractCanvas2D, x: number, y: number, w: number, h: number): void;
  }
}
