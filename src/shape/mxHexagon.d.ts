declare module 'mxgraph' {
  /**
   * Implementation of the hexagon shape.
   * @class mxHexagon
   * @extends {mxActor}
   */
  class mxHexagon extends mxActor {
    /**
     * Constructs a new hexagon shape.
     */
    constructor();

    /**
     * Draws the path for this shape.
     * @param {mxAbstractCanvas2D} c
     * @param {number} x
     * @param {number} y
     * @param {number} w
     * @param {number} h
     */
    redrawPath(c: mxAbstractCanvas2D, x: number, y: number, w: number, h: number): void;
  }
}
