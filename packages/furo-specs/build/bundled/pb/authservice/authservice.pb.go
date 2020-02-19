// Code generated by protoc-gen-go. DO NOT EDIT.
// source: authservice/authservice.proto

package authservice

import (
	auth "../auth"
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

type CreateAuthServiceRequest struct {
	Data                 *auth.Auth `protobuf:"bytes,1,opt,name=data,proto3" json:"data,omitempty"`
	XXX_NoUnkeyedLiteral struct{}   `json:"-"`
	XXX_unrecognized     []byte     `json:"-"`
	XXX_sizecache        int32      `json:"-"`
}

func (m *CreateAuthServiceRequest) Reset()         { *m = CreateAuthServiceRequest{} }
func (m *CreateAuthServiceRequest) String() string { return proto.CompactTextString(m) }
func (*CreateAuthServiceRequest) ProtoMessage()    {}
func (*CreateAuthServiceRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_6a6c6fd2d283aef6, []int{0}
}

func (m *CreateAuthServiceRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_CreateAuthServiceRequest.Unmarshal(m, b)
}
func (m *CreateAuthServiceRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_CreateAuthServiceRequest.Marshal(b, m, deterministic)
}
func (m *CreateAuthServiceRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CreateAuthServiceRequest.Merge(m, src)
}
func (m *CreateAuthServiceRequest) XXX_Size() int {
	return xxx_messageInfo_CreateAuthServiceRequest.Size(m)
}
func (m *CreateAuthServiceRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_CreateAuthServiceRequest.DiscardUnknown(m)
}

var xxx_messageInfo_CreateAuthServiceRequest proto.InternalMessageInfo

func (m *CreateAuthServiceRequest) GetData() *auth.Auth {
	if m != nil {
		return m.Data
	}
	return nil
}

type DeleteAuthServiceRequest struct {
	Data                 *empty.Empty `protobuf:"bytes,1,opt,name=data,proto3" json:"data,omitempty"`
	XXX_NoUnkeyedLiteral struct{}     `json:"-"`
	XXX_unrecognized     []byte       `json:"-"`
	XXX_sizecache        int32        `json:"-"`
}

func (m *DeleteAuthServiceRequest) Reset()         { *m = DeleteAuthServiceRequest{} }
func (m *DeleteAuthServiceRequest) String() string { return proto.CompactTextString(m) }
func (*DeleteAuthServiceRequest) ProtoMessage()    {}
func (*DeleteAuthServiceRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_6a6c6fd2d283aef6, []int{1}
}

func (m *DeleteAuthServiceRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_DeleteAuthServiceRequest.Unmarshal(m, b)
}
func (m *DeleteAuthServiceRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_DeleteAuthServiceRequest.Marshal(b, m, deterministic)
}
func (m *DeleteAuthServiceRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DeleteAuthServiceRequest.Merge(m, src)
}
func (m *DeleteAuthServiceRequest) XXX_Size() int {
	return xxx_messageInfo_DeleteAuthServiceRequest.Size(m)
}
func (m *DeleteAuthServiceRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_DeleteAuthServiceRequest.DiscardUnknown(m)
}

var xxx_messageInfo_DeleteAuthServiceRequest proto.InternalMessageInfo

func (m *DeleteAuthServiceRequest) GetData() *empty.Empty {
	if m != nil {
		return m.Data
	}
	return nil
}

type GetAuthServiceRequest struct {
	Uid                  string   `protobuf:"bytes,1,opt,name=uid,proto3" json:"uid,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *GetAuthServiceRequest) Reset()         { *m = GetAuthServiceRequest{} }
func (m *GetAuthServiceRequest) String() string { return proto.CompactTextString(m) }
func (*GetAuthServiceRequest) ProtoMessage()    {}
func (*GetAuthServiceRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_6a6c6fd2d283aef6, []int{2}
}

func (m *GetAuthServiceRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetAuthServiceRequest.Unmarshal(m, b)
}
func (m *GetAuthServiceRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetAuthServiceRequest.Marshal(b, m, deterministic)
}
func (m *GetAuthServiceRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetAuthServiceRequest.Merge(m, src)
}
func (m *GetAuthServiceRequest) XXX_Size() int {
	return xxx_messageInfo_GetAuthServiceRequest.Size(m)
}
func (m *GetAuthServiceRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_GetAuthServiceRequest.DiscardUnknown(m)
}

var xxx_messageInfo_GetAuthServiceRequest proto.InternalMessageInfo

func (m *GetAuthServiceRequest) GetUid() string {
	if m != nil {
		return m.Uid
	}
	return ""
}

type ListAuthServiceRequest struct {
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
	//Query term to search a auth
	Q                    string   `protobuf:"bytes,11,opt,name=q,proto3" json:"q,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ListAuthServiceRequest) Reset()         { *m = ListAuthServiceRequest{} }
func (m *ListAuthServiceRequest) String() string { return proto.CompactTextString(m) }
func (*ListAuthServiceRequest) ProtoMessage()    {}
func (*ListAuthServiceRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_6a6c6fd2d283aef6, []int{3}
}

func (m *ListAuthServiceRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ListAuthServiceRequest.Unmarshal(m, b)
}
func (m *ListAuthServiceRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ListAuthServiceRequest.Marshal(b, m, deterministic)
}
func (m *ListAuthServiceRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ListAuthServiceRequest.Merge(m, src)
}
func (m *ListAuthServiceRequest) XXX_Size() int {
	return xxx_messageInfo_ListAuthServiceRequest.Size(m)
}
func (m *ListAuthServiceRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_ListAuthServiceRequest.DiscardUnknown(m)
}

var xxx_messageInfo_ListAuthServiceRequest proto.InternalMessageInfo

func (m *ListAuthServiceRequest) GetFields() string {
	if m != nil {
		return m.Fields
	}
	return ""
}

func (m *ListAuthServiceRequest) GetOrderBy() string {
	if m != nil {
		return m.OrderBy
	}
	return ""
}

func (m *ListAuthServiceRequest) GetFilter() string {
	if m != nil {
		return m.Filter
	}
	return ""
}

func (m *ListAuthServiceRequest) GetPage() int32 {
	if m != nil {
		return m.Page
	}
	return 0
}

func (m *ListAuthServiceRequest) GetLimit() int32 {
	if m != nil {
		return m.Limit
	}
	return 0
}

func (m *ListAuthServiceRequest) GetView() string {
	if m != nil {
		return m.View
	}
	return ""
}

func (m *ListAuthServiceRequest) GetQ() string {
	if m != nil {
		return m.Q
	}
	return ""
}

type UpdateAuthServiceRequest struct {
	Uid                  string     `protobuf:"bytes,1,opt,name=uid,proto3" json:"uid,omitempty"`
	Data                 *auth.Auth `protobuf:"bytes,2,opt,name=data,proto3" json:"data,omitempty"`
	XXX_NoUnkeyedLiteral struct{}   `json:"-"`
	XXX_unrecognized     []byte     `json:"-"`
	XXX_sizecache        int32      `json:"-"`
}

func (m *UpdateAuthServiceRequest) Reset()         { *m = UpdateAuthServiceRequest{} }
func (m *UpdateAuthServiceRequest) String() string { return proto.CompactTextString(m) }
func (*UpdateAuthServiceRequest) ProtoMessage()    {}
func (*UpdateAuthServiceRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_6a6c6fd2d283aef6, []int{4}
}

func (m *UpdateAuthServiceRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UpdateAuthServiceRequest.Unmarshal(m, b)
}
func (m *UpdateAuthServiceRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UpdateAuthServiceRequest.Marshal(b, m, deterministic)
}
func (m *UpdateAuthServiceRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UpdateAuthServiceRequest.Merge(m, src)
}
func (m *UpdateAuthServiceRequest) XXX_Size() int {
	return xxx_messageInfo_UpdateAuthServiceRequest.Size(m)
}
func (m *UpdateAuthServiceRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_UpdateAuthServiceRequest.DiscardUnknown(m)
}

var xxx_messageInfo_UpdateAuthServiceRequest proto.InternalMessageInfo

func (m *UpdateAuthServiceRequest) GetUid() string {
	if m != nil {
		return m.Uid
	}
	return ""
}

func (m *UpdateAuthServiceRequest) GetData() *auth.Auth {
	if m != nil {
		return m.Data
	}
	return nil
}

func init() {
	proto.RegisterType((*CreateAuthServiceRequest)(nil), "authservice.CreateAuthServiceRequest")
	proto.RegisterType((*DeleteAuthServiceRequest)(nil), "authservice.DeleteAuthServiceRequest")
	proto.RegisterType((*GetAuthServiceRequest)(nil), "authservice.GetAuthServiceRequest")
	proto.RegisterType((*ListAuthServiceRequest)(nil), "authservice.ListAuthServiceRequest")
	proto.RegisterType((*UpdateAuthServiceRequest)(nil), "authservice.UpdateAuthServiceRequest")
}

func init() { proto.RegisterFile("authservice/authservice.proto", fileDescriptor_6a6c6fd2d283aef6) }

var fileDescriptor_6a6c6fd2d283aef6 = []byte{
	// 466 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x74, 0x53, 0xcd, 0x6e, 0xd3, 0x40,
	0x10, 0x96, 0xf3, 0xd7, 0x66, 0x5c, 0x89, 0x30, 0x2a, 0xd1, 0x62, 0xa0, 0xaa, 0x16, 0x21, 0x95,
	0x1e, 0x6c, 0x29, 0xdc, 0x7a, 0x83, 0x52, 0xb8, 0xe4, 0x14, 0xc4, 0x81, 0x5e, 0x2a, 0xa7, 0x9e,
	0xa6, 0x2b, 0xb9, 0x59, 0xc7, 0x5e, 0x17, 0x45, 0x88, 0x0b, 0xaf, 0xc0, 0x83, 0xf0, 0x30, 0xbc,
	0x02, 0x07, 0x1e, 0xa3, 0xf2, 0xd8, 0xa9, 0x9d, 0x76, 0x7d, 0x9b, 0x99, 0x9d, 0xf9, 0xe6, 0xf3,
	0xf7, 0x8d, 0xe1, 0x55, 0x98, 0x9b, 0xeb, 0x8c, 0xd2, 0x5b, 0x75, 0x49, 0x41, 0x23, 0xf6, 0x93,
	0x54, 0x1b, 0x8d, 0x6e, 0xa3, 0xe4, 0xbd, 0x5c, 0x68, 0xbd, 0x88, 0x29, 0x08, 0x13, 0x15, 0x84,
	0xcb, 0xa5, 0x36, 0xa1, 0x51, 0x7a, 0x99, 0x95, 0xad, 0xde, 0x93, 0xa2, 0x95, 0x21, 0xaa, 0xc2,
	0x8b, 0xaa, 0x9d, 0xb3, 0x79, 0x7e, 0x15, 0xd0, 0x4d, 0x62, 0xd6, 0xe5, 0xa3, 0x3c, 0x01, 0x71,
	0x9a, 0x52, 0x68, 0xe8, 0x7d, 0x6e, 0xae, 0xbf, 0x94, 0x0b, 0x66, 0xb4, 0xca, 0x29, 0x33, 0x78,
	0x00, 0xbd, 0x28, 0x34, 0xa1, 0x70, 0x0e, 0x9d, 0x23, 0x77, 0x02, 0x3e, 0x63, 0x16, 0x7d, 0x33,
	0xae, 0xcb, 0x4f, 0x20, 0x3e, 0x52, 0x4c, 0xd6, 0xd9, 0xe3, 0xad, 0xd9, 0xb1, 0x5f, 0x72, 0xf0,
	0x37, 0x1c, 0xfc, 0xb3, 0x82, 0x43, 0x85, 0xf3, 0x16, 0x9e, 0x7d, 0x26, 0x63, 0x01, 0x19, 0x41,
	0x37, 0x57, 0x11, 0x63, 0x0c, 0x67, 0x45, 0x28, 0xff, 0x38, 0x30, 0x9e, 0xaa, 0xcc, 0xd6, 0x3c,
	0x86, 0xc1, 0x95, 0xa2, 0x38, 0xca, 0xaa, 0xfe, 0x2a, 0xc3, 0xe7, 0xb0, 0xab, 0xd3, 0x88, 0xd2,
	0x8b, 0xf9, 0x5a, 0x74, 0xf8, 0x65, 0x87, 0xf3, 0x0f, 0xeb, 0x72, 0x24, 0x36, 0x94, 0x8a, 0xee,
	0x66, 0xa4, 0xc8, 0x10, 0xa1, 0x97, 0x84, 0x0b, 0x12, 0xbd, 0x43, 0xe7, 0xa8, 0x3f, 0xe3, 0x18,
	0xf7, 0xa1, 0x1f, 0xab, 0x1b, 0x65, 0x44, 0x9f, 0x8b, 0x65, 0x52, 0x74, 0xde, 0x2a, 0xfa, 0x2e,
	0x76, 0x79, 0x9e, 0x63, 0xdc, 0x03, 0x67, 0x25, 0x5c, 0x2e, 0x38, 0x2b, 0x39, 0x05, 0xf1, 0x35,
	0x89, 0xec, 0x02, 0x3f, 0xfa, 0xbe, 0x7b, 0xc9, 0x3b, 0x76, 0xc9, 0x27, 0xff, 0xbb, 0xe0, 0x36,
	0x80, 0xf0, 0x02, 0xa0, 0xb6, 0x0f, 0xdf, 0xf8, 0xcd, 0xcb, 0x69, 0xf3, 0xd5, 0x1b, 0xd5, 0xb0,
	0x67, 0x4b, 0xa3, 0xcc, 0x5a, 0x8a, 0x5f, 0x7f, 0xff, 0xfd, 0xee, 0xa0, 0x84, 0xf2, 0xa6, 0x0a,
	0x90, 0x13, 0x5e, 0x88, 0xe7, 0x30, 0x98, 0xea, 0x85, 0xce, 0xcd, 0x03, 0xf0, 0x36, 0xe3, 0xbd,
	0x16, 0xab, 0xe5, 0x53, 0x5e, 0xe1, 0x1e, 0x0f, 0xef, 0x57, 0xe0, 0x37, 0xd8, 0xa9, 0x7c, 0x47,
	0xb9, 0x05, 0x6e, 0xbd, 0x86, 0x76, 0xda, 0x38, 0xaa, 0x69, 0x07, 0x3f, 0x72, 0x15, 0xfd, 0xc4,
	0x73, 0x18, 0x6e, 0xce, 0x24, 0xc3, 0xd7, 0x5b, 0xe0, 0xf6, 0xf3, 0xf1, 0xf6, 0x6b, 0xf4, 0x53,
	0x1d, 0xc7, 0x74, 0x59, 0xfc, 0x53, 0x12, 0x79, 0xc3, 0x1e, 0x36, 0x84, 0x41, 0x02, 0xa8, 0x1d,
	0x7d, 0x20, 0x4b, 0x9b, 0xd5, 0x16, 0xf2, 0x07, 0x0c, 0x2d, 0x26, 0x8f, 0xc8, 0x97, 0xca, 0xcf,
	0x07, 0x2c, 0xe0, 0xbb, 0xbb, 0x00, 0x00, 0x00, 0xff, 0xff, 0x97, 0x11, 0x61, 0xbe, 0x1a, 0x04,
	0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// AuthServiceClient is the client API for AuthService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type AuthServiceClient interface {
	// Creates a new Auth
	CreateAuth(ctx context.Context, in *CreateAuthServiceRequest, opts ...grpc.CallOption) (*auth.AuthEntity, error)
	// Logout ala delete a auth session
	Logout(ctx context.Context, in *DeleteAuthServiceRequest, opts ...grpc.CallOption) (*empty.Empty, error)
	// The Get method takes zero or more parameters, and returns a AuthEntity which contains a Auth
	GetAuth(ctx context.Context, in *GetAuthServiceRequest, opts ...grpc.CallOption) (*auth.AuthEntity, error)
	// The List method takes zero or more parameters as input, and returns a AuthCollection of AuthEntity that match the input parameters.
	ListAuths(ctx context.Context, in *ListAuthServiceRequest, opts ...grpc.CallOption) (*auth.AuthCollection, error)
	// Updates a Auth, partial updates are supported
	UpdateAuth(ctx context.Context, in *UpdateAuthServiceRequest, opts ...grpc.CallOption) (*auth.AuthEntity, error)
}

type authServiceClient struct {
	cc *grpc.ClientConn
}

func NewAuthServiceClient(cc *grpc.ClientConn) AuthServiceClient {
	return &authServiceClient{cc}
}

func (c *authServiceClient) CreateAuth(ctx context.Context, in *CreateAuthServiceRequest, opts ...grpc.CallOption) (*auth.AuthEntity, error) {
	out := new(auth.AuthEntity)
	err := c.cc.Invoke(ctx, "/authservice.AuthService/CreateAuth", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authServiceClient) Logout(ctx context.Context, in *DeleteAuthServiceRequest, opts ...grpc.CallOption) (*empty.Empty, error) {
	out := new(empty.Empty)
	err := c.cc.Invoke(ctx, "/authservice.AuthService/Logout", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authServiceClient) GetAuth(ctx context.Context, in *GetAuthServiceRequest, opts ...grpc.CallOption) (*auth.AuthEntity, error) {
	out := new(auth.AuthEntity)
	err := c.cc.Invoke(ctx, "/authservice.AuthService/GetAuth", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authServiceClient) ListAuths(ctx context.Context, in *ListAuthServiceRequest, opts ...grpc.CallOption) (*auth.AuthCollection, error) {
	out := new(auth.AuthCollection)
	err := c.cc.Invoke(ctx, "/authservice.AuthService/ListAuths", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authServiceClient) UpdateAuth(ctx context.Context, in *UpdateAuthServiceRequest, opts ...grpc.CallOption) (*auth.AuthEntity, error) {
	out := new(auth.AuthEntity)
	err := c.cc.Invoke(ctx, "/authservice.AuthService/UpdateAuth", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// AuthServiceServer is the server API for AuthService service.
type AuthServiceServer interface {
	// Creates a new Auth
	CreateAuth(context.Context, *CreateAuthServiceRequest) (*auth.AuthEntity, error)
	// Logout ala delete a auth session
	Logout(context.Context, *DeleteAuthServiceRequest) (*empty.Empty, error)
	// The Get method takes zero or more parameters, and returns a AuthEntity which contains a Auth
	GetAuth(context.Context, *GetAuthServiceRequest) (*auth.AuthEntity, error)
	// The List method takes zero or more parameters as input, and returns a AuthCollection of AuthEntity that match the input parameters.
	ListAuths(context.Context, *ListAuthServiceRequest) (*auth.AuthCollection, error)
	// Updates a Auth, partial updates are supported
	UpdateAuth(context.Context, *UpdateAuthServiceRequest) (*auth.AuthEntity, error)
}

// UnimplementedAuthServiceServer can be embedded to have forward compatible implementations.
type UnimplementedAuthServiceServer struct {
}

func (*UnimplementedAuthServiceServer) CreateAuth(ctx context.Context, req *CreateAuthServiceRequest) (*auth.AuthEntity, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateAuth not implemented")
}
func (*UnimplementedAuthServiceServer) Logout(ctx context.Context, req *DeleteAuthServiceRequest) (*empty.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Logout not implemented")
}
func (*UnimplementedAuthServiceServer) GetAuth(ctx context.Context, req *GetAuthServiceRequest) (*auth.AuthEntity, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetAuth not implemented")
}
func (*UnimplementedAuthServiceServer) ListAuths(ctx context.Context, req *ListAuthServiceRequest) (*auth.AuthCollection, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListAuths not implemented")
}
func (*UnimplementedAuthServiceServer) UpdateAuth(ctx context.Context, req *UpdateAuthServiceRequest) (*auth.AuthEntity, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateAuth not implemented")
}

func RegisterAuthServiceServer(s *grpc.Server, srv AuthServiceServer) {
	s.RegisterService(&_AuthService_serviceDesc, srv)
}

func _AuthService_CreateAuth_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateAuthServiceRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthServiceServer).CreateAuth(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/authservice.AuthService/CreateAuth",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthServiceServer).CreateAuth(ctx, req.(*CreateAuthServiceRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthService_Logout_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteAuthServiceRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthServiceServer).Logout(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/authservice.AuthService/Logout",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthServiceServer).Logout(ctx, req.(*DeleteAuthServiceRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthService_GetAuth_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetAuthServiceRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthServiceServer).GetAuth(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/authservice.AuthService/GetAuth",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthServiceServer).GetAuth(ctx, req.(*GetAuthServiceRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthService_ListAuths_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListAuthServiceRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthServiceServer).ListAuths(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/authservice.AuthService/ListAuths",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthServiceServer).ListAuths(ctx, req.(*ListAuthServiceRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthService_UpdateAuth_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateAuthServiceRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthServiceServer).UpdateAuth(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/authservice.AuthService/UpdateAuth",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthServiceServer).UpdateAuth(ctx, req.(*UpdateAuthServiceRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _AuthService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "authservice.AuthService",
	HandlerType: (*AuthServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateAuth",
			Handler:    _AuthService_CreateAuth_Handler,
		},
		{
			MethodName: "Logout",
			Handler:    _AuthService_Logout_Handler,
		},
		{
			MethodName: "GetAuth",
			Handler:    _AuthService_GetAuth_Handler,
		},
		{
			MethodName: "ListAuths",
			Handler:    _AuthService_ListAuths_Handler,
		},
		{
			MethodName: "UpdateAuth",
			Handler:    _AuthService_UpdateAuth_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "authservice/authservice.proto",
}
