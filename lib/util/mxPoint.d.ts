declare module 'mxgraph' {
  class mxPoint {
    constructor(x?: number, y?: number);

    /**
     * Variable: x
     *
     * Holds the x-coordinate of the point. Default is 0.
     */
    x: number;

    /**
     * Variable: y
     *
     * Holds the y-coordinate of the point. Default is 0.
     */
    y: number;

    /**
     * Function: equals
     *
     * Returns true if the given object equals this point.
     */
    equals(obj: mxPoint): boolean;

    /**
     * Function: clone
     *
     * Returns a clone of this <mxPoint>.
     */
    clone(): mxPoint;
  }
}
