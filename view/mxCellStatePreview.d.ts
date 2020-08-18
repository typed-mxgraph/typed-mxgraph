declare module 'mxgraph' {
  /**
   *
   * @class mxCellStatePreview
   *
   * Implements a live preview for moving cells.
   */
  class mxCellStatePreview {
    /**
     * Constructs a move preview for the given graph.
     *
     * @param {mxGraph} graph Reference to the enclosing <mxGraph>.
     * @constructor
     * @memberof mxCellStatePreview
     */
    constructor(graph: mxGraph);

    /**
     * Reference to the enclosing <mxGraph>.
     */
    graph: mxGraph;

    /**
     * Reference to the enclosing <mxGraph>.
     */
    deltas: mxDictionary;

    /**
     * Contains the number of entries in the map.
     */
    count: number;

    /**
     * Returns true if this contains no entries.
     */
    isEmpty(): boolean;

    /**
     *
     *
     * @param {mxCellState} state
     * @param {number} dx
     * @param {number} dy
     * @param {boolean} add
     * @param {boolean} includeEdges
     * @return {*}  {mxPoint}
     * @memberof mxCellStatePreview
     */
    moveState(state: mxCellState, dx: number, dy: number, add: boolean, includeEdges: boolean): mxPoint;

    /**
     *
     *
     * @param {Function} visitor
     * @memberof mxCellStatePreview
     */
    show(visitor: Function): void;

    /**
     *
     *
     * @param {mxCellState} state
     * @param {number} dx
     * @param {number} dy
     * @memberof mxCellStatePreview
     */
    translateState(state: mxCellState, dx: number, dy: number): void;

    /**
     *
     *
     * @param {mxCellState} state
     * @param {number} dx
     * @param {number} dy
     * @param {Function} visitor
     * @memberof mxCellStatePreview
     */
    revalidateState(state: mxCellState, dx: number, dy: number, visitor: Function): void;

    /**
     *
     *
     * @param {mxCellState} state
     * @memberof mxCellStatePreview
     */
    addEdges(state: mxCellState): void;
  }
}
