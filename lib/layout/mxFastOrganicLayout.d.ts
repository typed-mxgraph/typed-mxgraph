declare module 'mxgraph' {
  class mxFastOrganicLayout extends mxGraphLayout {
    /**
     * Specifies if the top left corner of the input cells should be the origin of the layout result.  Default is true.
     */
    useInputOrigin: boolean;

    /**
     * Specifies if all edge points of traversed edges should be removed.  Default is true.
     */
    resetEdges: boolean;

    /**
     * Specifies if the STYLE_NOEDGESTYLE flag should be set on edges that are modified by the result.  Default is true.
     */
    disableEdgeStyle: boolean;

    /**
     * The force constant by which the attractive forces are divided and the replusive forces are multiple by the square of.  The value equates to the average radius there is of free space around each node.  Default is 50.
     */
    forceConstant: number;

    /**
     * Cache of <forceConstant>^2 for performance.
     */
    forceConstantSquared: any;

    /**
     * Minimal distance limit.  Default is 2.  Prevents of dividing by zero.
     */
    minDistanceLimit: number;

    /**
     * Cached version of minDistanceLimit squared.
     */
    minDistanceLimitSquared: number;
  }
}
