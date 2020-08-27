// Code generated by protoc-gen-go. DO NOT EDIT.
// source: furo/fat/fat.proto

package furo_fat

import (
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

// Furo annotated type wrapper message for `int64`. The range constraints are set to Number.MIN_SAFE_INTEGER - Number.MAX_SAFE_INTEGER because of browser limitations
type Int64 struct {
	// Attributes for a value, something like confidential-msg: you are not allowed to see this value
	Attributes map[string]string `protobuf:"bytes,3,rep,name=attributes,proto3" json:"attributes,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	// Labels / flags for the value, something like unspecified, empty, confidential, absent,... Can be used for AI, UI, Business Logic,...
	Labels []string `protobuf:"bytes,2,rep,name=labels,proto3" json:"labels,omitempty"`
	// The JSON representation for `Int64Value` is JSON number, range is set to Number.MIN_SAFE_INTEGER - Number.MAX_SAFE_INTEGER
	Value                int64    `protobuf:"varint,1,opt,name=value,proto3" json:"value,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Int64) Reset()         { *m = Int64{} }
func (m *Int64) String() string { return proto.CompactTextString(m) }
func (*Int64) ProtoMessage()    {}
func (*Int64) Descriptor() ([]byte, []int) {
	return fileDescriptor_bcae0283c1db6cbd, []int{0}
}

func (m *Int64) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Int64.Unmarshal(m, b)
}
func (m *Int64) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Int64.Marshal(b, m, deterministic)
}
func (m *Int64) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Int64.Merge(m, src)
}
func (m *Int64) XXX_Size() int {
	return xxx_messageInfo_Int64.Size(m)
}
func (m *Int64) XXX_DiscardUnknown() {
	xxx_messageInfo_Int64.DiscardUnknown(m)
}

var xxx_messageInfo_Int64 proto.InternalMessageInfo

func (m *Int64) GetAttributes() map[string]string {
	if m != nil {
		return m.Attributes
	}
	return nil
}

func (m *Int64) GetLabels() []string {
	if m != nil {
		return m.Labels
	}
	return nil
}

func (m *Int64) GetValue() int64 {
	if m != nil {
		return m.Value
	}
	return 0
}

// Furo annotated type wrapper message for `empty`. Empty has no values and only contains the labels and attributes
type Empty struct {
	// Attributes for a value, something like confidential-msg: you are not allowed to see this value
	Attributes map[string]string `protobuf:"bytes,3,rep,name=attributes,proto3" json:"attributes,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	// Labels / flags for the value, something like unspecified, empty, confidential, absent,... Can be used for AI, UI, Business Logic,...
	Labels               []string `protobuf:"bytes,2,rep,name=labels,proto3" json:"labels,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Empty) Reset()         { *m = Empty{} }
func (m *Empty) String() string { return proto.CompactTextString(m) }
func (*Empty) ProtoMessage()    {}
func (*Empty) Descriptor() ([]byte, []int) {
	return fileDescriptor_bcae0283c1db6cbd, []int{1}
}

func (m *Empty) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Empty.Unmarshal(m, b)
}
func (m *Empty) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Empty.Marshal(b, m, deterministic)
}
func (m *Empty) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Empty.Merge(m, src)
}
func (m *Empty) XXX_Size() int {
	return xxx_messageInfo_Empty.Size(m)
}
func (m *Empty) XXX_DiscardUnknown() {
	xxx_messageInfo_Empty.DiscardUnknown(m)
}

var xxx_messageInfo_Empty proto.InternalMessageInfo

func (m *Empty) GetAttributes() map[string]string {
	if m != nil {
		return m.Attributes
	}
	return nil
}

func (m *Empty) GetLabels() []string {
	if m != nil {
		return m.Labels
	}
	return nil
}

