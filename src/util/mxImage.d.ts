declare module 'mxgraph' {
  class mxImage {
    constructor(src: string, width: number, height: number);

    /**
     * Variable: src
     *
     * String that specifies the URL of the image.
     */
    src: string;

    /**
     * Variable: width
     *
     * Integer that specifies the width of the image.
     */
    width: number;

    /**
     * Variable: height
     *
     * Integer that specifies the height of the image.
     */
    height: number;
  }
}
