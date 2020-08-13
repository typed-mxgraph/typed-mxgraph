declare module 'mxgraph' {
  /**
   * Extends {@link mxShape} to implement an new rounded arrow shape with support for waypoints and double arrows. The
   * shape is used to represent edges, not vertices.
   *
   * This shape is registered under {@link mxConstants.SHAPE_ARROW_CONNECTOR} in {@link mxCellRenderer}.
   */
  class mxArrowConnector extends mxShape {
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
      strokewidth: number,
      arrowWidth?: number,
      spacing?: number,
      endSize?: number
    );

    /**
     * Allows to use the SVG bounding box in SVG.
     * @defaultValue `false` for performance reasons.
     */
    useSvgBoundingBox: boolean;

    /**
     * Overrides mxShape to reset spacing.
     */
    resetStyles(): void;

    /**
     * Overrides apply to get smooth transition from default start- and endsize.
     */
    apply(state: mxCellState): void;

    /**
     * Augments the bounding box with the edge width and markers.
     */
    augmentBoundingBox(bbox: mxRectangle): void;

    /**
     * Paints the line shape.
     */
    paintEdgeShape(c: mxAbstractCanvas2D, pts: mxPoint[]): void;

    paintMarker(
      c: mxAbstractCanvas2D,
      ptX: number,
      ptY: number,
      nx: number,
      ny: number,
      size: number,
      arrowWidth: number,
      edgeWidth: number,
      spacing: number,
      initialMove: boolean
    ): void;

    /**
     * @returns whether the arrow is rounded
     */
    isArrowRounded(): boolean;

    /**
     * @returns the width of the start arrow
     */
    getStartArrowWidth(): number;

    /**
     * @returns the width of the end arrow
     */
    getEndArrowWidth(): number;

    /**
     * @returns the width of the body of the edge
     */
    getEdgeWidth(): number;

    /**
     * @returns whether the ends of the shape are drawn
     */
    isOpenEnded(): boolean;

    /**
     * @returns whether the start marker is drawn
     */
    isMarkerStart(): boolean;

    /**
     * @returns whether the end marker is drawn
     */
    isMarkerEnd(): boolean;
  }
}
