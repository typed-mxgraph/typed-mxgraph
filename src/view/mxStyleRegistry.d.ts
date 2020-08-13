declare module 'mxgraph' {
  /**
   * @class mxStyleRegistry
   *
   * Singleton class that acts as a global converter from string to object values
   * in a style. This is currently only used to perimeters and edge styles.
   */
  class mxStyleRegistry {
    /**
     * Maps from strings to objects.
     */
    values: { [key: string]: any };

    /**
     * Puts the given object into the registry under the given name.
     */
    putValue(name: string, obj: any): void;

    /**
     * Returns the value associated with the given name.
     */
    getValue(name: string): any;

    /**
     * Returns the name for the given value.
     */
    getName(value: any): string;
  }
}
