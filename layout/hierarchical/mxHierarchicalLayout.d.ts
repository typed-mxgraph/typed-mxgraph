declare module 'mxgraph' {
  export const mxHierarchicalEdgeStyle: {
    ORTHOGONAL: 1;
    POLYLINE: 2;
    STRAIGHT: 3;
    CURVE: 4;
  };

  /**
   * @class
   *
   * A hierarchical layout algorithm.
   *
   * @extends {mxGraphLayout}
   */
  class mxHierarchicalLayout extends mxGraphLayout {
    /**
     * @constructor
     *
     * Constructs a new hierarchical layout algorithm.
     *
     * @param graph -Reference to the enclosing {@link mxGraph}.
     * @param orientation -Optional constant that defines the orientation of this
     * layout.
     * @param deterministic -Optional boolean that specifies if this layout should be
     * deterministic. Default is true.
     */
    constructor(graph: mxGraph, orientation?: string, deterministic?: boolean);

    /**
     * Specifies if the parent should be resized after the layout so that it contains all the child cells.
     * @default false
     */
    resizeParent: boolean;

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
     * The position of the root node(s) relative to the laid out graph in.
     * @default {@link mxConstants.DIRECTION_NORTH}
     */
    orientation: string;

    deterministic: boolean;

    /**
     * Holds the array of {@link mxCell} that this layout contains.
     */
    roots: Array<mxCell>;

    /**
     * Specifies if the parent location should be maintained, so that the
     * top, left corner stays the same before and after execution of
     * the layout. Default is false for backwards compatibility.
     */
    maintainParentLocation: boolean;

    /**
     * Specifies if the parent should be moved if {@link resizeParent} is enabled.
     * Default is false.
     */
    moveParent: boolean;

    /**
     * The border to be added around the children if the parent is to be
     * resized using {@link resizeParent}. Default is 0.
     */
    parentBorder: number;

    /**
     * The distance between each parallel edge on each ranks for long edges.
     * Default is 10.
     */
    parallelEdgeSpacing: number;

    /**
     * Whether or not to perform local optimisations and iterate multiple times
     * through the algorithm. Default is true.
     */
    fineTuning: boolean;

    /**
     *
     * Whether or not to tighten the assigned ranks of vertices up towards
     * the source cells. Default is true.
     */
    tightenToSource: boolean;

    /**
     * Specifies if the STYLE_NOEDGESTYLE flag should be set on edges that are
     * modified by the result. Default is true.
     */
    disableEdgeStyle: boolean;

    /**
     * Whether or not to drill into child cells and layout in reverse
     * group order. This also cause the layout to navigate edges whose
     * terminal vertices have different parents but are in the same
     * ancestry chain. Default is true.
     */
    traverseAncestors: boolean;

    /**
     * The internal {@link mxGraphHierarchyModel} formed of the layout.
     */
    model: mxGraphHierarchyModel;

    /**
     * A cache of edges whose source terminal is the key
     */
    edgesCache: any;

    /**
     * A cache of edges whose source terminal is the key
     */
    edgeSourceTermCache: any;

    /**
     * A cache of edges whose source terminal is the key
     */
    edgesTargetTermCache: any;

    /**
     * The style to apply between cell layers to edge segments.
     * Default is {@link mxHierarchicalEdgeStyle.POLYLINE}.
     */
    edgeStyle: number;

    /**
     * Returns the internal {@link mxGraphHierarchyModel} for this layout algorithm.
     */
    getModel(): mxGraphHierarchyModel;

    /**
     * Executes the layout for the children of the specified parent.
     *
     * @param parent -Parent {@link mxCell} that contains the children to be laid out.
     * @param roots -Optional starting roots of the layout.
     */
    execute(parent: mxCell, roots?: Array<mxCell>): void;

    /**
     * Returns all visible children in the given parent which do not have
     * incoming edges. If the result is empty then the children with the
     * maximum difference between incoming and outgoing edges are returned.
     * This takes into account edges that are being promoted to the given
     * root due to invisible children or collapsed cells.
     *
     * @param parent -{@link mxCell} whose children should be checked.
     * @param vertices -array of vertices to limit search to
     */
    findRoots(parent: mxCell, vertices: mxCell[]): mxCell[];

    /**
     * Returns the connected edges for the given cell.
     *
     * @param cell -{@link mxCell} whose edges should be returned.
     */
    getEdges(cell: mxCell): mxCell[];

    /**
     * Helper function to return visible terminal for edge allowing for ports
     *
     * @param edge -{@link mxCell} whose edges should be returned.
     * @param source -Boolean that specifies whether the source or target terminal is to be returned
     */
    getVisibleTerminal(edge: mxCell, source?: boolean): mxCell;

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
    filterDescendants(cell: mxCell, result: any): void;

    /**
     * Returns true if the given cell is a "port", that is, when connecting to
     * it, its parent is the connecting vertex in terms of graph traversal
     *
     * @param cell -{@link mxCell} that represents the port.
     */
    isPort(cell: mxCell): boolean;

    /**
     * Returns the edges between the given source and target. This takes into
     * account collapsed and invisible cells and ports.
     *
     * source -
     * target -
     * directed -
     */
    getEdgesBetween(source: mxCell, target: mxCell, directed?: boolean): mxCell[];

    /**
     * Traverses the (directed) graph invoking the given function for each
     * visited vertex and edge. The function is invoked with the current vertex
     * and the incoming edge as a parameter. This implementation makes sure
     * each vertex is only visited once. The function may return false if the
     * traversal should stop at the given vertex.
     *
     * @param vertex -{@link mxCell} that represents the vertex where the traversal starts.
     * @param directed -boolean indicating if edges should only be traversed
     * from source to target. Default is true.
     * @param edge -Optional {@link mxCell} that represents the incoming edge. This is
     * null for the first step of the traversal.
     * @param allVertices -Array of cell paths for the visited cells.
     */
    traverse(vertex: mxCell, directed?: boolean, func?: Function, edge?: mxCell, visited?: mxDictionary): void;
    traverse(
      vertex: mxCell,
      directed?: boolean,
      edge?: mxCell,
      allVertices?: mxCell[],
      currentComp?: any,
      hierarchyVertices?: Array<any>,
      filledVertexSet?: any
    ): any;

    /**
     * Executes the cycle stage using mxMinimumCycleRemover.
     */
    cycleStage(parent: mxCell): void;

    /**
     * Implements first stage of a Sugiyama layout.
     */
    layeringStage(): void;

    /**
     * Executes the crossing stage using mxMedianHybridCrossingReduction.
     */
    crossingStage(parent: mxCell): void;

    /**
     * Executes the placement stage using mxCoordinateAssignment.
     */
    placementStage(initialX: number, parent: mxCell): number;
  }
}
