declare module 'mxgraph' {
  /**
   * Implements a generic shape which is based on a XML node as a description.
   *
   * @class mxStencil
   */
  class mxStencil extends mxShape {
    constructor(desc: Element);

    /**
     * Variable: defaultLocalized
     *
     * Static global variable that specifies the default value for the localized
     * attribute of the text element. Default is false.
     */
    defaultLocalized: boolean;

    /**
     * Function: allowEval
     *
     * Static global switch that specifies if the use of eval is allowed for
     * evaluating text content and images. Default is false. Set this to true
     * if stencils can not contain user input.
     */
    allowEval: boolean;

    /**
     * Variable: desc
     *
     * Holds the XML node with the stencil description.
     */
    desc: Element;

    /**
     * Variable: constraints
     *
     * Holds an array of <mxConnectionConstraints> as defined in the shape.
     */
    constraints: mxConnectionConstraint[];

    /**
     * Variable: aspect
     *
     * Holds the aspect of the shape. Default is 'auto'.
     */
    aspect: string;

    /**
     * Variable: w0
     *
     * Holds the width of the shape. Default is 100.
     */
    w0: number;

    /**
     * Variable: h0
     *
     * Holds the height of the shape. Default is 100.
     */
    h0: number;

    /**
     * Variable: bgNodes
     *
     * Holds the XML node with the stencil description.
     */
    bgNode: Element;

    /**
     * Variable: fgNodes
     *
     * Holds the XML node with the stencil description.
     */
    fgNode: Element;

    /**
     * Variable: strokewidth
     *
     * Holds the strokewidth direction from the description.
     */
    strokewidth: number;

    /**
     * Function: parseDescription
     *
     * Reads <w0>, <h0>, <aspect>, <bgNodes> and <fgNodes> from <desc>.
     */
    parseDescription(): void;

    /**
     * Function: parseConstraints
     *
     * Reads the constraints from <desc> into <constraints> using
     * <parseConstraint>.
     */
    parseConstraints(): void;

    /**
     * Function: parseConstraint
     *
     * Parses the given XML node and returns its <mxConnectionConstraint>.
     */
    parseConstraint(node: Element): void;

    /**
     * Function: evaluateTextAttribute
     *
     * Gets the given attribute as a text. The return value from <evaluateAttribute>
     * is used as a key to <mxResources.get> if the localized attribute in the text
     * node is 1 or if <defaultLocalized> is true.
     */
    evaluateTextAttribute(node: string, attribute: string, shape: string): string;

    /**
     * Function: evaluateAttribute
     *
     * Gets the attribute for the given name from the given node. If the attribute
     * does not exist then the text content of the node is evaluated and if it is
     * a function it is invoked with <shape> as the only argument and the return
     * value is used as the attribute value to be returned.
     */
    evaluateAttribute(node: string, attribute: string, shape: string): string;

    /**
     * Function: drawShape
     *
     * Draws this stencil inside the given bounds.
     */
    drawShape(canvas: mxAbstractCanvas2D, shape: string, x: number, y: number, w: number, h: number): void;

    /**
     * Function: drawChildren
     *
     * Draws this stencil inside the given bounds.
     */
    drawChildren(
      canvas: mxAbstractCanvas2D,
      shape: string,
      x: number,
      y: number,
      w: number,
      h: number,
      node: Element,
      aspect: string,
      disableShadow: boolean,
      paint: boolean
    ): void;

    /**
     * Function: computeAspect
     *
     * Returns a rectangle that contains the offset in x and y and the horizontal
     * and vertical scale in width and height used to draw this shape inside the
     * given <mxRectangle>.
     *
     * Parameters:
     *
     * shape - <mxShape> to be drawn.
     * bounds - <mxRectangle> that should contain the stencil.
     * direction - Optional direction of the shape to be darwn.
     */
    computeAspect(shape: string, x: number, y: number, w: number, h: number, direction?: string): mxRectangle;

    /**
     * Function: drawNode
     *
     * Draws this stencil inside the given bounds.
     */
    drawNode(
      canvas: mxAbstractCanvas2D,
      shape: string,
      node: Element,
      aspect: mxRectangle,
      disableShadow: boolean,
      paint: boolean
    ): void;
  }
}
