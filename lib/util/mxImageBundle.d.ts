declare module 'mxgraph' {
  class mxImageBundle {
    constructor(alt: boolean);

    /**
     * Variable: images
     *
     * Maps from keys to images.
     */
    images: { [key: string]: { value: string; fallback: Function } };

    /**
     * Variable: alt
     *
     * Specifies if the fallback representation should be returned.
     */
    alt: boolean;

    /**
     * Function: putImage
     *
     * Adds the specified entry to the map. The entry is an object with a value and
     * fallback property as specified in the arguments.
     */
    putImage(key: string, value: string, fallback: Function): void;

    /**
     * Function: getImage
     *
     * Returns the value for the given key. This returns the value
     * or fallback, depending on <alt>. The fallback is returned if
     * <alt> is true, the value is returned otherwise.
     */
    getImage(key: string): string;
  }
}
