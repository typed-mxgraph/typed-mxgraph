declare module 'mxgraph' {
  /**
   * A static class that implements all markers for VML and SVG using a registry.
   * NOTE: The signatures in this class will change.
   * @class mxMarker
   */
  class mxMarker {
    /**
     * Maps from markers names to functions to paint the markers.
     *
     * Mapping: the attribute name on the object is the marker type, the associated value is the function to paint the marker
     */
    static markers: object;

    /**
     * Adds a factory method that updates a given endpoint and returns a
     * function to paint the marker onto the given canvas.
     */
    static addMarker(
      type: string,
      funct: (
        canvas: mxAbstractCanvas2D,
        shape: any,
        type: string,
        pe: mxPoint,
        unitX: number,
        unitY: number,
        size: number,
        source: any,
        sw: number,
        filled: boolean
      ) => () => void
    ): void;

    /**
     * Returns a function to paint the given marker.
     */
    static createMarker(
      canvas: mxAbstractCanvas2D,
      shape: any,
      type: string,
      pe: mxPoint,
      unitX: number,
      unitY: number,
      size: number,
      source: any,
      sw: number,
      filled: boolean
    ): () => void;
  }
}
