declare module 'mxgraph' {
  export class mxLog {
    /**
     * Specifies the name of the console window.
     */
    consoleName: 'Console';

    /**
     * Specified if the output for enter and leave should be visible in the console.
     */
    TRACE: boolean;
    /**
     * Specifies if the output for debug should be visible in the console.
     */
    DEBUG: boolean;

    /**
     * Specifies if the output for warn should be visible in the console.
     */
    WARN: boolean;

    /**
     * Buffer for pre-initialized content.
     */
    buffer: string;

    /**
     * Initializes the DOM node for the console.
     * This requires document.body to point to a non-null value.
     * This is called from within setVisible if the log has not yet been initialized.
     */
    static init(): void;

    /**
     * Writes the current navigator information to the console.
     */
    static info(): void;

    /**
     * Adds a button to the console using the given label and function.
     */
    static addButton(lab: string, funct: Function): void;

    /**
     * Returns true if the console is visible.
     */
    static isVisible(): boolean;

    /**
     * Shows the console.
     */
    static show(): void;

    /**
     * Shows or hides the console.
     */
    static setVisible(visible: boolean): void;

    /**
     * Writes the specified string to the console if TRACE is true and returns the current time in milliseconds.
     */
    static enter(string: string): number;

    /**
     * Adds all arguments to the console if DEBUG is enabled.
     */
    static debug(message: string): void;

    /**
     * Adds all arguments to the console if WARN is enabled.
     */
    static warn(message: string): void;

    /**
     * Adds the specified strings to the console.
     */
    static write(message: string): void;

    /**
     * Adds the specified strings to the console, appending a linefeed at the end of each string.
     */
    static writeln(message: string): void;
  }
}
