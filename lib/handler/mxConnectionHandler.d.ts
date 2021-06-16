declare module 'mxgraph' {
  export class mxConnectionHandler extends mxEventSource {
    sourceConstraint: mxConnectionConstraint;

    constructor(graph: mxGraph, factoryMethod?: (source: mxCell, target: mxCell, style?: string) => mxCell);

    /**
     * Variable: graph
     *
     * Reference to the enclosing <mxGraph>.
     */
    graph: mxGraph;

    /**
     * Variable: factoryMethod
     *
     * Function that is used for creating new edges. The function takes the
     * source and target <mxCell> as the first and second argument and returns
     * a new <mxCell> that represents the edge. This is used in <createEdge>.
     */
    factoryMethod: (source: mxCell, target: mxCell, style?: string) => mxCell;

    /**
     * Variable: moveIconFront
     *
     * Specifies if icons should be displayed inside the graph container instead
     * of the overlay pane. This is used for HTML labels on vertices which hide
     * the connect icon. This has precendence over <moveIconBack> when set
     * to true. Default is false.
     */
    moveIconFront: boolean;

    /**
     * Variable: moveIconBack
     *
     * Specifies if icons should be moved to the back of the overlay pane. This can
     * be set to true if the icons of the connection handler conflict with other
     * handles, such as the vertex label move handle. Default is false.
     */
    moveIconBack: boolean;

    /**
     * Variable: connectImage
     *
     * <mxImage> that is used to trigger the creation of a new connection. This
     * is used in <createIcons>. Default is null.
     */
    connectImage: mxImage;

    /**
     * Variable: targetConnectImage
     *
     * Specifies if the connect icon should be centered on the target state
     * while connections are being previewed. Default is false.
     */
    targetConnectImage: boolean;

    /**
     * Variable: enabled
     *
     * Specifies if events are handled. Default is true.
     */
    enabled: boolean;

    /**
     * Variable: select
     *
     * Specifies if new edges should be selected. Default is true.
     */
    select: boolean;

    /**
     * Variable: createTarget
     *
     * Specifies if <createTargetVertex> should be called if no target was under the
     * mouse for the new connection. Setting this to true means the connection
     * will be drawn as valid if no target is under the mouse, and
     * <createTargetVertex> will be called before the connection is created between
     * the source cell and the newly created vertex in <createTargetVertex>, which
     * can be overridden to create a new target. Default is false.
     */
    createTarget: boolean;

    /**
     * Variable: marker
     *
     * Holds the <mxTerminalMarker> used for finding source and target cells.
     */
    marker: any;

    /**
     * Variable: constraintHandler
     *
     * Holds the <mxConstraintHandler> used for drawing and highlighting
     * constraints.
     */
    constraintHandler: mxConstraintHandler;

    /**
     * Variable: error
     *
     * Holds the current validation error while connections are being created.
     */
    error: any;

    /**
     * Variable: waypointsEnabled
     *
     * Specifies if single clicks should add waypoints on the new edge. Default is
     * false.
     */
    waypointsEnabled: boolean;

    /**
     * Variable: ignoreMouseDown
     *
     * Specifies if the connection handler should ignore the state of the mouse
     * button when highlighting the source. Default is false, that is, the
     * handler only highlights the source if no button is being pressed.
     */
    ignoreMouseDown: boolean;

    /**
     * Variable: first
     *
     * Holds the <mxPoint> where the mouseDown took place while the handler is
     * active.
     */
    first: mxPoint;

    /**
     * Variable: connectIconOffset
     *
     * Holds the offset for connect icons during connection preview.
     * Default is mxPoint(0, <mxConstants.TOOLTIP_VERTICAL_OFFSET>).
     * Note that placing the icon under the mouse pointer with an
     * offset of (0,0) will affect hit detection.
     */
    connectIconOffset: mxPoint;

    /**
     * Variable: edgeState
     *
     * Optional <mxCellState> that represents the preview edge while the
     * handler is active. This is created in <createEdgeState>.
     */
    edgeState: mxCellState;

    /**
     * Variable: changeHandler
     *
     * Holds the change event listener for later removal.
     */
    changeHandler: any;

    /**
     * Variable: drillHandler
     *
     * Holds the drill event listener for later removal.
     */
    drillHandler: any;

    /**
     * Variable: mouseDownCounter
     *
     * Counts the number of mouseDown events since the start. The initial mouse
     * down event counts as 1.
     */
    mouseDownCounter: number;

    /**
     * Variable: movePreviewAway
     *
     * Switch to enable moving the preview away from the mousepointer. This is required in browsers
     * where the preview cannot be made transparent to events and if the built-in hit detection on
     * the HTML elements in the page should be used. Default is the value of <mxClient.IS_VML>.
     */
    movePreviewAway: boolean;

    /**
     * Variable: outlineConnect
     *
     * Specifies if connections to the outline of a highlighted target should be
     * enabled. This will allow to place the connection point along the outline of
     * the highlighted target. Default is false.
     */
    outlineConnect: boolean;

    /**
     * Variable: livePreview
     *
     * Specifies if the actual shape of the edge state should be used for the preview.
     * Default is false. (Ignored if no edge state is created in <createEdgeState>.)
     */
    livePreview: boolean;

    /**
     * Variable: cursor
     *
     * Specifies the cursor to be used while the handler is active. Default is null.
     */
    cursor: string;

    /**
     * Variable: insertBeforeSource
     *
     * Specifies if new edges should be inserted before the source vertex in the
     * cell hierarchy. Default is false for backwards compatibility.
     */
    insertBeforeSource: boolean;

    /**
     * Function: isEnabled
     *
     * Returns true if events are handled. This implementation
     * returns <enabled>.
     */
    isEnabled(): boolean;

    /**
     * Function: setEnabled
     *
     * Enables or disables event handling. This implementation
     * updates <enabled>.
     *
     * Parameters:
     *
     * enabled - Boolean that specifies the new enabled state.
     */
    setEnabled(enabled: boolean): void;

    /**
     * Function: isInsertBefore
     *
     * Returns <insertBeforeSource> for non-loops and false for loops.
     *
     * Parameters:
     *
     * edge - <mxCell> that represents the edge to be inserted.
     * source - <mxCell> that represents the source terminal.
     * target - <mxCell> that represents the target terminal.
     * evt - Mousedown event of the connect gesture.
     * dropTarget - <mxCell> that represents the cell under the mouse when it was
     * released.
     */
    isInsertBefore(edge: mxCell, source: mxCell, target: mxCell, evt: MouseEvent, dropTarget: mxCell): boolean;

    /**
     * Function: isCreateTarget
     *
     * Returns <createTarget>.
     *
     * Parameters:
     *
     * evt - Current active native pointer event.
     */
    isCreateTarget(evt: Event): boolean;

    /**
     * Function: setCreateTarget
     *
     * Sets <createTarget>.
     */
    setCreateTarget(value: boolean): void;

    /**
     * Function: createShape
     *
     * Creates the preview shape for new connections.
     */
    createShape(): mxShape;

    /**
     * Function: init
     *
     * Initializes the shapes required for this connection handler. This should
     * be invoked if <mxGraph.container> is assigned after the connection
     * handler has been created.
     */
    init(): void;

    /**
     * Function: isConnectableCell
     *
     * Returns true if the given cell is connectable. This is a hook to
     * disable floating connections. This implementation returns true.
     */
    isConnectableCell(cell: mxCell): boolean;

    /**
     * Function: createMarker
     *
     * Creates and returns the <mxCellMarker> used in <marker>.
     */
    createMarker(): mxCellMarker;

    /**
     * Function: start
     *
     * Starts a new connection for the given state and coordinates.
     */
    start(state: mxCellState, x: number, y: number, edgeState?: mxCellState): void;

    /**
     * Function: isConnecting
     *
     * Returns true if the source terminal has been clicked and a new
     * connection is currently being previewed.
     */
    isConnecting(): boolean;

    /**
     * Function: isValidSource
     *
     * Returns <mxGraph.isValidSource> for the given source terminal.
     *
     * Parameters:
     *
     * cell - <mxCell> that represents the source terminal.
     * me - <mxMouseEvent> that is associated with this call.
     */
    isValidSource(cell: mxCell, me: mxMouseEvent): boolean;

    /**
     * Function: isValidTarget
     *
     * Returns true. The call to <mxGraph.isValidTarget> is implicit by calling
     * <mxGraph.getEdgeValidationError> in <validateConnection>. This is an
     * additional hook for disabling certain targets in this specific handler.
     *
     * Parameters:
     *
     * cell - <mxCell> that represents the target terminal.
     */
    isValidTarget(cell: mxCell): boolean;

    /**
     * Function: validateConnection
     *
     * Returns the error message or an empty string if the connection for the
     * given source target pair is not valid. Otherwise it returns null. This
     * implementation uses <mxGraph.getEdgeValidationError>.
     *
     * Parameters:
     *
     * source - <mxCell> that represents the source terminal.
     * target - <mxCell> that represents the target terminal.
     */
    validateConnection(source: mxCell, target: mxCell): string;

    /**
     * Function: getConnectImage
     *
     * Hook to return the <mxImage> used for the connection icon of the given
     * <mxCellState>. This implementation returns <connectImage>.
     *
     * Parameters:
     *
     * state - <mxCellState> whose connect image should be returned.
     */
    getConnectImage(state: mxCellState): mxImage;

    /**
     * Function: isMoveIconToFrontForState
     *
     * Returns true if the state has a HTML label in the graph's container, otherwise
     * it returns <moveIconFront>.
     *
     * Parameters:
     *
     * state - <mxCellState> whose connect icons should be returned.
     */
    isMoveIconToFrontForState(state: mxCellState): boolean;

    /**
     * Function: createIcons
     *
     * Creates the array <mxImageShapes> that represent the connect icons for
     * the given <mxCellState>.
     *
     * Parameters:
     *
     * state - <mxCellState> whose connect icons should be returned.
     */
    createIcons(state: mxCellState): mxImageShape[];

    /**
     * Function: redrawIcons
     *
     * Redraws the given array of <mxImageShapes>.
     *
     * Parameters:
     *
     * icons - Optional array of <mxImageShapes> to be redrawn.
     */
    redrawIcons(icons?: mxImageShape[], state?: mxCellState): void;

    /**
     * Function: redrawIcons
     *
     * Redraws the given array of <mxImageShapes>.
     *
     * Parameters:
     *
     * icons - Optional array of <mxImageShapes> to be redrawn.
     */
    getIconPosition(icon?: mxImageShape[], state?: mxCellState): mxPoint;

    /**
     * Function: destroyIcons
     *
     * Destroys the connect icons and resets the respective state.
     */
    destroyIcons(): void;

    /**
     * Function: isStartEvent
     *
     * Returns true if the given mouse down event should start this handler. The
     * This implementation returns true if the event does not force marquee
     * selection, and the currentConstraint and currentFocus of the
     * <constraintHandler> are not null, or <previous> and <error> are not null and
     * <icons> is null or <icons> and <icon> are not null.
     */
    isStartEvent(me: mxMouseEvent): boolean;

    /**
     * Function: mouseDown
     *
     * Handles the event by initiating a new connection.
     */
    mouseDown(sender: Event, me: mxMouseEvent): void;

    /**
     * Function: isImmediateConnectSource
     *
     * Returns true if a tap on the given source state should immediately start
     * connecting. This implementation returns true if the state is not movable
     * in the graph.
     */
    isImmediateConnectSource(state: mxCellState): boolean;

    /**
     * Function: createEdgeState
     *
     * Hook to return an <mxCellState> which may be used during the preview.
     * This implementation returns null.
     *
     * Use the following code to create a preview for an existing edge style:
     *
     * (code)
     * graph.connectionHandler.createEdgeState(me)
     * {
     *   var edge = graph.createEdge(null, null, null, null, null, 'edgeStyle=elbowEdgeStyle');
     *
     *   return new mxCellState(this.graph.view, edge, this.graph.getCellStyle(edge));
     * };
     * (end)
     */
    createEdgeState(me: mxMouseEvent): mxCellState;

    /**
     * Function: isOutlineConnectEvent
     *
     * Returns true if <outlineConnect> is true and the source of the event is the outline shape
     * or shift is pressed.
     */
    isOutlineConnectEvent(me: mxMouseEvent): boolean;

    /**
     * Function: updateCurrentState
     *
     * Updates the current state for a given mouse move event by using
     * the <marker>.
     */
    updateCurrentState(me: mxMouseEvent, point: mxPoint): void;

    /**
     * Function: isCellEnabled
     *
     * Returns true if the given cell does not allow new connections to be created.
     */
    isCellEnabled(cell: mxCell): boolean;

    /**
     * Function: convertWaypoint
     *
     * Converts the given point from screen coordinates to model coordinates.
     */
    convertWaypoint(point: mxPoint): void;

    /**
     * Function: snapToPreview
     *
     * Called to snap the given point to the current preview. This snaps to the
     * first point of the preview if alt is not pressed.
     */
    snapToPreview(me: mxMouseEvent, point: mxPoint): void;

    /**
     * Function: mouseMove
     *
     * Handles the event by updating the preview edge or by highlighting
     * a possible source or target terminal.
     */
    mouseMove(sender: mxMouseEvent, me: mxMouseEvent): void;

    /**
     * Function: updateEdgeState
     *
     * Updates <edgeState>.
     */
    updateEdgeState(current: mxCellState, constraint: mxCellState): void;

    /**
     * Function: getTargetPerimeterPoint
     *
     * Returns the perimeter point for the given target state.
     *
     * Parameters:
     *
     * state - <mxCellState> that represents the target cell state.
     * me - <mxMouseEvent> that represents the mouse move.
     */
    getTargetPerimeterPoint(state: mxCellState, me: mxMouseEvent): mxPoint;

    /**
     * Function: getSourcePerimeterPoint
     *
     * Hook to update the icon position(s) based on a mouseOver event. This is
     * an empty implementation.
     *
     * Parameters:
     *
     * state - <mxCellState> that represents the target cell state.
     * next - <mxPoint> that represents the next point along the previewed edge.
     * me - <mxMouseEvent> that represents the mouse move.
     */
    getSourcePerimeterPoint(state: mxCellState, next: mxPoint, me: mxMouseEvent): mxPoint;

    /**
     * Function: updateIcons
     *
     * Hook to update the icon position(s) based on a mouseOver event. This is
     * an empty implementation.
     *
     * Parameters:
     *
     * state - <mxCellState> under the mouse.
     * icons - Array of currently displayed icons.
     * me - <mxMouseEvent> that contains the mouse event.
     */
    updateIcons(state: mxCellState, icons: string[], me: mxMouseEvent): void;

    /**
     * Function: isStopEvent
     *
     * Returns true if the given mouse up event should stop this handler. The
     * connection will be created if <error> is null. Note that this is only
     * called if <waypointsEnabled> is true. This implemtation returns true
     * if there is a cell state in the given event.
     */
    isStopEvent(me: mxMouseEvent): void;

    /**
     * Function: addWaypoint
     *
     * Adds the waypoint for the given event to <waypoints>.
     */
    addWaypointForEvent(me: mxMouseEvent): void;

    /**
     * Function: mouseUp
     *
     * Handles the event by inserting the new connection.
     */
    mouseUp(sender: mxMouseEvent, me: mxMouseEvent): void;

    /**
     * Function: reset
     *
     * Resets the state of this handler.
     */
    reset(): void;

    /**
     * Function: drawPreview
     *
     * Redraws the preview edge using the color and width returned by
     * <getEdgeColor> and <getEdgeWidth>.
     */
    drawPreview(): void;

    /**
     * Function: getEdgeColor
     *
     * Returns the color used to draw the preview edge. This returns green if
     * there is no edge validation error and red otherwise.
     *
     * Parameters:
     *
     * valid - Boolean indicating if the color for a valid edge should be
     * returned.
     */
    updatePreview(valid: boolean): void;

    /**
     * Function: getEdgeColor
     *
     * Returns the color used to draw the preview edge. This returns green if
     * there is no edge validation error and red otherwise.
     *
     * Parameters:
     *
     * valid - Boolean indicating if the color for a valid edge should be
     * returned.
     */
    getEdgeColor(valid: boolean): string;

    /**
     * Function: getEdgeWidth
     *
     * Returns the width used to draw the preview edge. This returns 3 if
     * there is no edge validation error and 1 otherwise.
     *
     * Parameters:
     *
     * valid - Boolean indicating if the width for a valid edge should be
     * returned.
     */
    getEdgeWidth(valid: boolean): number;

    /**
     * Function: connect
     *
     * Connects the given source and target using a new edge. This
     * implementation uses <createEdge> to create the edge.
     *
     * Parameters:
     *
     * source - <mxCell> that represents the source terminal.
     * target - <mxCell> that represents the target terminal.
     * evt - Mousedown event of the connect gesture.
     * dropTarget - <mxCell> that represents the cell under the mouse when it was
     * released.
     */
    connect(source: mxCell, target: mxCell, evt: MouseEvent, dropTarget: mxCell): void;

    /**
     * Function: selectCells
     *
     * Selects the given edge after adding a new connection. The target argument
     * contains the target vertex if one has been inserted.
     */
    selectCells(edge: mxCell, target: mxCell): void;

    /**
     * Function: insertEdge
     *
     * Creates, inserts and returns the new edge for the given parameters. This
     * implementation does only use <createEdge> if <factoryMethod> is defined,
     * otherwise <mxGraph.insertEdge> will be used.
     */
    insertEdge(parent: mxCell, id: string, value: any, source: mxCell, target: mxCell, style: string): mxCell;

    /**
     * Function: createTargetVertex
     *
     * Hook method for creating new vertices on the fly if no target was
     * under the mouse. This is only called if <createTarget> is true and
     * returns null.
     *
     * Parameters:
     *
     * evt - Mousedown event of the connect gesture.
     * source - <mxCell> that represents the source terminal.
     */
    createTargetVertex(evt: MouseEvent, source: mxCell): mxCell;

    /**
     * Function: getAlignmentTolerance
     *
     * Returns the tolerance for aligning new targets to sources. This returns the grid size / 2.
     */
    getAlignmentTolerance(evt: MouseEvent): number;

    /**
     * Function: createEdge
     *
     * Creates and returns a new edge using <factoryMethod> if one exists. If
     * no factory method is defined, then a new default edge is returned. The
     * source and target arguments are informal, the actual connection is
     * setup later by the caller of this function.
     *
     * Parameters:
     *
     * value - Value to be used for creating the edge.
     * source - <mxCell> that represents the source terminal.
     * target - <mxCell> that represents the target terminal.
     * style - Optional style from the preview edge.
     */
    createEdge(value?: any, source?: mxCell, target?: mxCell, style?: string): mxCell;

    /**
     * Function: destroy
     *
     * Destroys the handler and all its resources and DOM nodes. This should be
     * called on all instances. It is called automatically for the built-in
     * instance created for each <mxGraph>.
     */
    destroy(): void;
  }
}
