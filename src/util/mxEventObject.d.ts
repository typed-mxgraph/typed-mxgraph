declare module 'mxgraph' {
  class mxEventObject {
    constructor(name: string, ...args: any[]);

    /**
     * Variable: name
     *
     * Holds the name.
     */
    name: string;

    /**
     * Variable: properties
     *
     * Holds the properties as an associative array.
     */
    properties: any[];

    /**
     * Variable: consumed
     *
     * Holds the consumed state. Default is false.
     */
    consumed: boolean;

    /**
     * Function: getName
     *
     * Returns <name>.
     */
    getName(): string;

    /**
     * Function: getProperties
     *
     * Returns <properties>.
     */
    getProperties(): any[];

    /**
     * Function: getProperty
     *
     * Returns the property for the given key.
     */
    getProperty(key: string): any;

    /**
     * Function: isConsumed
     *
     * Returns true if the event has been consumed.
     */
    isConsumed(): boolean;

    /**
     * Function: consume
     *
     * Consumes the event.
     */
    consume(): void;
  }
}
