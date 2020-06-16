// Code generated by furo-proto-gen. DO NOT EDIT.

// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.21.0-devel
// 	protoc        v3.11.4
// source: google/protobuf/types/known/field_mask.proto

package google_protobuf_types_known

import (
	proto "github.com/golang/protobuf/proto"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// This is a compile-time assertion that a sufficiently up-to-date version
// of the legacy proto package is being used.
const _ = proto.ProtoPackageIsVersion4

// A field mask in update operations specifies which fields of the targeted resource are going to be updated. https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/field_mask.proto
type FieldMask struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The implementation of any API method which has a FieldMask type field in the request should verify the included field paths, and return an `INVALID_ARGUMENT` error if any path is duplicated or unmappable.
	Paths []string `protobuf:"bytes,1,rep,name=paths,proto3" json:"paths,omitempty"`
}

func (x *FieldMask) Reset() {
	*x = FieldMask{}
	if protoimpl.UnsafeEnabled {
		mi := &file_google_protobuf_types_known_field_mask_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *FieldMask) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*FieldMask) ProtoMessage() {}

func (x *FieldMask) ProtoReflect() protoreflect.Message {
	mi := &file_google_protobuf_types_known_field_mask_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use FieldMask.ProtoReflect.Descriptor instead.
func (*FieldMask) Descriptor() ([]byte, []int) {
	return file_google_protobuf_types_known_field_mask_proto_rawDescGZIP(), []int{0}
}

func (x *FieldMask) GetPaths() []string {
	if x != nil {
		return x.Paths
	}
	return nil
}

var File_google_protobuf_types_known_field_mask_proto protoreflect.FileDescriptor

var file_google_protobuf_types_known_field_mask_proto_rawDesc = []byte{
	0x0a, 0x2c, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75,
	0x66, 0x2f, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2f, 0x6b, 0x6e, 0x6f, 0x77, 0x6e, 0x2f, 0x66, 0x69,
	0x65, 0x6c, 0x64, 0x5f, 0x6d, 0x61, 0x73, 0x6b, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x1b,
	0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e,
	0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x6b, 0x6e, 0x6f, 0x77, 0x6e, 0x22, 0x21, 0x0a, 0x09, 0x46,
	0x69, 0x65, 0x6c, 0x64, 0x4d, 0x61, 0x73, 0x6b, 0x12, 0x14, 0x0a, 0x05, 0x70, 0x61, 0x74, 0x68,
	0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x09, 0x52, 0x05, 0x70, 0x61, 0x74, 0x68, 0x73, 0x62, 0x06,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_google_protobuf_types_known_field_mask_proto_rawDescOnce sync.Once
	file_google_protobuf_types_known_field_mask_proto_rawDescData = file_google_protobuf_types_known_field_mask_proto_rawDesc
)

func file_google_protobuf_types_known_field_mask_proto_rawDescGZIP() []byte {
	file_google_protobuf_types_known_field_mask_proto_rawDescOnce.Do(func() {
		file_google_protobuf_types_known_field_mask_proto_rawDescData = protoimpl.X.CompressGZIP(file_google_protobuf_types_known_field_mask_proto_rawDescData)
	})
	return file_google_protobuf_types_known_field_mask_proto_rawDescData
}

var file_google_protobuf_types_known_field_mask_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_google_protobuf_types_known_field_mask_proto_goTypes = []interface{}{
	(*FieldMask)(nil), // 0: google.protobuf.types.known.FieldMask
}
var file_google_protobuf_types_known_field_mask_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_google_protobuf_types_known_field_mask_proto_init() }
func file_google_protobuf_types_known_field_mask_proto_init() {
	if File_google_protobuf_types_known_field_mask_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_google_protobuf_types_known_field_mask_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*FieldMask); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_google_protobuf_types_known_field_mask_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_google_protobuf_types_known_field_mask_proto_goTypes,
		DependencyIndexes: file_google_protobuf_types_known_field_mask_proto_depIdxs,
		MessageInfos:      file_google_protobuf_types_known_field_mask_proto_msgTypes,
	}.Build()
	File_google_protobuf_types_known_field_mask_proto = out.File
	file_google_protobuf_types_known_field_mask_proto_rawDesc = nil
	file_google_protobuf_types_known_field_mask_proto_goTypes = nil
	file_google_protobuf_types_known_field_mask_proto_depIdxs = nil
}
