declare module 'mxgraph' {
  /**
   * Extends {@link mxShape} to implement a rhombus (aka diamond) shape.
   * This shape is registered under {@link mxConstants.SHAPE_RHOMBUS} in {@link mxCellRenderer}.
   * @class mxRhombus
   * @extends {mxShape}
   */
  class mxRhombus extends mxShape {
    /**
     * @param {mxRectangle} bounds
     * @param {string} fill
     * @param {string} stroke
     * @param {number} [strokewidth]
     */
    constructor(bounds: mxRectangle, fill: string, stroke: string, strokewidth?: number);

    /**
     * Adds roundable support.
     */
    isRoundable(): boolean;

    /**
     * Generic painting implementation.
     * @param {mxAbstractCanvas2D} c
     * @param {number} x
     * @param {number} y
     * @param {number} w
     * @param {number} h
     */
    paintVertexShape(c: mxAbstractCanvas2D, x: number, y: number, w: number, h: number): void;
  }
}
