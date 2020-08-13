declare module 'mxgraph' {
  /**
   * @class
   *
   * Singleton that implements a clipboard for graph cells.
   *
   * ### Example:
   *
   * @example
   * ```javascript
   * mxClipboard.copy(graph);
   * mxClipboard.paste(graph2);
   * ```
   *
   * This copies the selection cells from the graph to the clipboard and
   * pastes them into graph2.
   *
   * For fine-grained control of the clipboard data the {@link mxGraph.canExportCell}
   * and {@link mxGraph.canImportCell} functions can be overridden.
   *
   * To restore previous parents for pasted cells, the implementation for
   * {@link copy} and {@link paste} can be changed as follows.
   *
   * @example
   * ```javascript
   * mxClipboard.copy = function(graph, cells)
   * {
   *   cells = cells || graph.getSelectionCells();
   *   var result = graph.getExportableCells(cells);
   *
   *   mxClipboard.parents = new Object();
   *
   *   for (var i = 0; i < result.length; i++)
   *   {
   *     mxClipboard.parents[i] = graph.model.getParent(cells[i]);
   *   }
   *
   *   mxClipboard.insertCount = 1;
   *   mxClipboard.setCells(graph.cloneCells(result));
   *
   *   return result;
   * };
   *
   * mxClipboard.paste = function(graph)
   * {
   *   if (!mxClipboard.isEmpty())
   *   {
   *     var cells = graph.getImportableCells(mxClipboard.getCells());
   *     var delta = mxClipboard.insertCount * mxClipboard.STEPSIZE;
   *     var parent = graph.getDefaultParent();
   *
   *     graph.model.beginUpdate();
   *     try
   *     {
   *       for (var i = 0; i < cells.length; i++)
   *       {
   *         var tmp = (mxClipboard.parents != null && graph.model.contains(mxClipboard.parents[i])) ?
   *              mxClipboard.parents[i] : parent;
   *         cells[i] = graph.importCells([cells[i]], delta, delta, tmp)[0];
   *       }
   *     }
   *     finally
   *     {
   *       graph.model.endUpdate();
   *     }
   *
   *     // Increments the counter and selects the inserted cells
   *     mxClipboard.insertCount++;
   *     graph.setSelectionCells(cells);
   *   }
   * };
   * ```
   */
  class mxClipboard {
    /**
     * Defines the step size to offset the cells after each paste operation.
     * Default is 10.
     */
    static STEPSIZE: number;

    /**
     * Counts the number of times the clipboard data has been inserted.
     */
    static insertCount: number;

    /**
     * Holds the array of {@link mxCell} currently in the clipboard.
     */
    static cells: Array<mxCell>;

    /**
     * Sets the cells in the clipboard. Fires a {@link mxEvent.CHANGE} event.
     */
    static setCells(cells: Array<mxCell>): void;

    /**
     * Returns  the cells in the clipboard.
     */
    static getCells(): Array<mxCell>;

    /**
     * Returns true if the clipboard currently has not data stored.
     */
    static isEmpty(): boolean;

    /**
     * Cuts the given array of {@link mxCell} from the specified graph.
     * If cells is null then the selection cells of the graph will
     * be used. Returns the cells that have been cut from the graph.
     *
     * @param graph - {@link mxGraph} that contains the cells to be cut.
     * @param cells - Optional array of {@link mxCell} to be cut.
     */
    static cut(graph: mxGraph, cells?: Array<mxCell>): Array<mxCell>;

    /**
     * Hook to remove the given cells from the given graph after
     * a cut operation.
     *
     * @param graph - {@link mxGraph} that contains the cells to be cut.
     * @param cells - Array of {@link mxCell} to be cut.
     */
    static removeCells(graph: mxGraph, cells: Array<mxCell>): void;

    /**
     * Copies the given array of {@link mxCell} from the specified
     * graph to {@link cells}. Returns the original array of cells that has
     * been cloned. Descendants of cells in the array are ignored.
     *
     * @param graph - {@link mxGraph} that contains the cells to be copied.
     * @param cells - Optional array of {@link mxCell} to be copied.
     */
    static copy(graph: mxGraph, cells?: Array<mxCell>): Array<mxCell>;

    /**
     * Pastes the {@link cells} into the specified graph restoring
     * the relation to {@link parents}, if possible. If the parents
     * are no longer in the graph or invisible then the
     * cells are added to the graph's default or into the
     * swimlane under the cell's new location if one exists.
     * The cells are added to the graph using {@link mxGraph.importCells}
     * and returned.
     *
     * @param graph - {@link mxGraph} to paste the {@link cells} into.
     */
    static paste(graph: mxGraph): Array<mxCell>;
  }
}
