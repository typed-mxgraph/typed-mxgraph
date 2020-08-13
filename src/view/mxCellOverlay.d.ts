declare module 'mxgraph' {
  class mxCellOverlay extends mxEventSource {
    constructor(
      image: mxImage,
      tooltip: string,
      align?: string,
      verticalAlign?: string,
      offset?: mxPoint,
      cursor?: string
    );

    /**
     * Variable: image
     *
     * Holds the <mxImage> to be used as the icon.
     */
    image: mxImage;

    /**
     * Variable: tooltip
     *
     * Holds the optional string to be used as the tooltip.
     */
    tooltip?: string;

    /**
     * Variable: align
     *
     * Holds the horizontal alignment for the overlay. Default is
     * <mxConstants.ALIGN_RIGHT>. For edges, the overlay always appears in the
     * center of the edge.
     */
    align: string;

    /**
     * Variable: verticalAlign
     *
     * Holds the vertical alignment for the overlay. Default is
     * <mxConstants.ALIGN_BOTTOM>. For edges, the overlay always appears in the
     * center of the edge.
     */
    verticalAlign: string;

    /**
     * Variable: offset
     *
     * Holds the offset as an <mxPoint>. The offset will be scaled according to the
     * current scale.
     */
    offset: mxPoint;

    /**
     * Variable: cursor
     *
     * Holds the cursor for the overlay. Default is 'help'.
     */
    cursor: string;

    /**
     * Variable: defaultOverlap
     *
     * Defines the overlapping for the overlay, that is, the proportional distance
     * from the origin to the point defined by the alignment. Default is 0.5.
     */
    defaultOverlap: number;

    /**
     * Function: getBounds
     *
     * Returns the bounds of the overlay for the given <mxCellState> as an
     * <mxRectangle>. This should be overridden when using multiple overlays
     * per cell so that the overlays do not overlap.
     *
     * The following example will place the overlay along an edge (where
     * x=[-1..1] from the start to the end of the edge and y is the
     * orthogonal offset in px).
     *
     * (code)
     * overlay.getBounds = function(state)
     * {
     *   var bounds = getBounds.apply(this, arguments);
     *
     *   if (state.view.graph.getModel().isEdge(state.cell))
     *   {
     *     var pt = state.view.getPoint(state, {x: 0, y: 0, relative: true});
     *
     *     bounds.x = pt.x - bounds.width / 2;
     *     bounds.y = pt.y - bounds.height / 2;
     *   }
     *
     *   return bounds;
     * };
     * (end)
     *
     * Parameters:
     *
     * state - <mxCellState> that represents the current state of the
     * associated cell.
     */
    getBounds(state: mxCellState): mxRectangle;

    /**
     * Function: toString
     *
     * Returns the textual representation of the overlay to be used as the
     * tooltip. This implementation returns <tooltip>.
     */
    toString(): string;
  }
}