// Furo annotated type wrapper message for `int32`.
type Int32 struct {
	// Attributes for a value, something like confidential-msg: you are not allowed to see this value
	Attributes map[string]string `protobuf:"bytes,3,rep,name=attributes,proto3" json:"attributes,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	// Labels / flags for the value, something like unspecified, empty, confidential, absent,... Can be used for AI, UI, Business Logic,...
	Labels []string `protobuf:"bytes,2,rep,name=labels,proto3" json:"labels,omitempty"`
	// The JSON representation for `Int32Value` is JSON number
	Value                int32    `protobuf:"varint,1,opt,name=value,proto3" json:"value,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Int32) Reset()         { *m = Int32{} }
func (m *Int32) String() string { return proto.CompactTextString(m) }
func (*Int32) ProtoMessage()    {}
func (*Int32) Descriptor() ([]byte, []int) {
	return fileDescriptor_bcae0283c1db6cbd, []int{2}
}

func (m *Int32) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Int32.Unmarshal(m, b)
}
func (m *Int32) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Int32.Marshal(b, m, deterministic)
}
func (m *Int32) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Int32.Merge(m, src)
}
func (m *Int32) XXX_Size() int {
	return xxx_messageInfo_Int32.Size(m)
}
func (m *Int32) XXX_DiscardUnknown() {
	xxx_messageInfo_Int32.DiscardUnknown(m)
}

var xxx_messageInfo_Int32 proto.InternalMessageInfo

func (m *Int32) GetAttributes() map[string]string {
	if m != nil {
		return m.Attributes
	}
	return nil
}

func (m *Int32) GetLabels() []string {
	if m != nil {
		return m.Labels
	}
	return nil
}

func (m *Int32) GetValue() int32 {
	if m != nil {
		return m.Value
	}
	return 0
}

// Furo annotated type wrapper message for `double`. The range constraints are set to Number.MIN_SAFE_INTEGER - Number.MAX_SAFE_INTEGER because of browser limitations
type Double struct {
	// Attributes for a value, something like confidential-msg: you are not allowed to see this value
	Attributes map[string]string `protobuf:"bytes,3,rep,name=attributes,proto3" json:"attributes,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	// Labels / flags for the value, something like unspecified, empty, confidential, absent,... Can be used for AI, UI, Business Logic,...
	Labels []string `protobuf:"bytes,2,rep,name=labels,proto3" json:"labels,omitempty"`
	// The JSON representation for `DoubleValue` is JSON number, range is set to Number.MIN_SAFE_INTEGER - Number.MAX_SAFE_INTEGER
	Value                float64  `protobuf:"fixed64,1,opt,name=value,proto3" json:"value,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Double) Reset()         { *m = Double{} }
func (m *Double) String() string { return proto.CompactTextString(m) }
func (*Double) ProtoMessage()    {}
func (*Double) Descriptor() ([]byte, []int) {
	return fileDescriptor_bcae0283c1db6cbd, []int{3}
}

func (m *Double) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Double.Unmarshal(m, b)
}
func (m *Double) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Double.Marshal(b, m, deterministic)
}
func (m *Double) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Double.Merge(m, src)
}
func (m *Double) XXX_Size() int {
	return xxx_messageInfo_Double.Size(m)
}
func (m *Double) XXX_DiscardUnknown() {
	xxx_messageInfo_Double.DiscardUnknown(m)
}

var xxx_messageInfo_Double proto.InternalMessageInfo

func (m *Double) GetAttributes() map[string]string {
	if m != nil {
		return m.Attributes
	}
	return nil
}

func (m *Double) GetLabels() []string {
	if m != nil {
		return m.Labels
	}
	return nil
}

func (m *Double) GetValue() float64 {
	if m != nil {
		return m.Value
	}
	return 0
}

