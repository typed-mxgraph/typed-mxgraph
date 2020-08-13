declare module 'mxgraph' {
  /**
   * @class
   *
   * Identity for JavaScript objects and functions. This is implemented using
   * a simple incrementing counter which is stored in each object under
   * {@link FIELD_NAME}.
   *
   * The identity for an object does not change during its lifecycle.
   */
  class mxObjectIdentity {
    /**
     * Name of the field to be used to store the object ID. Default is
     * <code>mxObjectId</code>.
     */
    static FIELD_NAME: string;

    /**
     * Current counter.
     */
    static counter: number;

    /**
     * Returns the ID for the given object or function or null if no object
     * is specified.
     */
    static get(obj: any): any;

    /**
     * Deletes the ID from the given object or function.
     */
    static clear(obj: any): void;
  }
}
