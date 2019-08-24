// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: com.acme.api.proto

package com.acme;

public interface ProjectOrBuilder extends
    // @@protoc_insertion_point(interface_extends:bundled.Project)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <pre>
   * Project cost limit
   * </pre>
   *
   * <code>.google.type.Money cost_limit = 7;</code>
   */
  boolean hasCostLimit();
  /**
   * <pre>
   * Project cost limit
   * </pre>
   *
   * <code>.google.type.Money cost_limit = 7;</code>
   */
  google.type.MoneyOuterClass.Money getCostLimit();
  /**
   * <pre>
   * Project cost limit
   * </pre>
   *
   * <code>.google.type.Money cost_limit = 7;</code>
   */
  google.type.MoneyOuterClass.MoneyOrBuilder getCostLimitOrBuilder();

  /**
   * <pre>
   * Short project description
   * </pre>
   *
   * <code>string description = 5;</code>
   */
  java.lang.String getDescription();
  /**
   * <pre>
   * Short project description
   * </pre>
   *
   * <code>string description = 5;</code>
   */
  com.google.protobuf.ByteString
      getDescriptionBytes();

  /**
   * <pre>
   * Localized String representation of a project
   * </pre>
   *
   * <code>string display_name = 2;</code>
   */
  java.lang.String getDisplayName();
  /**
   * <pre>
   * Localized String representation of a project
   * </pre>
   *
   * <code>string display_name = 2;</code>
   */
  com.google.protobuf.ByteString
      getDisplayNameBytes();

  /**
   * <pre>
   * Prospective end date of the project
   * </pre>
   *
   * <code>.google.type.Date end = 4;</code>
   */
  boolean hasEnd();
  /**
   * <pre>
   * Prospective end date of the project
   * </pre>
   *
   * <code>.google.type.Date end = 4;</code>
   */
  google.type.DateOuterClass.Date getEnd();
  /**
   * <pre>
   * Prospective end date of the project
   * </pre>
   *
   * <code>.google.type.Date end = 4;</code>
   */
  google.type.DateOuterClass.DateOrBuilder getEndOrBuilder();

  /**
   * <pre>
   * Identity of a project
   * </pre>
   *
   * <code>string id = 1;</code>
   */
  java.lang.String getId();
  /**
   * <pre>
   * Identity of a project
   * </pre>
   *
   * <code>string id = 1;</code>
   */
  com.google.protobuf.ByteString
      getIdBytes();

  /**
   * <pre>
   * List of project members
   * </pre>
   *
   * <code>repeated .bundled.Person members = 6;</code>
   */
  java.util.List<com.acme.Person> 
      getMembersList();
  /**
   * <pre>
   * List of project members
   * </pre>
   *
   * <code>repeated .bundled.Person members = 6;</code>
   */
  com.acme.Person getMembers(int index);
  /**
   * <pre>
   * List of project members
   * </pre>
   *
   * <code>repeated .bundled.Person members = 6;</code>
   */
  int getMembersCount();
  /**
   * <pre>
   * List of project members
   * </pre>
   *
   * <code>repeated .bundled.Person members = 6;</code>
   */
  java.util.List<? extends com.acme.PersonOrBuilder> 
      getMembersOrBuilderList();
  /**
   * <pre>
   * List of project members
   * </pre>
   *
   * <code>repeated .bundled.Person members = 6;</code>
   */
  com.acme.PersonOrBuilder getMembersOrBuilder(
      int index);

  /**
   * <pre>
   * Start date of the project
   * </pre>
   *
   * <code>.google.type.Date start = 3;</code>
   */
  boolean hasStart();
  /**
   * <pre>
   * Start date of the project
   * </pre>
   *
   * <code>.google.type.Date start = 3;</code>
   */
  google.type.DateOuterClass.Date getStart();
  /**
   * <pre>
   * Start date of the project
   * </pre>
   *
   * <code>.google.type.Date start = 3;</code>
   */
  google.type.DateOuterClass.DateOrBuilder getStartOrBuilder();
}
