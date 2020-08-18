declare module 'mxgraph' {
  /**
   * Implements a single custom handle for vertices.
   *
   * @class mxHandle
   */
  class mxHandle {
    /**
     * Constructs a new handle for the given state.
     *
     * @param {mxCellState} state   {@link mxCellState} of the cell to be handled.
     * @param {string} cursor
     * @param {mxImage} image
     * @param {mxShape} shape
     * @memberof mxHandle
     */
    constructor(state: mxCellState, cursor: string, image: mxImage, shape: mxShape);

    /**
     * Specifies the cursor to be used for this handle. Default is 'default'.
     */
    cursor: string;

    /**
     * Specifies the <mxImage> to be used to render the handle. Default is null.
     */
    image: mxImage;

    /**
     * Default is false.
     */
    ignoreGrid: boolean;

    /**
     * Hook for subclassers to return the current position of the handle.
     */
    getPosition(bounds: mxRectangle): any;

    /**
     * Hooks for subclassers to update the style in the <state>.
     */
    setPosition(bounds: mxRectangle, pt: any, me: any): any;

    /**
     * Hook for subclassers to execute the handle.
     */
    execute(me: mxMouseEvent): void;

    /**
     * Sets the cell style with the given name to the corresponding value in <state>.
     */
    copyStyle(key: string): void;

    /**
     * Processes the given <mxMouseEvent> and invokes <setPosition>.
     */
    processEvent(me: mxMouseEvent): void;

    /**
     * Should be called after <setPosition> in <processEvent>.
     * This repaints the state using <mxCellRenderer>.
     */
    positionChanged(): void;

    /**
     * Returns the rotation defined in the style of the cell.
     */
    getRotation(): number;

    /**
     * Returns the rotation from the style and the rotation from the direction of
     * the cell.
     */
    getTotalRotation(): number;

    /**
     * Creates and initializes the shapes required for this handle.
     */
    init(): void;

    /**
     * Creates and returns the shape for this handle.
     */
    createShape(html: any): mxShape;

    /**
     * Initializes <shape> and sets its cursor.
     */
    initShape(html: any): void;

    /**
     * Renders the shape for this handle.
     */
    redraw(): void;

    /**
     * Returns true if this handle should be rendered in HTML. This returns true if
     * the text node is in the graph container.
     */
    isHtmlRequired(): boolean;

    /**
     * Rotates the point by the given angle.
     */
    rotatePoint(pt: mxPoint, alpha: boolean): mxPoint;

    /**
     * Flips the given point vertically and/or horizontally.
     */
    flipPoint(pt: mxPoint): mxPoint;

    /**
     * Snaps the given point to the grid if ignore is false. This modifies
     * the given point in-place and also returns it.
     */
    snapPoint(pt: mxPoint, ignore: boolean): mxPoint;

    /**
     * Shows or hides this handle.
     */
    setVisible(visible: boolean): void;

    /**
     * Resets the state of this handle by setting its visibility to true.
     */
    reset(): void;

    /**
     * Destroys this handle.
     */
    destroy(): void;
  }
}
