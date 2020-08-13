declare module 'mxgraph' {
  /**
   * Handles constraints on connection targets. This class is in charge of
   * showing fixed points when the mouse is over a vertex and handles constraints
   * to establish new connections.
   *
   * @class mxConstraintHandler
   */
  export class mxConstraintHandler {
    /**
     * Constructs an new constraint handler.
     *
     * @param {mxGraph} graph - Reference to the enclosing {@link mxGraph}.
     * @param {(source: mxCell, target: mxCell) => mxCell} [factoryMethod] - Optional function to create the edge.
     * The function takes the source and target {@link mxCell} as the first and second argument and
     * returns the {@link mxCell} that represents the new edge.
     */
    constructor(graph: mxGraph, factoryMethod?: (source: mxCell, target: mxCell) => mxCell);

    /**
     *
     * @type {mxConnectionConstraint}
     */
    currentConstraint: mxConnectionConstraint;

    /**
     *
     *
     * @type {mxRectangle}
     */
    currentFocusArea: mxRectangle;

    /**
     *
     *
     * @type {mxPoint}
     */
    currentPoint: mxPoint;

    /**
     *
     *
     * @type {mxCellState}
     */
    currentFocus: mxCellState;

    /**
     *
     *
     * @type {mxPoint[]}
     */
    focusPoints: mxPoint[];

    /**
     *
     *
     * @type {mxConnectionConstraint[]}
     */
    constraints: mxConnectionConstraint[];

    /**
     * {@link mxImage} to be used as the image for fixed connection points.
     */
    pointImage: mxImage;

    /**
     * Reference to the enclosing {@link mxGraph}.
     */
    graph: mxGraph;

    /**
     * Specifies if events are handled. Default is true.
     */
    enabled: boolean;

    /**
     * Specifies the color for the highlight. Default is {@link mxConstants.DEFAULT_VALID_COLOR}.
     */
    highlightColor: string;

    /**
     * Returns true if events are handled. This implementation
     * returns {@link enabled}.
     */
    isEnabled(): boolean;

    /**
     * Enables or disables event handling. This implementation
     * updates {@link enabled}.
     *
     * Parameters:
     *
     * @param {boolean} enabled - Boolean that specifies the new enabled state.
     */
    setEnabled(enabled: boolean): void;

    /**
     * Resets the state of this handler.
     */
    reset(): void;

    /**
     * Returns the tolerance to be used for intersecting connection points. This
     * implementation returns {@link mxGraph.tolerance}.
     *
     * Parameters:
     *
     * me - {@link mxMouseEvent} whose tolerance should be returned.
     */
    getTolerance(me: mxMouseEvent): number;

    /**
     * Returns the tolerance to be used for intersecting connection points.
     */
    getImageForConstraint(state: mxCellState, constraint: mxConnectionConstraint, point: mxPoint): mxImage;

    /**
     * Returns true if the given {@link mxMouseEvent} should be ignored in {@link update}. This
     * implementation always returns false.
     */
    isEventIgnored(me: mxMouseEvent, source: boolean): boolean;

    /**
     * Returns true if the given state should be ignored. This always returns false.
     */
    isStateIgnored(state: mxCellState, source: boolean): boolean;

    /**
     * Destroys the {@link focusIcons} if they exist.
     */
    destroyIcons(): void;

    /**
     * Destroys the {@link focusHighlight} if one exists.
     */
    destroyFocusHighlight(): void;

    /**
     * Returns true if the current focused state should not be changed for the given event.
     * This returns true if shift and alt are pressed.
     */
    isKeepFocusEvent(me: mxMouseEvent): boolean;

    /**
     * Returns the cell for the given event.
     */
    getCellForEvent(me: mxMouseEvent, point: mxPoint): mxCell;

    /**
     * Updates the state of this handler based on the given {@link mxMouseEvent}.
     * Source is a boolean indicating if the cell is a source or target.
     */
    update(me: mxMouseEvent, source: mxCell, existingEdge: mxCell, point: mxPoint): void;

    /**
     * Transfers the focus to the given state as a source or target terminal. If
     * the handler is not enabled then the outline is painted, but the constraints
     * are ignored.
     */
    redraw(): void;

    /**
     * Transfers the focus to the given state as a source or target terminal. If
     * the handler is not enabled then the outline is painted, but the constraints
     * are ignored.
     */
    setFocus(me: mxMouseEvent, state: mxCellState, source: mxCell): void;

    /**
     * Create the shape used to paint the highlight.
     *
     * Returns true if the given icon intersects the given point.
     */
    createHighlightShape(): mxShape;

    /**
     * Returns true if the given icon intersects the given rectangle.
     */
    intersects(icon: mxShape, mouse: mxRectangle, source: mxCell, existingEdge: mxCell): boolean;

    /**
     * Destroy this handler.
     */
    destroy(): void;
  }
}
