declare module 'mxgraph' {
  /**
   * @class mxGraphLayout
   *
   * Base class for all layout algorithms in mxGraph. Main public functions are
   * {@link moveCell} for handling a moved cell within a layouted parent, and {@link execute} for
   * running the layout on a given parent cell.
   *
   * Known Subclasses:
   *
   * {@link mxCircleLayout}, {@link mxCompactTreeLayout}, {@link mxCompositeLayout},
   * {@link mxFastOrganicLayout}, {@link mxParallelEdgeLayout}, {@link mxPartitionLayout},
   * {@link mxStackLayout}
   */
  class mxGraphLayout {
    /**
     * Constructs a new layout using the given layouts.
     * @param {mxGraph} graph   Enclosing
     */
    constructor(graph: mxGraph);

    /**
     * Reference to the enclosing {@link mxGraph}.
     */
    graph: mxGraph;

    /**
     * Boolean indicating if the bounding box of the label should be used if
     * its available. Default is true.
     */
    useBoundingBox: boolean;

    /**
     * The parent cell of the layout, if any
     */
    parent: mxCell;

    /**
     * Notified when a cell is being moved in a parent that has automatic
     * layout to update the cell state (eg. index) so that the outcome of the
     * layout will position the vertex as close to the point (x, y) as
     * possible.
     *
     * Empty implementation.
     *
     * @param cell {@link mxCell} which has been moved.
     * @param x X-coordinate of the new cell location.
     * @param y Y-coordinate of the new cell location.
     */
    moveCell(cell: mxCell, x: number, y: number): void;

    /**
     * Executes the layout algorithm for the children of the given parent.
     *
     * @param parent {@link mxCell} whose children should be layed out.
     */
    execute(parent: mxCell): void;

    /**
     * Returns the graph that this layout operates on.
     */
    getGraph(): mxGraph;

    /**
     * Returns the constraint for the given key and cell. The optional edge and
     * source arguments are used to return inbound and outgoing routing-
     * constraints for the given edge and vertex. This implementation always
     * returns the value for the given key in the style of the given cell.
     *
     * @param key Key of the constraint to be returned.
     * @param cell {@link mxCell} whose constraint should be returned.
     * @param edge Optional {@link mxCell} that represents the connection whose constraint
     * should be returned. Default is null.
     * @param source Optional boolean that specifies if the connection is incoming
     * or outgoing. Default is null.
     */
    getConstraint(key: string, cell: mxCell, edge?: mxCell, source?: boolean): any;

    /**
     * Traverses the (directed) graph invoking the given function for each
     * visited vertex and edge. The function is invoked with the current vertex
     * and the incoming edge as a parameter. This implementation makes sure
     * each vertex is only visited once. The function may return false if the
     * traversal should stop at the given vertex.
     *
     * Example:
     *
     * (code)
     * mxLog.show();
     * var cell = graph.getSelectionCell();
     * graph.traverse(cell, false, function(vertex, edge)
     * {
     *   mxLog.debug(graph.getLabel(vertex));
     * });
     * (end)
     *
     * @param vertex {@link mxCell} that represents the vertex where the traversal starts.
     * @param directed Optional boolean indicating if edges should only be traversed
     * from source to target. Default is true.
     * @param func Visitor function that takes the current vertex and the incoming
     * edge as arguments. The traversal stops if the function returns false.
     * @param edge Optional {@link mxCell} that represents the incoming edge. This is
     * null for the first step of the traversal.
     * @param visited Optional {@link mxDictionary} of cell paths for the visited cells.
     */
    traverse(vertex: mxCell, directed?: boolean, func?: Function, edge?: mxCell, visited?: mxDictionary): void;

    /**
     * Returns true if the given parent is an ancestor of the given child.
     *
     * @param parent {@link mxCell} that specifies the parent.
     * @param child {@link mxCell} that specifies the child.
     * @param traverseAncestors boolean whether to
     */
    isAncestor(parent: mxCell, child: mxCell, traverseAncestors?: boolean): boolean;

    /**
     * Returns a boolean indicating if the given {@link mxCell} is movable or
     * bendable by the algorithm. This implementation returns true if the given
     * cell is movable in the graph.
     *
     * @param cell {@link mxCell} whose movable state should be returned.
     */
    isVertexMovable(cell: mxCell): boolean;

    /**
     * Returns a boolean indicating if the given {@link mxCell} should be ignored by
     * the algorithm. This implementation returns false for all vertices.
     *
     * @param vertex {@link mxCell} whose ignored state should be returned.
     */
    isVertexIgnored(vertex: mxCell): boolean;

    /**
     * Returns a boolean indicating if the given {@link mxCell} should be ignored by
     * the algorithm. This implementation returns false for all vertices.
     *
     * @param cell {@link mxCell} whose ignored state should be returned.
     */
    isEdgeIgnored(edge: mxCell): boolean;

    /**
     * Disables or enables the edge style of the given edge.
     */
    setEdgeStyleEnabled(edge: mxCell, value: any): void;

    /**
     * Disables or enables orthogonal end segments of the given edge.
     */
    setOrthogonalEdge(edge: mxCell, value: any): void;

    /**
     * Determines the offset of the given parent to the parent
     * of the layout
     */
    getParentOffset(parent: mxCell): mxPoint;

    /**
     * Replaces the array of mxPoints in the geometry of the given edge
     * with the given array of mxPoints.
     */
    setEdgePoints(edge: mxCell, points: Array<mxPoint>): void;

    /**
     * Sets the new position of the given cell taking into account the size of
     * the bounding box if {@link useBoundingBox} is true. The change is only carried
     * out if the new location is not equal to the existing location, otherwise
     * the geometry is not replaced with an updated instance. The new or old
     * bounds are returned (including overlapping labels).
     *
     * @param cell {@link mxCell} whose geometry is to be set.
     * @param x Integer that defines the x-coordinate of the new location.
     * @param y Integer that defines the y-coordinate of the new location.
     */
    setVertexLocation(cell: mxCell, x: number, y: number): mxRectangle;

    /**
     * Returns an {@link mxRectangle} that defines the bounds of the given cell or
     * the bounding box if {@link useBoundingBox} is true.
     */
    getVertexBounds(cell: mxCell): mxRectangle;

    /**
     * Shortcut to {@link mxGraph.updateGroupBounds} with moveGroup set to true.
     */
    arrangeGroups(
      cells: Array<mxCell>,
      border?: number,
      topBorder?: number,
      rightBorder?: number,
      bottomBorder?: number,
      leftBorder?: number
    ): Array<mxCell>;
  }

  /**
   * @class WeightedCellSorter
   *
   * A utility class used to track cells whilst sorting occurs on the weighted
   * sum of their connected edges. Does not violate (x.compareTo(y)==0) ==
   * (x.equals(y))
   *
   */
  class WeightedCellSorter {
    /**
     * Constructs a new weighted cell sorted for the given cell and weight.
     * @constructor
     * @param {mxCell} cell
     * @param {number} weightedValue
     */
    constructor(cell: mxCell, weightedValue: number);

    /**
     * The weighted value of the cell stored.
     */
    weightedValue: number;

    /**
     * Whether or not to flip equal weight values.
     */
    nudge: boolean;

    /**
     * Whether or not this cell has been visited in the current assignment.
     */
    visited: boolean;

    /**
     * The index this cell is in the model rank.
     */
    rankIndex: number;

    /**
     * The cell whose median value is being calculated.
     */
    cell: mxCell;

    /**
     * Compares two WeightedCellSorters.
     */
    compare(a: WeightedCellSorter, b: WeightedCellSorter): number;
  }
}
