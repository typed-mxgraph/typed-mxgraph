declare module 'mxgraph' {
  /**
   * @class mxLayoutManager
   * @extends {mxEventSource}
   *
   * Implements a layout manager that runs a given layout after any changes to the graph:
   *
   * ### Example
   *
   * @example
   * ```javascript
   * var layoutMgr = new mxLayoutManager(graph);
   * layoutMgr.getLayout(cell, eventName)
   * {
   *   return layout;
   * };
   * ```
   *
   * See {@link getLayout} for a description of the possible eventNames.
   *
   * #### Event: mxEvent.LAYOUT_CELLS
   *
   * Fires between begin- and endUpdate after all cells have been layouted in
   * {@link layoutCells}. The `cells` property contains all cells that have
   * been passed to {@link layoutCells}.
   */
  class mxLayoutManager extends mxEventSource {
    /**
     * Constructor: mxLayoutManager
     *
     * Constructs a new automatic layout for the given graph.
     *
     * Arguments:
     *
     * @param graph Reference to the enclosing graph.
     */
    constructor(graph: mxGraph);

    /**
     * Reference to the enclosing {@link mxGraph}.
     */
    graph: mxGraph;

    /**
     * Specifies if the layout should bubble along
     * the cell hierarchy.
     * @default true
     */
    bubbling: boolean;

    /**
     * Specifies if event handling is enabled.
     * @default true
     */
    enabled: boolean;

    /**
     * Holds the function that handles the endUpdate event.
     */
    undoHandler: Function;

    /**
     * Holds the function that handles the move event.
     */
    moveHandler: Function;

    /**
     * Holds the function that handles the resize event.
     */
    resizeHandler: Function;

    /**
     * Returns true if events are handled. This implementation
     * returns {@link enabled}.
     */
    isEnabled(): boolean;

    /**
     * Enables or disables event handling. This implementation
     * updates {@link enabled}.
     *
     * @param enabled Boolean that specifies the new enabled state.
     */
    setEnabled(enabled: boolean): void;

    /**
     * Returns true if a layout should bubble, that is, if the parent layout
     * should be executed whenever a cell layout (layout of the children of
     * a cell) has been executed. This implementation returns {@link bubbling}.
     */
    isBubbling(): boolean;

    /**
     * Sets {@link bubbling}.
     */
    setBubbling(value: boolean): void;

    /**
     * Returns the graph that this layout operates on.
     */
    getGraph(): mxGraph;

    /**
     * Sets the graph that the layouts operate on.
     */
    setGraph(graph: mxGraph): void;

    /**
     * Returns the layout for the given cell and eventName. Possible
     * event names are {@link mxEvent.MOVE_CELLS} and {@link mxEvent.RESIZE_CELLS}
     * for callbacks on when cells are moved or resized and
     * {@link mxEvent.BEGIN_UPDATE} and {@link mxEvent.END_UPDATE} for the capture
     * and bubble phase of the layout after any changes of the model.
     */
    getLayout(cell: mxCell, eventName?: string): mxGraphLayout | null;

    /**
     * Called from {@link undoHandler}.
     *
     * @param cell Array of {@link mxCell} that have been moved.
     * @param evt Mouse event that represents the mousedown.
     *
     * TODO: what is undoableEdit type?
     */
    beforeUndo(undoableEdit: any): void;

    /**
     * Called from {@link moveHandler}.
     *
     * @param cell Array of {@link mxCell} that have been moved.
     * @param evt Mouse event that represents the mousedown.
     */
    cellsMoved(cells: Array<mxCell>, evt: MouseEvent): void;

    /**
     * Called from {@link resizeHandler}.
     *
     * @param cell Array of {@link mxCell} that have been resized.
     * @param bounds {@link mxRectangle} taht represents the new bounds.
     */
    cellsResized(cells: Array<mxCell>, bounds: Array<mxRectangle>, prev: Array<any>): void;

    /**
     * Returns the cells to be layouted for the given sequence of changes.
     */
    getAncestorLayout(cell: mxCell, eventName: string): mxGraphLayout;

    /**
     * Returns the cells for which a layout should be executed.
     */
    getCellsForChanges(changes: Array<any>): Array<mxCell>;

    /**
     * Executes all layouts which have been scheduled during the
     * changes.
     * @param change  mxChildChange|mxTerminalChange|mxVisibleChange|...
     */
    getCellsForChange(change: any): Array<mxCell>;

    /**
     * Adds all ancestors of the given cell that have a layout.
     */
    addCellsWithLayout(cell: mxCell, result: Array<mxCell>): Array<mxCell>;

    /**
     * Adds all ancestors of the given cell that have a layout.
     */
    addAncestorsWithLayout(cell: mxCell, result: Array<mxCell>): Array<mxCell>;

    /**
     * Adds all descendants of the given cell that have a layout.
     */
    addDescendantsWithLayout(cell: mxCell, result: Array<mxCell>): Array<mxCell>;

    /**
     * Executes the given layout on the given parent.
     */
    executeLayoutForCells(cells: Array<mxCell>): void;

    /**
     * Executes all layouts which have been scheduled during the changes.
     */
    layoutCells(cells: Array<mxCell>, bubble: string): void;

    /**
     * Executes the given layout on the given parent.
     */
    executeLayout(cell: mxCell, bubble: string): void;

    /**
     * Removes all handlers from the {@link graph} and deletes the reference to it.
     */
    destroy(): void;
  }
}
