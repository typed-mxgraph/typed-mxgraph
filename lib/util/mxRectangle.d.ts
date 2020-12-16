declare module 'mxgraph' {
  class mxRectangle extends mxPoint {
    constructor(x: number, y: number, width: number, height: number);

    /**
     * Variable: width
     *
     * Holds the width of the rectangle. Default is 0.
     */
    width: number;

    /**
     * Variable: height
     *
     * Holds the height of the rectangle. Default is 0.
     */
    height: number;

    /**
     * Function: setRect
     *
     * Sets this rectangle to the specified values
     */
    setRect(x: number, y: number, w: number, h: number): void;

    /**
     * Function: getCenterX
     *
     * Returns the x-coordinate of the center point.
     */
    getCenterX(): number;

    /**
     * Function: getCenterY
     *
     * Returns the y-coordinate of the center point.
     */
    getCenterY(): number;

    /**
     * Function: add
     *
     * Adds the given rectangle to this rectangle.
     */
    add(rect: mxRectangle): void;

    /**
     * Function: intersect
     *
     * Changes this rectangle to where it overlaps with the given rectangle.
     */
    intersect(rect: mxRectangle): void;

    /**
     * Function: grow
     *
     * Grows the rectangle by the given amount, that is, this method subtracts
     * the given amount from the x- and y-coordinates and adds twice the amount
     * to the width and height.
     */
    grow(amount: number): void;

    /**
     * Function: getPoint
     *
     * Returns the top, left corner as a new <mxPoint>.
     */
    getPoint(): mxPoint;

    /**
     * Function: rotate90
     *
     * Rotates this rectangle by 90 degree around its center point.
     */
    rotate90(): void;

    /**
     * Function: equals
     *
     * Returns true if the given object equals this rectangle.
     */
    equals(obj: mxRectangle): boolean;

    /**
     * Function: fromRectangle
     *
     * Returns a new <mxRectangle> which is a copy of the given rectangle.
     */
    fromRectangle(rect: mxRectangle): mxRectangle;

    clone(): mxRectangle;

    static fromRectangle(rect: mxRectangle): mxRectangle;
  }
}
