declare module 'mxgraph' {
  /**
   * Sets the horizontal locations of node and edge dummy nodes on each layer.
   * Uses median down and up weighings as well as heuristics to straighten edges as
   * far as possible.
   */
  class mxCoordinateAssignment extends mxHierarchicalLayoutStage {
    /**
     * Creates a coordinate assignment.
     *
     * @param layout
     * @param intraCellSpacing        the minimum buffer between cells on the same rank
     * @param interRankCellSpacing    the minimum distance between cells on adjacent ranks
     * @param orientation             the position of the root node(s) relative to the graph
     * @param initialX                the leftmost coordinate node placement starts at
     * @param parallelEdgeSpacing
     */
    constructor(
      layout: mxHierarchicalLayout,
      intraCellSpacing: number,
      interRankCellSpacing: number,
      orientation: string,
      initialX: number,
      parallelEdgeSpacing: number
    );

    /**
     * Reference to the enclosing {@link mxHierarchicalLayout}.
     */
    layout: mxHierarchicalLayout;

    /**
     * The minimum buffer between cells on the same rank.
     * @default 30
     */
    intraCellSpacing: number;

    /**
     * The minimum distance between cells on adjacent ranks.
     * @default 100
     */
    interRankCellSpacing: number;

    /**
     * The distance between each parallel edge on each ranks for long edges.
     * @default 10
     */
    parallelEdgeSpacing: number;

    /**
     * The number of heuristic iterations to run
     * @default 8
     */
    maxIterations: number;

    /**
     * The preferred horizontal distance between edges exiting a vertex
     * @default 5
     */
    prefHozEdgeSep: number;

    /**
     * The preferred vertical offset between edges exiting a vertex.
     * @default 2
     */
    prefVertEdgeOff: number;

    /**
     * The minimum distance for an edge jetty from a vertex
     * @default 12
     */
    minEdgeJetty: number;

    /**
     * The size of the vertical buffer in the center of inter-rank channels
     * where edge control points should not be placed
     * @default 4
     */
    channelBuffer: number;

    /**
     * Map of internal edges and (x,y) pair of positions of the start and end jetty
     * for that edge where it connects to the source and target vertices.
     * Note this should technically be a WeakHashMap, but since JS does not
     * have an equivalent, housekeeping must be performed before using.
     * i.e. check all edges are still in the model and clear the values.
     * Note that the y co-ord is the offset of the jetty, not the
     * absolute point
     */
    // TODO to be reviewed
    jettyPositions: Record<string, Array<number>>;

    /**
     * The position of the root ( start ) node(s) relative to the rest of the
     * laid out graph.
     * @default {@link mxConstants.DIRECTION_NORTH}
     */
    orientation: string;

    /**
     * The minimum x position node placement starts at
     */
    initialX: number;

    /**
     * The maximum x value this positioning lays up to
     */
    limitX: number;

    /**
     * The sum of x-displacements for the current iteration
     */
    currentXDelta: number;

    /**
     * The rank that has the widest x position
     */
    widestRank: number;

    /**
     * Internal cache of top-most values of Y for each rank
     */
    rankTopY: Array<number>;

    /**
     * Internal cache of bottom-most value of Y for each rank
     */
    rankBottomY: Array<number>;

    /**
     * The X-coordinate of the edge of the widest rank
     */
    widestRankValue: number;

    /**
     * The width of all the ranks
     */
    rankWidths: Array<number>;

    /**
     * The Y-coordinate of all the ranks
     */
    rankY: Array<number>;

    /**
     * Whether or not to perform local optimisations and iterate multiple times through the algorithm.
     * @default true
     */
    fineTuning: number;

    /**
     * A store of connections to the layer above for speed
     */
    // TODO nextLayerConnectedCache type. The js code of this class do not used it!
    nextLayerConnectedCache: any;

    /**
     * A store of connections to the layer below for speed
     */
    // TODO previousLayerConnectedCache type. The js code of this class do not used it!
    previousLayerConnectedCache: any;

    /**
     * Padding added to resized parents
     * @default 10
     */
    groupPadding: number;

    /**
     * Utility method to display current positions
     */
    printStatus(): void;

