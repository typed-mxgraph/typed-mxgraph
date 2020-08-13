declare module 'mxgraph' {
  /**
   * Sets the horizontal locations of node and edge dummy nodes on each layer.
   * Uses median down and up weighings as well heuristic to straighten edges as
   * far as possible.
   */
  class mxMedianHybridCrossingReduction extends mxHierarchicalLayoutStage {
    constructor(layout: mxHierarchicalLayout);

    /**
     * Reference to the enclosing {@link mxHierarchicalLayout}.
     */
    layout: mxHierarchicalLayout;

    /**
     * The maximum number of iterations to perform whilst reducing edge crossings.
     * @default 24
     */
    maxIterations: number;

    /**
     * Stores each rank as a collection of cells in the best order found for
     * each layer so far
     */
    // TODO type
    nestedBestRanks: any;

    /**
     * The total number of crossings found in the best configuration so far
     * @default 0
     */
    currentBestCrossings: number;

    /**
     * The total number of crossings found in the best configuration so far
     * @default 0
     */
    iterationsWithoutImprovement: number;

    /**
     * The total number of crossings found in the best configuration so far
     * @default 2
     */
    maxNoImprovementIterations: number;

    /**
     * Performs a vertex ordering within ranks as described by Gansner et al 1993
     */
    execute(parent: mxCell): void;

    /**
     * Calculates the total number of edge crossing in the current graph.
     * Returns the current number of edge crossings in the hierarchy graph
     * model in the current candidate layout
     *
     * @param model   the internal model describing the hierarchy
     */
    calculateCrossings(model: mxGraphHierarchyModel): number;

    /**
     * Calculates the number of edges crossings between the specified rank and
     * the rank below it. Returns the number of edges crossings with the rank
     * beneath
     *
     * Parameters:
     *
     * @param i       the topmost rank of the pair ( higher rank value )
     * @param model   the internal model describing the hierarchy
     */
    calculateRankCrossing(i: number, model: mxGraphHierarchyModel): number;

    /**
     * Takes each possible adjacent cell pair on each rank and checks if
     * swapping them around reduces the number of crossing
     *
     * @param mainLoopIteration   the iteration number of the main loop
     * @param model               the internal model describing the hierarchy
     */
    transpose(mainLoopIteration: number, model: mxGraphHierarchyModel): void;

    /**
     * Sweeps up or down the layout attempting to minimise the median placement
     * of connected cells on adjacent ranks
     *
     * @param iteration   the iteration number of the main loop
     * @param model       the internal model describing the hierarchy
     */
    weightedMedian(iteration: number, model: mxGraphHierarchyModel): void;

    /**
     * Attempts to minimise the median placement of connected cells on this rank
     * and one of the adjacent ranks
     *
     * Parameters:
     *
     * @param rankValue       the layer number of this rank
     * @param downwardSweep   whether or not this is a downward sweep through the graph
     */
    // TODO rankValue type
    medianRank(rankValue: number | string, downwardSweep: boolean): void;

    /**
     * Calculates the median rank order positioning for the specified cell using
     * the connected cells on the specified rank. Returns the median rank
     * ordering value of the connected cells
     *
     * Parameters:
     *
     * @param connectedCells  the cells on the specified rank connected to the specified cell
     * @param rankValue       the rank that the connected cell lie upon
     */
    // TODO rankValue type
    medianValue(connectedCells: Array<mxGraphAbstractHierarchyCell>, rankValue: number | string): number;
  }

  /**
   * A utility class used to track cells whilst sorting occurs on the median
   * values. Does not violate (x.compareTo(y)==0) == (x.equals(y))
   */
  class MedianCellSorter {
    /**
     * The weighted value of the cell stored.
     * @default 0
     */
    medianValue: number;

    /**
     * Variable: cell
     *
     * The cell whose median value is being calculated
     * @default false
     */
    cell: boolean;

    /**
     * Compares two MedianCellSorters.
     */
    compare(a: MedianCellSorter, b: MedianCellSorter): number;
  }
}
