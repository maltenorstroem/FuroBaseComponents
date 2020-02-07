// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: furo/bigdecimal.proto

package furo;

public final class Bigdecimal {
  private Bigdecimal() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  public interface BigDecimalOrBuilder extends
      // @@protoc_insertion_point(interface_extends:furo.BigDecimal)
      com.google.protobuf.MessageOrBuilder {

    /**
     * <pre>
     * String representation of BigDecimal entity
     * </pre>
     *
     * <code>string display_name = 1;</code>
     */
    java.lang.String getDisplayName();
    /**
     * <pre>
     * String representation of BigDecimal entity
     * </pre>
     *
     * <code>string display_name = 1;</code>
     */
    com.google.protobuf.ByteString
        getDisplayNameBytes();

    /**
     * <pre>
     * The integer value of the BigDecimal
     * </pre>
     *
     * <code>int64 int_val = 3;</code>
     */
    long getIntVal();

    /**
     * <pre>
     * If zero or positive, the scale is the number of digits to the right of the decimal point. If negative, the unscaled value of the number is multiplied by ten to the power of the negation of the scale. For example, a scale of -3 means the unscaled value is multiplied by 1000.
     * </pre>
     *
     * <code>int32 scale = 2;</code>
     */
    int getScale();
  }
  /**
   * <pre>
   * A BigDecimal is defined by two values: an arbitrary precision integer and a 32-bit integer scale. The value of the BigDecimal is defined to be unscaledValue*10^{-scale}.
   * </pre>
   *
   * Protobuf type {@code furo.BigDecimal}
   */
  public  static final class BigDecimal extends
      com.google.protobuf.GeneratedMessageV3 implements
      // @@protoc_insertion_point(message_implements:furo.BigDecimal)
      BigDecimalOrBuilder {
  private static final long serialVersionUID = 0L;
    // Use BigDecimal.newBuilder() to construct.
    private BigDecimal(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
      super(builder);
    }
    private BigDecimal() {
      displayName_ = "";
    }

    @java.lang.Override
    public final com.google.protobuf.UnknownFieldSet
    getUnknownFields() {
      return this.unknownFields;
    }
    private BigDecimal(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      this();
      if (extensionRegistry == null) {
        throw new java.lang.NullPointerException();
      }
      int mutable_bitField0_ = 0;
      com.google.protobuf.UnknownFieldSet.Builder unknownFields =
          com.google.protobuf.UnknownFieldSet.newBuilder();
      try {
        boolean done = false;
        while (!done) {
          int tag = input.readTag();
          switch (tag) {
            case 0:
              done = true;
              break;
            case 10: {
              java.lang.String s = input.readStringRequireUtf8();

              displayName_ = s;
              break;
            }
            case 16: {

              scale_ = input.readInt32();
              break;
            }
            case 24: {

              intVal_ = input.readInt64();
              break;
            }
            default: {
              if (!parseUnknownField(
                  input, unknownFields, extensionRegistry, tag)) {
                done = true;
              }
              break;
            }
          }
        }
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        throw e.setUnfinishedMessage(this);
      } catch (java.io.IOException e) {
        throw new com.google.protobuf.InvalidProtocolBufferException(
            e).setUnfinishedMessage(this);
      } finally {
        this.unknownFields = unknownFields.build();
        makeExtensionsImmutable();
      }
    }
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return furo.Bigdecimal.internal_static_furo_BigDecimal_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return furo.Bigdecimal.internal_static_furo_BigDecimal_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              furo.Bigdecimal.BigDecimal.class, furo.Bigdecimal.BigDecimal.Builder.class);
    }

    public static final int DISPLAY_NAME_FIELD_NUMBER = 1;
    private volatile java.lang.Object displayName_;
    /**
     * <pre>
     * String representation of BigDecimal entity
     * </pre>
     *
     * <code>string display_name = 1;</code>
     */
    public java.lang.String getDisplayName() {
      java.lang.Object ref = displayName_;
      if (ref instanceof java.lang.String) {
        return (java.lang.String) ref;
      } else {
        com.google.protobuf.ByteString bs = 
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        displayName_ = s;
        return s;
      }
    }
    /**
     * <pre>
     * String representation of BigDecimal entity
     * </pre>
     *
     * <code>string display_name = 1;</code>
     */
    public com.google.protobuf.ByteString
        getDisplayNameBytes() {
      java.lang.Object ref = displayName_;
      if (ref instanceof java.lang.String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        displayName_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }

    public static final int INT_VAL_FIELD_NUMBER = 3;
    private long intVal_;
    /**
     * <pre>
     * The integer value of the BigDecimal
     * </pre>
     *
     * <code>int64 int_val = 3;</code>
     */
    public long getIntVal() {
      return intVal_;
    }

    public static final int SCALE_FIELD_NUMBER = 2;
    private int scale_;
    /**
     * <pre>
     * If zero or positive, the scale is the number of digits to the right of the decimal point. If negative, the unscaled value of the number is multiplied by ten to the power of the negation of the scale. For example, a scale of -3 means the unscaled value is multiplied by 1000.
     * </pre>
     *
     * <code>int32 scale = 2;</code>
     */
    public int getScale() {
      return scale_;
    }

    private byte memoizedIsInitialized = -1;
    @java.lang.Override
    public final boolean isInitialized() {
      byte isInitialized = memoizedIsInitialized;
      if (isInitialized == 1) return true;
      if (isInitialized == 0) return false;

      memoizedIsInitialized = 1;
      return true;
    }

    @java.lang.Override
    public void writeTo(com.google.protobuf.CodedOutputStream output)
                        throws java.io.IOException {
      if (!getDisplayNameBytes().isEmpty()) {
        com.google.protobuf.GeneratedMessageV3.writeString(output, 1, displayName_);
      }
      if (scale_ != 0) {
        output.writeInt32(2, scale_);
      }
      if (intVal_ != 0L) {
        output.writeInt64(3, intVal_);
      }
      unknownFields.writeTo(output);
    }

    @java.lang.Override
    public int getSerializedSize() {
      int size = memoizedSize;
      if (size != -1) return size;

      size = 0;
      if (!getDisplayNameBytes().isEmpty()) {
        size += com.google.protobuf.GeneratedMessageV3.computeStringSize(1, displayName_);
      }
      if (scale_ != 0) {
        size += com.google.protobuf.CodedOutputStream
          .computeInt32Size(2, scale_);
      }
      if (intVal_ != 0L) {
        size += com.google.protobuf.CodedOutputStream
          .computeInt64Size(3, intVal_);
      }
      size += unknownFields.getSerializedSize();
      memoizedSize = size;
      return size;
    }

    @java.lang.Override
    public boolean equals(final java.lang.Object obj) {
      if (obj == this) {
       return true;
      }
      if (!(obj instanceof furo.Bigdecimal.BigDecimal)) {
        return super.equals(obj);
      }
      furo.Bigdecimal.BigDecimal other = (furo.Bigdecimal.BigDecimal) obj;

      if (!getDisplayName()
          .equals(other.getDisplayName())) return false;
      if (getIntVal()
          != other.getIntVal()) return false;
      if (getScale()
          != other.getScale()) return false;
      if (!unknownFields.equals(other.unknownFields)) return false;
      return true;
    }

    @java.lang.Override
    public int hashCode() {
      if (memoizedHashCode != 0) {
        return memoizedHashCode;
      }
      int hash = 41;
      hash = (19 * hash) + getDescriptor().hashCode();
      hash = (37 * hash) + DISPLAY_NAME_FIELD_NUMBER;
      hash = (53 * hash) + getDisplayName().hashCode();
      hash = (37 * hash) + INT_VAL_FIELD_NUMBER;
      hash = (53 * hash) + com.google.protobuf.Internal.hashLong(
          getIntVal());
      hash = (37 * hash) + SCALE_FIELD_NUMBER;
      hash = (53 * hash) + getScale();
      hash = (29 * hash) + unknownFields.hashCode();
      memoizedHashCode = hash;
      return hash;
    }

    public static furo.Bigdecimal.BigDecimal parseFrom(
        java.nio.ByteBuffer data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data);
    }
    public static furo.Bigdecimal.BigDecimal parseFrom(
        java.nio.ByteBuffer data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data, extensionRegistry);
    }
    public static furo.Bigdecimal.BigDecimal parseFrom(
        com.google.protobuf.ByteString data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data);
    }
    public static furo.Bigdecimal.BigDecimal parseFrom(
        com.google.protobuf.ByteString data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data, extensionRegistry);
    }
    public static furo.Bigdecimal.BigDecimal parseFrom(byte[] data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data);
    }
    public static furo.Bigdecimal.BigDecimal parseFrom(
        byte[] data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data, extensionRegistry);
    }
    public static furo.Bigdecimal.BigDecimal parseFrom(java.io.InputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input);
    }
    public static furo.Bigdecimal.BigDecimal parseFrom(
        java.io.InputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input, extensionRegistry);
    }
    public static furo.Bigdecimal.BigDecimal parseDelimitedFrom(java.io.InputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseDelimitedWithIOException(PARSER, input);
    }
    public static furo.Bigdecimal.BigDecimal parseDelimitedFrom(
        java.io.InputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
    }
    public static furo.Bigdecimal.BigDecimal parseFrom(
        com.google.protobuf.CodedInputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input);
    }
    public static furo.Bigdecimal.BigDecimal parseFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input, extensionRegistry);
    }

    @java.lang.Override
    public Builder newBuilderForType() { return newBuilder(); }
    public static Builder newBuilder() {
      return DEFAULT_INSTANCE.toBuilder();
    }
    public static Builder newBuilder(furo.Bigdecimal.BigDecimal prototype) {
      return DEFAULT_INSTANCE.toBuilder().mergeFrom(prototype);
    }
    @java.lang.Override
    public Builder toBuilder() {
      return this == DEFAULT_INSTANCE
          ? new Builder() : new Builder().mergeFrom(this);
    }

    @java.lang.Override
    protected Builder newBuilderForType(
        com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
      Builder builder = new Builder(parent);
      return builder;
    }
    /**
     * <pre>
     * A BigDecimal is defined by two values: an arbitrary precision integer and a 32-bit integer scale. The value of the BigDecimal is defined to be unscaledValue*10^{-scale}.
     * </pre>
     *
     * Protobuf type {@code furo.BigDecimal}
     */
    public static final class Builder extends
        com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
        // @@protoc_insertion_point(builder_implements:furo.BigDecimal)
        furo.Bigdecimal.BigDecimalOrBuilder {
      public static final com.google.protobuf.Descriptors.Descriptor
          getDescriptor() {
        return furo.Bigdecimal.internal_static_furo_BigDecimal_descriptor;
      }

      @java.lang.Override
      protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
          internalGetFieldAccessorTable() {
        return furo.Bigdecimal.internal_static_furo_BigDecimal_fieldAccessorTable
            .ensureFieldAccessorsInitialized(
                furo.Bigdecimal.BigDecimal.class, furo.Bigdecimal.BigDecimal.Builder.class);
      }

      // Construct using furo.Bigdecimal.BigDecimal.newBuilder()
      private Builder() {
        maybeForceBuilderInitialization();
      }

      private Builder(
          com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
        super(parent);
        maybeForceBuilderInitialization();
      }
      private void maybeForceBuilderInitialization() {
        if (com.google.protobuf.GeneratedMessageV3
                .alwaysUseFieldBuilders) {
        }
      }
      @java.lang.Override
      public Builder clear() {
        super.clear();
        displayName_ = "";

        intVal_ = 0L;

        scale_ = 0;

        return this;
      }

      @java.lang.Override
      public com.google.protobuf.Descriptors.Descriptor
          getDescriptorForType() {
        return furo.Bigdecimal.internal_static_furo_BigDecimal_descriptor;
      }

      @java.lang.Override
      public furo.Bigdecimal.BigDecimal getDefaultInstanceForType() {
        return furo.Bigdecimal.BigDecimal.getDefaultInstance();
      }

      @java.lang.Override
      public furo.Bigdecimal.BigDecimal build() {
        furo.Bigdecimal.BigDecimal result = buildPartial();
        if (!result.isInitialized()) {
          throw newUninitializedMessageException(result);
        }
        return result;
      }

      @java.lang.Override
      public furo.Bigdecimal.BigDecimal buildPartial() {
        furo.Bigdecimal.BigDecimal result = new furo.Bigdecimal.BigDecimal(this);
        result.displayName_ = displayName_;
        result.intVal_ = intVal_;
        result.scale_ = scale_;
        onBuilt();
        return result;
      }

      @java.lang.Override
      public Builder clone() {
        return super.clone();
      }
      @java.lang.Override
      public Builder setField(
          com.google.protobuf.Descriptors.FieldDescriptor field,
          java.lang.Object value) {
        return super.setField(field, value);
      }
      @java.lang.Override
      public Builder clearField(
          com.google.protobuf.Descriptors.FieldDescriptor field) {
        return super.clearField(field);
      }
      @java.lang.Override
      public Builder clearOneof(
          com.google.protobuf.Descriptors.OneofDescriptor oneof) {
        return super.clearOneof(oneof);
      }
      @java.lang.Override
      public Builder setRepeatedField(
          com.google.protobuf.Descriptors.FieldDescriptor field,
          int index, java.lang.Object value) {
        return super.setRepeatedField(field, index, value);
      }
      @java.lang.Override
      public Builder addRepeatedField(
          com.google.protobuf.Descriptors.FieldDescriptor field,
          java.lang.Object value) {
        return super.addRepeatedField(field, value);
      }
      @java.lang.Override
      public Builder mergeFrom(com.google.protobuf.Message other) {
        if (other instanceof furo.Bigdecimal.BigDecimal) {
          return mergeFrom((furo.Bigdecimal.BigDecimal)other);
        } else {
          super.mergeFrom(other);
          return this;
        }
      }

      public Builder mergeFrom(furo.Bigdecimal.BigDecimal other) {
        if (other == furo.Bigdecimal.BigDecimal.getDefaultInstance()) return this;
        if (!other.getDisplayName().isEmpty()) {
          displayName_ = other.displayName_;
          onChanged();
        }
        if (other.getIntVal() != 0L) {
          setIntVal(other.getIntVal());
        }
        if (other.getScale() != 0) {
          setScale(other.getScale());
        }
        this.mergeUnknownFields(other.unknownFields);
        onChanged();
        return this;
      }

      @java.lang.Override
      public final boolean isInitialized() {
        return true;
      }

      @java.lang.Override
      public Builder mergeFrom(
          com.google.protobuf.CodedInputStream input,
          com.google.protobuf.ExtensionRegistryLite extensionRegistry)
          throws java.io.IOException {
        furo.Bigdecimal.BigDecimal parsedMessage = null;
        try {
          parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
        } catch (com.google.protobuf.InvalidProtocolBufferException e) {
          parsedMessage = (furo.Bigdecimal.BigDecimal) e.getUnfinishedMessage();
          throw e.unwrapIOException();
        } finally {
          if (parsedMessage != null) {
            mergeFrom(parsedMessage);
          }
        }
        return this;
      }

      private java.lang.Object displayName_ = "";
      /**
       * <pre>
       * String representation of BigDecimal entity
       * </pre>
       *
       * <code>string display_name = 1;</code>
       */
      public java.lang.String getDisplayName() {
        java.lang.Object ref = displayName_;
        if (!(ref instanceof java.lang.String)) {
          com.google.protobuf.ByteString bs =
              (com.google.protobuf.ByteString) ref;
          java.lang.String s = bs.toStringUtf8();
          displayName_ = s;
          return s;
        } else {
          return (java.lang.String) ref;
        }
      }
      /**
       * <pre>
       * String representation of BigDecimal entity
       * </pre>
       *
       * <code>string display_name = 1;</code>
       */
      public com.google.protobuf.ByteString
          getDisplayNameBytes() {
        java.lang.Object ref = displayName_;
        if (ref instanceof String) {
          com.google.protobuf.ByteString b = 
              com.google.protobuf.ByteString.copyFromUtf8(
                  (java.lang.String) ref);
          displayName_ = b;
          return b;
        } else {
          return (com.google.protobuf.ByteString) ref;
        }
      }
      /**
       * <pre>
       * String representation of BigDecimal entity
       * </pre>
       *
       * <code>string display_name = 1;</code>
       */
      public Builder setDisplayName(
          java.lang.String value) {
        if (value == null) {
    throw new NullPointerException();
  }
  
        displayName_ = value;
        onChanged();
        return this;
      }
      /**
       * <pre>
       * String representation of BigDecimal entity
       * </pre>
       *
       * <code>string display_name = 1;</code>
       */
      public Builder clearDisplayName() {
        
        displayName_ = getDefaultInstance().getDisplayName();
        onChanged();
        return this;
      }
      /**
       * <pre>
       * String representation of BigDecimal entity
       * </pre>
       *
       * <code>string display_name = 1;</code>
       */
      public Builder setDisplayNameBytes(
          com.google.protobuf.ByteString value) {
        if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
        
        displayName_ = value;
        onChanged();
        return this;
      }

      private long intVal_ ;
      /**
       * <pre>
       * The integer value of the BigDecimal
       * </pre>
       *
       * <code>int64 int_val = 3;</code>
       */
      public long getIntVal() {
        return intVal_;
      }
      /**
       * <pre>
       * The integer value of the BigDecimal
       * </pre>
       *
       * <code>int64 int_val = 3;</code>
       */
      public Builder setIntVal(long value) {
        
        intVal_ = value;
        onChanged();
        return this;
      }
      /**
       * <pre>
       * The integer value of the BigDecimal
       * </pre>
       *
       * <code>int64 int_val = 3;</code>
       */
      public Builder clearIntVal() {
        
        intVal_ = 0L;
        onChanged();
        return this;
      }

      private int scale_ ;
      /**
       * <pre>
       * If zero or positive, the scale is the number of digits to the right of the decimal point. If negative, the unscaled value of the number is multiplied by ten to the power of the negation of the scale. For example, a scale of -3 means the unscaled value is multiplied by 1000.
       * </pre>
       *
       * <code>int32 scale = 2;</code>
       */
      public int getScale() {
        return scale_;
      }
      /**
       * <pre>
       * If zero or positive, the scale is the number of digits to the right of the decimal point. If negative, the unscaled value of the number is multiplied by ten to the power of the negation of the scale. For example, a scale of -3 means the unscaled value is multiplied by 1000.
       * </pre>
       *
       * <code>int32 scale = 2;</code>
       */
      public Builder setScale(int value) {
        
        scale_ = value;
        onChanged();
        return this;
      }
      /**
       * <pre>
       * If zero or positive, the scale is the number of digits to the right of the decimal point. If negative, the unscaled value of the number is multiplied by ten to the power of the negation of the scale. For example, a scale of -3 means the unscaled value is multiplied by 1000.
       * </pre>
       *
       * <code>int32 scale = 2;</code>
       */
      public Builder clearScale() {
        
        scale_ = 0;
        onChanged();
        return this;
      }
      @java.lang.Override
      public final Builder setUnknownFields(
          final com.google.protobuf.UnknownFieldSet unknownFields) {
        return super.setUnknownFields(unknownFields);
      }

      @java.lang.Override
      public final Builder mergeUnknownFields(
          final com.google.protobuf.UnknownFieldSet unknownFields) {
        return super.mergeUnknownFields(unknownFields);
      }


      // @@protoc_insertion_point(builder_scope:furo.BigDecimal)
    }

    // @@protoc_insertion_point(class_scope:furo.BigDecimal)
    private static final furo.Bigdecimal.BigDecimal DEFAULT_INSTANCE;
    static {
      DEFAULT_INSTANCE = new furo.Bigdecimal.BigDecimal();
    }

    public static furo.Bigdecimal.BigDecimal getDefaultInstance() {
      return DEFAULT_INSTANCE;
    }

    private static final com.google.protobuf.Parser<BigDecimal>
        PARSER = new com.google.protobuf.AbstractParser<BigDecimal>() {
      @java.lang.Override
      public BigDecimal parsePartialFrom(
          com.google.protobuf.CodedInputStream input,
          com.google.protobuf.ExtensionRegistryLite extensionRegistry)
          throws com.google.protobuf.InvalidProtocolBufferException {
        return new BigDecimal(input, extensionRegistry);
      }
    };

    public static com.google.protobuf.Parser<BigDecimal> parser() {
      return PARSER;
    }

    @java.lang.Override
    public com.google.protobuf.Parser<BigDecimal> getParserForType() {
      return PARSER;
    }

    @java.lang.Override
    public furo.Bigdecimal.BigDecimal getDefaultInstanceForType() {
      return DEFAULT_INSTANCE;
    }

  }

  private static final com.google.protobuf.Descriptors.Descriptor
    internal_static_furo_BigDecimal_descriptor;
  private static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_furo_BigDecimal_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n\025furo/bigdecimal.proto\022\004furo\"B\n\nBigDeci" +
      "mal\022\024\n\014display_name\030\001 \001(\t\022\017\n\007int_val\030\003 \001" +
      "(\003\022\r\n\005scale\030\002 \001(\005b\006proto3"
    };
    com.google.protobuf.Descriptors.FileDescriptor.InternalDescriptorAssigner assigner =
        new com.google.protobuf.Descriptors.FileDescriptor.    InternalDescriptorAssigner() {
          public com.google.protobuf.ExtensionRegistry assignDescriptors(
              com.google.protobuf.Descriptors.FileDescriptor root) {
            descriptor = root;
            return null;
          }
        };
    com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
        }, assigner);
    internal_static_furo_BigDecimal_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_furo_BigDecimal_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_furo_BigDecimal_descriptor,
        new java.lang.String[] { "DisplayName", "IntVal", "Scale", });
  }

  // @@protoc_insertion_point(outer_class_scope)
}