// Furo annotated type wrapper message for `uint64`.  The range constraints are set to Number.MAX_SAFE_INTEGER because of browser limitations
type Uint64 struct {
	// Attributes for a value, something like confidential-msg: you are not allowed to see this value
	Attributes map[string]string `protobuf:"bytes,3,rep,name=attributes,proto3" json:"attributes,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	// Labels / flags for the value, something like unspecified, empty, confidential, absent,... Can be used for AI, UI, Business Logic,...
	Labels []string `protobuf:"bytes,2,rep,name=labels,proto3" json:"labels,omitempty"`
	// The JSON representation for `Uint64Value` is JSON number, range is set to 0 - Number.MAX_SAFE_INTEGER
	Value                uint64   `protobuf:"varint,1,opt,name=value,proto3" json:"value,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Uint64) Reset()         { *m = Uint64{} }
func (m *Uint64) String() string { return proto.CompactTextString(m) }
func (*Uint64) ProtoMessage()    {}
func (*Uint64) Descriptor() ([]byte, []int) {
	return fileDescriptor_bcae0283c1db6cbd, []int{4}
}

func (m *Uint64) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Uint64.Unmarshal(m, b)
}
func (m *Uint64) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Uint64.Marshal(b, m, deterministic)
}
func (m *Uint64) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Uint64.Merge(m, src)
}
func (m *Uint64) XXX_Size() int {
	return xxx_messageInfo_Uint64.Size(m)
}
func (m *Uint64) XXX_DiscardUnknown() {
	xxx_messageInfo_Uint64.DiscardUnknown(m)
}

var xxx_messageInfo_Uint64 proto.InternalMessageInfo

func (m *Uint64) GetAttributes() map[string]string {
	if m != nil {
		return m.Attributes
	}
	return nil
}

func (m *Uint64) GetLabels() []string {
	if m != nil {
		return m.Labels
	}
	return nil
}

func (m *Uint64) GetValue() uint64 {
	if m != nil {
		return m.Value
	}
	return 0
}

// Furo annotated type wrapper message for `uint32`.  https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/wrappers.proto
type Uint32 struct {
	// Attributes for a value, something like confidential-msg: you are not allowed to see this value
	Attributes map[string]string `protobuf:"bytes,3,rep,name=attributes,proto3" json:"attributes,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	// Labels / flags for the value, something like unspecified, empty, confidential, absent,... Can be used for AI, UI, Business Logic,...
	Labels []string `protobuf:"bytes,2,rep,name=labels,proto3" json:"labels,omitempty"`
	// The JSON representation for `Uint32Value` is JSON number
	Value                uint32   `protobuf:"varint,1,opt,name=value,proto3" json:"value,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Uint32) Reset()         { *m = Uint32{} }
func (m *Uint32) String() string { return proto.CompactTextString(m) }
func (*Uint32) ProtoMessage()    {}
func (*Uint32) Descriptor() ([]byte, []int) {
	return fileDescriptor_bcae0283c1db6cbd, []int{5}
}

func (m *Uint32) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Uint32.Unmarshal(m, b)
}
func (m *Uint32) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Uint32.Marshal(b, m, deterministic)
}
func (m *Uint32) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Uint32.Merge(m, src)
}
func (m *Uint32) XXX_Size() int {
	return xxx_messageInfo_Uint32.Size(m)
}
func (m *Uint32) XXX_DiscardUnknown() {
	xxx_messageInfo_Uint32.DiscardUnknown(m)
}

var xxx_messageInfo_Uint32 proto.InternalMessageInfo

func (m *Uint32) GetAttributes() map[string]string {
	if m != nil {
		return m.Attributes
	}
	return nil
}

func (m *Uint32) GetLabels() []string {
	if m != nil {
		return m.Labels
	}
	return nil
}

func (m *Uint32) GetValue() uint32 {
	if m != nil {
		return m.Value
	}
	return 0
}

