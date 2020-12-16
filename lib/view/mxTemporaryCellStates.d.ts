declare module 'mxgraph' {
  /**
   * @class mxTemporaryCellStates
   *
   * Creates a temporary set of cell states.
   */
  class mxTemporaryCellStates {
    constructor(
      view: mxGraphView,
      scale: number,
      cells: Array<mxCell>,
      isCellVisibleFn: boolean,
      getLinkForCellState: Function
    );

    /**
     * Holds the width of the rectangle.
     * @default 0
     */
    view: number;

    /**
     * Holds the height of the rectangle.
     * @default 0
     */
    oldStates: number;

    /**
     * Holds the height of the rectangle.
     * @default 0
     */
    oldBounds: number;

    /**
     * Holds the height of the rectangle.
     * @default 0
     */
    oldScale: number;

    destroy(): void;
  }
}
