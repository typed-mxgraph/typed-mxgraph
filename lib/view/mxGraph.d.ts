declare module 'mxgraph' {
  /**
   * Extends {@link mxEventSource} to implement a graph component for
   * the browser. This is the main class of the package. To activate
   * panning and connections use {@link setPanning} and {@link setConnectable}.
   * For rubberband selection you must create a new instance of
   * {@link mxRubberband}. The following listeners are added to
   * {@link mouseListeners} by default:
   *
   * - tooltipHandler: {@link mxTooltipHandler} that displays tooltips
   * - panningHandler: {@link mxPanningHandler} for panning and popup menus
   * - connectionHandler: {@link mxConnectionHandler} for creating connections
   * - graphHandler: {@link mxGraphHandler} for moving and cloning cells
   *
   * These listeners will be called in the above order if they are enabled.
   * @class mxGraph
   * @extends {mxEventSource}
   */
  export class mxGraph extends mxEventSource {
    /**
     * @constructor
     *
     * Constructs a new mxGraph in the specified container. Model is an optional
     * mxGraphModel. If no model is provided, a new mxGraphModel instance is
     * used as the model. The container must have a valid owner document prior
     * to calling this function in Internet Explorer. RenderHint is a string to
     * affect the display performance and rendering in IE, but not in SVG-based
     * browsers. The parameter is mapped to {@link dialect}, which may
     * be one of {@link mxConstants.DIALECT_SVG} for SVG-based browsers,
     * {@link mxConstants.DIALECT_STRICTHTML} for fastest display mode,
     * {@link mxConstants.DIALECT_PREFERHTML} for faster display mode,
     * {@link mxConstants.DIALECT_MIXEDHTML} for fast and {@link mxConstants.DIALECT_VML}
     * for exact display mode (slowest). The dialects are defined in mxConstants.
     * The default values are DIALECT_SVG for SVG-based browsers and
     * DIALECT_MIXED for IE.
     *
     * The possible values for the renderingHint parameter are explained below:
     *
     * - fast - The parameter is based on the fact that the display performance is
     * highly improved in IE if the VML is not contained within a VML group
     * element. The lack of a group element only slightly affects the display while
     * panning, but improves the performance by almost a factor of 2, while keeping
     * the display sufficiently accurate. This also allows to render certain shapes as HTML
     * if the display accuracy is not affected, which is implemented by
     * {@link mxShape.isMixedModeHtml}. This is the default setting and is mapped to
     * DIALECT_MIXEDHTML.
     * - faster - Same as fast, but more expensive shapes are avoided. This is
     * controlled by {@link mxShape.preferModeHtml}. The default implementation will
     * avoid gradients and rounded rectangles, but more significant shapes, such
     * as rhombus, ellipse, actor and cylinder will be rendered accurately. This
     * setting is mapped to DIALECT_PREFERHTML.
     * - fastest - Almost anything will be rendered in Html. This allows for
     * rectangles, labels and images. This setting is mapped to
     * DIALECT_STRICTHTML.
     * - exact - If accurate panning is required and if the diagram is small (up
     * to 100 cells), then this value should be used. In this mode, a group is
     * created that contains the VML. This allows for accurate panning and is
     * mapped to DIALECT_VML.
     *
     * ### Examples
     *
     * To create a graph inside a DOM node with an id of graph:
     *
     * ```javascript
     * var container = document.getElementById('graph');
     * var graph = new mxGraph(container);
     * ```
     *
     * ### Parameters
     *
     * @param container Optional DOM node that acts as a container for the graph.
     * If this is null then the container can be initialized later using
     * {@link init}.
     * @param model Optional {@link mxGraphModel} that constitutes the graph data.
     * @param renderHint Optional string that specifies the display accuracy and
     * performance. Default is mxConstants.DIALECT_MIXEDHTML (for IE).
     * @param stylesheet Optional {@link mxStylesheet} to be used in the graph.
     */
    constructor(container: HTMLElement, model?: mxGraphModel, renderHint?: string, stylesheet?: mxStylesheet);

    container: HTMLElement;

    /**
     * Holds the mouse event listeners. See {@link fireMouseEvent}.
     */
    mouseListeners: any[];

    /**
     * Holds the state of the mouse button.
     */
    isMouseDown: boolean;

    /**
     * Holds the {@link mxGraphModel} that contains the cells to be displayed.
     */
    model: mxGraphModel;

    /**
     * Holds the {@link mxGraphView} that caches the {@link mxCellState}s for the cells.
     */
    view: mxGraphView;

    /**
     * Holds the {@link mxStylesheet} that defines the appearance of the cells.
     *
     * Use the following code to read a stylesheet into an existing graph.
     *
     * @example
     * ```javascript
     * var req = mxUtils.load('stylesheet.xml');
     * var root = req.getDocumentElement();
     * var dec = new mxCodec(root.ownerDocument);
     * dec.decode(root, graph.stylesheet);
     * ```
     */
    stylesheet: mxStylesheet;

    /**
     * Holds the {@link mxGraphSelectionModel} that models the current selection.
     */
    selectionModel: mxGraphSelectionModel;

    /**
     * Holds the {@link mxCellEditor} that is used as the in-place editing.
     */
    cellEditor: mxCellEditor;

    /**
     * Holds the {@link mxCellRenderer} for rendering the cells in the graph.
     */
    cellRenderer: mxCellRenderer;

    /**
     * An array of {@link mxMultiplicity} describing the allowed
     * connections in a graph.
     */
    multiplicities: mxMultiplicity[];

    /**
     * RenderHint as it was passed to the constructor.
     */
    renderHint: any;

    /**
     * Dialect to be used for drawing the graph. Possible values are all
     * constants in {@link mxConstants} with a DIALECT-prefix.
     */
    dialect: mxDialectConstants;

    /**
     * Specifies the grid size.
     * @default 10
     */
    gridSize: number;

    /**
     * Specifies if the grid is enabled. This is used in {@link snap}.
     * @default true
     */
    gridEnabled: boolean;

    /**
     * Specifies if ports are enabled. This is used in {@link cellConnected} to update
     * the respective style.
     * @default true
     */
    portsEnabled: boolean;

    /**
     * Specifies if native double click events should be detected.
     * @default true
     */
    nativeDblClickEnabled: boolean;

    /**
     * Specifies if double taps on touch-based devices should be handled as a
     * double click.
     * @default true
     */
    doubleTapEnabled: boolean;

    /**
     * Specifies the timeout in milliseconds for double taps and non-native double clicks.
     * @default 500
     */
    doubleTapTimeout: number;

    /**
     * Specifies the tolerance in pixels for double taps and double clicks in quirks mode.
     * @default 25
     */
    doubleTapTolerance: number;

    /**
     * Holds the x-coordinate of the last touch event for double tap detection.
     */
    lastTouchY: number;

    /**
     * Holds the time of the last touch event for double click detection.
     */
    lastTouchTime: number;

    /**
     * Specifies if tap and hold should be used for starting connections on touch-based
     * devices.
     * @default true
     */
    tapAndHoldEnabled: boolean;

    /**
     * Specifies the time in milliseconds for a tap and hold.
     * @default 500
     */
    tapAndHoldDelay: number;

    /**
     * `True` if the timer for tap and hold events is running.
     */
    tapAndHoldInProgress: boolean;

    /**
     * `True` as long as the timer is running and the touch events
     * stay within the given {@link tapAndHoldTolerance}.
     */
    tapAndHoldValid: boolean;

    /**
     * Holds the x-coordinate of the initial touch event for tap and hold.
     */
    initialTouchX: number;

    /**
     * Holds the y-coordinate of the initial touch event for tap and hold.
     */
    initialTouchY: number;

    /**
     * Tolerance in pixels for a move to be handled as a single click.
     * @default 4
     */
    tolerance: number;

    /**
     * Value returned by {@link getOverlap} if {@link isAllowOverlapParent} returns
     * `true` for the given cell. {@link getOverlap} is used in {@link constrainChild} if
     * {@link isConstrainChild} returns `true`. The value specifies the
     * portion of the child which is allowed to overlap the parent.
     */
    defaultOverlap: number;

    /**
     * Specifies the default parent to be used to insert new cells.
     * This is used in {@link getDefaultParent}.
     * @default null
     */
    defaultParent: mxCell;

    /**
     * Specifies the alternate edge style to be used if the main control point
     * on an edge is being double clicked.
     * @default null
     */
    alternateEdgeStyle: string;

    /**
     * Specifies the {@link mxImage} to be returned by {@link getBackgroundImage}.
     * @default null
     *
     * @example
     * ```javascript
     * var img = new mxImage('http://www.example.com/maps/examplemap.jpg', 1024, 768);
     * graph.setBackgroundImage(img);
     * graph.view.validate();
     * ```
     */
    backgroundImage: mxImage;

    /**
     * Specifies if the background page should be visible.
     * Not yet implemented.
     * @default false
     */
    pageVisible: boolean;

    /**
     * Specifies if a dashed line should be drawn between multiple pages.
     * If you change this value while a graph is being displayed then you
     * should call {@link sizeDidChange} to force an update of the display.
     * @default false
     */
    pageBreaksVisible: boolean;

    /**
     * Specifies the color for page breaks.
     * @default gray
     */
    pageBreakColor: string;

    /**
     * Specifies the page breaks should be dashed.
     * @default true
     */
    pageBreakDashed: boolean;

    /**
     * Specifies the minimum distance in pixels for page breaks to be visible.
     * @default 20
     */
    minPageBreakDist: number;

    /**
     * Specifies if the graph size should be rounded to the next page number in
     * {@link sizeDidChange}. This is only used if the graph container has scrollbars.
     * @default false
     */
    preferPageSize: boolean;

    /**
     * Specifies the page format for the background page.
     * This is used as the default in {@link mxPrintPreview} and for painting the background page
     * if {@link pageVisible} is `true` and the page breaks if {@link pageBreaksVisible} is `true`.
     * @default {@link mxConstants.PAGE_FORMAT_A4_PORTRAIT}
     */
    pageFormat: mxRectangle;

    /**
     * Specifies the scale of the background page.
     * Not yet implemented.
     * @default 1.5
     */
    pageScale: number;

    /**
     * Specifies the return value for {@link isEnabled}.
     * @default true
     */
    enabled: boolean;

    /**
     * Specifies if {@link mxKeyHandler} should invoke {@link escape} when the escape key
     * is pressed.
     * @default true
     */
    escapeEnabled: boolean;

    /**
     * If `true`, when editing is to be stopped by way of selection changing,
     * data in diagram changing or other means stopCellEditing is invoked, and
     * changes are saved. This is implemented in a focus handler in
     * {@link mxCellEditor}.
     * @default true
     */
    invokesStopCellEditing: boolean;

    /**
     * If `true`, pressing the enter key without pressing control or shift will stop
     * editing and accept the new value. This is used in {@link mxCellEditor} to stop
     * cell editing. Note: You can always use F2 and escape to stop editing.
     * @default false
     */
    enterStopsCellEditing: boolean;

    /**
     * Specifies if scrollbars should be used for panning in {@link panGraph} if
     * any scrollbars are available. If scrollbars are enabled in CSS, but no
     * scrollbars appear because the graph is smaller than the container size,
     * then no panning occurs if this is `true`.
     * @default true
     */
    useScrollbarsForPanning: boolean;

    /**
     * Specifies the return value for {@link canExportCell}.
     * @default true
     */
    exportEnabled: boolean;

    /**
     * Specifies the return value for {@link canImportCell}.
     * @default true
     */
    importEnabled: boolean;

    /**
     * Specifies the return value for {@link isCellLocked}.
     * @default false
     */
    cellsLocked: boolean;

    /**
     * Specifies the return value for {@link isCellCloneable}.
     * @default true
     */
    cellsCloneable: boolean;

    /**
     * Specifies if folding (collapse and expand via an image icon in the graph
     * should be enabled).
     * @default true
     */
    foldingEnabled: boolean;

    /**
     * Specifies the return value for {@link isCellEditable}.
     * @default true
     */
    cellsEditable: boolean;

    /**
     * Specifies the return value for {@link isCellDeletable}.
     * @default true
     */
    cellsDeletable: boolean;

    /**
     * Specifies the return value for {@link isCellMovable}.
     * @default true
     */
    cellsMovable: boolean;

    /**
     * Specifies the return value for edges in {@link isLabelMovable}.
     * @default true
     */
    edgeLabelsMovable: boolean;

    /**
     * Specifies the return value for vertices in {@link isLabelMovable}.
     * @default false
     */
    vertexLabelsMovable: boolean;

    /**
     * Specifies the return value for {@link isDropEnabled}.
     * @default false
     */
    dropEnabled: boolean;

    /**
     * Specifies if dropping onto edges should be enabled. This is ignored if
     * {@link dropEnabled} is `false`. If enabled, it will call {@link splitEdge} to carry
     * out the drop operation.
     * @default true
     */
    splitEnabled: boolean;

    /**
     * Specifies the return value for {@link isCellsResizable}.
     * @default true
     */
    cellsResizable: boolean;

    /**
     * Specifies the return value for {@link isCellsBendable}.
     * @default true
     */
    cellsBendable: boolean;

    /**
     * Specifies the return value for {@link isCellsSelectable}.
     * @default true
     */
    cellsSelectable: boolean;

    /**
     * Specifies the return value for {@link isCellsDisconnectable}.
     * @default true
     */
    cellsDisconnectable: boolean;

    /**
     * Specifies if the graph should automatically update the cell size after an
     * edit. This is used in {@link isAutoSizeCell}.
     * @default false
     */
    autoSizeCells: boolean;

    /**
     * Specifies if autoSize style should be applied when cells are added.
     * @default false
     */
    autoSizeCellsOnAdd: boolean;

    /**
     * Specifies if the graph should automatically scroll if the mouse goes near
     * the container edge while dragging. This is only taken into account if the
     * container has scrollbars.
     *
     * If you need this to work without scrollbars then set {@link ignoreScrollbars} to
     * true. Please consult the {@link ignoreScrollbars} for details. In general, with
     * no scrollbars, the use of {@link allowAutoPanning} is recommended.
     * @default true
     */
    autoScroll: boolean;

    /**
     * Specifies if the graph should automatically scroll regardless of the
     * scrollbars. This will scroll the container using positive values for
     * scroll positions (ie usually only rightwards and downwards). To avoid
     * possible conflicts with panning, set {@link translateToScrollPosition} to `true`.
     */
    ignoreScrollbars: boolean;

    /**
     * Specifies if the graph should automatically convert the current scroll
     * position to a translate in the graph view when a mouseUp event is received.
     * This can be used to avoid conflicts when using {@link autoScroll} and
     * {@link ignoreScrollbars} with no scrollbars in the container.
     */
    translateToScrollPosition: boolean;

    /**
     * Specifies if autoscrolling should be carried out via mxPanningManager even
     * if the container has scrollbars. This disables {@link scrollPointToVisible} and
     * uses {@link mxPanningManager} instead. If this is true then {@link autoExtend} is
     * disabled. It should only be used with a scroll buffer or when scollbars
     * are visible and scrollable in all directions.
     * @default false
     */
    timerAutoScroll: boolean;

    /**
     * Specifies if panning via {@link panGraph} should be allowed to implement autoscroll
     * if no scrollbars are available in {@link scrollPointToVisible}. To enable panning
     * inside the container, near the edge, set {@link mxPanningManager.border} to a
     * positive value.
     * @default false
     */
    allowAutoPanning: boolean;

    /**
     * Specifies if the size of the graph should be automatically extended if the
     * mouse goes near the container edge while dragging. This is only taken into
     * account if the container has scrollbars. See {@link autoScroll}.
     * @default true
     */
    autoExtend: boolean;

    /**
     * {@link mxRectangle} that specifies the area in which all cells in the diagram
     * should be placed. Uses in {@link getMaximumGraphBounds}. Use a width or height of
     * `0` if you only want to give a upper, left corner.
     */
    maximumGraphBounds: mxRectangle;

    /**
     * {@link mxRectangle} that specifies the minimum size of the graph. This is ignored
     * if the graph container has no scrollbars.
     * @default null
     */
    minimumGraphSize: mxRectangle;

    /**
     * {@link mxRectangle} that specifies the minimum size of the {@link container} if
     * {@link resizeContainer} is `true`.
     */
    minimumContainerSize: mxRectangle;

    /**
     * {@link mxRectangle} that specifies the maximum size of the container if
     * {@link resizeContainer} is `true`.
     */
    maximumContainerSize: mxRectangle;

    /**
     * Specifies if the container should be resized to the graph size when
     * the graph size has changed.
     * @default false
     */
    resizeContainer: boolean;

    /**
     * Border to be added to the bottom and right side when the container is
     * being resized after the graph has been changed.
     * @default 0
     */
    border: number;

    /**
     * Specifies if edges should appear in the foreground regardless of their order
     * in the model. If {@link keepEdgesInForeground} and {@link keepEdgesInBackground} are
     * both `true` then the normal order is applied.
     * @default false
     */
    keepEdgesInForeground: boolean;

    /**
     * Specifies if edges should appear in the background regardless of their order
     * in the model. If {@link keepEdgesInForeground} and {@link keepEdgesInBackground} are
     * both `true` then the normal order is applied.
     * @default false
     */
    keepEdgesInBackground: boolean;

    /**
     * Specifies if negative coordinates for vertices are allowed.
     * @default true
     */
    allowNegativeCoordinates: boolean;

    /**
     * Specifies if a child should be constrained inside the parent bounds after a
     * move or resize of the child.
     * @default true
     */
    constrainChildren: boolean;

    /**
     * Specifies if child cells with relative geometries should be constrained
     * inside the parent bounds, if {@link constrainChildren} is `true`, and/or the
     * {@link maximumGraphBounds}.
     * @default false
     */
    constrainRelativeChildren: boolean;

    /**
     * Specifies if a parent should contain the child bounds after a resize of
     * the child. This has precedence over {@link constrainChildren}.
     * @default true
     */
    extendParents: boolean;

    /**
     * Specifies if parents should be extended according to the {@link extendParents}
     * switch if cells are added.
     * @default true
     */
    extendParentsOnAdd: boolean;

    /**
     * Specifies if parents should be extended according to the {@link extendParents}
     * switch if cells are added.
     * @default false (for backwards compatibility)
     */
    extendParentsOnMove: boolean;

    /**
     * Specifies the return value for {@link isRecursiveResize}.
     * @default false (for backwards compatibility)
     */
    recursiveResize: boolean;

    /**
     * Specifies if the cell size should be changed to the preferred size when
     * a cell is first collapsed.
     * @default true
     */
    collapseToPreferredSize: boolean;

    /**
     * Specifies the factor used for {@link zoomIn} and {@link zoomOut}.
     * @default 1.2 (120%)
     */
    zoomFactor: number;

    /**
     * Specifies if the viewport should automatically contain the selection cells after a zoom operation.
     * @default false
     */
    keepSelectionVisibleOnZoom: boolean;

    /**
     * Specifies if the zoom operations should go into the center of the actual
     * diagram rather than going from top, left.
     * @default true
     */
    centerZoom: boolean;

    /**
     * Specifies if the scale and translate should be reset if the root changes in
     * the model.
     * @default true
     */
    resetViewOnRootChange: boolean;

    /**
     * Specifies if edge control points should be reset after the resize of a
     * connected cell.
     * @default false
     */
    resetEdgesOnResize: boolean;

    /**
     * Specifies if edge control points should be reset after the move of a
     * connected cell.
     * @default false
     */
    resetEdgesOnMove: boolean;

    /**
     * Specifies if edge control points should be reset after the the edge has been
     * reconnected.
     * @default true
     */
    resetEdgesOnConnect: boolean;

    /**
     * Specifies if loops (aka self-references) are allowed.
     * @default false
     */
    allowLoops: boolean;

    /**
     * {@link mxEdgeStyle} to be used for loops. This is a fallback for loops if the
     * {@link mxConstants.STYLE_LOOP} is undefined.
     * @default {@link mxEdgeStyle.Loop}
     */
    defaultLoopStyle: any;

    /**
     * Specifies if multiple edges in the same direction between the same pair of
     * vertices are allowed.
     * @default true
     */
    multigraph: boolean;

    /**
     * Specifies if edges are connectable. This overrides the connectable field in edges.
     * @default false
     */
    connectableEdges: boolean;

    /**
     * Specifies if edges with disconnected terminals are allowed in the graph.
     * @default true
     */
    allowDanglingEdges: boolean;

    /**
     * Specifies if edges that are cloned should be validated and only inserted
     * if they are valid.
     * @default true
     */
    cloneInvalidEdges: boolean;

    /**
     * Specifies if edges should be disconnected from their terminals when they
     * are moved.
     * @default true
     */
    disconnectOnMove: boolean;

    /**
     * Specifies if labels should be visible. This is used in {@link getLabel}. Default
     * is true.
     */
    labelsVisible: boolean;

    /**
     * Specifies the return value for {@link isHtmlLabel}.
     * @default false
     */
    htmlLabels: boolean;

    /**
     * Specifies if swimlanes should be selectable via the content if the
     * mouse is released.
     * @default true
     */
    swimlaneSelectionEnabled: boolean;

    /**
     * Specifies if nesting of swimlanes is allowed.
     * @default true
     */
    swimlaneNesting: boolean;

    /**
     * The attribute used to find the color for the indicator if the indicator
     * color is set to 'swimlane'.
     * @default {@link mxConstants.STYLE_FILLCOLOR}
     */
    swimlaneIndicatorColorAttribute: string;

    /**
     * Holds the list of image bundles.
     */
    imageBundles: mxImageBundle[];

    /**
     * Specifies the minimum scale to be applied in {@link fit}. Set this to `null` to allow any value.
     * @default 0.1
     */
    minFitScale: number;

    /**
     * Specifies the maximum scale to be applied in {@link fit}. Set this to `null` to allow any value.
     * @default 8
     */
    maxFitScale: number;

    /**
     * Current horizontal panning value.
     * @default 0
     */
    panDx: number;

    /**
     * Current vertical panning value.
     * @default 0
     */
    panDy: number;

    /**
     * Specifies the {@link mxImage} to indicate a collapsed state.
     * Default value is mxClient.imageBasePath + '/collapsed.gif'
     */
    collapsedImage: mxImage;

    /**
     * Specifies the {@link mxImage} to indicate a expanded state.
     * Default value is mxClient.imageBasePath + '/expanded.gif'
     */
    expandedImage: mxImage;

    /**
     * Specifies the {@link mxImage} for the image to be used to display a warning
     * overlay. See {@link setCellWarning}. Default value is mxClient.imageBasePath +
     * '/warning'.  The extension for the image depends on the platform. It is
     * '.png' on the Mac and '.gif' on all other platforms.
     */
    warningImage: mxImage;

    /**
     * Specifies the resource key for the error message to be displayed in
     * non-multigraphs when two vertices are already connected. If the resource
     * for this key does not exist then the value is used as the error message.
     * @default 'alreadyConnected'
     */
    alreadyConnectedResource: string;

    /**
     * Specifies the resource key for the warning message to be displayed when
     * a collapsed cell contains validation errors. If the resource for this
     * key does not exist then the value is used as the warning message.
     * @default 'containsValidationErrors'
     */
    containsValidationErrorsResource: string;

    /**
     * Specifies the resource key for the tooltip on the collapse/expand icon.
     * If the resource for this key does not exist then the value is used as
     * the tooltip.
     * @default 'collapse-expand'
     */
    collapseExpandResource: string;

    tooltipHandler: mxTooltipHandler;

    selectionCellsHandler: mxSelectionCellsHandler;

    connectionHandler: mxConnectionHandler;

    graphHandler: mxGraphHandler;

    panningHandler: mxPanningHandler;

    popupMenuHandler: mxPopupMenuHandler;

    /**
     * Initializes the {@link container} and creates the respective datastructures.
     *
     * @param container DOM node that will contain the graph display.
     */
    init(container: HTMLElement): void;

    /**
     * Creates the tooltip-, panning-, connection- and graph-handler (in this
     * order). This is called in the constructor before {@link init} is called.
     */
    createHandlers(): void;

    /**
     * Creates and returns a new {@link mxTooltipHandler} to be used in this graph.
     */
    createTooltipHandler(): mxTooltipHandler;

    /**
     * Creates and returns a new {@link mxSelectionCellsHandler} to be used in this graph.
     */
    createSelectionCellsHandler(): mxSelectionCellsHandler;

    /**
     * Creates and returns a new {@link mxConnectionHandler} to be used in this graph.
     */
    createConnectionHandler(): mxConnectionHandler;

    /**
     * Creates and returns a new {@link mxGraphHandler} to be used in this graph.
     */
    createGraphHandler(): mxGraphHandler;

    /**
     * Creates and returns a new {@link mxPanningHandler} to be used in this graph.
     */
    createPanningHandler(): mxPanningHandler;

    /**
     * Creates and returns a new {@link mxPopupMenuHandler} to be used in this graph.
     */
    createPopupMenuHandler(): mxPopupMenuHandler;

    /**
     * Creates a new {@link mxGraphSelectionModel} to be used in this graph.
     */
    createSelectionModel(): mxGraphSelectionModel;

    /**
     * Creates a new {@link mxGraphSelectionModel} to be used in this graph.
     */
    createStylesheet(): mxStylesheet;

    /**
     * Creates a new {@link mxGraphView} to be used in this graph.
     */
    createGraphView(): mxGraphView;

    /**
     * Creates a new {@link mxCellRenderer} to be used in this graph.
     */
    createCellRenderer(): mxCellRenderer;

    /**
     * Creates a new {@link mxCellEditor} to be used in this graph.
     */
    createCellEditor(): mxCellEditor;

    /**
     * Returns the {@link mxGraphModel} that contains the cells.
     */
    getModel(): mxGraphModel;

    /**
     * Returns the {@link mxGraphView} that contains the {@link mxCellStates}.
     */
    getView(): mxGraphView;

    /**
     * Returns the {@link mxStylesheet} that defines the style.
     */
    getStylesheet(): mxStylesheet;

    /**
     * Sets the {@link mxStylesheet} that defines the style.
     */
    setStylesheet(stylesheet: mxStylesheet): void;

    /**
     * Returns the {@link mxGraphSelectionModel} that contains the selection.
     */
    getSelectionModel(): mxGraphSelectionModel;

    /**
     * Sets the {@link mxSelectionModel} that contains the selection.
     */
    setSelectionModel(selectionModel: mxGraphSelectionModel): void;

    /**
     * Returns the cells to be selected for the given array of changes.
     *
     * @param ignoreFn Optional function that takes a change and returns true if the
     * change should be ignored.
     *
     */
    getSelectionCellsForChanges(
      changes: mxSelectionChange[],
      ignoreFn?: (change: mxSelectionChange) => boolean
    ): mxCell[];

    /**
     * Called when the graph model changes. Invokes {@link processChange} on each
     * item of the given array to update the view accordingly.
     *
     * @param changes Array that contains the individual changes.
     */
    graphModelChanged(changes: any[]): void;

    /**
     * Removes selection cells that are not in the model from the selection.
     */
    updateSelection(): void;

    /**
     * Processes the given change and invalidates the respective cached data
     * in {@link view}. This fires a {@link root} event if the root has changed in the
     * model.
     *
     * @param {(mxRootChange|mxChildChange|mxTerminalChange|mxGeometryChange|mxValueChange|mxStyleChange)} change - Object that represents the change on the model.
     */
    processChange(change: any): void;

    /**
     * Removes all cached information for the given cell and its descendants.
     * This is called when a cell was removed from the model.
     *
     * Paramters:
     *
     * @param cell {@link mxCell} that was removed from the model.
     */
    removeStateForCell(cell: mxCell): void;

    /**
     * Adds an {@link mxCellOverlay} for the specified cell. This method fires an
     * {@link addoverlay} event and returns the new {@link mxCellOverlay}.
     *
     * @param cell {@link mxCell} to add the overlay for.
     * @param overlay {@link mxCellOverlay} to be added for the cell.
     */
    addCellOverlay(cell: mxCell, overlay: mxCellOverlay): mxCellOverlay;

    /**
     * Returns the array of {@link mxCellOverlays} for the given cell or null, if
     * no overlays are defined.
     *
     * @param cell {@link mxCell} whose overlays should be returned.
     */
    getCellOverlays(cell: mxCell): mxCellOverlay[];

    /**
     * Removes and returns the given {@link mxCellOverlay} from the given cell. This
     * method fires a {@link removeoverlay} event. If no overlay is given, then all
     * overlays are removed using {@link removeOverlays}.
     *
     * @param cell {@link mxCell} whose overlay should be removed.
     * @param overlay Optional {@link mxCellOverlay} to be removed.
     */
    removeCellOverlay(cell: mxCell, overlay: mxCellOverlay): mxCellOverlay;

    /**
     * Removes all {@link mxCellOverlays} from the given cell. This method
     * fires a {@link removeoverlay} event for each {@link mxCellOverlay} and returns
     * the array of {@link mxCellOverlays} that was removed from the cell.
     *
     * @param cell {@link mxCell} whose overlays should be removed
     */
    removeCellOverlays(cell: mxCell): mxCellOverlay[];

    /**
     * Removes all {@link mxCellOverlays} in the graph for the given cell and all its
     * descendants. If no cell is specified then all overlays are removed from
     * the graph. This implementation uses {@link removeCellOverlays} to remove the
     * overlays from the individual cells.
     *
     * @param cell Optional {@link mxCell} that represents the root of the subtree to
     * remove the overlays from. Default is the root in the model.
     */
    clearCellOverlays(cell?: mxCell): void;

    /**
     * Creates an overlay for the given cell using the warning and image or
     * {@link warningImage} and returns the new {@link mxCellOverlay}. The warning is
     * displayed as a tooltip in a red font and may contain HTML markup. If
     * the warning is null or a zero length string, then all overlays are
     * removed from the cell.
     *
     * @example
     * ```javascript
     * graph.setCellWarning(cell, '{@link b}Warning:</b>: Hello, World!');
     * ```
     *
     * @param cell {@link mxCell} whose warning should be set.
     * @param warning String that represents the warning to be displayed.
     * @param img Optional {@link mxImage} to be used for the overlay. Default is
     * {@link warningImage}.
     * @param isSelect Optional boolean indicating if a click on the overlay
     * should select the corresponding cell. Default is `false`.
     */
    setCellWarning(cell: mxCell, warning: string, img?: mxImage, isSelect?: boolean): mxCellOverlay;

    /**
     * Calls {@link startEditingAtCell} using the given cell or the first selection
     * cell.
     *
     * @param evt Optional mouse event that triggered the editing.
     */
    startEditing(evt?: MouseEvent): void;

    /**
     * Fires a {@link startEditing} event and invokes {@link mxCellEditor.startEditing}
     * on {@link editor}. After editing was started, a {@link editingStarted} event is
     * fired.
     *
     * @param cell {@link mxCell} to start the in-place editor for.
     * @param evt Optional mouse event that triggered the editing.
     */
    startEditingAtCell(cell?: mxCell, evt?: MouseEvent): void;

    /**
     * Returns the initial value for in-place editing. This implementation
     * returns {@link convertValueToString} for the given cell. If this function is
     * overridden, then {@link mxGraphModel.valueForCellChanged} should take care
     * of correctly storing the actual new value inside the user object.
     *
     * @param cell {@link mxCell} for which the initial editing value should be returned.
     * @param evt Optional mouse event that triggered the editor.
     */
    getEditingValue(cell: mxCell, evt: MouseEvent): string;

    /**
     * Stops the current editing  and fires a {@link editingStopped} event.
     *
     * @param cancel Boolean that specifies if the current editing value
     * should be stored.
     */
    stopEditing(cancel: boolean): void;

    /**
     * Sets the label of the specified cell to the given value using
     * {@link cellLabelChanged} and fires {@link mxEvent.LABEL_CHANGED} while the
     * transaction is in progress. Returns the cell whose label was changed.
     *
     * @param cell {@link mxCell} whose label should be changed.
     * @param value New label to be assigned.
     * @param evt Optional event that triggered the change.
     */
    labelChanged(cell: mxCell, value: any, evt?: MouseEvent): mxCell;

    /**
     * Sets the new label for a cell. If autoSize is true then
     * {@link cellSizeUpdated} will be called.
     *
     * In the following example, the function is extended to map changes to
     * attributes in an XML node, as shown in {@link convertValueToString}.
     * Alternatively, the handling of this can be implemented as shown in
     * {@link mxGraphModel.valueForCellChanged} without the need to clone the
     * user object.
     *
     * ```javascript
     * var graphCellLabelChanged = graph.cellLabelChanged;
     * graph.cellLabelChanged = function(cell, newValue, autoSize)
     * {
     * 	// Cloned for correct undo/redo
     * 	var elt = cell.value.cloneNode(true);
     *  elt.setAttribute('label', newValue);
     *
     *  newValue = elt;
     *  graphCellLabelChanged.apply(this, arguments);
     * };
     * ```
     *
     * @param cell {@link mxCell} whose label should be changed.
     * @param value New label to be assigned.
     * @param autoSize Boolean that specifies if {@link cellSizeUpdated} should be called.
     */
    cellLabelChanged(cell: mxCell, value: any, autoSize?: boolean): void;

    /**
     * Processes an escape keystroke.
     *
     * @param evt Mouseevent that represents the keystroke.
     */
    escape(evt?: MouseEvent): void;

    /**
     * Processes a singleclick on an optional cell and fires a {@link click} event.
     * The click event is fired initially. If the graph is enabled and the
     * event has not been consumed, then the cell is selected using
     * {@link selectCellForEvent} or the selection is cleared using
     * {@link clearSelection}. The events consumed state is set to true if the
     * corresponding {@link mxMouseEvent} has been consumed.
     *
     * To handle a click event, use the following code.
     *
     * ```javascript
     * graph.addListener(mxEvent.CLICK, function(sender, evt)
     * {
     *   var e = evt.getProperty('event'); // mouse event
     *   var cell = evt.getProperty('cell'); // cell may be null
     *
     *   if (cell != null)
     *   {
     *     // Do something useful with cell and consume the event
     *     evt.consume();
     *   }
     * });
     * ```
     *
     * @param me {@link mxMouseEvent} that represents the single click.
     */
    click(me: mxMouseEvent): void;

    /**
     * Returns true if any sibling of the given cell is selected.
     */
    isSiblingSelected(cell: mxCell): boolean;

    /**
     * Processes a doubleclick on an optional cell and fires a {@link dblclick}
     * event. The event is fired initially. If the graph is enabled and the
     * event has not been consumed, then {@link edit} is called with the given
     * cell. The event is ignored if no cell was specified.
     *
     * Example for overriding this method.
     *
     * ```javascript
     * graph.dblClick = function(evt, cell)
     * {
     *   var mxe = new mxEventObject(mxEvent.DOUBLE_CLICK, 'event', evt, 'cell', cell);
     *   this.fireEvent(mxe);
     *
     *   if (this.isEnabled() && !mxEvent.isConsumed(evt) && !mxe.isConsumed())
     *   {
     * 	   mxUtils.alert('Hello, World!');
     *     mxe.consume();
     *   }
     * }
     * ```
     *
     * Example listener for this event.
     *
     * ```javascript
     * graph.addListener(mxEvent.DOUBLE_CLICK, function(sender, evt)
     * {
     *   var cell = evt.getProperty('cell');
     *   // do something with the cell and consume the
     *   // event to prevent in-place editing from start
     * });
     * ```
     *
     * @param evt Mouseevent that represents the doubleclick.
     * @param cell Optional {@link mxCell} under the mousepointer.
     */
    dblClick(evt: MouseEvent, cell?: mxCell): void;

    /**
     * Handles the {@link mxMouseEvent} by highlighting the {@link mxCellState}.
     *
     * @param me {@link mxMouseEvent} that represents the touch event.
     * @param state Optional {@link mxCellState} that is associated with the event.
     */
    tapAndHold(me: mxMouseEvent): void;

    /**
     * Scrolls the graph to the given point, extending the graph container if
     * specified.
     */
    scrollPointToVisible(x: number, y: number, extend?: boolean, border?: number): void;

    /**
     * Creates and returns an {@link mxPanningManager}.
     */
    createPanningManager(): mxPanningManager;

    /**
     * Returns the size of the border and padding on all four sides of the
     * container. The left, top, right and bottom borders are stored in the x, y,
     * width and height of the returned {@link mxRectangle}, respectively.
     */
    getBorderSizes(): mxRectangle;

    /**
     * Returns the preferred size of the background page if {@link preferPageSize} is true.
     */
    getPreferredPageSize(bounds: mxRectangle, width: number, height: number): mxRectangle;

    /**
     * Scales the graph such that the complete diagram fits into {@link container} and
     * returns the current scale in the view. To fit an initial graph prior to
     * rendering, set {@link mxGraphView.rendering} to false prior to changing the model
     * and execute the following after changing the model.
     *
     * ```javascript
     * graph.fit();
     * graph.view.rendering = true;
     * graph.refresh();
     * ```
     *
     * To fit and center the graph, the following code can be used.
     *
     * ```javascript
     * var margin = 2;
     * var max = 3;
     *
     * var bounds = graph.getGraphBounds();
     * var cw = graph.container.clientWidth - margin;
     * var ch = graph.container.clientHeight - margin;
     * var w = bounds.width / graph.view.scale;
     * var h = bounds.height / graph.view.scale;
     * var s = Math.min(max, Math.min(cw / w, ch / h));
     *
     * graph.view.scaleAndTranslate(s,
     *   (margin + cw - w * s) / (2 * s) - bounds.x / graph.view.scale,
     *   (margin + ch - h * s) / (2 * s) - bounds.y / graph.view.scale);
     * ```
     *
     * @param border Optional number that specifies the border. Default is {@link border}.
     * @param keepOrigin Optional boolean that specifies if the translate should be
     * changed. Default is `false`.
     * @param margin Optional margin in pixels. Default is `0`.
     * @param enabled Optional boolean that specifies if the scale should be set or
     * just returned. Default is `true`.
     * @param ignoreWidth Optional boolean that specifies if the width should be
     * ignored. Default is `false`.
     * @param ignoreHeight Optional boolean that specifies if the height should be
     * ignored. Default is `false`.
     * @param maxHeight Optional maximum height.
     */
    fit(
      border: number,
      keepOrigin?: boolean,
      margin?: number,
      enabled?: boolean,
      ignoreWidth?: boolean,
      ignoreHeight?: boolean,
      maxHeight?: number
    ): number;

    /**
     * Called when the size of the graph has changed. This implementation fires
     * a {@link size} event after updating the clipping region of the SVG element in
     * SVG-bases browsers.
     */
    sizeDidChange(): void;

    /**
     * Resizes the container for the given graph width and height.
     */
    doResizeContainer(width: number, height: number): void;

    /**
     * Invokes from {@link sizeDidChange} to redraw the page breaks.
     *
     * @param visible Boolean that specifies if page breaks should be shown.
     * @param width Specifies the width of the container in pixels.
     * @param height Specifies the height of the container in pixels.
     */
    updatePageBreaks(visible: boolean, width: number, height: number): void;

    /**
     * Returns the style for the given cell from the cell state, if one exists,
     * or using {@link getCellStyle}.
     *
     * @param cell {@link mxCell} whose style should be returned as an array.
     * @param ignoreState Optional boolean that specifies if the cell state should be ignored.
     */
    getCurrentCellStyle(cell: mxCell, ignoreState?: boolean): StyleMap;

    /**
     * Returns an array of key, value pairs representing the cell style for the
     * given cell. If no string is defined in the model that specifies the
     * style, then the default style for the cell is returned or an empty object,
     * if no style can be found. Note: You should try and get the cell state
     * for the given cell and use the cached style in the state before using
     * this method.
     *
     * @param cell {@link mxCell} whose style should be returned as an array.
     */
    getCellStyle(cell: mxCell): StyleMap;

    /**
     * Tries to resolve the value for the image style in the image bundles and
     * turns short data URIs as defined in mxImageBundle to data URIs as
     * defined in RFC 2397 of the IETF.
     */
    postProcessCellStyle(style: StyleMap): StyleMap;

    /**
     * Sets the style of the specified cells. If no cells are given, then the
     * selection cells are changed.
     *
     * @param style String representing the new style of the cells.
     * @param cells Optional array of {@link mxCell} to set the style for. Default is the
     * selection cells.
     */
    setCellStyle(style: string, cells?: mxCell[]): void;

    /**
     * Toggles the boolean value for the given key in the style of the given cell
     * and returns the new value as 0 or 1. If no cell is specified then the
     * selection cell is used.
     *
     * Parameter:
     *
     * @param key String representing the key for the boolean value to be toggled.
     * @param defaultValue Optional boolean default value if no value is defined.
     * Default is `false`.
     * @param cell Optional {@link mxCell} whose style should be modified. Default is
     * the selection cell.
     */
    toggleCellStyle(key: string, defaultValue?: boolean, cell?: mxCell): any;

    /**
     * Toggles the boolean value for the given key in the style of the given cells
     * and returns the new value as 0 or 1. If no cells are specified, then the
     * selection cells are used. For example, this can be used to toggle
     * {@link mxConstants.STYLE_ROUNDED} or any other style with a boolean value.
     *
     * Parameter:
     *
     * @param key String representing the key for the boolean value to be toggled.
     * @param defaultValue Optional boolean default value if no value is defined.
     * Default is `false`.
     * @param cells Optional array of {@link mxCell} whose styles should be modified.
     * Default is the selection cells.
     */
    toggleCellStyles(key: string, defaultValue?: boolean, cells?: mxCell[]): any;

    /**
     * Sets the key to value in the styles of the given cells. This will modify
     * the existing cell styles in-place and override any existing assignment
     * for the given key. If no cells are specified, then the selection cells
     * are changed. If no value is specified, then the respective key is
     * removed from the styles.
     *
     * @param key String representing the key to be assigned.
     * @param value String representing the new value for the key.
     * @param cells Optional array of {@link mxCell} to change the style for. Default is
     * the selection cells.
     */
    setCellStyles(key: string, value: any, cells?: mxCell[]): void;

    /**
     * Toggles the given bit for the given key in the styles of the specified
     * cells.
     *
     * @param key String representing the key to toggle the flag in.
     * @param flag Integer that represents the bit to be toggled.
     * @param cells Optional array of {@link mxCell} to change the style for. Default is
     * the selection cells.
     */
    toggleCellStyleFlags(key: string, flag: number, cells?: mxCell[]): void;

    /**
     * Sets or toggles the given bit for the given key in the styles of the
     * specified cells.
     *
     * @param key String representing the key to toggle the flag in.
     * @param flag Integer that represents the bit to be toggled.
     * @param value Boolean value to be used or null if the value should be toggled.
     * @param cells Optional array of {@link mxCell} to change the style for. Default is
     * the selection cells.
     */
    setCellStyleFlags(key: string, flag: number, value: boolean, cells?: mxCell[]): void;

    /**
     * Aligns the given cells vertically or horizontally according to the given
     * alignment using the optional parameter as the coordinate.
     *
     * @param align Specifies the alignment. Possible values are all constants in
     * mxConstants with an ALIGN prefix.
     * @param cells Array of {@link mxCell} to be aligned.
     * @param param Optional coordinate for the alignment.
     */
    alignCells(align: string, cells: mxCell[], param?: any): mxCell[];

    /**
     * Toggles the style of the given edge between null (or empty) and
     * {@link alternateEdgeStyle}. This method fires {@link mxEvent.FLIP_EDGE} while the
     * transaction is in progress. Returns the edge that was flipped.
     *
     * Here is an example that overrides this implementation to invert the
     * value of {@link mxConstants.STYLE_ELBOW} without removing any existing styles.
     *
     * ```javascript
     * graph.flipEdge = function(edge)
     * {
     *   if (edge != null)
     *   {
     *     var style = this.getCurrentCellStyle(edge);
     *     var elbow = mxUtils.getValue(style, mxConstants.STYLE_ELBOW,
     *         mxConstants.ELBOW_HORIZONTAL);
     *     var value = (elbow == mxConstants.ELBOW_HORIZONTAL) ?
     *         mxConstants.ELBOW_VERTICAL : mxConstants.ELBOW_HORIZONTAL;
     *     this.setCellStyles(mxConstants.STYLE_ELBOW, value, [edge]);
     *   }
     * };
     * ```
     *
     * @param edge {@link mxCell} whose style should be changed.
     */
    flipEdge(edge: mxCell): mxCell;

    /**
     * Adds the specified {@link mxImageBundle}.
     */
    addImageBundle(bundle: mxImageBundle): void;

    /**
     * Removes the specified {@link mxImageBundle}.
     */
    removeImageBundle(bundle: mxImageBundle): void;

    /**
     * Searches all {@link imageBundles} for the specified key and returns the value
     * for the first match or null if the key is not found.
     */
    getImageFromBundles(key: string): string;

    /**
     * Group: Order
     */

    /**
     * Moves the given cells to the front or back. The change is carried out
     * using {@link cellsOrdered}. This method fires {@link mxEvent.ORDER_CELLS} while the
     * transaction is in progress.
     *
     * @param back Boolean that specifies if the cells should be moved to back.
     * @param cells Array of {@link mxCell} to move to the background. If null is
     * specified then the selection cells are used.
     */
    orderCells(back: boolean, cells?: mxCell[]): mxCell[];

    /**
     * Moves the given cells to the front or back. This method fires
     * {@link mxEvent.CELLS_ORDERED} while the transaction is in progress.
     *
     * @param cells Array of {@link mxCell} whose order should be changed.
     * @param back Boolean that specifies if the cells should be moved to back.
     */
    cellsOrdered(cells: mxCell[], back?: boolean): void;

    /**
     * Group: Grouping
     */

    /**
     * Adds the cells into the given group. The change is carried out using
     * {@link cellsAdded}, {@link cellsMoved} and {@link cellsResized}. This method fires
     * {@link mxEvent.GROUP_CELLS} while the transaction is in progress. Returns the
     * new group. A group is only created if there is at least one entry in the
     * given array of cells.
     *
     * @param group {@link mxCell} that represents the target group. If `null` is specified
     * then a new group is created using {@link createGroupCell}.
     * @param border Optional integer that specifies the border between the child
     * area and the group bounds. Default is `0`.
     * @param cells Optional array of {@link mxCell} to be grouped. If `null` is specified
     * then the selection cells are used.
     */
    groupCells(group: mxCell | null, border?: number, cells?: mxCell[]): mxCell;

    /**
     * Returns the cells with the same parent as the first cell
     * in the given array.
     */
    getCellsForGroup(cells: mxCell[]): mxCell[];

    /**
     * Returns the bounds to be used for the given group and children.
     */
    getBoundsForGroup(group: mxCell, children: mxCell[], border?: number): mxRectangle;

    /**
     * Hook for creating the group cell to hold the given array of {@link mxCell} if
     * no group cell was given to the {@link group} function.
     *
     * The following code can be used to set the style of new group cells.
     *
     * ```javascript
     * var graphCreateGroupCell = graph.createGroupCell;
     * graph.createGroupCell = function(cells)
     * {
     *   var group = graphCreateGroupCell.apply(this, arguments);
     *   group.setStyle('group');
     *
     *   return group;
     * };
     */
    createGroupCell(cells: mxCell[]): mxCell;

    /**
     * Ungroups the given cells by moving the children the children to their
     * parents parent and removing the empty groups. Returns the children that
     * have been removed from the groups.
     *
     * @param cells Array of cells to be ungrouped. If null is specified then the
     * selection cells are used.
     */
    ungroupCells(cells: mxCell[]): mxCell[];

    /**
     * Hook to remove the groups after {@link ungroupCells}.
     *
     * @param cells Array of {@link mxCell} that were ungrouped.
     */
    removeCellsAfterUngroup(cells: mxCell[]): void;

    /**
     * Removes the specified cells from their parents and adds them to the
     * default parent. Returns the cells that were removed from their parents.
     *
     * @param cells Array of {@link mxCell} to be removed from their parents.
     */
    removeCellsFromParent(cells: mxCell[]): mxCell[];

    /**
     * Updates the bounds of the given groups to include all children and returns
     * the passed-in cells. Call this with the groups in parent to child order,
     * top-most group first, the cells are processed in reverse order and cells
     * with no children are ignored.
     *
     * @param cells The groups whose bounds should be updated. If this is null, then
     * the selection cells are used.
     * @param border Optional border to be added in the group. Default is `0`.
     * @param moveGroup Optional boolean that allows the group to be moved. Default
     * is false.
     * @param topBorder Optional top border to be added in the group. Default is `0`.
     * @param rightBorder Optional top border to be added in the group. Default is `0`.
     * @param bottomBorder Optional top border to be added in the group. Default is `0`.
     * @param leftBorder Optional top border to be added in the group. Default is `0`.
     */
    updateGroupBounds(
      cells: mxCell[],
      border?: number,
      moveGroup?: boolean,
      topBorder?: number,
      rightBorder?: number,
      bottomBorder?: number,
      leftBorder?: number
    ): mxCell[];

    /**
     * Returns the bounding box for the given array of {@link mxCell}. The bounding box for
     * each cell and its descendants is computed using {@link mxGraphView.getBoundingBox}.
     *
     * @param cells Array of {@link mxCell} whose bounding box should be returned.
     */
    getBoundingBox(cells: mxCell[]): mxRectangle;

    /**
     * Returns the clone for the given cell. Uses {@link cloneCells}.
     *
     * @param cell {@link mxCell} to be cloned.
     * @param allowInvalidEdges Optional boolean that specifies if invalid edges
     * should be cloned. Default is `true`.
     * @param mapping Optional mapping for existing clones.
     * @param keepPosition Optional boolean indicating if the position of the cells should
     * be updated to reflect the lost parent cell. Default is `false`.
     */
    cloneCell(cell: mxCell, allowInvalidEdges?: boolean, mapping?: any, keepPosition?: boolean): mxCell[];

    /**
     * Returns the clones for the given cells. The clones are created recursively
     * using {@link mxGraphModel.cloneCells}. If the terminal of an edge is not in the
     * given array, then the respective end is assigned a terminal point and the
     * terminal is removed.
     *
     * @param cells Array of {@link mxCell} to be cloned.
     * @param allowInvalidEdges Optional boolean that specifies if invalid edges
     * should be cloned. Default is `true`.
     * @param mapping Optional mapping for existing clones.
     * @param keepPosition Optional boolean indicating if the position of the cells should
     * be updated to reflect the lost parent cell. Default is `false`.
     */
    cloneCells(cells: mxCell[], allowInvalidEdges?: boolean, mapping?: any, keepPosition?: boolean): mxCell[];

    /**
     * Adds a new vertex into the given parent {@link mxCell} using value as the user
     * object and the given coordinates as the {@link mxGeometry} of the new vertex.
     * The id and style are used for the respective properties of the new
     * {@link mxCell}, which is returned.
     *
     * When adding new vertices from a mouse event, one should take into
     * account the offset of the graph container and the scale and translation
     * of the view in order to find the correct unscaled, untranslated
     * coordinates using {@link mxGraph.getPointForEvent} as follows:
     *
     * ```javascript
     * var pt = graph.getPointForEvent(evt);
     * var parent = graph.getDefaultParent();
     * graph.insertVertex(parent, null,
     * 			'Hello, World!', x, y, 220, 30);
     * ```
     *
     * For adding image cells, the style parameter can be assigned as
     *
     * ```javascript
     * stylename;image=imageUrl
     * ```
     *
     * See {@link mxGraph} for more information on using images.
     *
     * @param parent {@link mxCell} that specifies the parent of the new vertex.
     * @param id Optional string that defines the Id of the new vertex.
     * @param value Object to be used as the user object.
     * @param x Integer that defines the x coordinate of the vertex.
     * @param y Integer that defines the y coordinate of the vertex.
     * @param width Integer that defines the width of the vertex.
     * @param height Integer that defines the height of the vertex.
     * @param style Optional string that defines the cell style.
     * @param relative Optional boolean that specifies if the geometry is relative.
     * Default is `false`.
     */
    insertVertex(
      parent: mxCell,
      id: string | null,
      value: any,
      x: number,
      y: number,
      width: number,
      height: number,
      style?: string,
      relative?: boolean
    ): mxCell;

    /**
     * Hook method that creates the new vertex for {@link insertVertex}.
     */
    createVertex(
      parent: mxCell,
      id: string | null,
      value: any,
      x: number,
      y: number,
      width: number,
      height: number,
      style?: string,
      relative?: boolean
    ): mxCell;

    /**
     * Adds a new edge into the given parent {@link mxCell} using value as the user
     * object and the given source and target as the terminals of the new edge.
     * The id and style are used for the respective properties of the new
     * {@link mxCell}, which is returned.
     *
     * @param parent {@link mxCell} that specifies the parent of the new edge.
     * @param id Optional string that defines the Id of the new edge.
     * @param value JavaScript object to be used as the user object.
     * @param source {@link mxCell} that defines the source of the edge.
     * @param target {@link mxCell} that defines the target of the edge.
     * @param style Optional string that defines the cell style.
     */
    insertEdge(parent: mxCell, id: string | null, value: any, source: mxCell, target: mxCell, style?: string): mxCell;

    /**
     * Hook method that creates the new edge for {@link insertEdge}. This
     * implementation does not set the source and target of the edge, these
     * are set when the edge is added to the model.
     *
     */
    createEdge(parent: mxCell, id: string | null, value: any, source: mxCell, target: mxCell, style?: string): mxCell;

    /**
     * Adds the edge to the parent and connects it to the given source and
     * target terminals. This is a shortcut method. Returns the edge that was
     * added.
     *
     * @param edge {@link mxCell} to be inserted into the given parent.
     * @param parent {@link mxCell} that represents the new parent. If no parent is
     * given then the default parent is used.
     * @param source Optional {@link mxCell} that represents the source terminal.
     * @param target Optional {@link mxCell} that represents the target terminal.
     * @param index Optional index to insert the cells at. Default is 'to append'.
     */
    addEdge(edge: mxCell, parent?: mxCell, source?: mxCell, target?: mxCell, index?: number): mxCell;

    /**
     * Adds the cell to the parent and connects it to the given source and
     * target terminals. This is a shortcut method. Returns the cell that was
     * added.
     *
     * @param cell {@link mxCell} to be inserted into the given parent.
     * @param parent {@link mxCell} that represents the new parent. If no parent is
     * given then the default parent is used.
     * @param index Optional index to insert the cells at. Default is 'to append'.
     * @param source Optional {@link mxCell} that represents the source terminal.
     * @param target Optional {@link mxCell} that represents the target terminal.
     */
    addCell(cell: mxCell, parent?: mxCell, index?: number, source?: mxCell, target?: mxCell): mxCell;

    /**
     * Adds the cells to the parent at the given index, connecting each cell to
     * the optional source and target terminal. The change is carried out using
     * {@link cellsAdded}. This method fires {@link mxEvent.ADD_CELLS} while the
     * transaction is in progress. Returns the cells that were added.
     *
     * @param cells Array of {@link mxCell} to be inserted.
     * @param parent {@link mxCell} that represents the new parent. If no parent is
     * given then the default parent is used.
     * @param index Optional index to insert the cells at. Default is 'to append'.
     * @param source Optional source {@link mxCell} for all inserted cells.
     * @param target Optional target {@link mxCell} for all inserted cells.
     * @param absolute Optional boolean indicating of cells should be kept at
     * their absolute position. Default is `false`.
     */
    addCells(
      cells: mxCell[],
      parent?: mxCell,
      index?: number,
      source?: mxCell,
      target?: mxCell,
      absolute?: boolean
    ): mxCell[];

    /**
     * Adds the specified cells to the given parent. This method fires
     * {@link mxEvent.CELLS_ADDED} while the transaction is in progress.
     */
    cellsAdded(
      cells: mxCell[],
      parent: mxCell,
      index: number,
      source?: mxCell,
      target?: mxCell,
      absolute?: boolean,
      constrain?: boolean,
      extend?: boolean
    ): void;

    /**
     * Resizes the specified cell to just fit around the its label and/or children
     *
     * @param cell {@link mxCell} to be resized.
     * @param recurse Optional boolean which specifies if all descendants should be
     * autosized. Default is `true`.
     */
    autoSizeCell(cell: mxCell, recurse?: boolean): void;

    /**
     * Removes the given cells from the graph including all connected edges if
     * includeEdges is true. The change is carried out using {@link cellsRemoved}.
     * This method fires {@link mxEvent.REMOVE_CELLS} while the transaction is in
     * progress. The removed cells are returned as an array.
     *
     * @param cells Array of {@link mxCell} to remove. If null is specified then the
     * selection cells which are deletable are used.
     * @param includeEdges Optional boolean which specifies if all connected edges
     * should be removed as well. Default is `true`.
     */
    removeCells(cells: mxCell[], includeEdges?: boolean): mxCell[];

    /**
     * Removes the given cells from the model. This method fires
     * {@link mxEvent.CELLS_REMOVED} while the transaction is in progress.
     *
     * @param cells Array of {@link mxCell} to remove.
     */
    cellsRemoved(cells: mxCell[]): void;

    /**
     * Splits the given edge by adding the newEdge between the previous source
     * and the given cell and reconnecting the source of the given edge to the
     * given cell. This method fires {@link mxEvent.SPLIT_EDGE} while the transaction
     * is in progress. Returns the new edge that was inserted.
     *
     * @param edge {@link mxCell} that represents the edge to be splitted.
     * @param cells {@link mxCell} that represents the cells to insert into the edge.
     * @param newEdge {@link mxCell} that represents the edge to be inserted.
     * @param dx Optional integer that specifies the vector to move the cells.
     * @param dy Optional integer that specifies the vector to move the cells.
     * @param x Integer that specifies the x-coordinate of the drop location.
     * @param y Integer that specifies the y-coordinate of the drop location.
     * @param parent Optional parent to insert the cell. If null the parent of
     * the edge is used.
     */
    splitEdge(
      edge: mxCell,
      cells: mxCell[],
      newEdge: mxCell,
      dx?: number,
      dy?: number,
      x?: number,
      y?: number,
      parent?: mxCell
    ): void;

    /**
     * Group: Cell visibility
     */

    /**
     * Sets the visible state of the specified cells and all connected edges
     * if includeEdges is true. The change is carried out using {@link cellsToggled}.
     * This method fires {@link mxEvent.TOGGLE_CELLS} while the transaction is in
     * progress. Returns the cells whose visible state was changed.
     *
     * @param show Boolean that specifies the visible state to be assigned.
     * @param cells Array of {@link mxCell} whose visible state should be changed. If
     * null is specified then the selection cells are used.
     * @param includeEdges Optional boolean indicating if the visible state of all
     * connected edges should be changed as well. Default is `true`.
     */
    toggleCells(show: boolean, cells: mxCell[], includeEdges: boolean): mxCell[];

    /**
     * Sets the visible state of the specified cells.
     *
     * @param cells Array of {@link mxCell} whose visible state should be changed.
     * @param show Boolean that specifies the visible state to be assigned.
     */
    cellsToggled(cells: mxCell[], show: boolean): void;

    /**
     * Group: Folding
     */

    /**
     * Sets the collapsed state of the specified cells and all descendants
     * if recurse is true. The change is carried out using {@link cellsFolded}.
     * This method fires {@link mxEvent.FOLD_CELLS} while the transaction is in
     * progress. Returns the cells whose collapsed state was changed.
     *
     * @param collapse Boolean indicating the collapsed state to be assigned.
     * @param recurse Optional boolean indicating if the collapsed state of all
     * descendants should be set. Default is `false`.
     * @param cells Array of {@link mxCell} whose collapsed state should be set. If
     * null is specified then the foldable selection cells are used.
     * @param checkFoldable Optional boolean indicating of isCellFoldable should be
     * checked. Default is `false`.
     * @param evt Optional native event that triggered the invocation.
     */
    foldCells(collapse: boolean, recurse: boolean, cells: mxCell[], checkFoldable?: boolean, evt?: Event): mxCell[];

    /**
     * Sets the collapsed state of the specified cells. This method fires
     * {@link mxEvent.CELLS_FOLDED} while the transaction is in progress. Returns the
     * cells whose collapsed state was changed.
     *
     * @param cells Array of {@link mxCell} whose collapsed state should be set.
     * @param collapse Boolean indicating the collapsed state to be assigned.
     * @param recurse Boolean indicating if the collapsed state of all descendants
     * should be set.
     * @param checkFoldable Optional boolean indicating of isCellFoldable should be
     * checked. Default is `false`.
     */
    cellsFolded(cells: mxCell[], collapse: boolean, recurse: boolean, checkFoldable?: boolean): void;

    /**
     * Swaps the alternate and the actual bounds in the geometry of the given
     * cell invoking {@link updateAlternateBounds} before carrying out the swap.
     *
     * @param cell {@link mxCell} for which the bounds should be swapped.
     * @param willCollapse Boolean indicating if the cell is going to be collapsed.
     */
    swapBounds(cell: mxCell, willCollapse: boolean): void;

    /**
     * Updates or sets the alternate bounds in the given geometry for the given
     * cell depending on whether the cell is going to be collapsed. If no
     * alternate bounds are defined in the geometry and
     * {@link collapseToPreferredSize} is true, then the preferred size is used for
     * the alternate bounds. The top, left corner is always kept at the same
     * location.
     *
     * @param cell {@link mxCell} for which the geometry is being udpated.
     * @param g {@link mxGeometry} for which the alternate bounds should be updated.
     * @param willCollapse Boolean indicating if the cell is going to be collapsed.
     */
    updateAlternateBounds(cell: mxCell, geo: mxGeometry, willCollapse: boolean): void;

    /**
     * Returns an array with the given cells and all edges that are connected
     * to a cell or one of its descendants.
     */
    addAllEdges(cells: mxCell[]): mxCell[];

    /**
     * Returns all edges connected to the given cells or its descendants.
     */
    getAllEdges(cells: mxCell[]): mxCell[];

    /**
     * Group: Cell sizing
     */

    /**
     * Updates the size of the given cell in the model using {@link cellSizeUpdated}.
     * This method fires {@link mxEvent.UPDATE_CELL_SIZE} while the transaction is in
     * progress. Returns the cell whose size was updated.
     *
     * @param cell {@link mxCell} whose size should be updated.
     */
    updateCellSize(cell: mxCell, ignoreChildren?: boolean): mxCell;

    /**
     * Updates the size of the given cell in the model using
     * {@link getPreferredSizeForCell} to get the new size.
     *
     * @param cell {@link mxCell} for which the size should be changed.
     */
    cellSizeUpdated(cell: mxCell, ignoreChildren: boolean): void;

    /**
     * Returns the preferred width and height of the given {@link mxCell} as an
     * {@link mxRectangle}. To implement a minimum width, add a new style eg.
     * minWidth in the vertex and override this method as follows.
     *
     * ```javascript
     * var graphGetPreferredSizeForCell = graph.getPreferredSizeForCell;
     * graph.getPreferredSizeForCell = function(cell)
     * {
     *   var result = graphGetPreferredSizeForCell.apply(this, arguments);
     *   var style = this.getCellStyle(cell);
     *
     *   if (style['minWidth'] > 0)
     *   {
     *     result.width = Math.max(style['minWidth'], result.width);
     *   }
     *
     *   return result;
     * };
     * ```
     *
     * @param cell {@link mxCell} for which the preferred size should be returned.
     * @param textWidth Optional maximum text width for word wrapping.
     */
    getPreferredSizeForCell(cell: mxCell, textWidth?: number): mxRectangle;

    /**
     * Sets the bounds of the given cell using {@link resizeCells}. Returns the
     * cell which was passed to the function.
     *
     * @param cell {@link mxCell} whose bounds should be changed.
     * @param bounds {@link mxRectangle} that represents the new bounds.
     */
    resizeCell(cell: mxCell, bounds: mxRectangle, recurse?: boolean): mxCell[];

    /**
     * Sets the bounds of the given cells and fires a {@link mxEvent.RESIZE_CELLS}
     * event while the transaction is in progress. Returns the cells which
     * have been passed to the function.
     *
     * @param cells Array of {@link mxCell} whose bounds should be changed.
     * @param bounds Array of {@link mxRectangles} that represent the new bounds.
     */
    resizeCells(cells: mxCell[], bounds: mxRectangle[], recurse: boolean): mxCell[];

    /**
     * Sets the bounds of the given cells and fires a {@link mxEvent.CELLS_RESIZED}
     * event. If {@link extendParents} is true, then the parent is extended if a
     * child size is changed so that it overlaps with the parent.
     *
     * The following example shows how to control group resizes to make sure
     * that all child cells stay within the group.
     *
     * ```javascript
     * graph.addListener(mxEvent.CELLS_RESIZED, function(sender, evt)
     * {
     *   var cells = evt.getProperty('cells');
     *
     *   if (cells != null)
     *   {
     *     for (var i = 0; i < cells.length; i++)
     *     {
     *       if (graph.getModel().getChildCount(cells[i]) > 0)
     *       {
     *         var geo = graph.getCellGeometry(cells[i]);
     *
     *         if (geo != null)
     *         {
     *           var children = graph.getChildCells(cells[i], true, true);
     *           var bounds = graph.getBoundingBoxFromGeometry(children, true);
     *
     *           geo = geo.clone();
     *           geo.width = Math.max(geo.width, bounds.width);
     *           geo.height = Math.max(geo.height, bounds.height);
     *
     *           graph.getModel().setGeometry(cells[i], geo);
     *         }
     *       }
     *     }
     *   }
     * });
     * ```
     *
     * @param cells Array of {@link mxCell} whose bounds should be changed.
     * @param bounds Array of {@link mxRectangles} that represent the new bounds.
     * @param recurse Optional boolean that specifies if the children should be resized.
     */
    cellsResized(cells: mxCell[], bounds: mxRectangle[], recurse?: boolean): mxGeometry[];

    /**
     * Resizes the parents recursively so that they contain the complete area
     * of the resized child cell.
     *
     * @param cell {@link mxCell} whose bounds should be changed.
     * @param bounds {@link mxRectangles} that represent the new bounds.
     * @param ignoreRelative Boolean that indicates if relative cells should be ignored.
     * @param recurse Optional boolean that specifies if the children should be resized.
     */
    cellResized(cell: mxCell, bounds: mxRectangle, ignoreRelative?: boolean, recurse?: boolean): mxGeometry;

    /**
     * Resizes the child cells of the given cell for the given new geometry with
     * respect to the current geometry of the cell.
     *
     * @param cell {@link mxCell} that has been resized.
     * @param newGeo {@link mxGeometry} that represents the new bounds.
     */
    resizeChildCells(cell: mxCell, newGeo: mxGeometry): void;

    /**
     * Constrains the children of the given cell using {@link constrainChild}.
     *
     * @param cell {@link mxCell} that has been resized.
     */
    constrainChildCells(cell: mxCell): void;

    /**
     * Scales the points, position and size of the given cell according to the
     * given vertical and horizontal scaling factors.
     *
     * @param cell {@link mxCell} whose geometry should be scaled.
     * @param dx Horizontal scaling factor.
     * @param dy Vertical scaling factor.
     * @param recurse Boolean indicating if the child cells should be scaled.
     */
    scaleCell(cell: mxCell, dx: number, dy: number, recurse?: boolean): void;

    /**
     * Resizes the parents recursively so that they contain the complete area
     * of the resized child cell.
     *
     * @param cell {@link mxCell} that has been resized.
     */
    extendParent(cell: mxCell): void;

    /**
     * Group: Cell moving
     */

    /**
     * Clones and inserts the given cells into the graph using the move
     * method and returns the inserted cells. This shortcut is used if
     * cells are inserted via datatransfer.
     *
     * @param cells Array of {@link mxCell} to be imported.
     * @param dx Integer that specifies the x-coordinate of the vector. Default is `0`.
     * @param dy Integer that specifies the y-coordinate of the vector. Default is `0`.
     * @param target {@link mxCell} that represents the new parent of the cells.
     * @param evt Mouseevent that triggered the invocation.
     * @param mapping Optional mapping for existing clones.
     */
    importCells(cells: mxCell[], dx: number, dy: number, target: mxCell, evt?: Event, mapping?: any): mxCell[];

    /**
     * Moves or clones the specified cells and moves the cells or clones by the
     * given amount, adding them to the optional target cell. The evt is the
     * mouse event as the mouse was released. The change is carried out using
     * {@link cellsMoved}. This method fires {@link mxEvent.MOVE_CELLS} while the
     * transaction is in progress. Returns the cells that were moved.
     *
     * Use the following code to move all cells in the graph.
     *
     * ```javascript
     * graph.moveCells(graph.getChildCells(null, true, true), 10, 10);
     * ```
     *
     * @param cells Array of {@link mxCell} to be moved, cloned or added to the target.
     * @param dx Integer that specifies the x-coordinate of the vector. Default is `0`.
     * @param dy Integer that specifies the y-coordinate of the vector. Default is `0`.
     * @param clone Boolean indicating if the cells should be cloned. Default is `false`.
     * @param target {@link mxCell} that represents the new parent of the cells.
     * @param evt Mouseevent that triggered the invocation.
     * @param mapping Optional mapping for existing clones.
     */
    moveCells(
      cells: mxCell[],
      dx: number,
      dy: number,
      clone: boolean,
      target?: mxCell,
      evt?: Event,
      mapping?: any
    ): mxCell[];

    /**
     * Moves the specified cells by the given vector, disconnecting the cells
     * using disconnectGraph is disconnect is true. This method fires
     * {@link mxEvent.CELLS_MOVED} while the transaction is in progress.
     */
    cellsMoved(
      cells: mxCell[],
      dx: number,
      dy: number,
      disconnect?: boolean,
      constrain?: boolean,
      extend?: boolean
    ): void;

    /**
     * Translates the geometry of the given cell and stores the new,
     * translated geometry in the model as an atomic change.
     */
    translateCell(cell: mxCell, dx: number, dy: number): void;

    /**
     * Returns the {@link mxRectangle} inside which a cell is to be kept.
     *
     * @param cell {@link mxCell} for which the area should be returned.
     */
    getCellContainmentArea(cell: mxCell): mxRectangle;

    /**
     * Returns the bounds inside which the diagram should be kept as an
     * {@link mxRectangle}.
     */
    getMaximumGraphBounds(): mxRectangle;

    /**
     * Keeps the given cell inside the bounds returned by
     * {@link getCellContainmentArea} for its parent, according to the rules defined by
     * {@link getOverlap} and {@link isConstrainChild}. This modifies the cell's geometry
     * in-place and does not clone it.
     *
     * @param cell {@link mxCell} which should be constrained.
     * @param sizeFirst Specifies if the size should be changed first. Default is `true`.
     */
    constrainChild(cell: mxCell, sizeFirst?: boolean): void;

    /**
     * Resets the control points of the edges that are connected to the given
     * cells if not both ends of the edge are in the given cells array.
     *
     * @param cells Array of {@link mxCell} for which the connected edges should be
     * reset.
     */
    resetEdges(cells: mxCell[]): void;

    /**
     * Resets the control points of the given edge.
     *
     * @param edge {@link mxCell} whose points should be reset.
     */
    resetEdge(edge: mxCell): mxCell;

    /**
     * Group: Cell connecting and connection constraints
     */

    /**
     * Returns the constraint used to connect to the outline of the given state.
     */
    getOutlineConstraint(point: mxPoint, terminalState: mxCellState, me: mxMouseEvent): mxConnectionConstraint;

    /**
     * Returns an array of all {@link mxConnectionConstraints} for the given terminal. If
     * the shape of the given terminal is a {@link mxStencilShape} then the constraints
     * of the corresponding {@link mxStencil} are returned.
     *
     * @param terminal {@link mxCellState} that represents the terminal.
     * @param source Boolean that specifies if the terminal is the source or target.
     */
    getAllConnectionConstraints(terminal: mxCellState, source?: boolean): mxConnectionConstraint[];

    /**
     * Returns an {@link mxConnectionConstraint} that describes the given connection
     * point. This result can then be passed to {@link getConnectionPoint}.
     *
     * @param edge {@link mxCellState} that represents the edge.
     * @param terminal {@link mxCellState} that represents the terminal.
     * @param source Boolean indicating if the terminal is the source or target.
     */
    getConnectionConstraint(edge: mxCellState, terminal: mxCellState, source?: boolean): mxConnectionConstraint;

    /**
     * Sets the {@link mxConnectionConstraint} that describes the given connection point.
     * If no constraint is given then nothing is changed. To remove an existing
     * constraint from the given edge, use an empty constraint instead.
     *
     * @param edge {@link mxCell} that represents the edge.
     * @param terminal {@link mxCell} that represents the terminal.
     * @param source Boolean indicating if the terminal is the source or target.
     * @param constraint Optional {@link mxConnectionConstraint} to be used for this
     * connection.
     */
    setConnectionConstraint(edge: mxCell, terminal: mxCell, source: boolean, constraint?: mxConnectionConstraint): void;

    /**
     * Returns the nearest point in the list of absolute points or the center
     * of the opposite terminal.
     *
     * @param vertex {@link mxCellState} that represents the vertex.
     * @param constraint {@link mxConnectionConstraint} that represents the connection point
     * constraint as returned by {@link getConnectionConstraint}.
     */
    getConnectionPoint(vertex: mxCellState, constraint: mxConnectionConstraint, round?: boolean): mxPoint;

    /**
     * Connects the specified end of the given edge to the given terminal
     * using {@link cellConnected} and fires {@link mxEvent.CONNECT_CELL} while the
     * transaction is in progress. Returns the updated edge.
     *
     * @param edge {@link mxCell} whose terminal should be updated.
     * @param terminal {@link mxCell} that represents the new terminal to be used.
     * @param source Boolean indicating if the new terminal is the source or target.
     * @param constraint Optional {@link mxConnectionConstraint} to be used for this
     * connection.
     */
    connectCell(edge: mxCell, terminal: mxCell, source: boolean, constraint?: mxConnectionConstraint): mxCell;

    /**
     * Sets the new terminal for the given edge and resets the edge points if
     * {@link resetEdgesOnConnect} is true. This method fires
     * {@link mxEvent.CELL_CONNECTED} while the transaction is in progress.
     *
     * @param edge {@link mxCell} whose terminal should be updated.
     * @param terminal {@link mxCell} that represents the new terminal to be used.
     * @param source Boolean indicating if the new terminal is the source or target.
     * @param constraint {@link mxConnectionConstraint} to be used for this connection.
     */
    cellConnected(edge: mxCell, terminal: mxCell, source: boolean, constraint: mxConnectionConstraint): void;

    /**
     * Disconnects the given edges from the terminals which are not in the
     * given array.
     *
     * @param cells Array of {@link mxCell} to be disconnected.
     */
    disconnectGraph(cells: mxCell[]): void;

    /**
     * Group: Drilldown
     */

    /**
     * Returns the current root of the displayed cell hierarchy. This is a
     * shortcut to {@link mxGraphView.currentRoot} in {@link view}.
     */
    getCurrentRoot(): mxCell;

    /**
     * Returns the translation to be used if the given cell is the root cell as
     * an {@link mxPoint}. This implementation returns null.
     *
     * To keep the children at their absolute position while stepping into groups,
     * this function can be overridden as follows.
     *
     * @example
     * ```javascript
     * var offset = new mxPoint(0, 0);
     *
     * while (cell != null)
     * {
     *   var geo = this.model.getGeometry(cell);
     *
     *   if (geo != null)
     *   {
     *     offset.x -= geo.x;
     *     offset.y -= geo.y;
     *   }
     *
     *   cell = this.model.getParent(cell);
     * }
     *
     * return offset;
     * ```
     *
     * @param cell {@link mxCell} that represents the root.
     */
    getTranslateForRoot(cell: mxCell): mxPoint;

    /**
     * Returns true if the given cell is a "port", that is, when connecting to
     * it, the cell returned by getTerminalForPort should be used as the
     * terminal and the port should be referenced by the ID in either the
     * mxConstants.STYLE_SOURCE_PORT or the or the
     * mxConstants.STYLE_TARGET_PORT. Note that a port should not be movable.
     * This implementation always returns false.
     *
     * A typical implementation is the following:
     *
     * ```javascript
     * graph.isPort = function(cell)
     * {
     *   var geo = this.getCellGeometry(cell);
     *
     *   return (geo != null) ? geo.relative : false;
     * };
     * ```
     *
     * @param cell {@link mxCell} that represents the port.
     */
    isPort(cell: mxCell): boolean;

    /**
     * Returns the terminal to be used for a given port. This implementation
     * always returns the parent cell.
     *
     * @param cell {@link mxCell} that represents the port.
     * @param source If the cell is the source or target port.
     */
    getTerminalForPort(cell: mxCell, source: boolean): mxCell;

    /**
     * Returns the offset to be used for the cells inside the given cell. The
     * root and layer cells may be identified using {@link mxGraphModel.isRoot} and
     * {@link mxGraphModel.isLayer}. For all other current roots, the
     * {@link mxGraphView.currentRoot} field points to the respective cell, so that
     * the following holds: cell == this.view.currentRoot. This implementation
     * returns null.
     *
     * @param cell {@link mxCell} whose offset should be returned.
     */
    getChildOffsetForCell(cell: mxCell): number;

    /**
     * Uses the given cell as the root of the displayed cell hierarchy. If no
     * cell is specified then the selection cell is used. The cell is only used
     * if {@link isValidRoot} returns true.
     *
     * @param cell Optional {@link mxCell} to be used as the new root. Default is the
     * selection cell.
     */
    enterGroup(cell: mxCell): void;

    /**
     * Changes the current root to the next valid root in the displayed cell
     * hierarchy.
     */
    exitGroup(): void;

    /**
     * Uses the root of the model as the root of the displayed cell hierarchy
     * and selects the previous root.
     */
    home(): void;

    /**
     * Returns true if the given cell is a valid root for the cell display
     * hierarchy. This implementation returns true for all non-null values.
     *
     * @param cell {@link mxCell} which should be checked as a possible root.
     */
    isValidRoot(cell: mxCell): boolean;

    /**
     * Group: Graph display
     */

    /**
     * Returns the bounds of the visible graph. Shortcut to
     * {@link mxGraphView.getGraphBounds}. See also: {@link getBoundingBoxFromGeometry}.
     */
    getGraphBounds(): mxRectangle;

    /**
     * Returns the scaled, translated bounds for the given cell. See
     * {@link mxGraphView.getBounds} for arrays.
     *
     * @param cell {@link mxCell} whose bounds should be returned.
     * @param includeEdges Optional boolean that specifies if the bounds of
     * the connected edges should be included. Default is `false`.
     * @param includeDescendants Optional boolean that specifies if the bounds
     * of all descendants should be included. Default is `false`.
     */
    getCellBounds(cell: mxCell, includeEdges?: boolean, includeDescendants?: boolean): mxRectangle;

    /**
     * Returns the bounding box for the geometries of the vertices in the
     * given array of cells. This can be used to find the graph bounds during
     * a layout operation (ie. before the last endUpdate) as follows:
     *
     * ```javascript
     * var cells = graph.getChildCells(graph.getDefaultParent(), true, true);
     * var bounds = graph.getBoundingBoxFromGeometry(cells, true);
     * ```
     *
     * This can then be used to move cells to the origin:
     *
     * ```javascript
     * if (bounds.x < 0 || bounds.y < 0)
     * {
     *   graph.moveCells(cells, -Math.min(bounds.x, 0), -Math.min(bounds.y, 0))
     * }
     * ```
     *
     * Or to translate the graph view:
     *
     * ```javascript
     * if (bounds.x < 0 || bounds.y < 0)
     * {
     *   graph.view.setTranslate(-Math.min(bounds.x, 0), -Math.min(bounds.y, 0));
     * }
     * ```
     *
     * @param cells Array of {@link mxCell} whose bounds should be returned.
     * @param includeEdges Specifies if edge bounds should be included by computing
     * the bounding box for all points in geometry. Default is `false`.
     */
    getBoundingBoxFromGeometry(cells: mxCell[], includeEdges?: boolean): mxRectangle;

    /**
     * Clears all cell states or the states for the hierarchy starting at the
     * given cell and validates the graph. This fires a refresh event as the
     * last step.
     *
     * @param cell Optional {@link mxCell} for which the cell states should be cleared.
     */
    refresh(cell?: mxCell): void;

    /**
     * Snaps the given numeric value to the grid if {@link gridEnabled} is true.
     *
     * @param value Numeric value to be snapped to the grid.
     */
    snap(value: number): number;

    /**
     * Snaps the given delta with the given scaled bounds.
     */
    snapDelta(
      delta: mxRectangle,
      bounds?: mxRectangle,
      ignoreGrid?: boolean,
      ignoreHorizontal?: boolean,
      ignoreVertical?: boolean
    ): mxRectangle;

    /**
     * Shifts the graph display by the given amount. This is used to preview
     * panning operations, use {@link mxGraphView.setTranslate} to set a persistent
     * translation of the view. Fires {@link mxEvent.PAN}.
     *
     * @param dx Amount to shift the graph along the x-axis.
     * @param dy Amount to shift the graph along the y-axis.
     */
    panGraph(dx: number, dy: number): void;

    /**
     * Zooms into the graph by {@link zoomFactor}.
     */
    zoomIn(): void;

    /**
     * Zooms out of the graph by {@link zoomFactor}.
     */
    zoomOut(): void;

    /**
     * Resets the zoom and panning in the view.
     */
    zoomActual(): void;

    /**
     * Zooms the graph to the given scale with an optional boolean center
     * argument, which is passd to {@link zoom}.
     */
    zoomTo(scale: number, center?: boolean): void;

    /**
     * Centers the graph in the container.
     *
     * @param horizontal Optional boolean that specifies if the graph should be centered
     * horizontally. Default is `true`.
     * @param vertical Optional boolean that specifies if the graph should be centered
     * vertically. Default is `true`.
     * @param cx Optional float that specifies the horizontal center. Default is `0.5`.
     * @param cy Optional float that specifies the vertical center. Default is `0.5`.
     */
    center(horizontal?: boolean, vertical?: boolean, cx?: number, cy?: number): void;

    /**
     * Zooms the graph using the given factor. Center is an optional boolean
     * argument that keeps the graph scrolled to the center. If the center argument
     * is omitted, then {@link centerZoom} will be used as its value.
     */
    zoom(factor: number, center?: boolean): void;

    /**
     * Zooms the graph to the specified rectangle. If the rectangle does not have same aspect
     * ratio as the display container, it is increased in the smaller relative dimension only
     * until the aspect match. The original rectangle is centralised within this expanded one.
     *
     * Note that the input rectangular must be un-scaled and un-translated.
     *
     * @param rect The un-scaled and un-translated rectangluar region that should be just visible
     * after the operation
     */
    zoomToRect(rect: mxRectangle): void;

    /**
     * Pans the graph so that it shows the given cell. Optionally the cell may
     * be centered in the container.
     *
     * To center a given graph if the {@link container} has no scrollbars, use the following code.
     *
     * [code]
     * var bounds = graph.getGraphBounds();
     * graph.view.setTranslate(-bounds.x - (bounds.width - container.clientWidth) / 2,
     * 						   -bounds.y - (bounds.height - container.clientHeight) / 2);
     * [/code]
     *
     * @param cell {@link mxCell} to be made visible.
     * @param center Optional boolean flag. Default is `false`.
     */
    scrollCellToVisible(cell: mxCell, center?: boolean): void;

    /**
     * Pans the graph so that it shows the given rectangle.
     *
     * @param rect {@link mxRectangle} to be made visible.
     */
    scrollRectToVisible(rect: mxRectangle): boolean;

    /**
     * Returns the {@link mxGeometry} for the given cell. This implementation uses
     * {@link mxGraphModel.getGeometry}. Subclasses can override this to implement
     * specific geometries for cells in only one graph, that is, it can return
     * geometries that depend on the current state of the view.
     *
     * @param cell {@link mxCell} whose geometry should be returned.
     */
    getCellGeometry(cell: mxCell): mxGeometry;

    /**
     * Returns true if the given cell is visible in this graph. This
     * implementation uses {@link mxGraphModel.isVisible}. Subclassers can override
     * this to implement specific visibility for cells in only one graph, that
     * is, without affecting the visible state of the cell.
     *
     * When using dynamic filter expressions for cell visibility, then the
     * graph should be revalidated after the filter expression has changed.
     *
     * @param cell {@link mxCell} whose visible state should be returned.
     */
    isCellVisible(cell: mxCell): boolean;

    /**
     * Returns true if the given cell is collapsed in this graph. This
     * implementation uses {@link mxGraphModel.isCollapsed}. Subclassers can override
     * this to implement specific collapsed states for cells in only one graph,
     * that is, without affecting the collapsed state of the cell.
     *
     * When using dynamic filter expressions for the collapsed state, then the
     * graph should be revalidated after the filter expression has changed.
     *
     * @param cell {@link mxCell} whose collapsed state should be returned.
     */
    isCellCollapsed(cell: mxCell): boolean;

    /**
     * Returns true if the given cell is connectable in this graph. This
     * implementation uses {@link mxGraphModel.isConnectable}. Subclassers can override
     * this to implement specific connectable states for cells in only one graph,
     * that is, without affecting the connectable state of the cell in the model.
     *
     * @param cell {@link mxCell} whose connectable state should be returned.
     */
    isCellConnectable(cell: mxCell): boolean;

    /**
     * Returns true if perimeter points should be computed such that the
     * resulting edge has only horizontal or vertical segments.
     *
     * @param edge {@link mxCellState} that represents the edge.
     */
    isOrthogonal(edge: mxCellState): boolean;

    /**
     * Returns true if the given cell state is a loop.
     *
     * @param state {@link mxCellState} that represents a potential loop.
     */
    isLoop(state: mxCellState): boolean;

    /**
     * Returns true if the given event is a clone event. This implementation
     * returns true if control is pressed.
     */
    isCloneEvent(evt: MouseEvent): boolean;

    /**
     * Hook for implementing click-through behaviour on selected cells. If this
     * returns true the cell behind the selected cell will be selected. This
     * implementation returns false;
     */
    isTransparentClickEvent(evt: MouseEvent): boolean;

    /**
     * Returns true if the given event is a toggle event. This implementation
     * returns true if the meta key (Cmd) is pressed on Macs or if control is
     * pressed on any other platform.
     */
    isToggleEvent(evt: MouseEvent): boolean;

    /**
     * Returns true if the given mouse event should be aligned to the grid.
     */
    isGridEnabledEvent(evt: MouseEvent): boolean;

    /**
     * Returns true if the given mouse event should be aligned to the grid.
     */
    isConstrainedEvent(evt: MouseEvent): boolean;

    /**
     * Returns true if the given mouse event should not allow any connections to be
     * made. This implementation returns false.
     */
    isIgnoreTerminalEvent(evt: MouseEvent): boolean;

    /**
     * Group: Validation
     */

    /**
     * Displays the given validation error in a dialog. This implementation uses
     * mxUtils.alert.
     */
    validationAlert(message: string): void;

    /**
     * Checks if the return value of {@link getEdgeValidationError} for the given
     * arguments is null.
     *
     * @param edge {@link mxCell} that represents the edge to validate.
     * @param source {@link mxCell} that represents the source terminal.
     * @param target {@link mxCell} that represents the target terminal.
     */
    isEdgeValid(edge: mxCell, source: mxCell, target: mxCell): boolean;

    /**
     * Returns the validation error message to be displayed when inserting or
     * changing an edges' connectivity. A return value of null means the edge
     * is valid, a return value of '' means it's not valid, but do not display
     * an error message. Any other (non-empty) string returned from this method
     * is displayed as an error message when trying to connect an edge to a
     * source and target. This implementation uses the {@link multiplicities}, and
     * checks {@link multigraph}, {@link allowDanglingEdges} and {@link allowLoops} to generate
     * validation errors.
     *
     * For extending this method with specific checks for source/target cells,
     * the method can be extended as follows. Returning an empty string means
     * the edge is invalid with no error message, a non-null string specifies
     * the error message, and null means the edge is valid.
     *
     * ```javascript
     * graph.getEdgeValidationError = function(edge, source, target)
     * {
     *   if (source != null && target != null &&
     *     this.model.getValue(source) != null &&
     *     this.model.getValue(target) != null)
     *   {
     *     if (target is not valid for source)
     *     {
     *       return 'Invalid Target';
     *     }
     *   }
     *
     *   // "Supercall"
     *   return getEdgeValidationError.apply(this, arguments);
     * }
     * ```
     *
     * @param edge {@link mxCell} that represents the edge to validate.
     * @param source {@link mxCell} that represents the source terminal.
     * @param target {@link mxCell} that represents the target terminal.
     */
    getEdgeValidationError(edge: mxCell, source: mxCell, target: mxCell): string;

    /**
     * Hook method for subclassers to return an error message for the given
     * edge and terminals. This implementation returns null.
     *
     * @param edge {@link mxCell} that represents the edge to validate.
     * @param source {@link mxCell} that represents the source terminal.
     * @param target {@link mxCell} that represents the target terminal.
     */
    validateEdge(edge: mxCell, source: mxCell, target: mxCell): string | null;

    /**
     * Validates the graph by validating each descendant of the given cell or
     * the root of the model. Context is an object that contains the validation
     * state for the complete validation run. The validation errors are
     * attached to their cells using {@link setCellWarning}. Returns null in the case of
     * successful validation or an array of strings (warnings) in the case of
     * failed validations.
     *
     * Paramters:
     *
     * @param cell Optional {@link mxCell} to start the validation recursion. Default is
     * the graph root.
     * @param context Object that represents the global validation state.
     */
    validateGraph(cell: mxCell, context: any): string | null;

    /**
     * Checks all {@link multiplicities} that cannot be enforced while the graph is
     * being modified, namely, all multiplicities that require a minimum of
     * 1 edge.
     *
     * @param cell {@link mxCell} for which the multiplicities should be checked.
     */
    getCellValidationError(cell: mxCell): string | null;

    /**
     * Hook method for subclassers to return an error message for the given
     * cell and validation context. This implementation returns null. Any HTML
     * breaks will be converted to linefeeds in the calling method.
     *
     * @param cell {@link mxCell} that represents the cell to validate.
     * @param context Object that represents the global validation state.
     */
    validateCell(cell: mxCell, context: any): string | null;

    /**
     * Group: Graph appearance
     */

    /**
     * Returns the {@link backgroundImage} as an {@link mxImage}.
     */
    getBackgroundImage(): mxImage;

    /**
     * Sets the new {@link backgroundImage}.
     *
     * @param image New {@link mxImage} to be used for the background.
     */
    setBackgroundImage(image: mxImage): void;

    /**
     * Returns the {@link mxImage} used to display the collapsed state of
     * the specified cell state. This returns null for all edges.
     */
    getFoldingImage(state: mxCellState): mxImage;

    /**
     * Returns the textual representation for the given cell. This
     * implementation returns the nodename or string-representation of the user
     * object.
     *
     *
     * The following returns the label attribute from the cells user
     * object if it is an XML node.
     *
     * @example
     * ```javascript
     * graph.convertValueToString = function(cell)
     * {
     * 	return cell.getAttribute('label');
     * }
     * ```
     *
     * See also: {@link cellLabelChanged}.
     *
     * @param cell {@link mxCell} whose textual representation should be returned.
     */
    convertValueToString(cell: mxCell): string;

    /**
     * Returns a string or DOM node that represents the label for the given
     * cell. This implementation uses {@link convertValueToString} if {@link labelsVisible}
     * is true. Otherwise it returns an empty string.
     *
     * To truncate a label to match the size of the cell, the following code
     * can be used.
     *
     * ```javascript
     * graph.getLabel = function(cell)
     * {
     *   var label = getLabel.apply(this, arguments);
     *
     *   if (label != null && this.model.isVertex(cell))
     *   {
     *     var geo = this.getCellGeometry(cell);
     *
     *     if (geo != null)
     *     {
     *       var max = parseInt(geo.width / 8);
     *
     *       if (label.length > max)
     *       {
     *         label = label.substring(0, max)+'...';
     *       }
     *     }
     *   }
     *   return mxUtils.htmlEntities(label);
     * }
     * ```
     *
     * A resize listener is needed in the graph to force a repaint of the label
     * after a resize.
     *
     * ```javascript
     * graph.addListener(mxEvent.RESIZE_CELLS, function(sender, evt)
     * {
     *   var cells = evt.getProperty('cells');
     *
     *   for (var i = 0; i < cells.length; i++)
     *   {
     *     this.view.removeState(cells[i]);
     *   }
     * });
     * ```
     *
     * @param cell {@link mxCell} whose label should be returned.
     */
    getLabel(cell: mxCell): string | Node;

    /**
     * Returns true if the label must be rendered as HTML markup. The default
     * implementation returns {@link htmlLabels}.
     *
     * @param cell {@link mxCell} whose label should be displayed as HTML markup.
     */
    isHtmlLabel(cell: mxCell): boolean;

    /**
     * Returns {@link htmlLabels}.
     */
    isHtmlLabels(): boolean;

    /**
     * Sets {@link htmlLabels}.
     */
    setHtmlLabels(value: boolean): void;

    /**
     * This enables wrapping for HTML labels.
     *
     * Returns true if no white-space CSS style directive should be used for
     * displaying the given cells label. This implementation returns true if
     * {@link mxConstants.STYLE_WHITE_SPACE} in the style of the given cell is 'wrap'.
     *
     * This is used as a workaround for IE ignoring the white-space directive
     * of child elements if the directive appears in a parent element. It
     * should be overridden to return true if a white-space directive is used
     * in the HTML markup that represents the given cells label. In order for
     * HTML markup to work in labels, {@link isHtmlLabel} must also return true
     * for the given cell.
     *
     * @example
     *
     * ```javascript
     * graph.getLabel = function(cell)
     * {
     *   var tmp = getLabel.apply(this, arguments); // "supercall"
     *
     *   if (this.model.isEdge(cell))
     *   {
     *     tmp = '<div style="width: 150px; white-space:normal;">'+tmp+'</div>';
     *   }
     *
     *   return tmp;
     * }
     *
     * graph.isWrapping = function(state)
     * {
     * 	 return this.model.isEdge(state.cell);
     * }
     * ```
     *
     * Makes sure no edge label is wider than 150 pixels, otherwise the content
     * is wrapped. Note: No width must be specified for wrapped vertex labels as
     * the vertex defines the width in its geometry.
     *
     * @param state {@link mxCell} whose label should be wrapped.
     */
    isWrapping(cell: mxCell): boolean;

    /**
     * Returns true if the overflow portion of labels should be hidden. If this
     * returns true then vertex labels will be clipped to the size of the vertices.
     * This implementation returns true if {@link mxConstants.STYLE_OVERFLOW} in the
     * style of the given cell is 'hidden'.
     *
     * @param state {@link mxCell} whose label should be clipped.
     */
    isLabelClipped(cell: mxCell): boolean;

    /**
     * Returns the string or DOM node that represents the tooltip for the given
     * state, node and coordinate pair. This implementation checks if the given
     * node is a folding icon or overlay and returns the respective tooltip. If
     * this does not result in a tooltip, the handler for the cell is retrieved
     * from {@link selectionCellsHandler} and the optional getTooltipForNode method is
     * called. If no special tooltip exists here then {@link getTooltipForCell} is used
     * with the cell in the given state as the argument to return a tooltip for the
     * given state.
     *
     * @param state {@link mxCellState} whose tooltip should be returned.
     * @param node DOM node that is currently under the mouse.
     * @param x X-coordinate of the mouse.
     * @param y Y-coordinate of the mouse.
     */
    getTooltip(state: mxCellState, node: Node, x: number, y: number): string;

    /**
     * Returns the string or DOM node to be used as the tooltip for the given
     * cell. This implementation uses the cells getTooltip function if it
     * exists, or else it returns {@link convertValueToString} for the cell.
     *
     * @example
     *
     * ```javascript
     * graph.getTooltipForCell = function(cell)
     * {
     *   return 'Hello, World!';
     * }
     * ```
     *
     * Replaces all tooltips with the string Hello, World!
     *
     * @param cell {@link mxCell} whose tooltip should be returned.
     */
    getTooltipForCell(cell: mxCell): string;

    /**
     * Returns the string to be used as the link for the given cell. This
     * implementation returns null.
     *
     * @param cell {@link mxCell} whose tooltip should be returned.
     */
    getLinkForCell(cell: mxCell): any;

    /**
     * Returns the cursor value to be used for the CSS of the shape for the
     * given event. This implementation calls {@link getCursorForCell}.
     *
     * @param me {@link mxMouseEvent} whose cursor should be returned.
     */
    getCursorForMouseEvent(me: mxMouseEvent): string;

    /**
     * Returns the cursor value to be used for the CSS of the shape for the
     * given cell. This implementation returns null.
     *
     * @param cell {@link mxCell} whose cursor should be returned.
     */
    getCursorForCell(cell: mxCell): string;

    /**
     * Returns the start size of the given swimlane, that is, the width or
     * height of the part that contains the title, depending on the
     * horizontal style. The return value is an {@link mxRectangle} with either
     * width or height set as appropriate.
     *
     * @param swimlane {@link mxCell} whose start size should be returned.
     * @param ignoreState Optional boolean that specifies if cell state should be ignored.
     */
    getStartSize(swimlane: mxCell, ignoreState?: boolean): mxRectangle;

    /**
     * Returns the direction for the given swimlane style.
     */
    getSwimlaneDirection(style: string): string;

    /**
     * Returns the actual start size of the given swimlane taking into account
     * direction and horizontal and vertial flip styles. The start size is
     * returned as an {@link mxRectangle} where top, left, bottom, right start sizes
     * are returned as x, y, height and width, respectively.
     *
     * @param swimlane {@link mxCell} whose start size should be returned.
     * @param ignoreState Optional boolean that specifies if cell state should be ignored.
     */
    getActualStartSize(swimlane: mxCell, ignoreState?: boolean): mxRectangle;

    /**
     * Returns the image URL for the given cell state. This implementation
     * returns the value stored under {@link mxConstants.STYLE_IMAGE} in the cell
     * style.
     *
     * @param state {@link mxCellState} whose image URL should be returned.
     */
    getImage(state: mxCellState): string;

    /**
     * Returns true if the given state has no stroke- or fillcolor and no image.
     *
     * @param state {@link mxCellState} to check.
     */
    isTransparentState(state: mxCellState): boolean;

    /**
     * Returns the vertical alignment for the given cell state. This
     * implementation returns the value stored under
     * {@link mxConstants.STYLE_VERTICAL_ALIGN} in the cell style.
     *
     * @param state {@link mxCellState} whose vertical alignment should be
     * returned.
     */
    getVerticalAlign(state: mxCellState): string;

    /**
     * Returns the indicator color for the given cell state. This
     * implementation returns the value stored under
     * {@link mxConstants.STYLE_INDICATOR_COLOR} in the cell style.
     *
     * @param state {@link mxCellState} whose indicator color should be
     * returned.
     */
    getIndicatorColor(state: mxCellState): string;

    /**
     * Returns the indicator gradient color for the given cell state. This
     * implementation returns the value stored under
     * {@link mxConstants.STYLE_INDICATOR_GRADIENTCOLOR} in the cell style.
     *
     * @param state {@link mxCellState} whose indicator gradient color should be
     * returned.
     */
    getIndicatorGradientColor(state: mxCellState): string;

    /**
     * Returns the indicator shape for the given cell state. This
     * implementation returns the value stored under
     * {@link mxConstants.STYLE_INDICATOR_SHAPE} in the cell style.
     *
     * @param state {@link mxCellState} whose indicator shape should be returned.
     */
    getIndicatorShape(state: mxCellState): any;

    /**
     * Returns the indicator image for the given cell state. This
     * implementation returns the value stored under
     * {@link mxConstants.STYLE_INDICATOR_IMAGE} in the cell style.
     *
     * @param state {@link mxCellState} whose indicator image should be returned.
     */
    getIndicatorImage(state: mxCellState): any;

    /**
     * Returns the value of {@link border}.
     */
    getBorder(): number;

    /**
     * Sets the value of {@link border}.
     *
     * @param value Positive integer that represents the border to be used.
     */
    setBorder(value: number): void;

    /**
     * Returns true if the given cell is a swimlane in the graph. A swimlane is
     * a container cell with some specific behaviour. This implementation
     * checks if the shape associated with the given cell is a {@link mxSwimlane}.
     *
     * @param cell {@link mxCell} to be checked.
     * @param ignoreState Optional boolean that specifies if the cell state should be ignored.
     */
    isSwimlane(cell: mxCell, ignoreState?: boolean): boolean;

    /**
     * Group: Graph behaviour
     */

    /**
     * Returns {@link resizeContainer}.
     */
    isResizeContainer(): boolean;

    /**
     * Sets {@link resizeContainer}.
     *
     * @param value Boolean indicating if the container should be resized.
     */
    setResizeContainer(value: boolean): void;

    /**
     * Returns true if the graph is {@link enabled}.
     */
    isEnabled(): boolean;

    /**
     * Specifies if the graph should allow any interactions. This
     * implementation updates {@link enabled}.
     *
     * @param value Boolean indicating if the graph should be enabled.
     */
    setEnabled(value: boolean): void;

    /**
     * Returns {@link escapeEnabled}.
     */
    isEscapeEnabled(): boolean;

    /**
     * Sets {@link escapeEnabled}.
     *
     * @param enabled Boolean indicating if escape should be enabled.
     */
    setEscapeEnabled(value: boolean): void;

    /**
     * Returns {@link invokesStopCellEditing}.
     */
    isInvokesStopCellEditing(): boolean;

    /**
     * Sets {@link invokesStopCellEditing}.
     */
    setInvokesStopCellEditing(value: boolean): void;

    /**
     * Returns {@link enterStopsCellEditing}.
     */
    isEnterStopsCellEditing(): boolean;

    /**
     * Sets {@link enterStopsCellEditing}.
     */
    setEnterStopsCellEditing(value: boolean): void;

    /**
     * Returns true if the given cell may not be moved, sized, bended,
     * disconnected, edited or selected. This implementation returns true for
     * all vertices with a relative geometry if {@link locked} is false.
     *
     * @param cell {@link mxCell} whose locked state should be returned.
     */
    isCellLocked(cell: mxCell): boolean;

    /**
     * Returns true if the given cell may not be moved, sized, bended,
     * disconnected, edited or selected. This implementation returns true for
     * all vertices with a relative geometry if {@link locked} is false.
     *
     * @param cell {@link mxCell} whose locked state should be returned.
     */
    isCellsLocked(): boolean;

    /**
     * Sets if any cell may be moved, sized, bended, disconnected, edited or
     * selected.
     *
     * @param value Boolean that defines the new value for {@link cellsLocked}.
     */
    setCellsLocked(value: boolean): void;

    /**
     * Returns the cells which may be exported in the given array of cells.
     */
    getCloneableCells(cells: mxCell[]): mxCell[];

    /**
     * Returns true if the given cell is cloneable. This implementation returns
     * {@link isCellsCloneable} for all cells unless a cell style specifies
     * {@link mxConstants.STYLE_CLONEABLE} to be 0.
     *
     * @param cell Optional {@link mxCell} whose cloneable state should be returned.
     */
    isCellCloneable(cell: mxCell): boolean;

    /**
     * Returns {@link cellsCloneable}, that is, if the graph allows cloning of cells
     * by using control-drag.
     */
    isCellsCloneable(): boolean;

    /**
     * Specifies if the graph should allow cloning of cells by holding down the
     * control key while cells are being moved. This implementation updates
     * {@link cellsCloneable}.
     *
     * @param value Boolean indicating if the graph should be cloneable.
     */
    setCellsCloneable(value: boolean): void;

    /**
     * Returns the cells which may be exported in the given array of cells.
     */
    getExportableCells(cells: mxCell[]): mxCell[];

    /**
     * Returns true if the given cell may be exported to the clipboard. This
     * implementation returns {@link exportEnabled} for all cells.
     *
     * @param cell {@link mxCell} that represents the cell to be exported.
     */
    canExportCell(cell: mxCell): boolean;

    /**
     * Returns the cells which may be imported in the given array of cells.
     */
    getImportableCells(cells: mxCell[]): mxCell[];

    /**
     * Returns true if the given cell may be imported from the clipboard.
     * This implementation returns {@link importEnabled} for all cells.
     *
     * @param cell {@link mxCell} that represents the cell to be imported.
     */
    canImportCell(cell: mxCell): boolean;

    /**
     * Returns true if the given cell is selectable. This implementation
     * returns {@link cellsSelectable}.
     *
     * To add a new style for making cells (un)selectable, use the following code.
     *
     * ```javascript
     * isCellSelectable = function(cell)
     * {
     *   var style = this.getCurrentCellStyle(cell);
     *
     *   return this.isCellsSelectable() && !this.isCellLocked(cell) && style['selectable'] != 0;
     * };
     * ```
     *
     * You can then use the new style as shown in this example.
     *
     * ```javascript
     * graph.insertVertex(parent, null, 'Hello,', 20, 20, 80, 30, 'selectable=0');
     * ```
     *
     * @param cell {@link mxCell} whose selectable state should be returned.
     */
    isCellSelectable(cell: mxCell): boolean;

    /**
     * Returns {@link cellsSelectable}.
     */
    isCellsSelectable(): boolean;

    /**
     * Sets {@link cellsSelectable}.
     */
    setCellsSelectable(value: boolean): void;

    /**
     * Returns the cells which may be exported in the given array of cells.
     */
    getDeletableCells(cells: mxCell[]): mxCell[];

    /**
     * Returns true if the given cell is moveable. This returns
     * {@link cellsDeletable} for all given cells if a cells style does not specify
     * {@link mxConstants.STYLE_DELETABLE} to be 0.
     *
     * @param cell {@link mxCell} whose deletable state should be returned.
     */
    isCellDeletable(cell: mxCell): boolean;

    /**
     * Returns {@link cellsDeletable}.
     */
    isCellsDeletable(): boolean;

    /**
     * Sets {@link cellsDeletable}.
     *
     * @param value Boolean indicating if the graph should allow deletion of cells.
     */
    setCellsDeletable(value: boolean): void;

    /**
     * Returns true if the given edges's label is moveable. This returns
     * {@link movable} for all given cells if {@link isLocked} does not return true
     * for the given cell.
     *
     * @param cell {@link mxCell} whose label should be moved.
     */
    isLabelMovable(cell: mxCell): boolean;

    /**
     * Returns true if the given cell is rotatable. This returns true for the given
     * cell if its style does not specify {@link mxConstants.STYLE_ROTATABLE} to be 0.
     *
     * @param cell {@link mxCell} whose rotatable state should be returned.
     */
    isCellRotatable(cell: mxCell): boolean;

    /**
     * Returns the cells which are movable in the given array of cells.
     */
    getMovableCells(cells: mxCell[]): mxCell[];

    /**
     * Returns true if the given cell is moveable. This returns {@link cellsMovable}
     * for all given cells if {@link isCellLocked} does not return true for the given
     * cell and its style does not specify {@link mxConstants.STYLE_MOVABLE} to be 0.
     *
     * @param cell {@link mxCell} whose movable state should be returned.
     */
    isCellMovable(cell: mxCell): boolean;

    /**
     * Returns {@link cellsMovable}.
     */
    isCellsMovable(): boolean;

    /**
     * Specifies if the graph should allow moving of cells. This implementation
     * updates {@link cellsMsovable}.
     *
     * @param value Boolean indicating if the graph should allow moving of cells.
     */
    setCellsMovable(value: boolean): void;

    /**
     * Returns {@link gridEnabled} as a boolean.
     */
    isGridEnabled(): boolean;

    /**
     * Specifies if the grid should be enabled.
     *
     * @param value Boolean indicating if the grid should be enabled.
     */
    setGridEnabled(value: boolean): void;

    /**
     * Returns {@link portsEnabled} as a boolean.
     */
    isPortsEnabled(): boolean;

    /**
     * Specifies if the ports should be enabled.
     *
     * @param value Boolean indicating if the ports should be enabled.
     */
    setPortsEnabled(value: boolean): void;

    /**
     * Returns {@link gridSize}.
     */
    getGridSize(): number;

    /**
     * Sets {@link gridSize}.
     */
    setGridSize(value: number): void;

    /**
     * Returns {@link tolerance}.
     */
    getTolerance(): number;

    /**
     * Sets {@link tolerance}.
     */
    setTolerance(value: number): void;

    /**
     * Returns {@link vertexLabelsMovable}.
     */
    isVertexLabelsMovable(): boolean;

    /**
     * Sets {@link vertexLabelsMovable}.
     */
    setVertexLabelsMovable(value: boolean): void;

    /**
     * Returns {@link edgeLabelsMovable}.
     */
    isEdgeLabelsMovable(): boolean;

    /**
     * Sets {@link edgeLabelsMovable}.
     */
    setEdgeLabelsMovable(value: boolean): void;

    /**
     * Returns {@link swimlaneNesting} as a boolean.
     */
    isSwimlaneNesting(): boolean;

    /**
     * Specifies if swimlanes can be nested by drag and drop. This is only
     * taken into account if dropEnabled is true.
     *
     * @param value Boolean indicating if swimlanes can be nested.
     */
    setSwimlaneNesting(value: boolean): void;

    /**
     * Returns {@link swimlaneSelectionEnabled} as a boolean.
     */
    isSwimlaneSelectionEnabled(): boolean;

    /**
     * Specifies if swimlanes should be selected if the mouse is released
     * over their content area.
     *
     * @param value Boolean indicating if swimlanes content areas
     * should be selected when the mouse is released over them.
     */
    setSwimlaneSelectionEnabled(value: boolean): void;

    /**
     * Returns {@link multigraph} as a boolean.
     */
    isMultigraph(): boolean;

    /**
     * Specifies if the graph should allow multiple connections between the
     * same pair of vertices.
     *
     * @param value Boolean indicating if the graph allows multiple connections
     * between the same pair of vertices.
     */
    setMultigraph(value: boolean): void;

    /**
     * Returns {@link allowLoops} as a boolean.
     */
    isAllowLoops(): boolean;

    /**
     * Specifies if dangling edges are allowed, that is, if edges are allowed
     * that do not have a source and/or target terminal defined.
     *
     * @param value Boolean indicating if dangling edges are allowed.
     */
    setAllowDanglingEdges(value: boolean): void;

    /**
     * Returns {@link allowDanglingEdges} as a boolean.
     */
    isAllowDanglingEdges(): boolean;

    /**
     * Specifies if edges should be connectable.
     *
     * @param value Boolean indicating if edges should be connectable.
     */
    setConnectableEdges(value: boolean): void;

    /**
     * Returns {@link connectableEdges} as a boolean.
     */
    isConnectableEdges(): boolean;

    /**
     * Specifies if edges should be inserted when cloned but not valid wrt.
     * {@link getEdgeValidationError}. If false such edges will be silently ignored.
     *
     * @param value Boolean indicating if cloned invalid edges should be
     * inserted into the graph or ignored.
     */
    setCloneInvalidEdges(value: boolean): void;

    /**
     * Returns {@link cloneInvalidEdges} as a boolean.
     */
    isCloneInvalidEdges(): boolean;

    /**
     * Specifies if loops are allowed.
     *
     * @param value Boolean indicating if loops are allowed.
     */
    setAllowLoops(value: boolean): void;

    /**
     * Returns {@link disconnectOnMove} as a boolean.
     */
    isDisconnectOnMove(): boolean;

    /**
     * Specifies if edges should be disconnected when moved. (Note: Cloned
     * edges are always disconnected.)
     *
     * @param value Boolean indicating if edges should be disconnected
     * when moved.
     */
    setDisconnectOnMove(value: boolean): void;

    /**
     * Returns {@link dropEnabled} as a boolean.
     */
    isDropEnabled(): boolean;

    /**
     * Specifies if the graph should allow dropping of cells onto or into other
     * cells.
     *
     * @param dropEnabled Boolean indicating if the graph should allow dropping
     * of cells into other cells.
     */
    setDropEnabled(value: boolean): void;

    /**
     * Returns {@link splitEnabled} as a boolean.
     */
    isSplitEnabled(): boolean;

    /**
     * Specifies if the graph should allow dropping of cells onto or into other
     * cells.
     *
     * @param dropEnabled Boolean indicating if the graph should allow dropping
     * of cells into other cells.
     */
    setSplitEnabled(value: boolean): void;

    /**
     * Returns true if the given cell is resizable. This returns
     * {@link cellsResizable} for all given cells if {@link isCellLocked} does not return
     * true for the given cell and its style does not specify
     * {@link mxConstants.STYLE_RESIZABLE} to be 0.
     *
     * @param cell {@link mxCell} whose resizable state should be returned.
     */
    isCellResizable(cell: mxCell): boolean;

    /**
     * Returns {@link cellsResizable}.
     */
    isCellsResizable(): boolean;

    /**
     * Specifies if the graph should allow resizing of cells. This
     * implementation updates {@link cellsResizable}.
     *
     * @param value Boolean indicating if the graph should allow resizing of
     * cells.
     */
    setCellsResizable(value: boolean): void;

    /**
     * Returns true if the given terminal point is movable. This is independent
     * from {@link isCellConnectable} and {@link isCellDisconnectable} and controls if terminal
     * points can be moved in the graph if the edge is not connected. Note that it
     * is required for this to return true to connect unconnected edges. This
     * implementation returns true.
     *
     * @param cell {@link mxCell} whose terminal point should be moved.
     * @param source Boolean indicating if the source or target terminal should be moved.
     */
    isTerminalPointMovable(cell: mxCell, source?: boolean): boolean;

    /**
     * Returns true if the given cell is bendable. This returns {@link cellsBendable}
     * for all given cells if {@link isLocked} does not return true for the given
     * cell and its style does not specify {@link mxConstants.STYLE_BENDABLE} to be 0.
     *
     * @param cell {@link mxCell} whose bendable state should be returned.
     */
    isCellBendable(cell: mxCell): boolean;

    /**
     * Returns {@link cellsBenadable}.
     */
    isCellsBendable(): boolean;

    /**
     * Specifies if the graph should allow bending of edges. This
     * implementation updates {@link bendable}.
     *
     * @param value Boolean indicating if the graph should allow bending of
     * edges.
     */
    setCellsBendable(value: boolean): void;

    /**
     * Returns true if the given cell is editable. This returns {@link cellsEditable} for
     * all given cells if {@link isCellLocked} does not return true for the given cell
     * and its style does not specify {@link mxConstants.STYLE_EDITABLE} to be 0.
     *
     * @param cell {@link mxCell} whose editable state should be returned.
     */
    isCellEditable(cell: mxCell): boolean;

    /**
     * Returns {@link cellsEditable}.
     */
    isCellsEditable(): boolean;

    /**
     * Specifies if the graph should allow in-place editing for cell labels.
     * This implementation updates {@link cellsEditable}.
     *
     * @param value Boolean indicating if the graph should allow in-place
     * editing.
     */
    setCellsEditable(value: boolean): void;

    /**
     * Returns true if the given cell is disconnectable from the source or
     * target terminal. This returns {@link isCellsDisconnectable} for all given
     * cells if {@link isCellLocked} does not return true for the given cell.
     *
     * @param cell {@link mxCell} whose disconnectable state should be returned.
     * @param terminal {@link mxCell} that represents the source or target terminal.
     * @param source Boolean indicating if the source or target terminal is to be
     * disconnected.
     */
    isCellDisconnectable(cell: mxCell, terminal: mxCell, source?: boolean): boolean;

    /**
     * Returns {@link cellsDisconnectable}.
     */
    isCellsDisconnectable(): boolean;

    /**
     * Sets {@link cellsDisconnectable}.
     */
    setCellsDisconnectable(value: boolean): void;

    /**
     * Returns true if the given cell is a valid source for new connections.
     * This implementation returns true for all non-null values and is
     * called by is called by {@link isValidConnection}.
     *
     * @param cell {@link mxCell} that represents a possible source or null.
     */
    isValidSource(cell: mxCell): boolean;

    /**
     * Returns {@link isValidSource} for the given cell. This is called by
     * {@link isValidConnection}.
     *
     * @param cell {@link mxCell} that represents a possible target or null.
     */
    isValidTarget(cell: mxCell): boolean;

    /**
     * Returns true if the given target cell is a valid target for source.
     * This is a boolean implementation for not allowing connections between
     * certain pairs of vertices and is called by {@link getEdgeValidationError}.
     * This implementation returns true if {@link isValidSource} returns true for
     * the source and {@link isValidTarget} returns true for the target.
     *
     * @param source {@link mxCell} that represents the source cell.
     * @param target {@link mxCell} that represents the target cell.
     */
    isValidConnection(source: mxCell, target: mxCell): boolean;

    /**
     * Specifies if the graph should allow new connections. This implementation
     * updates {@link mxConnectionHandler.enabled} in {@link connectionHandler}.
     *
     * @param connectable Boolean indicating if new connections should be allowed.
     */
    setConnectable(connectable: boolean): void;

    /**
     * Returns true if the {@link connectionHandler} is enabled.
     */
    isConnectable(): boolean;

    /**
     * Specifies if tooltips should be enabled. This implementation updates
     * {@link mxTooltipHandler.enabled} in {@link tooltipHandler}.
     *
     * @param enabled Boolean indicating if tooltips should be enabled.
     */
    setTooltips(enabled: boolean): void;

    /**
     * Specifies if panning should be enabled. This implementation updates
     * {@link mxPanningHandler.panningEnabled} in {@link panningHandler}.
     *
     * @param enabled Boolean indicating if panning should be enabled.
     */
    setPanning(enabled: boolean): void;

    /**
     * Returns true if the given cell is currently being edited.
     * If no cell is specified then this returns true if any
     * cell is currently being edited.
     *
     * @param cell {@link mxCell} that should be checked.
     */
    isEditing(cell?: mxCell): boolean;

    /**
     * Returns true if the size of the given cell should automatically be
     * updated after a change of the label. This implementation returns
     * {@link autoSizeCells} or checks if the cell style does specify
     * {@link mxConstants.STYLE_AUTOSIZE} to be 1.
     *
     * @param cell {@link mxCell} that should be resized.
     */
    isAutoSizeCell(cell: mxCell): boolean;

    /**
     * Returns {@link autoSizeCells}.
     */
    isAutoSizeCells(): boolean;

    /**
     * Specifies if cell sizes should be automatically updated after a label
     * change. This implementation sets {@link autoSizeCells} to the given parameter.
     * To update the size of cells when the cells are added, set
     * {@link autoSizeCellsOnAdd} to true.
     *
     * @param value Boolean indicating if cells should be resized
     * automatically.
     */
    setAutoSizeCells(value: boolean): void;

    /**
     * Returns true if the parent of the given cell should be extended if the
     * child has been resized so that it overlaps the parent. This
     * implementation returns {@link isExtendParents} if the cell is not an edge.
     *
     * @param cell {@link mxCell} that has been resized.
     */
    isExtendParent(cell: mxCell): boolean;

    /**
     * Returns {@link extendParents}.
     */
    isExtendParents(): boolean;

    /**
     * Sets {@link extendParents}.
     *
     * @param value New boolean value for {@link extendParents}.
     */
    setExtendParents(value: boolean): void;

    /**
     * Returns {@link extendParentsOnAdd}.
     */
    isExtendParentsOnAdd(cell: mxCell): boolean;

    /**
     * Sets {@link extendParentsOnAdd}.
     *
     * @param value New boolean value for {@link extendParentsOnAdd}.
     */
    setExtendParentsOnAdd(value: boolean): void;

    /**
     * Returns {@link extendParentsOnMove}.
     */
    isExtendParentsOnMove(): boolean;

    /**
     * Sets {@link extendParentsOnMove}.
     *
     * @param value New boolean value for {@link extendParentsOnAdd}.
     */
    setExtendParentsOnMove(value: boolean): void;

    /**
     * Returns {@link recursiveResize}.
     *
     * @param state {@link mxCellState} that is being resized.
     */
    isRecursiveResize(state?: mxCellState): boolean;

    /**
     * Sets {@link recursiveResize}.
     *
     * @param value New boolean value for {@link recursiveResize}.
     */
    setRecursiveResize(value: boolean): void;

    /**
     * Returns true if the given cell should be kept inside the bounds of its
     * parent according to the rules defined by {@link getOverlap} and
     * {@link isAllowOverlapParent}. This implementation returns false for all children
     * of edges and {@link isConstrainChildren} otherwise.
     *
     * @param cell {@link mxCell} that should be constrained.
     */
    isConstrainChild(cell: mxCell): boolean;

    /**
     * Returns {@link constrainChildren}.
     */
    isConstrainChildren(): boolean;

    /**
     * Sets {@link constrainChildren}.
     */
    setConstrainChildren(value: boolean): void;

    /**
     * Returns {@link constrainRelativeChildren}.
     */
    isConstrainRelativeChildren(): boolean;

    /**
     * Sets {@link constrainRelativeChildren}.
     */
    setConstrainRelativeChildren(value: boolean): void;

    /**
     * Returns {@link allowNegativeCoordinates}.
     */
    isAllowNegativeCoordinates(): boolean;

    /**
     * Sets {@link allowNegativeCoordinates}.
     */
    setAllowNegativeCoordinates(value: boolean): void;

    /**
     * Returns a decimal number representing the amount of the width and height
     * of the given cell that is allowed to overlap its parent. A value of 0
     * means all children must stay inside the parent, 1 means the child is
     * allowed to be placed outside of the parent such that it touches one of
     * the parents sides. If {@link isAllowOverlapParent} returns false for the given
     * cell, then this method returns 0.
     *
     * @param cell {@link mxCell} for which the overlap ratio should be returned.
     */
    getOverlap(cell: mxCell): number;

    /**
     * Returns true if the given cell is allowed to be placed outside of the
     * parents area.
     *
     * @param cell {@link mxCell} that represents the child to be checked.
     */
    isAllowOverlapParent(cell: mxCell): boolean;

    /**
     * Returns the cells which are movable in the given array of cells.
     */
    getFoldableCells(cells: mxCell[], collapse: boolean): mxCell[];

    /**
     * Returns true if the given cell is foldable. This implementation
     * returns true if the cell has at least one child and its style
     * does not specify {@link mxConstants.STYLE_FOLDABLE} to be 0.
     *
     * @param cell {@link mxCell} whose foldable state should be returned.
     */
    isCellFoldable(cell: mxCell, collapse: boolean): boolean;

    /**
     * Returns true if the given cell is a valid drop target for the specified
     * cells. If {@link splitEnabled} is true then this returns {@link isSplitTarget} for
     * the given arguments else it returns true if the cell is not collapsed
     * and its child count is greater than 0.
     *
     * @param cell {@link mxCell} that represents the possible drop target.
     * @param cells {@link mxCell} that should be dropped into the target.
     * @param evt Mouseevent that triggered the invocation.
     */
    isValidDropTarget(cell: mxCell, cells: mxCell[], evt: Event): boolean;

    /**
     * Returns true if the given edge may be splitted into two edges with the
     * given cell as a new terminal between the two.
     *
     * @param target {@link mxCell} that represents the edge to be splitted.
     * @param cells {@link mxCell} that should split the edge.
     * @param evt Mouseevent that triggered the invocation.
     */
    isSplitTarget(target: mxCell, cells: mxCell[], evt: Event): boolean;

    /**
     * Returns the given cell if it is a drop target for the given cells or the
     * nearest ancestor that may be used as a drop target for the given cells.
     * If the given array contains a swimlane and {@link swimlaneNesting} is false
     * then this always returns null. If no cell is given, then the bottommost
     * swimlane at the location of the given event is returned.
     *
     * This function should only be used if {@link isDropEnabled} returns true.
     *
     * @param cells Array of {@link mxCell} which are to be dropped onto the target.
     * @param evt Mouseevent for the drag and drop.
     * @param cell {@link mxCell} that is under the mousepointer.
     * @param clone Optional boolean to indicate of cells will be cloned.
     */
    getDropTarget(cells: mxCell[], evt: Event, cell: mxCell, clone?: boolean): mxCell;

    /**
     * Group: Cell retrieval
     */

    /**
     * Returns {@link defaultParent} or {@link mxGraphView.currentRoot} or the first child
     * child of {@link mxGraphModel.root} if both are null. The value returned by
     * this function should be used as the parent for new cells (aka default
     * layer).
     */
    getDefaultParent(): mxCell;

    /**
     * Sets the {@link defaultParent} to the given cell. Set this to null to return
     * the first child of the root in getDefaultParent.
     */
    setDefaultParent(cell: mxCell): void;

    /**
     * Returns the nearest ancestor of the given cell which is a swimlane, or
     * the given cell, if it is itself a swimlane.
     *
     * @param cell {@link mxCell} for which the ancestor swimlane should be returned.
     */
    getSwimlane(cell: mxCell): mxCell;

    /**
     * Returns the bottom-most swimlane that intersects the given point (x, y)
     * in the cell hierarchy that starts at the given parent.
     *
     * @param x X-coordinate of the location to be checked.
     * @param y Y-coordinate of the location to be checked.
     * @param parent {@link mxCell} that should be used as the root of the recursion.
     * Default is {@link defaultParent}.
     */
    getSwimlaneAt(x: number, y: number, parent: mxCell): mxCell;

    /**
     * Returns the bottom-most cell that intersects the given point (x, y) in
     * the cell hierarchy starting at the given parent. This will also return
     * swimlanes if the given location intersects the content area of the
     * swimlane. If this is not desired, then the {@link hitsSwimlaneContent} may be
     * used if the returned cell is a swimlane to determine if the location
     * is inside the content area or on the actual title of the swimlane.
     *
     * @param x X-coordinate of the location to be checked.
     * @param y Y-coordinate of the location to be checked.
     * @param parent {@link mxCell} that should be used as the root of the recursion.
     * Default is current root of the view or the root of the model.
     * @param vertices Optional boolean indicating if vertices should be returned.
     * Default is `true`.
     * @param edges Optional boolean indicating if edges should be returned. Default
     * is `true`.
     * @param ignoreFn Optional function that returns true if cell should be ignored.
     * The function is passed the cell state and the x and y parameter.
     */
    getCellAt(x: number, y: number, parent?: mxCell, vertices?: boolean, edges?: boolean, ignoreFn?: Function): mxCell;

    /**
     * Returns the bottom-most cell that intersects the given point (x, y) in
     * the cell hierarchy that starts at the given parent.
     *
     * @param state {@link mxCellState} that represents the cell state.
     * @param x X-coordinate of the location to be checked.
     * @param y Y-coordinate of the location to be checked.
     */
    intersects(state: mxCellState, x: number, y: number): mxCell;

    /**
     * Returns true if the given coordinate pair is inside the content
     * are of the given swimlane.
     *
     * @param swimlane {@link mxCell} that specifies the swimlane.
     * @param x X-coordinate of the mouse event.
     * @param y Y-coordinate of the mouse event.
     */
    hitsSwimlaneContent(swimlane: mxCell, x: number, y: number): boolean;

    /**
     * Returns the visible child vertices of the given parent.
     *
     * @param parent {@link mxCell} whose children should be returned.
     */
    getChildVertices(parent: mxCell): mxCell[];

    /**
     * Returns the visible child edges of the given parent.
     *
     * @param parent {@link mxCell} whose child vertices should be returned.
     */
    getChildEdges(parent: mxCell): mxCell[];

    /**
     * Returns the visible child vertices or edges in the given parent. If
     * vertices and edges is false, then all children are returned.
     *
     * @param parent {@link mxCell} whose children should be returned.
     * @param vertices Optional boolean that specifies if child vertices should
     * be returned. Default is `false`.
     * @param edges Optional boolean that specifies if child edges should
     * be returned. Default is `false`.
     */
    getChildCells(parent: mxCell, vertices?: boolean, edges?: boolean): mxCell[];

    /**
     * Returns all visible edges connected to the given cell without loops.
     *
     * @param cell {@link mxCell} whose connections should be returned.
     * @param parent Optional parent of the opposite end for a connection to be
     * returned.
     */
    getConnections(cell: mxCell, parent: mxCell): mxCell[];

    /**
     * Returns the visible incoming edges for the given cell. If the optional
     * parent argument is specified, then only child edges of the given parent
     * are returned.
     *
     * @param cell {@link mxCell} whose incoming edges should be returned.
     * @param parent Optional parent of the opposite end for an edge to be
     * returned.
     */
    getIncomingEdges(cell: mxCell, parent: mxCell): mxCell[];

    /**
     * Returns the visible outgoing edges for the given cell. If the optional
     * parent argument is specified, then only child edges of the given parent
     * are returned.
     *
     * @param cell {@link mxCell} whose outgoing edges should be returned.
     * @param parent Optional parent of the opposite end for an edge to be
     * returned.
     */
    getOutgoingEdges(cell: mxCell, parent?: mxCell): mxCell[];

    /**
     * Returns the incoming and/or outgoing edges for the given cell.
     * If the optional parent argument is specified, then only edges are returned
     * where the opposite is in the given parent cell. If at least one of incoming
     * or outgoing is true, then loops are ignored, if both are false, then all
     * edges connected to the given cell are returned including loops.
     *
     * @param cell {@link mxCell} whose edges should be returned.
     * @param parent Optional parent of the opposite end for an edge to be
     * returned.
     * @param incoming Optional boolean that specifies if incoming edges should
     * be included in the result. Default is `true`.
     * @param outgoing Optional boolean that specifies if outgoing edges should
     * be included in the result. Default is `true`.
     * @param includeLoops Optional boolean that specifies if loops should be
     * included in the result. Default is `true`.
     * @param recurse Optional boolean the specifies if the parent specified only
     * need be an ancestral parent, true, or the direct parent, false.
     * Default is false
     */
    getEdges(
      cell: mxCell,
      parent?: mxCell,
      incoming?: boolean,
      outgoing?: boolean,
      includeLoops?: boolean,
      recurse?: boolean
    ): mxCell[];

    /**
     * Returns whether or not the specified parent is a valid
     * ancestor of the specified cell, either direct or indirectly
     * based on whether ancestor recursion is enabled.
     *
     * @param cell {@link mxCell} the possible child cell
     * @param parent {@link mxCell} the possible parent cell
     * @param recurse boolean whether or not to recurse the child ancestors
     */
    isValidAncestor(cell: mxCell, parent: mxCell, recurse?: boolean): boolean;

    /**
     * Returns all distinct visible opposite cells for the specified terminal
     * on the given edges.
     *
     * @param edges Array of {@link mxCell} that contains the edges whose opposite
     * terminals should be returned.
     * @param terminal Terminal that specifies the end whose opposite should be
     * returned.
     * @param sources Optional boolean that specifies if source terminals should be
     * included in the result. Default is `true`.
     * @param targets Optional boolean that specifies if targer terminals should be
     * included in the result. Default is `true`.
     */
    getOpposites(edges: mxCell[], terminal: mxCellState, sources?: boolean, targets?: boolean): mxCellState[];

    /**
     * Returns the edges between the given source and target. This takes into
     * account collapsed and invisible cells and returns the connected edges
     * as displayed on the screen.
     *
     * source -
     * target -
     * directed -
     */
    getEdgesBetween(source: mxCell, target: mxCell, directed?: boolean): mxCell[];

    /**
     * Returns an {@link mxPoint} representing the given event in the unscaled,
     * non-translated coordinate space of {@link container} and applies the grid.
     *
     * @param evt Mousevent that contains the mouse pointer location.
     * @param addOffset Optional boolean that specifies if the position should be
     * offset by half of the {@link gridSize}. Default is `true`.
     */
    getPointForEvent(evt: MouseEvent, addOffset: boolean): mxPoint;

    /**
     * Returns the child vertices and edges of the given parent that are contained
     * in the given rectangle. The result is added to the optional result array,
     * which is returned. If no result array is specified then a new array is
     * created and returned.
     *
     * @param x X-coordinate of the rectangle.
     * @param y Y-coordinate of the rectangle.
     * @param width Width of the rectangle.
     * @param height Height of the rectangle.
     * @param parent {@link mxCell} that should be used as the root of the recursion.
     * Default is current root of the view or the root of the model.
     * @param result Optional array to store the result in.
     */
    getCells(x: number, y: number, width: number, height: number, parent?: mxCell, result?: mxCell[]): mxCell[];

    /**
     * Returns the children of the given parent that are contained in the
     * halfpane from the given point (x0, y0) rightwards or downwards
     * depending on rightHalfpane and bottomHalfpane.
     *
     * @param x0 X-coordinate of the origin.
     * @param y0 Y-coordinate of the origin.
     * @param parent Optional {@link mxCell} whose children should be checked. Default is
     * {@link defaultParent}.
     * @param rightHalfpane Boolean indicating if the cells in the right halfpane
     * from the origin should be returned.
     * @param bottomHalfpane Boolean indicating if the cells in the bottom halfpane
     * from the origin should be returned.
     */
    getCellsBeyond(
      x0: number,
      y0: number,
      parent?: mxCell,
      rightHalfpane?: boolean,
      bottomHalfpane?: boolean
    ): mxCell[];

    /**
     * Returns all children in the given parent which do not have incoming
     * edges. If the result is empty then the with the greatest difference
     * between incoming and outgoing edges is returned.
     *
     * @param parent {@link mxCell} whose children should be checked.
     * @param isolate Optional boolean that specifies if edges should be ignored if
     * the opposite end is not a child of the given parent cell. Default is
     * false.
     * @param invert Optional boolean that specifies if outgoing or incoming edges
     * should be counted for a tree root. If false then outgoing edges will be
     * counted. Default is `false`.
     */
    findTreeRoots(parent: mxCell, isolate?: boolean, invert?: boolean): mxCell[];

    /**
     * Traverses the (directed) graph invoking the given function for each
     * visited vertex and edge. The function is invoked with the current vertex
     * and the incoming edge as a parameter. This implementation makes sure
     * each vertex is only visited once. The function may return false if the
     * traversal should stop at the given vertex.
     *
     * @example
     *
     * ```javascript
     * mxLog.show();
     * var cell = graph.getSelectionCell();
     * graph.traverse(cell, false, function(vertex, edge)
     * {
     *   mxLog.debug(graph.getLabel(vertex));
     * });
     * ```
     *
     * @param vertex {@link mxCell} that represents the vertex where the traversal starts.
     * @param directed Optional boolean indicating if edges should only be traversed
     * from source to target. Default is `true`.
     * @param func Visitor function that takes the current vertex and the incoming
     * edge as arguments. The traversal stops if the function returns false.
     * @param edge Optional {@link mxCell} that represents the incoming edge. This is
     * null for the first step of the traversal.
     * @param visited Optional {@link mxDictionary} from cells to true for the visited cells.
     * @param inverse Optional boolean to traverse in inverse direction. Default is `false`.
     * This is ignored if directed is false.
     */
    traverse(
      vertex: mxCell,
      directed: boolean,
      func: Function,
      edge?: mxCell,
      visited?: mxDictionary<boolean>,
      inverse?: boolean
    ): void;

    /**
     * Group: Selection
     */

    /**
     * Returns true if the given cell is selected.
     *
     * @param cell {@link mxCell} for which the selection state should be returned.
     */
    isCellSelected(cell: mxCell): boolean;

    /**
     * Returns true if the selection is empty.
     */
    isSelectionEmpty(): boolean;

    /**
     * Clears the selection using {@link mxGraphSelectionModel.clear}.
     */
    clearSelection(): void;

    /**
     * Returns the number of selected cells.
     */
    getSelectionCount(): number;

    /**
     * Returns the first cell from the array of selected {@link mxCell}.
     */
    getSelectionCell(): mxCell;

    /**
     * Returns the array of selected {@link mxCell}.
     */
    getSelectionCells(): mxCell[];

    /**
     * Sets the selection cell.
     *
     * @param cell {@link mxCell} to be selected.
     */
    setSelectionCell(cell: mxCell): void;

    /**
     * Sets the selection cell.
     *
     * @param cells Array of {@link mxCell} to be selected.
     */
    setSelectionCells(cells: mxCell[]): void;

    /**
     * Adds the given cell to the selection.
     *
     * @param cell {@link mxCell} to be add to the selection.
     */
    addSelectionCell(cell: mxCell): void;

    /**
     * Adds the given cells to the selection.
     *
     * @param cells Array of {@link mxCell} to be added to the selection.
     */
    addSelectionCells(cells: mxCell[]): void;

    /**
     * Removes the given cell from the selection.
     *
     * @param cell {@link mxCell} to be removed from the selection.
     */
    removeSelectionCell(cell: mxCell): void;

    /**
     * Removes the given cells from the selection.
     *
     * @param cells Array of {@link mxCell} to be removed from the selection.
     */
    removeSelectionCells(cells: mxCell[]): void;

    /**
     * Selects and returns the cells inside the given rectangle for the
     * specified event.
     *
     * @param rect {@link mxRectangle} that represents the region to be selected.
     * @param evt Mouseevent that triggered the selection.
     */
    selectRegion(rect: mxRectangle, evt: Event): mxCell[];

    /**
     * Selects the next cell.
     */
    selectNextCell(): void;

    /**
     * Selects the previous cell.
     */
    selectPreviousCell(): void;

    /**
     * Selects the parent cell.
     */
    selectParentCell(): void;

    /**
     * Selects the first child cell.
     */
    selectChildCell(): void;

    /**
     * Selects the next, parent, first child or previous cell, if all arguments
     * are false.
     *
     * @param isNext Boolean indicating if the next cell should be selected.
     * @param isParent Boolean indicating if the parent cell should be selected.
     * @param isChild Boolean indicating if the first child cell should be selected.
     */
    selectCell(isNext?: boolean, isParent?: boolean, isChild?: boolean): void;

    /**
     * Selects all children of the given parent cell or the children of the
     * default parent if no parent is specified. To select leaf vertices and/or
     * edges use {@link selectCells}.
     *
     * @param parent Optional {@link mxCell} whose children should be selected.
     * Default is {@link defaultParent}.
     * @param descendants Optional boolean specifying whether all descendants should be
     * selected. Default is `false`.
     */
    selectAll(parent: mxCell, descendants?: boolean): void;

    /**
     * Select all vertices inside the given parent or the default parent.
     */
    selectVertices(parent: mxCell, selectGroups: boolean): void;

    /**
     * Select all vertices inside the given parent or the default parent.
     */
    selectEdges(parent: mxCell): void;

    /**
     * Selects all vertices and/or edges depending on the given boolean
     * arguments recursively, starting at the given parent or the default
     * parent if no parent is specified. Use {@link selectAll} to select all cells.
     * For vertices, only cells with no children are selected.
     *
     * @param vertices Boolean indicating if vertices should be selected.
     * @param edges Boolean indicating if edges should be selected.
     * @param parent Optional {@link mxCell} that acts as the root of the recursion.
     * Default is {@link defaultParent}.
     * @param selectGroups Optional boolean that specifies if groups should be
     * selected. Default is `false`.
     */
    selectCells(vertices: boolean, edges: boolean, parent?: mxCell, selectGroups?: boolean): void;

    /**
     * Selects the given cell by either adding it to the selection or
     * replacing the selection depending on whether the given mouse event is a
     * toggle event.
     *
     * @param cell {@link mxCell} to be selected.
     * @param evt Optional mouseevent that triggered the selection.

      */
    selectCellForEvent(cell: mxCell, evt?: MouseEvent): void;

    /**
     * Selects the given cells by either adding them to the selection or
     * replacing the selection depending on whether the given mouse event is a
     * toggle event.
     *
     * @param cells Array of {@link mxCell} to be selected.
     * @param evt Optional mouseevent that triggered the selection.
     */
    selectCellsForEvent(cells: mxCell[], evt?: MouseEvent): void;

    /**
     * Creates a new handler for the given cell state. This implementation
     * returns a new {@link mxEdgeHandler} of the corresponding cell is an edge,
     * otherwise it returns an {@link mxVertexHandler}.
     *
     * @param state {@link mxCellState} whose handler should be created.
     */
    createHandler(state: mxCellState): mxVertexHandler | mxEdgeHandler;

    /**
     * Hooks to create a new {@link mxVertexHandler} for the given {@link mxCellState}.
     *
     * @param state {@link mxCellState} to create the handler for.
     */
    createVertexHandler(state: mxCellState): mxVertexHandler;

    /**
     * Hooks to create a new {@link mxEdgeHandler} for the given {@link mxCellState}.
     *
     * @param state {@link mxCellState} to create the handler for.
     */
    createEdgeHandler(state: mxCellState, edgeStyle: any): mxEdgeHandler;

    /**
     * Hooks to create a new {@link mxEdgeSegmentHandler} for the given {@link mxCellState}.
     *
     * @param state {@link mxCellState} to create the handler for.
     */
    createEdgeSegmentHandler(state: mxCellState): mxEdgeSegmentHandler;

    /**
     * Hooks to create a new {@link mxElbowEdgeHandler} for the given {@link mxCellState}.
     *
     * @param state {@link mxCellState} to create the handler for.
     */
    createElbowEdgeHandler(state: mxCellState): mxElbowEdgeHandler;

    /**
     * Group: Graph events
     */

    /**
     * Adds a listener to the graph event dispatch loop. The listener
     * must implement the mouseDown, mouseMove and mouseUp methods
     * as shown in the {@link mxMouseEvent} class.
     *
     * @param listener Listener to be added to the graph event listeners.
     */
    addMouseListener(listener: { [key: string]: (sender: mxEventSource, me: mxMouseEvent) => void }): void;

    /**
     * Removes the specified graph listener.
     *
     * @param listener Listener to be removed from the graph event listeners.
     */
    removeMouseListener(listener: { [key: string]: (sender: mxEventSource, me: mxMouseEvent) => void }): void;

    /**
     * Sets the graphX and graphY properties if the given {@link mxMouseEvent} if
     * required and returned the event.
     *
     * @param me {@link mxMouseEvent} to be updated.
     * @param evtName Name of the mouse event.
     */
    updateMouseEvent(me: mxMouseEvent, evtName: string): mxMouseEvent;

    /**
     * Returns the state for the given touch event.
     */
    getStateForTouchEvent(evt: MouseEvent | TouchEvent): mxCellState;

    /**
     * Returns true if the event should be ignored in {@link fireMouseEvent}.
     */
    isEventIgnored(evtName: string, me: mxMouseEvent, sender: mxEventSource): boolean;

    /**
     * Hook for ignoring synthetic mouse events after touchend in Firefox.
     */
    isSyntheticEventIgnored(evtName: string, me: mxMouseEvent, sender: mxEventSource): boolean;

    /**
     * Returns true if the event should be ignored in {@link fireMouseEvent}. This
     * implementation returns true for select, option and input (if not of type
     * checkbox, radio, button, submit or file) event sources if the event is not
     * a mouse event or a left mouse button press event.
     *
     * @param evtName The name of the event.
     * @param me {@link mxMouseEvent} that should be ignored.
     */
    isEventSourceIgnored(evtName: string, me: mxMouseEvent): boolean;

    /**
     * Returns the {@link mxCellState} to be used when firing the mouse event for the
     * given state. This implementation returns the given state.
     *
     * {@link mxCellState} - State whose event source should be returned.
     */
    getEventState(state: mxCellState): mxCellState;

    /**
     * Dispatches the given event in the graph event dispatch loop. Possible
     * event names are {@link mxEvent.MOUSE_DOWN}, {@link mxEvent.MOUSE_MOVE} and
     * {@link mxEvent.MOUSE_UP}. All listeners are invoked for all events regardless
     * of the consumed state of the event.
     *
     * @param evtName String that specifies the type of event to be dispatched.
     * @param me {@link mxMouseEvent} to be fired.
     * @param sender Optional sender argument. Default is `this`.
     */
    fireMouseEvent(evtName: string, me: mxMouseEvent, sender?: mxEventSource): void;

    /**
     * Consumes the given {@link mxMouseEvent} if it's a touchStart event.
     */
    consumeMouseEvent(evtName: string, me: mxMouseEvent, sender: mxEventSource): void;

    /**
     * Dispatches a {@link mxEvent.GESTURE} event. The following example will resize the
     * cell under the mouse based on the scale property of the native touch event.
     *
     * ```javascript
     * graph.addListener(mxEvent.GESTURE, function(sender, eo)
     * {
     *   var evt = eo.getProperty('event');
     *   var state = graph.view.getState(eo.getProperty('cell'));
     *
     *   if (graph.isEnabled() && graph.isCellResizable(state.cell) && Math.abs(1 - evt.scale) > 0.2)
     *   {
     *     var scale = graph.view.scale;
     *     var tr = graph.view.translate;
     *
     *     var w = state.width * evt.scale;
     *     var h = state.height * evt.scale;
     *     var x = state.x - (w - state.width) / 2;
     *     var y = state.y - (h - state.height) / 2;
     *
     *     var bounds = new mxRectangle(graph.snap(x / scale) - tr.x,
     *     		graph.snap(y / scale) - tr.y, graph.snap(w / scale), graph.snap(h / scale));
     *     graph.resizeCell(state.cell, bounds);
     *     eo.consume();
     *   }
     * });
     * ```
     *
     * @param evt Gestureend event that represents the gesture.
     * @param cell Optional {@link mxCell} associated with the gesture.
     */
    fireGestureEvent(evt: any, cell?: mxCell): void;

    /**
     * Destroys the graph and all its resources.
     */
    destroy(): void;
  }
}
