// eslint-disable-next-line import/named
import { DisplayUint32 } from './display-uint32.js';
/**
 * `display-google-protobuf-boolvalue`
 * The display-google-protobuf-boolvalue component displays a FieldNode of type `google.protobuf.BoolValue` in read only mode.
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 * - attribute: tabular-form (this attribute is set, if the component is inside of a furo-data-table. This attribute is only needed, if the styling inside of a table is different)
 *
 * @summary
 * @customElement
 * @demo demo display-google-protobuf-boolvalue Basic Usage
 */
class DisplayGoolgeProtobufUin32value extends DisplayUint32 {}

window.customElements.define(
  'display-google-protobuf-uint32value',
  DisplayGoolgeProtobufUin32value,
);
