declare module 'mxgraph' {
  type FormFieldType = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
  /**
   * A simple class for creating HTML forms.
   *
   * @class mxForm
   */
  class mxForm {
    /**
     * Creates a HTML table using the specified classname.
     * @constructor
     */
    constructor(className: string);

    /**
     * Holds the DOM node that represents the table.
     */
    table: HTMLTableElement;

    /**
     * Holds the DOM node that represents the tbody (table body). New rows
     * can be added to this object using DOM API.
     */
    body: boolean;

    /**
     * Returns the table that contains this form.
     */
    getTable(): HTMLTableElement;

    /**
     * Helper method to add an OK and Cancel button using the respective
     * functions.
     */
    addButtons(okFunct: Function, cancelFunct: Function): void;

    /**
     * Adds an input for the given name, type and value and returns it.
     */
    addText(name: string, value: any, type: string): HTMLInputElement;

    /**
     * Adds a checkbox for the given name and value and returns the textfield.
     */
    addCheckbox(name: string, value: boolean): HTMLInputElement;

    /**
     * Adds a textarea for the given name and value and returns the textarea.
     */
    addTextarea(name: string, value: string, rows: number): HTMLTextAreaElement;

    /**
     * Adds a combo for the given name and returns the combo.
     */
    addCombo(name: string, isMultiSelect: boolean, size?: number): HTMLSelectElement;

    /**
     * Adds an option for the given label to the specified combo.
     */
    addOption(combo: HTMLElement, label: string, value: any, isSelected?: boolean): void;

    /**
     * Adds a new row with the name and the input field in two columns and
     * returns the given input.
     */
    addField(name: string, input: FormFieldType): FormFieldType;
  }
}