// Furo annotated type wrapper message for `any`.
// // Any contains an arbitrary serialized protocol buffer message along with a
// // URL that describes the type of the serialized message. https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/any.proto
type Any struct {
	// Attributes for a value, something like confidential-msg: you are not allowed to see this value
	Attributes map[string]string `protobuf:"bytes,3,rep,name=attributes,proto3" json:"attributes,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	// Labels / flags for the value, something like unspecified, empty, confidential, absent,... Can be used for AI, UI, Business Logic,...
	Labels []string `protobuf:"bytes,2,rep,name=labels,proto3" json:"labels,omitempty"`
	// The JSON representation for `AnyValue` is a JSON string? The client uses type `ArrayBuffer` for the value field.
	Value                []byte   `protobuf:"bytes,1,opt,name=value,proto3" json:"value,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Any) Reset()         { *m = Any{} }
func (m *Any) String() string { return proto.CompactTextString(m) }
func (*Any) ProtoMessage()    {}
func (*Any) Descriptor() ([]byte, []int) {
	return fileDescriptor_bcae0283c1db6cbd, []int{6}
}

func (m *Any) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Any.Unmarshal(m, b)
}
func (m *Any) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Any.Marshal(b, m, deterministic)
}
func (m *Any) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Any.Merge(m, src)
}
func (m *Any) XXX_Size() int {
	return xxx_messageInfo_Any.Size(m)
}
func (m *Any) XXX_DiscardUnknown() {
	xxx_messageInfo_Any.DiscardUnknown(m)
}

var xxx_messageInfo_Any proto.InternalMessageInfo

func (m *Any) GetAttributes() map[string]string {
	if m != nil {
		return m.Attributes
	}
	return nil
}

func (m *Any) GetLabels() []string {
	if m != nil {
		return m.Labels
	}
	return nil
}

func (m *Any) GetValue() []byte {
	if m != nil {
		return m.Value
	}
	return nil
}

// Furo annotated type wrapper message for `float`. The range constraints are set to Number.MIN_SAFE_INTEGER - Number.MAX_SAFE_INTEGER because of browser limitations
type Float struct {
	// Attributes for a value, something like confidential-msg: you are not allowed to see this value
	Attributes map[string]string `protobuf:"bytes,3,rep,name=attributes,proto3" json:"attributes,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	// Labels / flags for the value, something like unspecified, empty, confidential, absent,... Can be used for AI, UI, Business Logic,...
	Labels []string `protobuf:"bytes,2,rep,name=labels,proto3" json:"labels,omitempty"`
	// The JSON representation for `FloatValue` is JSON number
	Value                float32  `protobuf:"fixed32,1,opt,name=value,proto3" json:"value,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Float) Reset()         { *m = Float{} }
func (m *Float) String() string { return proto.CompactTextString(m) }
func (*Float) ProtoMessage()    {}
func (*Float) Descriptor() ([]byte, []int) {
	return fileDescriptor_bcae0283c1db6cbd, []int{7}
}

func (m *Float) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Float.Unmarshal(m, b)
}
func (m *Float) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Float.Marshal(b, m, deterministic)
}
func (m *Float) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Float.Merge(m, src)
}
func (m *Float) XXX_Size() int {
	return xxx_messageInfo_Float.Size(m)
}
func (m *Float) XXX_DiscardUnknown() {
	xxx_messageInfo_Float.DiscardUnknown(m)
}

var xxx_messageInfo_Float proto.InternalMessageInfo

func (m *Float) GetAttributes() map[string]string {
	if m != nil {
		return m.Attributes
	}
	return nil
}

func (m *Float) GetLabels() []string {
	if m != nil {
		return m.Labels
	}
	return nil
}

func (m *Float) GetValue() float32 {
	if m != nil {
		return m.Value
	}
	return 0
}

