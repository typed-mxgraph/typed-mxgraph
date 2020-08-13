declare module 'mxgraph' {
  class mxStackLayout extends mxGraphLayout {
    constructor(graph: mxGraph, horizontal?: boolean, spacing?: number, x0?: number, y0?: number, border?: number);

    /**
     * Specifies the orientation of the layout.
     */
    horizontal: boolean;
    /**
     * Specifies the spacing between the cells.
     */
    spacing: number;
    /**
     * Specifies the horizontal origin of the layout.
     */
    x0: number;
    /**
     * Specifies the vertical origin of the layout.
     */
    y0: number;
    /**
     * Border to be added if fill is true.
     */
    border: number;
    /**
     * Top margin for the child area.
     */
    marginTop: number;
    /**
     * Top margin for the child area.
     */
    marginLeft: number;
    /**
     * Top margin for the child area.
     */
    marginRight: number;
    /**
     * Top margin for the child area.
     */
    marginBottom: number;
    /**
     * Boolean indicating if the location of the first cell should be kept, that is, it will not be moved to x0 or y0.
     */
    keepFirstLocation: boolean;
    /**
     * Boolean indicating if dimension should be changed to fill out the parent cell.
     */
    fill: boolean;
    /**
     * If the parent should be resized to match the width/height of the stack.
     */
    resizeParent: boolean;
    /**
     * Use maximum of existing value and new value for resize of parent.
     */
    resizeParentMax: boolean;
    /**
     * If the last element should be resized to fill out the parent.
     */
    resizeLast: boolean;
    /**
     * Value at which a new column or row should be created.
     */
    wrap: boolean;
    /**
     * If the strokeWidth should be ignored.
     */
    borderCollapse: boolean;
    /**
     * If gaps should be allowed in the stack.
     */
    allowGaps: boolean;
    /**
     * Grid size for alignment of position and size.
     */
    gridSize: number;

    /**
     * Returns horizontal.
     */
    isHorizontal(): boolean;

    /**
     * Implements mxGraphLayout.moveCell.
     */
    moveCell(cell: mxCell, x: number, y: number): void;

    /**
     * Returns the size for the parent container or the size of the graph container if the parent is a layer or the root of the model.
     */
    getParentSize(): void;
    /**
     * Returns the cells to be layouted.
     */
    getLayoutCells(parent: mxCell): Array<mxCell>;
    /**
     * Snaps the given value to the grid size.
     */
    snap(): void;
    /**
     * Implements mxGraphLayout.execute.
     */
    execute(parent: mxCell): void;
  }
}
