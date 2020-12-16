declare module 'mxgraph' {
  /**
   * @class mxGraphView
   * @extends {mxEventSource}
   *
   * Extends {@link mxEventSource} to implement a view for a graph. This class is in
   * charge of computing the absolute coordinates for the relative child
   * geometries, the points for perimeters and edge styles and keeping them
   * cached in {@link mxCellStates} for faster retrieval. The states are updated
   * whenever the model or the view state (translate, scale) changes. The scale
   * and translate are honoured in the bounds.
   *
   * #### Event: mxEvent.UNDO
   *
   * Fires after the root was changed in {@link setCurrentRoot}. The `edit`
   * property contains the {@link mxUndoableEdit} which contains the
   * {@link mxCurrentRootChange}.
   *
   * #### Event: mxEvent.SCALE_AND_TRANSLATE
   *
   * Fires after the scale and translate have been changed in {@link scaleAndTranslate}.
   * The `scale`, `previousScale`, `translate`
   * and `previousTranslate` properties contain the new and previous
   * scale and translate, respectively.
   *
   * #### Event: mxEvent.SCALE
   *
   * Fires after the scale was changed in {@link setScale}. The `scale` and
   * `previousScale` properties contain the new and previous scale.
   *
   * #### Event: mxEvent.TRANSLATE
   *
   * Fires after the translate was changed in {@link setTranslate}. The
   * `translate` and `previousTranslate` properties contain
   * the new and previous value for translate.
   *
   * #### Event: mxEvent.DOWN and mxEvent.UP
   *
   * Fire if the current root is changed by executing an {@link mxCurrentRootChange}.
   * The event name depends on the location of the root in the cell hierarchy
   * with respect to the current root. The `root` and
   * `previous` properties contain the new and previous root,
   * respectively.
   */
  class mxGraphView extends mxEventSource {
    constructor(graph: mxGraph);

    canvas: SVGSVGElement;

    EMPTY_POINT: mxPoint;

    /**
     * Specifies the resource key for the status message after a long operation.
     * If the resource for this key does not exist then the value is used as
     * the status message. Default is 'done'.
     */
    doneResource: 'done' | '';

    /**
     * Specifies the resource key for the status message while the document is
     * being updated. If the resource for this key does not exist then the
     * value is used as the status message. Default is 'updatingDocument'.
     */
    updatingDocumentResource: 'updatingDocument' | '';

    /**
     * Specifies if string values in cell styles should be evaluated using
     * {@link mxUtils.eval}. This will only be used if the string values can't be mapped
     * to objects using {@link mxStyleRegistry}. Default is false. NOTE: Enabling this
     * switch carries a possible security risk.
     */
    allowEval: boolean;

    /**
     * Specifies if a gesture should be captured when it goes outside of the
     * graph container. Default is true.
     */
    captureDocumentGesture: boolean;

    /**
     * Specifies if the {@link canvas} should be hidden while rendering in IE8 standards
     * mode and quirks mode. This will significantly improve rendering performance.
     * Default is true.
     */
    optimizeVmlReflows: boolean;

    /**
     * Specifies if shapes should be created, updated and destroyed using the
     * methods of {@link mxCellRenderer} in {@link graph}. Default is true.
     */
    rendering: boolean;

    /**
     * Reference to the enclosing {@link mxGraph}.
     */
    graph: mxGraph;

    /**
     * {@link mxCell} that acts as the root of the displayed cell hierarchy.
     */
    currentRoot: mxCell;

    /**
     * {@link mxRectangle} that caches the scales, translated bounds of the current view.
     */
    graphBounds: mxRectangle;

    /**
     * Specifies the scale. Default is 1 (100%).
     */
    scale: number;

    /**
     * {@link mxPoint} that specifies the current translation. Default is a new
     * empty {@link mxPoint}.
     */
    translate: mxPoint;

    /**
     * {@link mxDictionary} that maps from cell IDs to {@link mxCellStates}.
     */
    states: mxDictionary<mxCellState>;

    /**
     * Specifies if the style should be updated in each validation step. If this
     * is false then the style is only updated if the state is created or if the
     * style of the cell was changed. Default is false.
     */
    updateStyle: boolean;

    /**
     * During validation, this contains the last DOM node that was processed.
     */
    lastNode: Element;

    /**
     * During validation, this contains the last HTML DOM node that was processed.
     */
    lastHtmlNode: HTMLElement;

    /**
     * During validation, this contains the last edge's DOM node that was processed.
     */
    lastForegroundNode: Element;

    /**
     * During validation, this contains the last edge HTML DOM node that was processed.
     */
    lastForegroundHtmlNode: HTMLElement;

    /**
     * Returns {@link graphBounds}.
     */
    getGraphBounds(): mxRectangle;

    /**
     * Sets {@link graphBounds}.
     */
    setGraphBounds(value: mxRectangle): void;

    /**
     * Returns the union of all {@link mxCellStates} for the given array of {@link mxCell}.
     *
     * @param cells Array of {@link mxCell} whose bounds should be returned.
     */
    getBounds(cells: mxCell[]): mxRectangle;

    /**
     * Sets and returns the current root and fires an {@link undo} event before
     * calling {@link mxGraph.sizeDidChange}.
     *
     * @param root {@link mxCell} that specifies the root of the displayed cell hierarchy.
     */
    setCurrentRoot(root: mxCell): mxCell;

    /**
     * Sets the scale and translation and fires a {@link scale} and {@link translate} event
     * before calling {@link revalidate} followed by {@link mxGraph.sizeDidChange}.
     *
     * @param scale Decimal value that specifies the new scale (1 is 100%).
     * @param dx X-coordinate of the translation.
     * @param dy Y-coordinate of the translation.
     */
    scaleAndTranslate(scale: number, dx: number, dy: number): void;

    /**
     * Returns the {@link scale}.
     */
    getScale(): number;

    /**
     * Sets the scale and fires a {@link scale} event before calling {@link revalidate} followed
     * by {@link mxGraph.sizeDidChange}.
     *
     * @param value Decimal value that specifies the new scale (1 is 100%).
     */
    setScale(value: number): void;

    /**
     * Returns the {@link translate}.
     */
    getTranslate(): mxPoint;

    /**
     * Sets the translation and fires a {@link translate} event before calling
     * {@link revalidate} followed by {@link mxGraph.sizeDidChange}. The translation is the
     * negative of the origin.
     *
     * @param dx X-coordinate of the translation.
     * @param dy Y-coordinate of the translation.
     */
    setTranslate(dx: number, dy: number): void;

    /**
     * Invoked after {@link scale} and/or {@link translate} has changed.
     */
    viewStateChanged(): void;

    /**
     * Clears the view if {@link currentRoot} is not null and revalidates.
     */
    refresh(): void;

    /**
     * Revalidates the complete view with all cell states.
     */
    revalidate(): void;

    /**
     * Removes the state of the given cell and all descendants if the given
     * cell is not the current root.
     *
     * @param cell Optional {@link mxCell} for which the state should be removed. Default
     * is the root of the model.
     * @param force Boolean indicating if the current root should be ignored for
     * recursion.
     */
    clear(cell?: mxCell, force?: boolean, recurse?: boolean): void;

    /**
     * Invalidates the state of the given cell, all its descendants and
     * connected edges.
     *
     * @param cell Optional {@link mxCell} to be invalidated. Default is the root of the
     * model.
     */
    invalidate(cell: mxCell, recurse: boolean, includeEdges: boolean): void;

    /**
     * Calls {@link validateCell} and {@link validateCellState} and updates the {@link graphBounds}
     * using {@link getBoundingBox}. Finally the background is validated using
     * {@link validateBackground}.
     *
     * @param cell Optional {@link mxCell} to be used as the root of the validation.
     * Default is {@link currentRoot} or the root of the model.
     */
    validate(cell?: mxCell): void;

    /**
     * Returns the bounds for an empty graph. This returns a rectangle at
     * {@link translate} with the size of 0 x 0.
     */
    getEmptyBounds(): mxRectangle;

    /**
     * Returns the bounding box of the shape and the label for the given
     * {@link mxCellState} and its children if recurse is true.
     *
     * @param state {@link mxCellState} whose bounding box should be returned.
     * @param recurse Optional boolean indicating if the children should be included.
     * Default is true.
     */
    getBoundingBox(state: mxCellState, recurse: boolean): mxRectangle;

    /**
     * Creates and returns the shape used as the background page.
     *
     * @param bounds {@link mxRectangle} that represents the bounds of the shape.
     */
    createBackgroundPageShape(bounds: mxRectangle): mxRectangleShape;

    /**
     * Calls {@link validateBackgroundImage} and {@link validateBackgroundPage}.
     */
    validateBackground(): void;

    /**
     * Validates the background image.
     */
    validateBackgroundImage(): void;

    /**
     * Validates the background page.
     */
    validateBackgroundPage(): void;

    /**
     * Returns the bounds for the background page.
     */
    getBackgroundPageBounds(): mxRectangle;

    /**
     * Updates the bounds and redraws the background image.
     *
     * Example:
     *
     * If the background image should not be scaled, this can be replaced with
     * the following.
     *
     * @example
     * ```javascript
     * redrawBackground(backgroundImage, bg)
     * {
     *   backgroundImage.bounds.x = this.translate.x;
     *   backgroundImage.bounds.y = this.translate.y;
     *   backgroundImage.bounds.width = bg.width;
     *   backgroundImage.bounds.height = bg.height;
     *
     *   backgroundImage.redraw();
     * };
     * ```
     *
     * @param backgroundImage {@link mxImageShape} that represents the background image.
     * @param bg {@link mxImage} that specifies the image and its dimensions.
     */
    redrawBackgroundImage(backgroundImage: mxImageShape, bg: mxImage): void;

    /**
     * Recursively creates the cell state for the given cell if visible is true and
     * the given cell is visible. If the cell is not visible but the state exists
     * then it is removed using {@link removeState}.
     *
     * @param cell {@link mxCell} whose {@link mxCellState} should be created.
     * @param visible Optional boolean indicating if the cell should be visible. Default
     * is true.
     */
    validateCell(cell: mxCell, visible?: boolean): void;

    /**
     * Validates and repaints the {@link mxCellState} for the given {@link mxCell}.
     *
     * @param cell {@link mxCell} whose {@link mxCellState} should be validated.
     * @param recurse Optional boolean indicating if the children of the cell should be
     * validated. Default is true.
     */
    validateCellState(cell: mxCell, recurse?: boolean): void;
    /**
     * Updates the given {@link mxCellState}.
     *
     * @param state {@link mxCellState} to be updated.
     */
    updateCellState(state: mxCellState): void;

    /**
     * Returns true if the children of the given cell should not be visible in the
     * view. This implementation uses {@link mxGraph.isCellVisible} but it can be
     * overidden to use a separate condition.
     */
    isCellCollapsed(cell: mxCell): boolean;

    /**
     * Validates the given cell state.
     */
    updateVertexState(state: mxCellState, geo: mxGeometry): void;

    /**
     * Validates the given cell state.
     */
    updateEdgeState(state: mxCellState, geo: mxGeometry): void;

    /**
     * Updates the absoluteOffset of the given vertex cell state. This takes
     * into account the label position styles.
     *
     * @param state {@link mxCellState} whose absolute offset should be updated.
     */
    updateVertexLabelOffset(state: mxCellState): void;

    /**
     * Resets the current validation state.
     */
    resetValidationState(): void;

    /**
     * Invoked when a state has been processed in {@link validatePoints}. This is used
     * to update the order of the DOM nodes of the shape.
     *
     * @param state {@link mxCellState} that represents the cell state.
     */
    stateValidated(state: mxCellState): void;

    /**
     * Sets the initial absolute terminal points in the given state before the edge
     * style is computed.
     *
     * @param edge {@link mxCellState} whose initial terminal points should be updated.
     * @param source {@link mxCellState} which represents the source terminal.
     * @param target {@link mxCellState} which represents the target terminal.
     */
    updateFixedTerminalPoints(edge: mxCellState, source: mxCellState, target: mxCellState): void;

    /**
     * Sets the fixed source or target terminal point on the given edge.
     *
     * @param edge {@link mxCellState} whose terminal point should be updated.
     * @param terminal {@link mxCellState} which represents the actual terminal.
     * @param source Boolean that specifies if the terminal is the source.
     * @param constraint {@link mxConnectionConstraint} that specifies the connection.
     */
    updateFixedTerminalPoint(
      edge: mxCellState,
      terminal: mxCellState,
      source: boolean,
      constraint: mxConnectionConstraint
    ): void;

    /**
     * Returns the fixed source or target terminal point for the given edge.
     *
     * @param edge {@link mxCellState} whose terminal point should be returned.
     * @param terminal {@link mxCellState} which represents the actual terminal.
     * @param source Boolean that specifies if the terminal is the source.
     * @param constraint {@link mxConnectionConstraint} that specifies the connection.
     */
    getFixedTerminalPoint(
      edge: mxCellState,
      terminal: mxCellState,
      source: boolean,
      constraint: mxConnectionConstraint
    ): void;

    /**
     * Updates the bounds of the given cell state to reflect the bounds of the stencil
     * if it has a fixed aspect and returns the previous bounds as an {@link mxRectangle} if
     * the bounds have been modified or null otherwise.
     *
     * @param edge {@link mxCellState} whose bounds should be updated.
     */
    updateBoundsFromStencil(state: mxCellState): mxRectangle;

    /**
     * Updates the absolute points in the given state using the specified array
     * of {@link mxPoints} as the relative points.
     *
     * @param edge {@link mxCellState} whose absolute points should be updated.
     * @param points Array of {@link mxPoints} that constitute the relative points.
     * @param source {@link mxCellState} that represents the source terminal.
     * @param target {@link mxCellState} that represents the target terminal.
     */
    updatePoints(edge: mxCellState, points: mxPoint[], source: mxCellState, target: mxCellState): void;

    /**
     * Transforms the given control point to an absolute point.
     */
    transformControlPoint(state: mxCellState, pt: mxPoint): mxPoint;

    /**
     * Returns true if the given edge should be routed with {@link mxGraph.defaultLoopStyle}
     * or the {@link mxConstants.STYLE_LOOP} defined for the given edge. This implementation
     * returns true if the given edge is a loop and does not
     */
    isLoopStyleEnabled(edge: mxCellState, points: mxPoint[], source: mxCellState, target: mxCellState): boolean;

    /**
     * Returns the edge style function to be used to render the given edge state.
     */
    getEdgeStyle(edge: mxCellState, points: mxPoint[], source: mxCellState, target: mxCellState): any;

    /**
     * Updates the terminal points in the given state after the edge style was
     * computed for the edge.
     *
     * @param state {@link mxCellState} whose terminal points should be updated.
     * @param source {@link mxCellState} that represents the source terminal.
     * @param target {@link mxCellState} that represents the target terminal.
     */
    updateFloatingTerminalPoints(state: mxCellState, source: mxCellState, target: mxCellState): void;

    /**
     * Updates the absolute terminal point in the given state for the given
     * start and end state, where start is the source if source is true.
     *
     * @param edge {@link mxCellState} whose terminal point should be updated.
     * @param start {@link mxCellState} for the terminal on "this" side of the edge.
     * @param end {@link mxCellState} for the terminal on the other side of the edge.
     * @param source Boolean indicating if start is the source terminal state.
     */
    updateFloatingTerminalPoint(edge: mxCellState, start: mxCellState, end: mxCellState, source: boolean): void;

    /**
     * Returns the floating terminal point for the given edge, start and end
     * state, where start is the source if source is true.
     *
     * @param edge {@link mxCellState} whose terminal point should be returned.
     * @param start {@link mxCellState} for the terminal on "this" side of the edge.
     * @param end {@link mxCellState} for the terminal on the other side of the edge.
     * @param source Boolean indicating if start is the source terminal state.
     */
    getFloatingTerminalPoint(edge: mxCellState, start: mxCellState, end: mxCellState, source: boolean): mxPoint;

    /**
     * Returns an {@link mxCellState} that represents the source or target terminal or
     * port for the given edge.
     *
     * @param state {@link mxCellState} that represents the state of the edge.
     * @param terminal {@link mxCellState} that represents the terminal.
     * @param source Boolean indicating if the given terminal is the source terminal.
     */
    getTerminalPort(state: mxCellState, terminal: mxCellState, source: boolean): mxCellState;

    /**
     * Returns an {@link mxPoint} that defines the location of the intersection point between
     * the perimeter and the line between the center of the shape and the given point.
     *
     * @param terminal {@link mxCellState} for the source or target terminal.
     * @param next {@link mxPoint} that lies outside of the given terminal.
     * @param orthogonal Boolean that specifies if the orthogonal projection onto
     * the perimeter should be returned. If this is false then the intersection
     * of the perimeter and the line between the next and the center point is
     * returned.
     * @param border Optional border between the perimeter and the shape.
     */
    getPerimeterPoint(terminal: mxCellState, next: mxPoint, orthogonal: boolean, border: number): mxPoint;

    /**
     * Returns the x-coordinate of the center point for automatic routing.
     */
    getRoutingCenterX(state: mxCellState): number;

    /**
     * Returns the y-coordinate of the center point for automatic routing.
     */
    getRoutingCenterY(state: mxCellState): number;

    /**
     * Returns the perimeter bounds for the given terminal, edge pair as an
     * {@link mxRectangle}.
     *
     * If you have a model where each terminal has a relative child that should
     * act as the graphical endpoint for a connection from/to the terminal, then
     * this method can be replaced as follows:
     *
     * @example
     * ```javascript
     * var oldGetPerimeterBounds = getPerimeterBounds;
     * getPerimeterBounds(terminal, edge, isSource)
     * {
     *   var model = this.graph.getModel();
     *   var childCount = model.getChildCount(terminal.cell);
     *
     *   if (childCount > 0)
     *   {
     *     var child = model.getChildAt(terminal.cell, 0);
     *     var geo = model.getGeometry(child);
     *
     *     if (geo != null &&
     *         geo.relative)
     *     {
     *       var state = this.getState(child);
     *
     *       if (state != null)
     *       {
     *         terminal = state;
     *       }
     *     }
     *   }
     *
     *   return oldGetPerimeterBounds.apply(this, arguments);
     * };
     * ```
     *
     * @param {mxCellState} terminal mxCellState that represents the terminal.
     * @param {number} border Number that adds a border between the shape and the perimeter.
     */
    getPerimeterBounds(terminal: mxCellState, border?: number): mxRectangle;

    /**
     * Returns the perimeter function for the given state.
     */
    getPerimeterFunction(state: mxCellState): any;

    /**
     * Returns the nearest point in the list of absolute points or the center
     * of the opposite terminal.
     *
     * @param edge {@link mxCellState} that represents the edge.
     * @param opposite {@link mxCellState} that represents the opposite terminal.
     * @param source Boolean indicating if the next point for the source or target
     * should be returned.
     */
    getNextPoint(edge: mxCellState, opposite: mxCellState, source: boolean): mxPoint;

    /**
     * Returns the nearest ancestor terminal that is visible. The edge appears
     * to be connected to this terminal on the display. The result of this method
     * is cached in {@link mxCellState.getVisibleTerminalState}.
     *
     * @param edge {@link mxCell} whose visible terminal should be returned.
     * @param source Boolean that specifies if the source or target terminal
     * should be returned.
     */
    getVisibleTerminal(edge: mxCell, source: boolean): mxCell;

    /**
     * Updates the given state using the bounding box of t
     * he absolute points.
     * Also updates {@link mxCellState.terminalDistance}, {@link mxCellState.length} and
     * {@link mxCellState.segments}.
     *
     * @param state {@link mxCellState} whose bounds should be updated.
     */
    updateEdgeBounds(state: mxCellState): void;

    /**
     * Returns the absolute point on the edge for the given relative
     * {@link mxGeometry} as an {@link mxPoint}. The edge is represented by the given
     * {@link mxCellState}.
     *
     * @param state {@link mxCellState} that represents the state of the parent edge.
     * @param geometry {@link mxGeometry} that represents the relative location.
     */
    getPoint(state: mxCellState, geometry: mxGeometry): mxPoint;

    /**
     * Gets the relative point that describes the given, absolute label
     * position for the given edge state.
     *
     * @param state {@link mxCellState} that represents the state of the parent edge.
     * @param x Specifies the x-coordinate of the absolute label location.
     * @param y Specifies the y-coordinate of the absolute label location.
     */
    getRelativePoint(edgeState: mxCellState, x: number, y: number): mxPoint;

    /**
     * Updates {@link mxCellState.absoluteOffset} for the given state. The absolute
     * offset is normally used for the position of the edge label. Is is
     * calculated from the geometry as an absolute offset from the center
     * between the two endpoints if the geometry is absolute, or as the
     * relative distance between the center along the line and the absolute
     * orthogonal distance if the geometry is relative.
     *
     * @param state {@link mxCellState} whose absolute offset should be updated.
     */
    updateEdgeLabelOffset(state: mxCellState): void;

    /**
     * Returns the {@link mxCellState} for the given cell. If create is true, then
     * the state is created if it does not yet exist.
     *
     * @param cell {@link mxCell} for which the {@link mxCellState} should be returned.
     * @param create Optional boolean indicating if a new state should be created
     * if it does not yet exist. Default is false.
     */
    getState(cell: mxCell, create?: boolean): mxCellState;

    /**
     * Returns {@link rendering}.
     */
    isRendering(): boolean;

    /**
     * Sets {@link rendering}.
     */
    setRendering(value: boolean): void;

    /**
     * Returns {@link allowEval}.
     */
    isAllowEval(): boolean;

    /**
     * Sets {@link allowEval}.
     */
    setAllowEval(value: boolean): void;

    /**
     * Returns {@link states}.
     */
    getStates(): mxDictionary<mxCellState>;

    /**
     * Sets {@link states}.
     */
    setStates(value: mxDictionary<mxCellState>): void;

    /**
     * Returns the {@link mxCellStates} for the given array of {@link mxCell}. The array
     * contains all states that are not null, that is, the returned array may
     * have less elements than the given array. If no argument is given, then
     * this returns {@link states}.
     */
    getCellStates(cells: mxCell[]): mxCellState[];

    /**
     * Removes and returns the {@link mxCellState} for the given cell.
     *
     * @param cell {@link mxCell} for which the {@link mxCellState} should be removed.
     */
    removeState(cell: mxCell): mxCellState;

    /**
     * Creates and returns an {@link mxCellState} for the given cell and initializes
     * it using {@link mxCellRenderer.initialize}.
     *
     * @param cell {@link mxCell} for which a new {@link mxCellState} should be created.
     */
    createState(cell: mxCell): mxCellState;

    /**
     * Returns the DOM node that contains the background-, draw- and
     * overlay- and decoratorpanes.
     */
    getCanvas(): SVGElement;

    /**
     * Returns the DOM node that represents the background layer.
     */
    getBackgroundPane(): Element;

    /**
     * Returns the DOM node that represents the main drawing layer.
     */
    getDrawPane(): Element;

    /**
     * Returns the DOM node that represents the layer above the drawing layer.
     */
    getOverlayPane(): Element;

    /**
     * Returns the DOM node that represents the topmost drawing layer.
     */
    getDecoratorPane(): Element;

    /**
     * Returns true if the event origin is one of the drawing panes or
     * containers of the view.
     */
    isContainerEvent(evt: Event): boolean;

    /**
     * Returns true if the event origin is one of the scrollbars of the
     * container in IE. Such events are ignored.
     */
    isScrollEvent(evt: Event): boolean;

    /**
     * Initializes the graph event dispatch loop for the specified container
     * and invokes {@link create} to create the required DOM nodes for the display.
     */
    init(): void;

    /**
     * Installs the required listeners in the container.
     */
    installListeners(): void;

    /**
     * Creates the DOM nodes for the HTML display.
     */
    createHtml(): void;

    /**
     * Updates the size of the HTML canvas.
     */
    updateHtmlCanvasSize(width: number, height: number): void;

    /**
     * Creates and returns a drawing pane in HTML (DIV).
     */
    createHtmlPane(width: number, height: number): Element;

    /**
     * Creates the DOM nodes for the VML display.
     */
    createVml(): Element;

    /**
     * Creates a drawing pane in VML (group).
     */
    createVmlPane(width: number, height: number): Element;

    /**
     * Creates and returns the DOM nodes for the SVG display.
     */
    createSvg(): Element;

    /**
     * Updates the style of the container after installing the SVG DOM elements.
     */
    updateContainerStyle(container: Element): void;

    /**
     * Destroys the view and all its resources.
     */
    destroy(): void;
  }

  /**
   * Class: mxCurrentRootChange
   *
   * Action to change the current root in a view.
   */
  class mxCurrentRootChange {
    /**
     * @constructor mxCurrentRootChange
     *
     * Constructs a change of the current root in the given view.
     */
    constructor(view: mxGraphView, root: mxCell);

    /**
     * Changes the current root of the view.
     */
    execute(): void;
  }
}
