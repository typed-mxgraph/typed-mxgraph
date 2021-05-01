declare module 'mxgraph' {
  class mxDictionary<T = any> {
    constructor();

    /**
     * Stores the (key, value) pairs in this dictionary.
     */
    // the key is always a string
    // https://github.com/jgraph/mxgraph/blob/v4.2.2/javascript/src/js/util/mxDictionary.js#L44: call mxObjectIdentity.get(key)
    // https://github.com/jgraph/mxgraph/blob/v4.2.2/javascript/src/js/util/mxObjectIdentity.js#L36: always returns a string
    map: { [key: string]: T };

    /**
     * Clears the dictionary.
     */
    clear(): void;

    /**
     * Returns the value for the given key.
     */
    get(key: any): T;

    /**
     * Stores the value under the given key and returns the previous
     * value for that key.
     */
    put(key: any, value: T): T;

    /**
     * Removes the value for the given key and returns the value that
     * has been removed.
     */
    remove(key: any): T;

    /**
     * Returns all keys as an array.
     */
    getKeys(): any[];

    /**
     * Returns all values as an array.
     */
    getValues(): T[];

    /**
     * Visits all entries in the dictionary using the given function with the
     * following signature: function(key, value) where key is a string and
     * value is an object.
     *
     * @param visitor A function that takes the key and value as arguments.
     */
    visit(visitor: (key: string, value: T) => void): void;
  }
}
