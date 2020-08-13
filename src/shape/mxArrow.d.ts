declare module 'mxgraph' {
  /**
   * Extends {@link mxShape} to implement an arrow shape. The shape is used to represent edges, not vertices.
   *
   * This shape is registered under {@link mxConstants.SHAPE_ARROW} in {@link mxCellRenderer}.
   */
  class mxArrow extends mxShape {
    /**
     * Constructs a new arrow shape.
     *
     * @param points         Array of {@link mxPoint} that define the points. This is stored in {@link mxShape.points}.
     * @param fill           String that defines the fill color. This is stored in {@link mxShape.fill}.
     * @param stroke         String that defines the stroke color. This is stored in {@link mxShape.stroke}.
     * @param strokewidth    Optional integer that defines the stroke width. Default is 1. This is stored in {@link mxShape.strokewidth}.
     * @param arrowWidth     Optional integer that defines the arrow width. Default is {@link mxConstants.ARROW_WIDTH}. This is stored in {@link mxShape.arrowWidth}.
     * @param spacing        Optional integer that defines the spacing between the arrow shape and its endpoints. Default is {@link mxConstants.ARROW_SPACING}. This is stored in {@link mxShape.spacing}.
     * @param endSize        Optional integer that defines the size of the arrowhead. Default is {@link mxConstants.ARROW_SIZE}. This is stored in {@link mxShape.endSize}.
     */
    constructor(
      points: mxPoint[],
      fill: string,
      stroke: string,
      strokewidth?: number,
      arrowWidth?: number,
      spacing?: number,
      endSize?: number
    );

    /**
     * Augments the bounding box with the edge width and markers.
     */
    augmentBoundingBox(bbox: mxRectangle): void;

    /**
     * Paints the line shape.
     */
    paintEdgeShape(c: mxAbstractCanvas2D, pts: mxPoint[]): void;
  }
}
