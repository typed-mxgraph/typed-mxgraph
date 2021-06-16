declare module 'mxgraph' {
  /**
   * Extends {@link mxShape} to implement a connector shape.
   * The connector shape allows for arrow heads on either side.
   * This shape is registered under {@link mxConstants.SHAPE_CONNECTOR} in {@link mxCellRenderer}.
   *
   * @class mxConnector
   * @extends {mxPolyline}
   */
  class mxConnector extends mxPolyline {
    /**
     * Constructs a new connector shape.
     *
     * @param {mxPoint[]} points - Array of {@link mxPoints} that define the points.  This is stored in {@link mxShape.points}.
     * @param {string} stroke - String that defines the stroke color.  This is stored in <stroke>.  Default is ‘black’.
     * @param {number} [strokewidth] - Optional integer that defines the stroke width.  Default is 1.  This is stored in <strokewidth>.
     */
    constructor(points: mxPoint[], stroke: string, strokewidth?: number);

    /**
     * Updates the <boundingBox> for this shape using <createBoundingBox>
     * and augmentBoundingBox and stores the result in <boundingBox>.
     */
    updateBoundingBox(): void;

    /**
     * Paints the line shape.
     */
    paintEdgeShape(c: mxAbstractCanvas2D, pts: mxPoint[]): void;

    /**
     * Prepares the marker by adding offsets in pts and returning a function to paint the marker.
     */
    createMarker(c: mxAbstractCanvas2D, pts: mxPoint[], source: boolean): () => void;

    /**
     * Augments the bounding box with the strokewidth and shadow offsets.
     */
    augmentBoundingBox(bbox: mxRectangle): void;
  }
}