// Furo annotated type wrapper message for `bytes`.
type Bytes struct {
	// Attributes for a value, something like confidential-msg: you are not allowed to see this value
	Attributes map[string]string `protobuf:"bytes,3,rep,name=attributes,proto3" json:"attributes,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	// Labels / flags for the value, something like unspecified, empty, confidential, absent,... Can be used for AI, UI, Business Logic,...
	Labels [][]byte `protobuf:"bytes,2,rep,name=labels,proto3" json:"labels,omitempty"`
	// The JSON representation for `BytesValue` is a JSON string
	Value                []byte   `protobuf:"bytes,1,opt,name=value,proto3" json:"value,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Bytes) Reset()         { *m = Bytes{} }
func (m *Bytes) String() string { return proto.CompactTextString(m) }
func (*Bytes) ProtoMessage()    {}
func (*Bytes) Descriptor() ([]byte, []int) {
	return fileDescriptor_bcae0283c1db6cbd, []int{8}
}

func (m *Bytes) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Bytes.Unmarshal(m, b)
}
func (m *Bytes) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Bytes.Marshal(b, m, deterministic)
}
func (m *Bytes) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Bytes.Merge(m, src)
}
func (m *Bytes) XXX_Size() int {
	return xxx_messageInfo_Bytes.Size(m)
}
func (m *Bytes) XXX_DiscardUnknown() {
	xxx_messageInfo_Bytes.DiscardUnknown(m)
}

var xxx_messageInfo_Bytes proto.InternalMessageInfo

func (m *Bytes) GetAttributes() map[string]string {
	if m != nil {
		return m.Attributes
	}
	return nil
}

func (m *Bytes) GetLabels() [][]byte {
	if m != nil {
		return m.Labels
	}
	return nil
}

func (m *Bytes) GetValue() []byte {
	if m != nil {
		return m.Value
	}
	return nil
}

// Furo annotated type wrapper message for `string`.
type String struct {
	// Attributes for a value, something like confidential-msg: you are not allowed to see this value
	Attributes map[string]string `protobuf:"bytes,3,rep,name=attributes,proto3" json:"attributes,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	// Labels / flags for the value, something like unspecified, empty, confidential, absent,... Can be used for AI, UI, Business Logic,...
	Labels []string `protobuf:"bytes,2,rep,name=labels,proto3" json:"labels,omitempty"`
	// The JSON representation for `StringValue` is a JSON string
	Value                string   `protobuf:"bytes,1,opt,name=value,proto3" json:"value,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *String) Reset()         { *m = String{} }
func (m *String) String() string { return proto.CompactTextString(m) }
func (*String) ProtoMessage()    {}
func (*String) Descriptor() ([]byte, []int) {
	return fileDescriptor_bcae0283c1db6cbd, []int{9}
}

func (m *String) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_String.Unmarshal(m, b)
}
func (m *String) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_String.Marshal(b, m, deterministic)
}
func (m *String) XXX_Merge(src proto.Message) {
	xxx_messageInfo_String.Merge(m, src)
}
func (m *String) XXX_Size() int {
	return xxx_messageInfo_String.Size(m)
}
func (m *String) XXX_DiscardUnknown() {
	xxx_messageInfo_String.DiscardUnknown(m)
}

var xxx_messageInfo_String proto.InternalMessageInfo

func (m *String) GetAttributes() map[string]string {
	if m != nil {
		return m.Attributes
	}
	return nil
}

func (m *String) GetLabels() []string {
	if m != nil {
		return m.Labels
	}
	return nil
}

func (m *String) GetValue() string {
	if m != nil {
		return m.Value
	}
	return ""
}

// Furo annotated type wrapper message for `bool`.
type Bool struct {
	// Attributes for a value, something like confidential-msg: you are not allowed to see this value
	Attributes map[string]string `protobuf:"bytes,3,rep,name=attributes,proto3" json:"attributes,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	// Labels / flags for the value, something like unspecified, empty, confidential, absent,... Can be used for AI, UI, Business Logic,...
	Labels []bool `protobuf:"varint,2,rep,packed,name=labels,proto3" json:"labels,omitempty"`
	// The JSON representation for `BoolValue` is a JSON boolean
	Value                bool     `protobuf:"varint,1,opt,name=value,proto3" json:"value,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Bool) Reset()         { *m = Bool{} }
func (m *Bool) String() string { return proto.CompactTextString(m) }
func (*Bool) ProtoMessage()    {}
func (*Bool) Descriptor() ([]byte, []int) {
	return fileDescriptor_bcae0283c1db6cbd, []int{10}
}

func (m *Bool) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Bool.Unmarshal(m, b)
}
func (m *Bool) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Bool.Marshal(b, m, deterministic)
}
func (m *Bool) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Bool.Merge(m, src)
}
func (m *Bool) XXX_Size() int {
	return xxx_messageInfo_Bool.Size(m)
}
func (m *Bool) XXX_DiscardUnknown() {
	xxx_messageInfo_Bool.DiscardUnknown(m)
}

