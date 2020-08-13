declare module 'mxgraph' {
  /**
   * The specific layout interface for hierarchical layouts. It adds a
   * `run` method with a parameter for the hierarchical layout model
   * that is shared between the layout stages.
   */
  class mxHierarchicalLayoutStage {
    /**
     * Constructs a new hierarchical layout stage.
     */
    constructor();

    /**
     * Takes the graph detail and configuration information within the facade
     * and creates the resulting laid out graph within that facade for further
     * use.
     */
    execute(parent: mxCell): void;
  }
}
