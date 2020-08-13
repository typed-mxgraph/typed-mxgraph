declare module 'mxgraph' {
  /**
   * Implementation of the triangle shape.
   * @class mxTriangle
   * @extends {mxActor}
   */
  class mxTriangle extends mxActor {
    constructor();

    /**
     * Adds roundable support.
     * @returns {boolean}
     */
    isRoundable(): boolean;

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
