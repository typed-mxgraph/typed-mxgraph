declare module 'mxgraph' {
  /**
   * A helper class to highlight cells. Here is an example for a given cell.
   *
   * @example
   * ```javascript
   * var highlight = new mxCellHighlight(graph, '#ff0000', 2);
   * highlight.highlight(graph.view.getState(cell)));
   * ```
   */
  export class mxCellHighlight {
    /**
     * Constructs a cell highlight.
     *
     * @param graph
     * @param highlightColor  default {@link mxConstants.DEFAULT_VALID_COLOR}
     * @param strokeWidth     default {@link mxConstants.HIGHLIGHT_STROKEWIDTH}
     * @param dashed          default false
     */
    constructor(graph: mxGraph, highlightColor?: string, strokeWidth?: number, dashed?: boolean);

    /**
     * Specifies if the highlights should appear on top of everything else in the overlay pane.
     * @default false
     */
    keepOnTop: boolean;

    /**
     * Reference to the enclosing {@link mxGraph}.
     * @default true
     */
    graph: boolean;

    /**
     * Reference to the {@link mxCellState}.
     * @default null
     */
    state: mxCellState;

    /**
     * Specifies the spacing between the highlight for vertices and the vertex.
     * @default 2
     */
    spacing: number;

    /**
     * Holds the handler that automatically invokes reset if the highlight should be hidden.
     * @default null
     */
    // TODO find the right type for resetHandler
    resetHandler: any;

    /**
     * Sets the color of the rectangle used to highlight drop targets.
     *
     * @param {string} color - String that represents the new highlight color.
     */
    setHighlightColor(color: string): void;

    /**
     * Creates and returns the highlight shape for the given state.
     */
    drawHighlight(): void;

    /**
     * Creates and returns the highlight shape for the given state.
     */
    createShape(): mxShape;

    /**
     * Updates the highlight after a change of the model or view.
     */
    getStrokeWidth(state: mxCellState): number;

    /**
     * Updates the highlight after a change of the model or view.
     */
    repaint(): void;

    /**
     * Resets the state of the cell marker.
     */
    hide(): void;

    /**
     * Marks the <markedState> and fires a <mark> event.
     */
    highlight(state: mxCellState): void;

    /**
     * Returns true if this highlight is at the given position.
     */
    isHighlightAt(x: number, y: number): boolean;

    /**
     * Destroys the handler and all its resources and DOM nodes.
     */
    destroy(): void;
  }
}
