// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: __bundled/BundledService.proto

package taskmanager;

public interface UpdateExperimentServiceRequestOrBuilder extends
    // @@protoc_insertion_point(interface_extends:taskmanager.UpdateExperimentServiceRequest)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>string exp = 1;</code>
   */
  java.lang.String getExp();
  /**
   * <code>string exp = 1;</code>
   */
  com.google.protobuf.ByteString
      getExpBytes();

  /**
   * <code>.experiment.Experiment data = 2;</code>
   */
  boolean hasData();
  /**
   * <code>.experiment.Experiment data = 2;</code>
   */
  experiment.ExperimentOuterClass.Experiment getData();
  /**
   * <code>.experiment.Experiment data = 2;</code>
   */
  experiment.ExperimentOuterClass.ExperimentOrBuilder getDataOrBuilder();
}