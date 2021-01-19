declare module 'mxgraph' {
  /**
   * A hierarchical layout algorithm.
   */
  class mxSwimlaneLayout extends mxGraphLayout {
    /**
     * Constructs a new hierarchical layout algorithm.
     *
     * @param graph - Reference to the enclosing <mxGraph>.
     * @param orientation - Optional constant that defines the orientation of this layout. Default is {@link mxConstants.DIRECTION_NORTH}
     * @param deterministic - Optional boolean that specifies if this layout should be deterministic. Default is true.
     */
    constructor(graph: mxGraph, orientation?: string, deterministic?: boolean);

    /**
     * Holds the array of {@link mxCell} that this layout contains.
     */
    roots: Array<mxCell>;

    /**
     * Holds the array of {@link mxCell} of the ordered swimlanes to lay out
     */
    swimlanes: Array<mxCell>;

    /**
     * The cell width of any dummy vertices inserted
     * @default 50
     */
    dummyVertexWidth: number;

    /**
     * Specifies if the parent should be resized after the layout so that it
     * contains all the child cells. Default is false. See also <parentBorder>.
     * @default false
     */
    resizeParent: boolean;

    /**
     * Specifies if the parent location should be maintained, so that the
     * top, left corner stays the same before and after execution of
     * the layout.
     * @default false for backwards compatibility.
     */
    maintainParentLocation: boolean;

    /**
     * Specifies if the parent should be moved if {@link resizeParent} is enabled.
     * @default false
     */
    moveParent: boolean;

    /**
     * The border to be added around the children if the parent is to be resized using {@link resizeParent}.
     * @default 30
     */
    parentBorder: number;

    /**
     * The spacing buffer added between cells on the same layer.
     * @default 30
     */
    intraCellSpacing: number;

    /**
     * The spacing buffer added between cell on adjacent layers.
     * @default 100
     */
    interRankCellSpacing: number;

    /**
     * The spacing buffer between unconnected hierarchies.
     * @default 60
     */
    interHierarchySpacing: number;

    /**
     * The distance between each parallel edge on each ranks for long edges.
     * @default 10.
     */
    parallelEdgeSpacing: number;

    /**
     * The position of the root node(s) relative to the laid out graph in.
     * @default {@link mxConstants.DIRECTION_NORTH}
     */
    orientation: string;

    /**
     * Whether or not to perform local optimisations and iterate multiple times through the algorithm.
     * @default true
     */
    fineTuning: boolean;

    /**
     * Variable: tightenToSource
     *
     * Whether or not to tighten the assigned ranks of vertices up towards the source cells.
     */
    tightenToSource: boolean;

    /**
     * Specifies if the STYLE_NOEDGESTYLE flag should be set on edges that are modified by the result
     * @default true
     */
    disableEdgeStyle: boolean;

    /**
     * Whether or not to drill into child cells and layout in reverse
     * group order. This also cause the layout to navigate edges whose
     * terminal vertices have different parents but are in the same
     * ancestry chain.
     * @default true
     */
    traverseAncestors: boolean;

    /**
     * The internal {@link mxSwimlaneModel} formed of the layout.
     * @default null
     */
    model: mxSwimlaneModel;

    /**
     * A cache of edges whose source terminal is the key
     */
    edgesCache: mxDictionary<mxCell>;

    /**
     * A cache of edges whose source terminal is the key
     */
    edgeSourceTermCache: mxDictionary<mxCell>;

    /**
     * A cache of edges whose source terminal is the key
     */
    edgesTargetTermCache: mxDictionary<mxCell>;

    /**
     *
     * The style to apply between cell layers to edge segments.
     * @default {@link mxHierarchicalEdgeStyle.POLYLINE}
     */
    edgeStyle: string;

    /**
     * @return the internal {@link mxSwimlaneModel} for this layout algorithm.
     */
    getModel(): mxSwimlaneModel;

    /**
     * Executes the layout for the children of the specified parent.
     *
     * @param parent      Parent {@link mxCell} that contains the children to be laid out.
     * @param swimlanes   Ordered array of swimlanes to be laid out
     */
    execute(parent: mxCell, swimlanes?: Array<mxCell>): void;

    /**
     * Updates the bounds of the given array of groups so that it includes all child vertices.
     */
    updateGroupBounds(): void;

    /**
     * Returns all visible children in the given parent which do not have
     * incoming edges. If the result is empty then the children with the
     * maximum difference between incoming and outgoing edges are returned.
     * This takes into account edges that are being promoted to the given
     * root due to invisible children or collapsed cells.
     *
     * @param parent    {@link mxCell} whose children should be checked.
     * @param vertices  array of vertices to limit search to
     */
    findRoots(parent: mxCell, vertices: Array<mxCell>): Array<mxCell>;

    /**
     * Returns the connected edges for the given cell.
     *
     * @param cell {@link mxCell} whose edges should be returned.
     */
    getEdges(cell: mxCell): Array<mxCell>;

    /**
     * Function: getVisibleTerminal
     *
     * Helper function to return visible terminal for edge allowing for ports
     *
     * Parameters:
     *
     * @param edge      {@link mxCell} whose edges should be returned.
     * @param source    boolean that specifies whether the source or target terminal is to be returned
     */
    getVisibleTerminal(edge: mxCell, source: boolean): mxCell;

    /**
     * The API method used to exercise the layout upon the graph description
     * and produce a separate description of the vertex position and edge
     * routing changes made. It runs each stage of the layout that has been
     * created.
     */
    run(parent: mxCell): void;

    /**
     * Creates an array of descendant cells
     */
    filterDescendants(cell: mxCell, result: Array<mxCell>): void;

    /**
     * Returns true if the given cell is a "port", that is, when connecting to
     * it, its parent is the connecting vertex in terms of graph traversal
     *
     * @param cell {@link mxCell} that represents the port.
     */
    isPort(cell: mxCell): boolean;

    /**
     * Returns the edges between the given source and target. This takes into account collapsed and invisible cells and ports.
     *
     * @param source
     * @param target
     * @param directed default false
     */
    getEdgesBetween(source: mxCell, target: mxCell, directed?: boolean): Array<mxCell>;

    /**
     * Traverses the (directed) graph invoking the given function for each
     * visited vertex and edge. The function is invoked with the current vertex
     * and the incoming edge as a parameter. This implementation makes sure
     * each vertex is only visited once. The function may return false if the
     * traversal should stop at the given vertex.
     *
     * @param vertex          {@link mxCell} that represents the vertex where the traversal starts.
     * @param directed        boolean indicating if edges should only be traversed from source to target. Default is true.
     * @param edge            Optional {@link mxCell} that represents the incoming edge. This is null for the first step of the traversal.
     * @param allVertices     Array of cell paths for the visited cells.
     * @param currentComp
     * @param hierarchyVertices
     * @param filledVertexSet
     * @param swimlaneIndex   the laid out order index of the swimlane vertex is contained in
     */
    traverse(vertex: mxCell, directed?: boolean, func?: Function, edge?: mxCell, visited?: mxDictionary): void;
    traverse(
      vertex: mxCell,
      directed?: boolean,
      edge?: mxCell,
      allVertices?: Array<mxCell>,
      currentComp?: Array<mxCell>,
      hierarchyVertices?: Array<mxCell>,
      filledVertexSet?: Array<mxCell>,
      swimlaneIndex?: number
    ): void;

    /**
     * Executes the cycle stage using mxMinimumCycleRemover.
     */
    cycleStage(parent: mxCell): void;

    /**
     * Implements first stage of a Sugiyama layout.
     */
    layeringStage(): void;

    /**
     * Executes the crossing stage using {@link mxMedianHybridCrossingReduction}.
     */
    crossingStage(parent: mxCell): void;

    /**
     * Executes the placement stage using {@link mxCoordinateAssignment}.
     */
    placementStage(initialX: number, parent: mxCell): number;
  }
}
