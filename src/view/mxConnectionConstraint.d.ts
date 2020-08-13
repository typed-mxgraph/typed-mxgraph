declare module 'mxgraph' {
  /**
   * Defines an object that contains the constraints about how to connect one side of an edge to its terminal.
   * @class mxConnectionConstraint
   */
  class mxConnectionConstraint {
    /**
     * Constructs a new connection constraint for the given point and boolean arguments.
     * @param point       Optional mxPoint that specifies the fixed location of the point in relative coordinates.  Default is null.
     * @param perimeter   Optional boolean that specifies if the fixed point should be projected onto the perimeter of the terminal.  Default is true.
     * @param name
     * @param dx
     * @param dy
     */
    constructor(point?: mxPoint, perimeter?: boolean, name?: string, dx?: number, dy?: number);

    /**
     * Variable: point
     *
     * <mxPoint> that specifies the fixed location of the connection point.
     */
    point: mxPoint;

    /**
     * Variable: perimeter
     *
     * Boolean that specifies if the point should be projected onto the perimeter
     * of the terminal.
     */
    perimeter: boolean;

    /**
     * Variable: name
     *
     * Optional string that specifies the name of the constraint.
     */
    name: string;
  }
}
