/**
 *
 * `furo-head-tail`
 *  Splits an iterable (i.e. Array) in its head and tail part.
 *
 *```
 *  <furo-head-tail ƒ-split="--arrayData" @-head="--firstElement" @-tail="--restOfArray"></furo-head-tail>
 *```
 *
 * @summary split an array
 * @customElement
 */
class FuroHeadTail extends HTMLElement {
  /**
   * Splits an iterable to its head (first item) and its tail (the rest) parts.
   *
   * ```
   * ["a", "b", "c", "d"]
   *  |_|  |___________|
   *   ^      ^
   *   |      |
   *   |     TAIL   => ["b", "c", "d"]
   *  HEAD          => "a"
   * ```
   *
   * @param iterable
   */
  split(iterable) {
    if (!Array.isArray(iterable)) {
      // warning is developer friendly
      // eslint-disable-next-line no-console
      console.warn('input is not iterable', iterable);
      return;
    }
    const [head, ...tail] = iterable;

    /**
     * @event head
     * Fired when Array was splitted
     * detail payload: {Any} first element of array
     */
    const headEvent = new Event('head', { composed: true, bubbles: true });
    headEvent.detail = head;
    this.dispatchEvent(headEvent);

    /**
     * @event tail
     * Fired when Array was splitted
     * detail payload: {Array || Any} the tail from the injected array (e1 - 1n)
     */
    const tailEvent = new Event('tail', { composed: true, bubbles: true });
    tailEvent.detail = tail;
    this.dispatchEvent(tailEvent);
  }
}

window.customElements.define('furo-head-tail', FuroHeadTail);
