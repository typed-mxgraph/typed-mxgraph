declare module 'mxgraph' {
  class mxDictionary<T = any> {
    constructor();

    /**
     * Stores the (key, value) pairs in this dictionary.
     */
    map: { [key: any]: T };

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
