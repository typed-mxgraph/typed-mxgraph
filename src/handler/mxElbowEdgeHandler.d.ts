declare module 'mxgraph' {
  export class mxElbowEdgeHandler extends mxEdgeHandler {
    constructor(state: mxCellState);

    /**
     * Specifies if a double click on the middle handle should call
     * <mxGraph.flipEdge>. Default is true.
     */
    flipEnabled: boolean;

    /**
     * Variable: doubleClickOrientationResource
     *
     * Specifies the resource key for the tooltip to be displayed on the single
     * control point for routed edges. If the resource for this key does not
     * exist then the value is used as the error message. Default is
     * 'doubleClickOrientation'.
     */
    doubleClickOrientationResource: string;

    /**
     * Function: createBends
     *
     * Overrides <mxEdgeHandler.createBends> to create custom bends.
     */
    // createBends(): mxShape[];

    /**
     * Function: createVirtualBend
     *
     * Creates a virtual bend that supports double clicking and calls
     * <mxGraph.flipEdge>.
     */
    createVirtualBend(dblClickHandler: (evt: Event) => void): mxRectangleShape;

    /**
     * Function: getCursorForBend
     *
     * Returns the cursor to be used for the bend.
     */
    getCursorForBend(): string;

    /**
     * Function: getTooltipForNode
     *
     * Returns the tooltip for the given node.
     */
    getTooltipForNode(node: Element): string;

    /**
     * Function: convertPoint
     *
     * Converts the given point in-place from screen to unscaled, untranslated
     * graph coordinates and applies the grid.
     *
     * Parameters:
     *
     * point - <mxPoint> to be converted.
     * gridEnabled - Boolean that specifies if the grid should be applied.
     */
    convertPoint(point: mxPoint, gridEnabled: boolean): mxPoint;

    /**
     * Function: redrawInnerBends
     *
     * Updates and redraws the inner bends.
     *
     * Parameters:
     *
     * p0 - <mxPoint> that represents the location of the first point.
     * pe - <mxPoint> that represents the location of the last point.
     */
    redrawInnerBends(p0: mxPoint, pe: mxPoint): void;
  }
}
