// Code generated by protoc-gen-go. DO NOT EDIT.
// source: personservice/service.proto

package personservice

import (
	person "../person"
	context "context"
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	empty "github.com/golang/protobuf/ptypes/empty"
	_ "google.golang.org/genproto/googleapis/api/annotations"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
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

type CreatePersonServiceRequest struct {
	Data                 *person.Person `protobuf:"bytes,1,opt,name=data,proto3" json:"data,omitempty"`
	XXX_NoUnkeyedLiteral struct{}       `json:"-"`
	XXX_unrecognized     []byte         `json:"-"`
	XXX_sizecache        int32          `json:"-"`
}

func (m *CreatePersonServiceRequest) Reset()         { *m = CreatePersonServiceRequest{} }
func (m *CreatePersonServiceRequest) String() string { return proto.CompactTextString(m) }
func (*CreatePersonServiceRequest) ProtoMessage()    {}
func (*CreatePersonServiceRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_5216fe5474b1b6ea, []int{0}
}

func (m *CreatePersonServiceRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_CreatePersonServiceRequest.Unmarshal(m, b)
}
func (m *CreatePersonServiceRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_CreatePersonServiceRequest.Marshal(b, m, deterministic)
}
func (m *CreatePersonServiceRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CreatePersonServiceRequest.Merge(m, src)
}
func (m *CreatePersonServiceRequest) XXX_Size() int {
	return xxx_messageInfo_CreatePersonServiceRequest.Size(m)
}
func (m *CreatePersonServiceRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_CreatePersonServiceRequest.DiscardUnknown(m)
}

var xxx_messageInfo_CreatePersonServiceRequest proto.InternalMessageInfo

func (m *CreatePersonServiceRequest) GetData() *person.Person {
	if m != nil {
		return m.Data
	}
	return nil
}

type DeletePersonServiceRequest struct {
	Prs                  string       `protobuf:"bytes,1,opt,name=prs,proto3" json:"prs,omitempty"`
	Data                 *empty.Empty `protobuf:"bytes,2,opt,name=data,proto3" json:"data,omitempty"`
	XXX_NoUnkeyedLiteral struct{}     `json:"-"`
	XXX_unrecognized     []byte       `json:"-"`
	XXX_sizecache        int32        `json:"-"`
}

func (m *DeletePersonServiceRequest) Reset()         { *m = DeletePersonServiceRequest{} }
func (m *DeletePersonServiceRequest) String() string { return proto.CompactTextString(m) }
func (*DeletePersonServiceRequest) ProtoMessage()    {}
func (*DeletePersonServiceRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_5216fe5474b1b6ea, []int{1}
}

func (m *DeletePersonServiceRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_DeletePersonServiceRequest.Unmarshal(m, b)
}
func (m *DeletePersonServiceRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_DeletePersonServiceRequest.Marshal(b, m, deterministic)
}
func (m *DeletePersonServiceRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DeletePersonServiceRequest.Merge(m, src)
}
func (m *DeletePersonServiceRequest) XXX_Size() int {
	return xxx_messageInfo_DeletePersonServiceRequest.Size(m)
}
func (m *DeletePersonServiceRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_DeletePersonServiceRequest.DiscardUnknown(m)
}

var xxx_messageInfo_DeletePersonServiceRequest proto.InternalMessageInfo

func (m *DeletePersonServiceRequest) GetPrs() string {
	if m != nil {
		return m.Prs
	}
	return ""
}

func (m *DeletePersonServiceRequest) GetData() *empty.Empty {
	if m != nil {
		return m.Data
	}
	return nil
}

type GetPersonServiceRequest struct {
	Prs                  string   `protobuf:"bytes,1,opt,name=prs,proto3" json:"prs,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *GetPersonServiceRequest) Reset()         { *m = GetPersonServiceRequest{} }
func (m *GetPersonServiceRequest) String() string { return proto.CompactTextString(m) }
func (*GetPersonServiceRequest) ProtoMessage()    {}
func (*GetPersonServiceRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_5216fe5474b1b6ea, []int{2}
}

func (m *GetPersonServiceRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetPersonServiceRequest.Unmarshal(m, b)
}
func (m *GetPersonServiceRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetPersonServiceRequest.Marshal(b, m, deterministic)
}
func (m *GetPersonServiceRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetPersonServiceRequest.Merge(m, src)
}
func (m *GetPersonServiceRequest) XXX_Size() int {
	return xxx_messageInfo_GetPersonServiceRequest.Size(m)
}
func (m *GetPersonServiceRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_GetPersonServiceRequest.DiscardUnknown(m)
}

var xxx_messageInfo_GetPersonServiceRequest proto.InternalMessageInfo

func (m *GetPersonServiceRequest) GetPrs() string {
	if m != nil {
		return m.Prs
	}
	return ""
}

type ListPersonServiceRequest struct {
	//Partial representation, fields=id,name
	Fields string `protobuf:"bytes,1,opt,name=fields,proto3" json:"fields,omitempty"`
	//*
	// Sort fields, comma separated list for the ordering
	// use **?filter=-display_name** with a dash to sort descending
	// use **?filter=display_name** to sort ascending
	OrderBy string `protobuf:"bytes,2,opt,name=order_by,json=orderBy,proto3" json:"order_by,omitempty"`
	//Filter
	Filter string `protobuf:"bytes,3,opt,name=filter,proto3" json:"filter,omitempty"`
	//Page number for paginated content. Tipp: follow the HATEOAS next, prev,...
	Page int32 `protobuf:"varint,4,opt,name=page,proto3" json:"page,omitempty"`
	//Number of elements to return per page
	Limit int32 `protobuf:"varint,5,opt,name=limit,proto3" json:"limit,omitempty"`
	//https://cloud.google.com/apis/design/design_patterns#resource_view
	View string `protobuf:"bytes,8,opt,name=view,proto3" json:"view,omitempty"`
	//Query term to search a person
	Q                    string   `protobuf:"bytes,11,opt,name=q,proto3" json:"q,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ListPersonServiceRequest) Reset()         { *m = ListPersonServiceRequest{} }
func (m *ListPersonServiceRequest) String() string { return proto.CompactTextString(m) }
func (*ListPersonServiceRequest) ProtoMessage()    {}
func (*ListPersonServiceRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_5216fe5474b1b6ea, []int{3}
}

func (m *ListPersonServiceRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ListPersonServiceRequest.Unmarshal(m, b)
}
func (m *ListPersonServiceRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ListPersonServiceRequest.Marshal(b, m, deterministic)
}
func (m *ListPersonServiceRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ListPersonServiceRequest.Merge(m, src)
}
func (m *ListPersonServiceRequest) XXX_Size() int {
	return xxx_messageInfo_ListPersonServiceRequest.Size(m)
}
func (m *ListPersonServiceRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_ListPersonServiceRequest.DiscardUnknown(m)
}

var xxx_messageInfo_ListPersonServiceRequest proto.InternalMessageInfo

func (m *ListPersonServiceRequest) GetFields() string {
	if m != nil {
		return m.Fields
	}
	return ""
}

func (m *ListPersonServiceRequest) GetOrderBy() string {
	if m != nil {
		return m.OrderBy
	}
	return ""
}

func (m *ListPersonServiceRequest) GetFilter() string {
	if m != nil {
		return m.Filter
	}
	return ""
}

func (m *ListPersonServiceRequest) GetPage() int32 {
	if m != nil {
		return m.Page
	}
	return 0
}

func (m *ListPersonServiceRequest) GetLimit() int32 {
	if m != nil {
		return m.Limit
	}
	return 0
}

func (m *ListPersonServiceRequest) GetView() string {
	if m != nil {
		return m.View
	}
	return ""
}

func (m *ListPersonServiceRequest) GetQ() string {
	if m != nil {
		return m.Q
	}
	return ""
}

type UpdatePersonServiceRequest struct {
	Prs                  string         `protobuf:"bytes,1,opt,name=prs,proto3" json:"prs,omitempty"`
	Data                 *person.Person `protobuf:"bytes,2,opt,name=data,proto3" json:"data,omitempty"`
	XXX_NoUnkeyedLiteral struct{}       `json:"-"`
	XXX_unrecognized     []byte         `json:"-"`
	XXX_sizecache        int32          `json:"-"`
}

func (m *UpdatePersonServiceRequest) Reset()         { *m = UpdatePersonServiceRequest{} }
func (m *UpdatePersonServiceRequest) String() string { return proto.CompactTextString(m) }
func (*UpdatePersonServiceRequest) ProtoMessage()    {}
func (*UpdatePersonServiceRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_5216fe5474b1b6ea, []int{4}
}

func (m *UpdatePersonServiceRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UpdatePersonServiceRequest.Unmarshal(m, b)
}
func (m *UpdatePersonServiceRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UpdatePersonServiceRequest.Marshal(b, m, deterministic)
}
func (m *UpdatePersonServiceRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UpdatePersonServiceRequest.Merge(m, src)
}
func (m *UpdatePersonServiceRequest) XXX_Size() int {
	return xxx_messageInfo_UpdatePersonServiceRequest.Size(m)
}
func (m *UpdatePersonServiceRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_UpdatePersonServiceRequest.DiscardUnknown(m)
}

var xxx_messageInfo_UpdatePersonServiceRequest proto.InternalMessageInfo

func (m *UpdatePersonServiceRequest) GetPrs() string {
	if m != nil {
		return m.Prs
	}
	return ""
}

func (m *UpdatePersonServiceRequest) GetData() *person.Person {
	if m != nil {
		return m.Data
	}
	return nil
}

func init() {
	proto.RegisterType((*CreatePersonServiceRequest)(nil), "personservice.CreatePersonServiceRequest")
	proto.RegisterType((*DeletePersonServiceRequest)(nil), "personservice.DeletePersonServiceRequest")
	proto.RegisterType((*GetPersonServiceRequest)(nil), "personservice.GetPersonServiceRequest")
	proto.RegisterType((*ListPersonServiceRequest)(nil), "personservice.ListPersonServiceRequest")
	proto.RegisterType((*UpdatePersonServiceRequest)(nil), "personservice.UpdatePersonServiceRequest")
}

func init() { proto.RegisterFile("personservice/service.proto", fileDescriptor_5216fe5474b1b6ea) }

var fileDescriptor_5216fe5474b1b6ea = []byte{
	// 502 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x8c, 0x93, 0xc1, 0x6e, 0xd3, 0x40,
	0x10, 0x86, 0xe5, 0x36, 0x29, 0xcd, 0x24, 0x45, 0x68, 0xa9, 0x8a, 0x71, 0xa8, 0x88, 0xb6, 0x2a,
	0x04, 0x22, 0xd9, 0x22, 0xdc, 0x38, 0x21, 0x4a, 0xc5, 0x85, 0x03, 0x32, 0xe2, 0xc2, 0x05, 0x39,
	0xf1, 0x34, 0x5a, 0x70, 0xbc, 0x8e, 0x77, 0x13, 0x14, 0x21, 0x38, 0xf4, 0x15, 0x78, 0x12, 0x9e,
	0x85, 0x57, 0xe0, 0x21, 0x38, 0x22, 0xcf, 0x6e, 0x68, 0xdc, 0x74, 0xa5, 0x9c, 0xbc, 0xb3, 0x3b,
	0xf3, 0x7f, 0xb3, 0xb3, 0xbf, 0xa1, 0x5b, 0x60, 0xa9, 0x64, 0xae, 0xb0, 0x5c, 0x88, 0x31, 0x46,
	0xf6, 0x1b, 0x16, 0xa5, 0xd4, 0x92, 0x1d, 0xd4, 0x0e, 0x83, 0x07, 0x13, 0x29, 0x27, 0x19, 0x46,
	0x49, 0x21, 0xa2, 0x24, 0xcf, 0xa5, 0x4e, 0xb4, 0x90, 0xb9, 0x32, 0xc9, 0xc1, 0x5d, 0x93, 0x1c,
	0x99, 0x8f, 0xdd, 0xec, 0xda, 0x12, 0x8a, 0x46, 0xf3, 0x8b, 0x08, 0xa7, 0x85, 0x5e, 0x9a, 0x43,
	0xfe, 0x12, 0x82, 0xb3, 0x12, 0x13, 0x8d, 0xef, 0xa8, 0xe4, 0xbd, 0xc1, 0xc4, 0x38, 0x9b, 0xa3,
	0xd2, 0x8c, 0x43, 0x23, 0x4d, 0x74, 0xe2, 0x7b, 0x3d, 0xaf, 0xdf, 0x1e, 0xde, 0x0e, 0xad, 0xae,
	0xc9, 0x8d, 0xe9, 0x8c, 0x7f, 0x84, 0xe0, 0x35, 0x66, 0xe8, 0x50, 0xb8, 0x03, 0xbb, 0x45, 0xa9,
	0x48, 0xa0, 0x15, 0x57, 0x4b, 0xf6, 0xd4, 0x6a, 0xee, 0x90, 0xe6, 0x51, 0x68, 0xba, 0x0b, 0x57,
	0xdd, 0x85, 0xe7, 0x55, 0x77, 0x56, 0x7b, 0x00, 0xf7, 0xde, 0xa0, 0xde, 0x4e, 0x98, 0xff, 0xf2,
	0xc0, 0x7f, 0x2b, 0xd4, 0xcd, 0xe9, 0x47, 0xb0, 0x77, 0x21, 0x30, 0x4b, 0x57, 0x15, 0x36, 0x62,
	0xf7, 0x61, 0x5f, 0x96, 0x29, 0x96, 0x9f, 0x46, 0x4b, 0xea, 0xa8, 0x15, 0xdf, 0xa2, 0xf8, 0xd5,
	0xd2, 0x94, 0x64, 0x1a, 0x4b, 0x7f, 0x77, 0x55, 0x52, 0x45, 0x8c, 0x41, 0xa3, 0x48, 0x26, 0xe8,
	0x37, 0x7a, 0x5e, 0xbf, 0x19, 0xd3, 0x9a, 0x1d, 0x42, 0x33, 0x13, 0x53, 0xa1, 0xfd, 0x26, 0x6d,
	0x9a, 0xa0, 0xca, 0x5c, 0x08, 0xfc, 0xea, 0xef, 0x53, 0x3d, 0xad, 0x59, 0x07, 0xbc, 0x99, 0xdf,
	0xa6, 0x0d, 0x6f, 0xc6, 0x63, 0x08, 0x3e, 0x14, 0x69, 0xb2, 0xf5, 0xf0, 0x78, 0x6d, 0x78, 0x37,
	0x3e, 0xc8, 0xf0, 0x6f, 0x03, 0x0e, 0x6a, 0x72, 0x6c, 0x01, 0x9d, 0xf5, 0x47, 0x66, 0x4f, 0xc2,
	0x9a, 0xa9, 0x42, 0xb7, 0x03, 0x82, 0xc3, 0x3a, 0xe2, 0x3c, 0xd7, 0x42, 0x2f, 0xf9, 0xe9, 0xe5,
	0xef, 0x3f, 0x3f, 0x77, 0x1e, 0xb2, 0xe3, 0x68, 0x2a, 0xc7, 0x5f, 0x2a, 0xaa, 0xb5, 0x9c, 0x8a,
	0xc6, 0xa4, 0x15, 0x7e, 0xae, 0x38, 0x3f, 0xa0, 0xb3, 0x6e, 0x8d, 0x0d, 0xae, 0xdb, 0x37, 0x81,
	0xc3, 0x17, 0x7c, 0x40, 0xe4, 0x53, 0x76, 0xb2, 0x49, 0xfe, 0x56, 0x94, 0xea, 0x7b, 0x94, 0x92,
	0xa6, 0xe1, 0x2b, 0x68, 0xfd, 0xb7, 0x0f, 0x7b, 0x74, 0x0d, 0xee, 0x30, 0x96, 0xe3, 0xc6, 0x7d,
	0xe2, 0x72, 0xd6, 0x73, 0x71, 0x27, 0xa8, 0x0d, 0x74, 0x0e, 0xed, 0x2b, 0x17, 0x2a, 0xf6, 0xf8,
	0x1a, 0xd6, 0xe5, 0xd0, 0xc0, 0xaf, 0x73, 0xcf, 0x64, 0x96, 0xe1, 0xb8, 0xfa, 0xb9, 0xf9, 0x09,
	0xb1, 0x8f, 0x59, 0x77, 0x93, 0x9d, 0x09, 0x65, 0xb1, 0x97, 0x1e, 0x74, 0xd6, 0xad, 0xb4, 0x31,
	0x6c, 0xb7, 0xcf, 0x1c, 0x57, 0x7e, 0x46, 0xd8, 0xc1, 0xd0, 0x39, 0xea, 0x39, 0x29, 0x12, 0xfe,
	0x05, 0x59, 0x6f, 0xb4, 0x47, 0xaf, 0xf5, 0xfc, 0x5f, 0x00, 0x00, 0x00, 0xff, 0xff, 0x37, 0xf8,
	0x74, 0x71, 0xd2, 0x04, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// PersonServiceClient is the client API for PersonService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type PersonServiceClient interface {
	// Creates a new Person
	CreatePerson(ctx context.Context, in *CreatePersonServiceRequest, opts ...grpc.CallOption) (*person.PersonEntity, error)
	// Delete a Person
	DeletePerson(ctx context.Context, in *DeletePersonServiceRequest, opts ...grpc.CallOption) (*empty.Empty, error)
	// The Get method takes zero or more parameters, and returns a PersonEntity which contains a Person
	GetPerson(ctx context.Context, in *GetPersonServiceRequest, opts ...grpc.CallOption) (*person.PersonEntity, error)
	// The List method takes zero or more parameters as input, and returns a PersonCollection of PersonEntity that match the input parameters.
	ListPersons(ctx context.Context, in *ListPersonServiceRequest, opts ...grpc.CallOption) (*person.PersonCollection, error)
	// Updates a Person, partial updates are supported
	UpdatePerson(ctx context.Context, in *UpdatePersonServiceRequest, opts ...grpc.CallOption) (*person.PersonEntity, error)
}

type personServiceClient struct {
	cc *grpc.ClientConn
}

func NewPersonServiceClient(cc *grpc.ClientConn) PersonServiceClient {
	return &personServiceClient{cc}
}

func (c *personServiceClient) CreatePerson(ctx context.Context, in *CreatePersonServiceRequest, opts ...grpc.CallOption) (*person.PersonEntity, error) {
	out := new(person.PersonEntity)
	err := c.cc.Invoke(ctx, "/personservice.PersonService/CreatePerson", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *personServiceClient) DeletePerson(ctx context.Context, in *DeletePersonServiceRequest, opts ...grpc.CallOption) (*empty.Empty, error) {
	out := new(empty.Empty)
	err := c.cc.Invoke(ctx, "/personservice.PersonService/DeletePerson", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *personServiceClient) GetPerson(ctx context.Context, in *GetPersonServiceRequest, opts ...grpc.CallOption) (*person.PersonEntity, error) {
	out := new(person.PersonEntity)
	err := c.cc.Invoke(ctx, "/personservice.PersonService/GetPerson", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *personServiceClient) ListPersons(ctx context.Context, in *ListPersonServiceRequest, opts ...grpc.CallOption) (*person.PersonCollection, error) {
	out := new(person.PersonCollection)
	err := c.cc.Invoke(ctx, "/personservice.PersonService/ListPersons", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *personServiceClient) UpdatePerson(ctx context.Context, in *UpdatePersonServiceRequest, opts ...grpc.CallOption) (*person.PersonEntity, error) {
	out := new(person.PersonEntity)
	err := c.cc.Invoke(ctx, "/personservice.PersonService/UpdatePerson", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// PersonServiceServer is the server API for PersonService service.
type PersonServiceServer interface {
	// Creates a new Person
	CreatePerson(context.Context, *CreatePersonServiceRequest) (*person.PersonEntity, error)
	// Delete a Person
	DeletePerson(context.Context, *DeletePersonServiceRequest) (*empty.Empty, error)
	// The Get method takes zero or more parameters, and returns a PersonEntity which contains a Person
	GetPerson(context.Context, *GetPersonServiceRequest) (*person.PersonEntity, error)
	// The List method takes zero or more parameters as input, and returns a PersonCollection of PersonEntity that match the input parameters.
	ListPersons(context.Context, *ListPersonServiceRequest) (*person.PersonCollection, error)
	// Updates a Person, partial updates are supported
	UpdatePerson(context.Context, *UpdatePersonServiceRequest) (*person.PersonEntity, error)
}

// UnimplementedPersonServiceServer can be embedded to have forward compatible implementations.
type UnimplementedPersonServiceServer struct {
}

func (*UnimplementedPersonServiceServer) CreatePerson(ctx context.Context, req *CreatePersonServiceRequest) (*person.PersonEntity, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreatePerson not implemented")
}
func (*UnimplementedPersonServiceServer) DeletePerson(ctx context.Context, req *DeletePersonServiceRequest) (*empty.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeletePerson not implemented")
}
func (*UnimplementedPersonServiceServer) GetPerson(ctx context.Context, req *GetPersonServiceRequest) (*person.PersonEntity, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetPerson not implemented")
}
func (*UnimplementedPersonServiceServer) ListPersons(ctx context.Context, req *ListPersonServiceRequest) (*person.PersonCollection, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListPersons not implemented")
}
func (*UnimplementedPersonServiceServer) UpdatePerson(ctx context.Context, req *UpdatePersonServiceRequest) (*person.PersonEntity, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdatePerson not implemented")
}

func RegisterPersonServiceServer(s *grpc.Server, srv PersonServiceServer) {
	s.RegisterService(&_PersonService_serviceDesc, srv)
}

func _PersonService_CreatePerson_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreatePersonServiceRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PersonServiceServer).CreatePerson(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/personservice.PersonService/CreatePerson",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PersonServiceServer).CreatePerson(ctx, req.(*CreatePersonServiceRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PersonService_DeletePerson_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeletePersonServiceRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PersonServiceServer).DeletePerson(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/personservice.PersonService/DeletePerson",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PersonServiceServer).DeletePerson(ctx, req.(*DeletePersonServiceRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PersonService_GetPerson_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetPersonServiceRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PersonServiceServer).GetPerson(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/personservice.PersonService/GetPerson",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PersonServiceServer).GetPerson(ctx, req.(*GetPersonServiceRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PersonService_ListPersons_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListPersonServiceRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PersonServiceServer).ListPersons(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/personservice.PersonService/ListPersons",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PersonServiceServer).ListPersons(ctx, req.(*ListPersonServiceRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PersonService_UpdatePerson_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdatePersonServiceRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PersonServiceServer).UpdatePerson(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/personservice.PersonService/UpdatePerson",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PersonServiceServer).UpdatePerson(ctx, req.(*UpdatePersonServiceRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _PersonService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "personservice.PersonService",
	HandlerType: (*PersonServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreatePerson",
			Handler:    _PersonService_CreatePerson_Handler,
		},
		{
			MethodName: "DeletePerson",
			Handler:    _PersonService_DeletePerson_Handler,
		},
		{
			MethodName: "GetPerson",
			Handler:    _PersonService_GetPerson_Handler,
		},
		{
			MethodName: "ListPersons",
			Handler:    _PersonService_ListPersons_Handler,
		},
		{
			MethodName: "UpdatePerson",
			Handler:    _PersonService_UpdatePerson_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "personservice/service.proto",
}