var xxx_messageInfo_Bool proto.InternalMessageInfo

func (m *Bool) GetAttributes() map[string]string {
	if m != nil {
		return m.Attributes
	}
	return nil
}

func (m *Bool) GetLabels() []bool {
	if m != nil {
		return m.Labels
	}
	return nil
}

func (m *Bool) GetValue() bool {
	if m != nil {
		return m.Value
	}
	return false
}

func init() {
	proto.RegisterType((*Int64)(nil), "furo.fat.Int64")
	proto.RegisterMapType((map[string]string)(nil), "furo.fat.Int64.AttributesEntry")
	proto.RegisterType((*Empty)(nil), "furo.fat.Empty")
	proto.RegisterMapType((map[string]string)(nil), "furo.fat.Empty.AttributesEntry")
	proto.RegisterType((*Int32)(nil), "furo.fat.Int32")
	proto.RegisterMapType((map[string]string)(nil), "furo.fat.Int32.AttributesEntry")
	proto.RegisterType((*Double)(nil), "furo.fat.Double")
	proto.RegisterMapType((map[string]string)(nil), "furo.fat.Double.AttributesEntry")
	proto.RegisterType((*Uint64)(nil), "furo.fat.Uint64")
	proto.RegisterMapType((map[string]string)(nil), "furo.fat.Uint64.AttributesEntry")
	proto.RegisterType((*Uint32)(nil), "furo.fat.Uint32")
	proto.RegisterMapType((map[string]string)(nil), "furo.fat.Uint32.AttributesEntry")
	proto.RegisterType((*Any)(nil), "furo.fat.Any")
	proto.RegisterMapType((map[string]string)(nil), "furo.fat.Any.AttributesEntry")
	proto.RegisterType((*Float)(nil), "furo.fat.Float")
	proto.RegisterMapType((map[string]string)(nil), "furo.fat.Float.AttributesEntry")
	proto.RegisterType((*Bytes)(nil), "furo.fat.Bytes")
	proto.RegisterMapType((map[string]string)(nil), "furo.fat.Bytes.AttributesEntry")
	proto.RegisterType((*String)(nil), "furo.fat.String")
	proto.RegisterMapType((map[string]string)(nil), "furo.fat.String.AttributesEntry")
	proto.RegisterType((*Bool)(nil), "furo.fat.Bool")
	proto.RegisterMapType((map[string]string)(nil), "furo.fat.Bool.AttributesEntry")
}

func init() { proto.RegisterFile("furo/fat/fat.proto", fileDescriptor_bcae0283c1db6cbd) }

