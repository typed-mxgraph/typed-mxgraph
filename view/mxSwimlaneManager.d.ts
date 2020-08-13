declare module 'mxgraph' {
  /**
   * @class mxSwimlaneManager
   * @extends mxEventSource
   *
   * Manager for swimlanes and nested swimlanes that sets the size of newly added
   * swimlanes to that of their siblings, and propagates changes to the size of a
   * swimlane to its siblings, if {@link siblings} is true, and its ancestors, if
   * {@link bubbling} is true.
   */
  class mxSwimlaneManager extends mxEventSource {
    /**
     * Constructs a new swimlane manager for the given graph.
     *
     * @param {mxGraph} graph             Reference to the enclosing graph.
     * @param {boolean} [horizontal]
     * @param {boolean} [addEnabled]
     * @param {boolean} [resizeEnabled]
     */
    constructor(graph: mxGraph, horizontal?: boolean, addEnabled?: boolean, resizeEnabled?: boolean);

    /**
     * Reference to the enclosing {@link mxGraph}.
     */
    graph: mxGraph;

    /**
     * Specifies if event handling is enabled.
     * @default true
     */
    enabled: boolean;

    /**
     * Specifies the orientation of the swimlanes.
     * @default true
     */
    horizontal: boolean;

    /**
     * Specifies if newly added cells should be resized to match the size of their
     * existing siblings.
     * @default true
     */
    addEnabled: boolean;

    /**
     * Specifies if resizing of swimlanes should be handled.
     * @default true
     */
    resizeEnabled: boolean;

    /**
     * Holds the function that handles the move event.
     */
    addHandler: Function;

    /**
     * Holds the function that handles the move event.
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
    setEnabled(value: boolean): void;

    /**
     * Returns {@link horizontal}.
     */
    isHorizontal(): boolean;

    /**
     * Sets {@link horizontal}.
     */
    setHorizontal(value: boolean): void;

    /**
     * Returns {@link addEnabled}.
     */
    isAddEnabled(): boolean;

    /**
     * Sets {@link addEnabled}.
     */
    setAddEnabled(value: boolean): void;

    /**
     * Returns {@link resizeEnabled}.
     */
    isResizeEnabled(): boolean;

    /**
     * Sets {@link resizeEnabled}.
     */
    setResizeEnabled(value: boolean): void;

    /**
     * Returns the graph that this manager operates on.
     */
    getGraph(): mxGraph;

    /**
     * Sets the graph that the manager operates on.
     */
    setGraph(graph: mxGraph): void;

    /**
     * Returns true if the given swimlane should be ignored.
     */
    isSwimlaneIgnored(swimlane: mxCell): boolean;

    /**
     * Returns true if the given cell is horizontal. If the given cell is not a
     * swimlane, then the global orientation is returned.
     */
    isCellHorizontal(cell: mxCell): boolean;

    /**
     * Called if any cells have been added.
     *
     * @param cell Array of {@link mxCell} that have been added.
     */
    cellsAdded(cells: Array<mxCell>): void;

    /**
     * Updates the size of the given swimlane to match that of any existing
     * siblings swimlanes.
     *
     * @param swimlane {@link mxCell} that represents the new swimlane.
     */
    swimlaneAdded(swimlane: mxCell): void;

    /**
     * Called if any cells have been resizes. Calls {@link swimlaneResized} for all
     * swimlanes where {@link isSwimlaneIgnored} returns false.
     *
     * @param cells Array of {@link mxCell} whose size was changed.
     */
    cellsResized(cells: Array<mxCell>): void;

    /**
     * Called from {@link cellsResized} for all swimlanes that are not ignored to update
     * the size of the siblings and the size of the parent swimlanes, recursively,
     * if {@link bubbling} is true.
     *
     * @param swimlane {@link mxCell} whose size has changed.
     */
    resizeSwimlane(swimlane: mxCell, w: number, h: number, parentHorizontal: boolean): void;

    /**
     * Removes all handlers from the {@link graph} and deletes the reference to it.
     */
    destroy(): void;
  }
}