    /**
     * A basic horizontal coordinate assignment algorithm
     */
    execute(parent: mxCell): void;

    /**
     * Performs one median positioning sweep in both directions
     */
    minNode(model: mxGraphHierarchyModel): void;

    /**
     * Performs one median positioning sweep in one direction
     *
     * @param i       the iteration of the whole process
     * @param model   model an internal model of the hierarchical layout
     */
    medianPos(i: number, model: mxGraphHierarchyModel): void;

    /**
     * Performs median minimisation over one rank.
     *
     * @param rankValue       the layer number of this rank
     * @param model           an internal model of the hierarchical layout
     * @param nextRankValue   the layer number whose connected cels are to be laid out relative to
     */
    rankMedianPosition(rankValue: number, model: mxGraphHierarchyModel, nextRankValue: number): void;

    /**
     * Calculates the priority the specified cell has based on the type of its
     * cell and the cells it is connected to on the next layer
     *
     * @param currentCell   the cell whose weight is to be calculated
     * @param collection    the cells the specified cell is connected to
     */
    calculatedWeightedValue(currentCell: mxCell, collection: Array<mxCell>): number;

    /**
     * Calculates the median position of the connected cell on the specified rank
     *
     * @param connectedCells    the cells the candidate connects to on this level
     * @param rankValue         the layer number of this rank
     */
    medianXValue(connectedCells: Array<mxCell>, rankValue: number): number;

    /**
     * Sets up the layout in an initial positioning. The ranks are all centered
     * as much as possible along the middle vertex in each rank. The other cells
     * are then placed as close as possible on either side.
     *
     * @param facade    the facade describing the input graph
     * @param model     an internal model of the hierarchical layout
     */
    // TODO facade type (seems unused in js code)
    initialCoords(facade: any, model: mxGraphHierarchyModel): void;

    /**
     * Sets up the layout in an initial positioning. All the first cells in each
     * rank are moved to the left and the rest of the rank inserted as close
     * together as their size and buffering permits. This method works on just
     * the specified rank.
     *
     * Parameters:
     *
     * @param rankValue the current rank being processed
     * @param graph     the facade describing the input graph
     * @param model     an internal model of the hierarchical layout
     */
    // TODO graph type (seems unused in js code)
    rankCoordinates(rankValue: number, graph: any, model: mxGraphHierarchyModel): void;

    /**
     * Calculates the width rank in the hierarchy. Also set the y value of each
     * rank whilst performing the calculation
     *
     * @param graph   the facade describing the input graph
     * @param model   an internal model of the hierarchical layout
     */
    // TODO graph type (seems unused in js code)
    calculateWidestRank(graph: any, model: mxGraphHierarchyModel): void;

    /**
     * Straightens out chains of virtual nodes where possibleacade to those stored after this layout
     * processing step has completed.
     *
     * @param graph   the facade describing the input graph
     * @param model   an internal model of the hierarchical layout
     */
    // TODO graph type (seems unused in js code)
    minPath(graph: any, model: mxGraphHierarchyModel): void;

    /**
     * Determines whether or not a node may be moved to the specified x
     * position on the specified rank
     *
     * @param model       the layout model
     * @param cell        the cell being analysed
     * @param rank        the layer of the cell
     * @param position    the x position being sought
     */
    repositionValid(model: mxGraphHierarchyModel, cell: mxCell, rank: number, position: number): boolean;

    /**
     * Sets the cell locations in the facade to those stored after this layout
     * processing step has completed.
     *
     * @param graph   the input graph
     * @param model   the layout model
     */
    // TODO graph type (seems unused in js code)
    setCellLocations(graph: any, model: mxGraphHierarchyModel): void;

    /**
     * Separates the x position of edges as they connect to vertices
     *
     * @param model the layout model
     */
    localEdgeProcessing(model: mxGraphHierarchyModel): void;

    /**
     * Fixes the control points
     */
    setEdgePosition(cell: mxCell): void;

    /**
     * Fixes the position of the specified vertex.
     *
     * @param cell the vertex to position
     */
    setVertexLocation(cell: mxCell): void;

    /**
     * Hook to add additional processing
     */
    processReversedEdge(graph: mxGraph, model: mxGraphModel): void;
  }
}
