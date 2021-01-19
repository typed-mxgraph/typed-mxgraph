declare module 'mxgraph' {
  class mxPolyline extends mxShape {
    /**
     * Constructs a new polyline shape.
     * @param {Array<mxPoint>} points   Array of mxPoints that define the points.  This is stored in mxShape.points.
     * @param {string} stroke           String that defines the stroke color.  Default is ‘black’.  This is stored in <stroke>.
     * @param {number} [strokewidth]    Optional integer that defines the stroke width.  Default is 1.  This is stored in <strokewidth>.
     */
    constructor(points: Array<mxPoint>, stroke: string, strokewidth?: number);

    /**
     * Returns 0.
     */
    getRotation(): number;

    /**
     * Returns 0.
     */
    getShapeRotation(): number;

    /**
     * Returns false.
     */
    isPaintBoundsInverted(): boolean;

    /**
     * Paints the line shape.
     */
    paintEdgeShape(c: mxAbstractCanvas2D, pts: Array<mxPoint>): void;

    /**
     * Paints the line shape.
     */
    paintLine(c: mxAbstractCanvas2D, pts: Array<mxPoint>, rounded?: boolean): void;

    /**
     * Paints the line shape.
     */
    paintCurvedLine(c: mxAbstractCanvas2D, pts: Array<mxPoint>): void;
  }
}
