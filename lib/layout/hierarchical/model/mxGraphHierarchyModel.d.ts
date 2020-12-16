declare module 'mxgraph' {
  /**
   * Internal model of a hierarchical graph. This model stores nodes and edges
   * equivalent to the real graph nodes and edges, but also stores the rank of the
   * cells, the order within the ranks and the new candidate locations of cells.
   * The internal model also reverses edge direction were appropriate , ignores
   * self-loop and groups parallels together under one edge object.
   *
   * @class mxGraphHierarchyModel
   */
  class mxGraphHierarchyModel {
    /**
     * @constructor
     *
     * Creates an internal ordered graph model using the vertices passed in. If
     * there are any, leftward edge need to be inverted in the internal model
     *
     * @param graph - the facade describing the graph to be operated on
     * @param vertices - the vertices for this hierarchy
     * @param ordered - whether or not the vertices are already ordered
     * @param deterministic - whether or not this layout should be deterministic on each
     * @param tightenToSource - whether or not to tighten vertices towards the sources
     * @param scanRanksFromSinks - Whether rank assignment is from the sinks or sources.
     */
    constructor(
      layout: mxGraphLayout,
      vertices: Array<mxCell>,
      roots: Array<mxCell>,
      parent: mxCell,
      tightenToSource?: boolean
    );

    /**
     * Stores the largest rank number allocated
     */
    maxRank: number;

    /**
     * Map from graph vertices to internal model nodes.
     */
    vertexMapper: any;

    /**
     * Map from graph edges to internal model edges
     */
    edgeMapper: any;

    /**
     * Mapping from rank number to actual rank
     */
    ranks: Array<number>;

    /**
     * Store of roots of this hierarchy model, these are real graph cells, not
     * internal cells
     */
    roots: Array<mxCell>;

    /**
     * The parent cell whose children are being laid out
     */
    parent: mxCell;

    /**
     * Count of the number of times the ancestor dfs has been used.
     */
    dfsCount: number;

    /**
     * High value to start source layering scan rank value from.
     */
    SOURCESCANSTARTRANK: number;

    /**
     * Whether or not to tighten the assigned ranks of vertices up towards
     * the source cells.
     */
    tightenToSource: boolean;

    /**
     * Creates all edges in the internal model
     *
     * @param layoutReference to the <mxHierarchicalLayout> algorithm.
     * @param verticesArray of <mxCells> that represent the vertices whom are to
     * have an internal representation created.
     * @param internalVerticesThe array of <mxGraphHierarchyNodes> to have their
     * information filled in using the real vertices.
     */
    createInternalCells(layout: mxGraphLayout, vertices: Array<mxCell>, internalVertices: Array<mxCell>): void;

    /**
     * Basic determination of minimum layer ranking by working from from sources
     * or sinks and working through each node in the relevant edge direction.
     * Starting at the sinks is basically a longest path layering algorithm.
     */
    initialRank(): void;

    /**
     * Fixes the layer assignments to the values stored in the nodes. Also needs
     * to create dummy nodes for edges that cross layers.
     */
    fixRanks(): void;

    /**
     * A depth first search through the internal heirarchy model.
     *
     * @param visitorThe visitor function pattern to be called for each node.
     * @param trackAncestorsWhether or not the search is to keep track all nodes
     * directly above this one in the search path.
     */
    visit(visitor: any, dfsRoots: Array<any>, trackAncestors: boolean, seenNodes: any): void;

    /**
     * Performs a depth first search on the internal hierarchy model
     *
     * @param parentthe parent internal node of the current internal node
     * @param rootthe current internal node
     * @param connectingEdgethe internal edge connecting the internal node and the parent internal node, if any
     * @param visitorthe visitor pattern to be called for each node
     * @param seena set of all nodes seen by this dfs a set of all of the
     * ancestor node of the current node
     * @param layerthe layer on the dfs tree ( not the same as the model ranks )
     */
    dfs(parent: mxCell, root: mxCell, connectingEdge: boolean, visitor: any, seen: Array<any>, layer: number): void;

    /**
     * Performs a depth first search on the internal hierarchy model. This dfs
     * extends the default version by keeping track of cells ancestors, but it
     * should be only used when necessary because of it can be computationally
     * intensive for deep searches.
     *
     * @param parentthe parent internal node of the current internal node
     * @param rootthe current internal node
     * @param connectingEdgethe internal edge connecting the internal node and the parent internal node, if any
     * @param visitorthe visitor pattern to be called for each node
     * @param seena set of all nodes seen by this dfs
     * @param ancestorsthe parent hash code
     * @param childHashthe new hash code for this node
     * @param layerthe layer on the dfs tree ( not the same as the model ranks )
     */
    extendedDfs(
      parent: mxCell,
      root: mxCell,
      connectingEdge: boolean,
      visitor: any,
      seen: any,
      ancestors: any,
      childHash: string,
      layer: number
    ): void;
  }
}
