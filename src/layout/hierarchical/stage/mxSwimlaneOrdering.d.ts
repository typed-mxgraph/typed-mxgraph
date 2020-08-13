declare module 'mxgraph' {
  /**
   * An implementation of the first stage of the Sugiyama layout. Straightforward
   * longest path calculation of layer assignment
   */
  class mxSwimlaneOrdering extends mxHierarchicalLayoutStage {
    /**
     * Creates a cycle remover for the given internal model.
     */
    constructor(layout: mxHierarchicalLayout);

    /**
     * Reference to the enclosing {@link mxHierarchicalLayout}.
     */
    layout: mxHierarchicalLayout;

    /**
     * Takes the graph detail and configuration information within the facade
     * and creates the resulting laid out graph within that facade for further
     * use.
     */
    execute(parent: mxCell): any;
  }
}
