// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: __bundled/BundledService.proto

package taskmanager;

public interface DeleteProjectServiceRequestOrBuilder extends
    // @@protoc_insertion_point(interface_extends:taskmanager.DeleteProjectServiceRequest)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>string prj = 1;</code>
   */
  java.lang.String getPrj();
  /**
   * <code>string prj = 1;</code>
   */
  com.google.protobuf.ByteString
      getPrjBytes();

  /**
   * <code>.google.protobuf.Empty data = 2;</code>
   */
  boolean hasData();
  /**
   * <code>.google.protobuf.Empty data = 2;</code>
   */
  google.protobuf.EmptyOuterClass.Empty getData();
  /**
   * <code>.google.protobuf.Empty data = 2;</code>
   */
  google.protobuf.EmptyOuterClass.EmptyOrBuilder getDataOrBuilder();
}
