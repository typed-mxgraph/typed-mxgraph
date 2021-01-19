declare module 'mxgraph' {
  /**
   * Manager for automatically saving diagrams. The <save> hook must be
   * implemented.
   *
   * @example
   * ```javascript
   * var mgr = new mxAutoSaveManager(editor.graph);
   * mgr.save()
   * {
   *   mxLog.show();
   *   mxLog.debug('save');
   * };
   * ```
   *
   * @class mxAutoSaveManager
   * @extends mxEventSource
   */
  class mxAutoSaveManager extends mxEventSource {
    /**
     * Constructs a new automatic layout for the given graph.
     *
     * @param graph - Reference to the enclosing graph.
     */
    constructor(graph: mxGraph);

    /**
     * Reference to the enclosing <mxGraph>.
     */
    graph: mxGraph;

    /**
     * Minimum amount of seconds between two consecutive autosaves. Eg. a
     * value of 1 (s) means the graph is not stored more than once per second.
     * Default is 10.
     */
    autoSaveDelay: number;

    /**
     * Minimum amount of seconds between two consecutive autosaves triggered by
     * more than <autoSaveThreshhold> changes within a timespan of less than
     * <autoSaveDelay> seconds. Eg. a value of 1 (s) means the graph is not
     * stored more than once per second even if there are more than
     * <autoSaveThreshold> changes within that timespan. Default is 2.
     */
    autoSaveThrottle: number;

    /**
     * Minimum amount of ignored changes before an autosave. Eg. a value of 2
     * means after 2 change of the graph model the autosave will trigger if the
     * condition below is true. Default is 5.
     */
    autoSaveThreshold: number;

    /**
     * Counter for ignored changes in autosave.
     */
    ignoredChanges: number;

    /**
     * Used for autosaving. See <autosave>.
     */
    lastSnapshot: number;

    /**
     * Specifies if event handling is enabled. Default is true.
     */
    enabled: boolean;

    /**
     * Holds the function that handles graph model changes.
     */
    changeHandler: Function;

    /**
     * Returns true if events are handled. This implementation
     * returns <enabled>.
     */
    isEnabled(): boolean;

    /**
     * Enables or disables event handling. This implementation
     * updates <enabled>.
     *
     * @param enabled - Boolean that specifies the new enabled state.
     */
    setEnabled(value: boolean): void;

    /**
     * Sets the graph that the layouts operate on.
     */
    setGraph(graph: mxGraph): void;

    /**
     * Empty hook that is called if the graph should be saved.
     */
    save(): void;

    /**
     * Invoked when the graph model has changed.
     */
    graphModelChanged(changes: any): void;

    /**
     * Resets all counters.
     */
    reset(): void;

    /**
     * Removes all handlers from the <graph> and deletes the reference to it.
     */
    destroy(): void;
  }
}
