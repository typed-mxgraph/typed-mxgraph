declare module 'mxgraph' {
  /**
   * Singleton class that acts as a global registry for codecs.
   *
   * ### Adding an <mxCodec>:
   *
   * 1. Define a default codec with a new instance of the object to be handled.
   *
   *     ```javascript
   *     var codec = new mxObjectCodec(new mxGraphModel());
   *     ```
   *
   * 2. Define the functions required for encoding and decoding objects.
   *
   *     ```javascript
   *     codec.encode = function(enc, obj) { ... }
   *     codec.decode = function(dec, node, into) { ... }
   *     ```
   *
   * 3. Register the codec in the <mxCodecRegistry>.
   *
   *     ```javascript
   *     mxCodecRegistry.register(codec);
   *     ```
   *
   * {@link mxObjectCodec.decode} may be used to either create a new
   * instance of an object or to configure an existing instance,
   * in which case the into argument points to the existing
   * object. In this case, we say the codec "configures" the
   * object.
   *
   * @class mxCodecRegistry
   */
  class mxCodecRegistry {
    /**
     * Maps from constructor names to codecs.
     * @static
     */
    static codecs: { [key: string]: mxObjectCodec };

    /**
     * Maps from classnames to codecnames.
     * @static
     */
    static aliases: { [key: string]: any };

    /**
     * Registers a new codec and associates the name of the template
     * constructor in the codec with the codec object.
     *
     * @static
     *
     * @param codec - {@link mxObjectCodec} to be registered.
     */
    static register(codec: mxObjectCodec): mxObjectCodec;

    /**
     * Adds an alias for mapping a classname to a codecname.
     * @static
     */
    static addAlias(classname: string, codecname: string): void;

    /**
     * Returns a codec that handles objects that are constructed
     * using the given constructor.
     *
     * @static
     *
     * @param ctor - JavaScript constructor function.
     */
    static getCodec(ctor: any): mxObjectCodec;
  }
}
