declare module 'mxgraph' {
  /**
   * Implements a basic animation in JavaScript.
   *
   * @class mxAnimation
   * @extends {mxEventSource}
   */
  class mxAnimation extends mxEventSource {
    /**
     * Creates an instance of mxAnimation.
     * @param {number} delay
     * @memberof mxAnimation
     */
    constructor(delay: number);

    /**
     * Specifies the delay between the animation steps. Defaul is 30ms.
     */
    delay: number;

    /**
     * Reference to the thread while the animation is running.
     */
    thread: number;

    /**
     * Returns true if the animation is running.
     */
    isRunning(): boolean;

    /**
     * Starts the animation by repeatedly invoking updateAnimation.
     */
    startAnimation(): void;

    /**
     * Hook for subclassers to implement the animation. Invoke stopAnimation
     * when finished, startAnimation to resume. This is called whenever the
     * timer fires and fires an mxEvent.EXECUTE event with no properties.
     */
    updateAnimation(): void;

    /**
     * Stops the animation by deleting the timer and fires an <mxEvent.DONE>.
     */
    stopAnimation(): void;
  }
}