var fileDescriptor_bcae0283c1db6cbd = []byte{
	// 357 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xb4, 0xd5, 0xd1, 0x4a, 0xc3, 0x30,
	0x14, 0x06, 0x60, 0xd2, 0xac, 0x63, 0x3b, 0x4e, 0x94, 0x20, 0x32, 0x04, 0xb5, 0xec, 0x6a, 0x57,
	0x15, 0x5a, 0x11, 0x11, 0xa6, 0x6e, 0x38, 0xc1, 0xdb, 0x8a, 0x0f, 0x90, 0x42, 0x27, 0xc5, 0xd8,
	0x8c, 0x2e, 0x15, 0xf2, 0x34, 0x3e, 0x83, 0x88, 0xf8, 0x7a, 0x92, 0x74, 0xda, 0x21, 0x85, 0x6e,
	0x26, 0x5e, 0x0c, 0x96, 0xf0, 0xa7, 0xfd, 0xf8, 0x39, 0xa1, 0x40, 0x66, 0x45, 0xce, 0x4f, 0x66,
	0x54, 0xa8, 0x9f, 0x3f, 0xcf, 0xb9, 0xe0, 0xa4, 0xa3, 0xf6, 0xfc, 0x19, 0x15, 0x83, 0x0f, 0x04,
	0xee, 0x5d, 0x26, 0xce, 0x4e, 0xc9, 0x15, 0x00, 0x15, 0x22, 0x4f, 0xe3, 0x42, 0x24, 0x8b, 0x3e,
	0xf6, 0xf0, 0x70, 0x2b, 0x38, 0xf6, 0xbf, 0x83, 0xbe, 0x0e, 0xf9, 0xe3, 0x9f, 0xc4, 0x34, 0x13,
	0xb9, 0x8c, 0x56, 0x8e, 0x90, 0x7d, 0x68, 0x33, 0x1a, 0x27, 0x6c, 0xd1, 0x77, 0x3c, 0x3c, 0xec,
	0x46, 0xcb, 0x15, 0xd9, 0x03, 0xf7, 0x85, 0xb2, 0x22, 0xe9, 0x23, 0x0f, 0x0d, 0x71, 0x54, 0x2e,
	0x0e, 0x46, 0xb0, 0xf3, 0xeb, 0x61, 0x64, 0x17, 0xf0, 0x53, 0x22, 0x75, 0xac, 0x1b, 0xa9, 0xbf,
	0xd5, 0x51, 0x47, 0xef, 0x95, 0x8b, 0x0b, 0xe7, 0x1c, 0x0d, 0x5e, 0x11, 0xb8, 0xd3, 0xe7, 0xb9,
	0x90, 0x4d, 0x6e, 0x1d, 0xfa, 0x8b, 0xdb, 0x54, 0xb8, 0x6c, 0x36, 0x0c, 0xd6, 0x68, 0x36, 0x0c,
	0xcc, 0x9b, 0x75, 0x2d, 0x35, 0xfb, 0x89, 0xa0, 0x7d, 0xc3, 0x8b, 0x98, 0x25, 0xe4, 0xba, 0x06,
	0xee, 0x55, 0xf0, 0x32, 0x65, 0x2e, 0x47, 0x16, 0xe5, 0x0f, 0xa9, 0x1e, 0xe6, 0x06, 0x79, 0x99,
	0x32, 0x97, 0xb7, 0x2c, 0xcb, 0xc3, 0x60, 0x1d, 0xb9, 0x8d, 0x69, 0xd9, 0xb6, 0x24, 0x7f, 0x43,
	0x80, 0xc7, 0x99, 0x24, 0xa3, 0x1a, 0xf6, 0x61, 0xc5, 0x1e, 0x67, 0xd2, 0xdc, 0xdc, 0xb3, 0x64,
	0x56, 0x37, 0xf3, 0x96, 0x71, 0x2a, 0x9a, 0x6e, 0xa6, 0x0e, 0x99, 0xbb, 0x1d, 0x8b, 0xee, 0x89,
	0x54, 0xaf, 0x6d, 0x70, 0xeb, 0xd0, 0x06, 0xee, 0xde, 0xff, 0xf6, 0xad, 0xa6, 0xfb, 0x5e, 0xe4,
	0x69, 0xf6, 0xd8, 0x34, 0xdd, 0x65, 0xca, 0xbc, 0xf1, 0xae, 0x25, 0xf9, 0x3b, 0x82, 0xd6, 0x84,
	0x73, 0x46, 0x2e, 0x6b, 0xdc, 0x47, 0x2b, 0x85, 0x73, 0xce, 0x36, 0x50, 0x77, 0xea, 0xd5, 0x1d,
	0x3b, 0xea, 0xb8, 0xad, 0x3f, 0xf2, 0xe1, 0x57, 0x00, 0x00, 0x00, 0xff, 0xff, 0xea, 0x53, 0x56,
	0x1f, 0xfa, 0x07, 0x00, 0x00,
}
