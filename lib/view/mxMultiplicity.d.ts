declare module 'mxgraph' {
  /**
   * @class mxMultiplicity
   *
   * Defines invalid connections along with the error messages that they produce.
   * To add or remove rules on a graph, you must add/remove instances of this
   * class to {@link mxGraph.multiplicities}.
   *
   * ### Example
   *
   * @example
   * ```javascript
   * graph.multiplicities.push(new mxMultiplicity(
   *   true, 'rectangle', null, null, 0, 2, ['circle'],
   *   'Only 2 targets allowed',
   *   'Only circle targets allowed'));
   * ```
   *
   * Defines a rule where each rectangle must be connected to no more than 2
   * circles and no other types of targets are allowed.
   */
  class mxMultiplicity {
    /**
     * @constructor
     *
     * Instantiate class mxMultiplicity in order to describe allowed
     * connections in a graph. Not all constraints can be enforced while
     * editing, some must be checked at validation time. The {@link countError} and
     * {@link typeError} are treated as resource keys in {@link mxResources}.
     *
     * @param source Boolean indicating if this rule applies to the source or target
     * terminal.
     * @param type Type of the source or target terminal that this rule applies to.
     * See {@link type} for more information.
     * @param attr Optional attribute name to match the source or target terminal.
     * @param value Optional attribute value to match the source or target terminal.
     * @param min Minimum number of edges for this rule. Default is 1.
     * @param max Maximum number of edges for this rule. n means infinite. Default
     * is n.
     * @param validNeighbors Array of types of the opposite terminal for which this
     * rule applies.
     * @param countError Error to be displayed for invalid number of edges.
     * @param typeError Error to be displayed for invalid opposite terminals.
     * @param validNeighborsAllowed Optional boolean indicating if the array of
     * opposite types should be valid or invalid.
     */
    constructor(
      source: boolean,
      type: string,
      attr: string,
      value: string,
      min: number,
      max: number,
      validNeighbors: Array<string>,
      countError: string,
      typeError: string,
      validNeighborsAllowed: boolean
    );

    /**
     * Defines the type of the source or target terminal. The type is a string
     * passed to {@link mxUtils.isNode} together with the source or target vertex
     * value as the first argument.
     */
    type: string;

    /**
     * Optional string that specifies the attributename to be passed to
     * {@link mxUtils.isNode} to check if the rule applies to a cell.
     */
    attr: string;

    /**
     * Optional string that specifies the value of the attribute to be passed
     * to {@link mxUtils.isNode} to check if the rule applies to a cell.
     */
    value: string;

    /**
     * Boolean that specifies if the rule is applied to the source or target
     * terminal of an edge.
     */
    source: boolean;

    /**
     * Defines the minimum number of connections for which this rule applies.
     *
     * @default 0
     */
    min: number;

    /**
     * Defines the maximum number of connections for which this rule applies.
     * A value of 'n' means unlimited times.
     * @default 'n'
     */
    max: number | 'n';

    /**
     * Holds an array of strings that specify the type of neighbor for which
     * this rule applies. The strings are used in {@link mxCell.is} on the opposite
     * terminal to check if the rule applies to the connection.
     */
    validNeighbors: Array<string>;

    /**
     * Boolean indicating if the list of validNeighbors are those that are allowed
     * for this rule or those that are not allowed for this rule.
     */
    validNeighborsAllowed: boolean;

    /**
     * Holds the localized error message to be displayed if the number of
     * connections for which the rule applies is smaller than {@link min} or greater
     * than {@link max}.
     */
    countError: string;

    /**
     * Holds the localized error message to be displayed if the type of the
     * neighbor for a connection does not match the rule.
     */
    typeError: string;

    /**
     * Checks the multiplicity for the given arguments and returns the error
     * for the given connection or null if the multiplicity does not apply.
     *
     * @param graph Reference to the enclosing {@link mxGraph} instance.
     * @param edge {@link mxCell} that represents the edge to validate.
     * @param source {@link mxCell} that represents the source terminal.
     * @param target {@link mxCell} that represents the target terminal.
     * @param sourceOut Number of outgoing edges from the source terminal.
     * @param targetIn Number of incoming edges for the target terminal.
     */
    check(graph: mxGraph, edge: mxCell, source: mxCell, target: mxCell, sourceOut: number, targetIn: number): string;

    /**
     * Checks if there are any valid neighbours in {@link validNeighbors}. This is only
     * called if {@link validNeighbors} is a non-empty array.
     */
    checkNeighbors(graph: mxGraph, edge: mxCell, source: mxCell, target: mxCell): boolean;

    /**
     * Checks the given terminal cell and returns true if this rule applies. The
     * given cell is the source or target of the given edge, depending on
     * {@link source}. This implementation uses {@link checkType} on the terminal's value.
     */
    checkTerminal(graph: mxGraph, terminal: mxCell, edge: mxCell): boolean;

    /**
     * Checks the type of the given value.
     */
    checkType(graph: mxCell, value: string, type: string, attr: string, attrValue: any): boolean;
  }
}
