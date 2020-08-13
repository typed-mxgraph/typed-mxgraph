declare module 'mxgraph' {
  /**
   * Extends {@link mxGraphLayout} to implement a radial tree algorithm. This
   * layout is suitable for graphs that have no cycles (trees). Vertices that are
   * not connected to the tree will be ignored by this layout.
   *
   * @example
   * ```javascript
   * var layout = new mxRadialTreeLayout(graph);
   * layout.execute(graph.getDefaultParent());
   * ```
   */
  class mxRadialTreeLayout extends mxGraphLayout {
    /**
     * Constructs a new radial tree layout for the specified graph
     */
    constructor(graph: mxGraph);

    /**
     * The initial offset to compute the angle position.
     * @default 0.5
     */
    angleOffset: number;

    /**
     * The X co-ordinate of the root cell
     * @default 0
     */
    rootx: number;

    /**
     * The Y co-ordinate of the root cell
     * @default 0
     */
    rooty: number;

    /**
     * Holds the levelDistance.
     * @default 120
     */
    levelDistance: number;

    /**
     * Holds the nodeDistance.
     * @default 10
     */
    nodeDistance: number;

    /**
     * Specifies if the radios should be computed automatically
     * @default false
     */
    autoRadius: boolean;

    /**
     * Specifies if edges should be sorted according to the order of their
     * opposite terminal cell in the model.
     * @default false
     */
    sortEdges: boolean;

    /**
     * Array of leftmost x coordinate of each row
     */
    rowMinX: Array<number>;

    /**
     * Array of rightmost x coordinate of each row
     */
    rowMaxX: Array<number>;

    /**
     * Array of x coordinate of leftmost vertex of each row
     */
    rowMinCenX: Array<number>;

    /**
     * Variable: rowMaxCenX
     *
     * Array of x coordinate of rightmost vertex of each row
     */
    rowMaxCenX: Array<number>;

    /**
     * Array of y deltas of each row behind root vertex, also the radius in the tree
     */
    rowRadi: Array<number>;

    /**
     * Array of vertices on each row
     */
    row: Array<mxCell>;

    /**
     * Returns a boolean indicating if the given {@link mxCell} should be ignored as a vertex.
     *
     * @param vertex {@link mxCell} whose ignored state should be returned.
     * @return true if the cell has no connections.
     */
    isVertexIgnored(vertex: mxCell): boolean;

    /**
     * Function: execute
     *
     * Implements <mxGraphLayout.execute>.
     *
     * If the parent has any connected edges, then it is used as the root of
     * the tree. Else, <mxGraph.findTreeRoots> will be used to find a suitable
     * root node within the set of children of the given parent.
     *
     * Parameters:
     *
     * @param parent    {@link mxCell} whose children should be laid out.
     * @param root      Optional {@link mxCell} that will be used as the root of the tree.
     */
    execute(parent: mxCell, root?: mxCell): void;

    /**
     * Recursive function to calculate the dimensions of each row
     *
     * @param row      Array of internal nodes, the children of which are to be processed.
     * @param rowNum   Integer indicating which row is being processed.
     */
    calcRowDims(row: Array<number>, rowNum: number): void;
  }
}
