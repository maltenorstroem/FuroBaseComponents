// Code generated by protoc-gen-go. DO NOT EDIT.
// source: projectservice/service.proto

package projectservice

import (
	protobuf "../google/protobuf"
	project "../project"
	context "context"
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
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

type CreateProjectServiceRequest struct {
	Data                 *project.Project `protobuf:"bytes,1,opt,name=data,proto3" json:"data,omitempty"`
	XXX_NoUnkeyedLiteral struct{}         `json:"-"`
	XXX_unrecognized     []byte           `json:"-"`
	XXX_sizecache        int32            `json:"-"`
}

func (m *CreateProjectServiceRequest) Reset()         { *m = CreateProjectServiceRequest{} }
func (m *CreateProjectServiceRequest) String() string { return proto.CompactTextString(m) }
func (*CreateProjectServiceRequest) ProtoMessage()    {}
func (*CreateProjectServiceRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_3c31cc769e894134, []int{0}
}

func (m *CreateProjectServiceRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_CreateProjectServiceRequest.Unmarshal(m, b)
}
func (m *CreateProjectServiceRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_CreateProjectServiceRequest.Marshal(b, m, deterministic)
}
func (m *CreateProjectServiceRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CreateProjectServiceRequest.Merge(m, src)
}
func (m *CreateProjectServiceRequest) XXX_Size() int {
	return xxx_messageInfo_CreateProjectServiceRequest.Size(m)
}
func (m *CreateProjectServiceRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_CreateProjectServiceRequest.DiscardUnknown(m)
}

var xxx_messageInfo_CreateProjectServiceRequest proto.InternalMessageInfo

func (m *CreateProjectServiceRequest) GetData() *project.Project {
	if m != nil {
		return m.Data
	}
	return nil
}

type DeleteProjectServiceRequest struct {
	Prj                  string          `protobuf:"bytes,1,opt,name=prj,proto3" json:"prj,omitempty"`
	Data                 *protobuf.Empty `protobuf:"bytes,2,opt,name=data,proto3" json:"data,omitempty"`
	XXX_NoUnkeyedLiteral struct{}        `json:"-"`
	XXX_unrecognized     []byte          `json:"-"`
	XXX_sizecache        int32           `json:"-"`
}

func (m *DeleteProjectServiceRequest) Reset()         { *m = DeleteProjectServiceRequest{} }
func (m *DeleteProjectServiceRequest) String() string { return proto.CompactTextString(m) }
func (*DeleteProjectServiceRequest) ProtoMessage()    {}
func (*DeleteProjectServiceRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_3c31cc769e894134, []int{1}
}

func (m *DeleteProjectServiceRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_DeleteProjectServiceRequest.Unmarshal(m, b)
}
func (m *DeleteProjectServiceRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_DeleteProjectServiceRequest.Marshal(b, m, deterministic)
}
func (m *DeleteProjectServiceRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DeleteProjectServiceRequest.Merge(m, src)
}
func (m *DeleteProjectServiceRequest) XXX_Size() int {
	return xxx_messageInfo_DeleteProjectServiceRequest.Size(m)
}
func (m *DeleteProjectServiceRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_DeleteProjectServiceRequest.DiscardUnknown(m)
}

var xxx_messageInfo_DeleteProjectServiceRequest proto.InternalMessageInfo

func (m *DeleteProjectServiceRequest) GetPrj() string {
	if m != nil {
		return m.Prj
	}
	return ""
}

func (m *DeleteProjectServiceRequest) GetData() *protobuf.Empty {
	if m != nil {
		return m.Data
	}
	return nil
}

type GetProjectServiceRequest struct {
	Prj                  string   `protobuf:"bytes,1,opt,name=prj,proto3" json:"prj,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *GetProjectServiceRequest) Reset()         { *m = GetProjectServiceRequest{} }
func (m *GetProjectServiceRequest) String() string { return proto.CompactTextString(m) }
func (*GetProjectServiceRequest) ProtoMessage()    {}
func (*GetProjectServiceRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_3c31cc769e894134, []int{2}
}

func (m *GetProjectServiceRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetProjectServiceRequest.Unmarshal(m, b)
}
func (m *GetProjectServiceRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetProjectServiceRequest.Marshal(b, m, deterministic)
}
func (m *GetProjectServiceRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetProjectServiceRequest.Merge(m, src)
}
func (m *GetProjectServiceRequest) XXX_Size() int {
	return xxx_messageInfo_GetProjectServiceRequest.Size(m)
}
func (m *GetProjectServiceRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_GetProjectServiceRequest.DiscardUnknown(m)
}

var xxx_messageInfo_GetProjectServiceRequest proto.InternalMessageInfo

func (m *GetProjectServiceRequest) GetPrj() string {
	if m != nil {
		return m.Prj
	}
	return ""
}

type ListProjectServiceRequest struct {
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
	//Query term to search a project
	Q                    string   `protobuf:"bytes,11,opt,name=q,proto3" json:"q,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ListProjectServiceRequest) Reset()         { *m = ListProjectServiceRequest{} }
func (m *ListProjectServiceRequest) String() string { return proto.CompactTextString(m) }
func (*ListProjectServiceRequest) ProtoMessage()    {}
func (*ListProjectServiceRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_3c31cc769e894134, []int{3}
}

func (m *ListProjectServiceRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ListProjectServiceRequest.Unmarshal(m, b)
}
func (m *ListProjectServiceRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ListProjectServiceRequest.Marshal(b, m, deterministic)
}
func (m *ListProjectServiceRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ListProjectServiceRequest.Merge(m, src)
}
func (m *ListProjectServiceRequest) XXX_Size() int {
	return xxx_messageInfo_ListProjectServiceRequest.Size(m)
}
func (m *ListProjectServiceRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_ListProjectServiceRequest.DiscardUnknown(m)
}

var xxx_messageInfo_ListProjectServiceRequest proto.InternalMessageInfo

func (m *ListProjectServiceRequest) GetFields() string {
	if m != nil {
		return m.Fields
	}
	return ""
}

func (m *ListProjectServiceRequest) GetOrderBy() string {
	if m != nil {
		return m.OrderBy
	}
	return ""
}

func (m *ListProjectServiceRequest) GetFilter() string {
	if m != nil {
		return m.Filter
	}
	return ""
}

func (m *ListProjectServiceRequest) GetPage() int32 {
	if m != nil {
		return m.Page
	}
	return 0
}

func (m *ListProjectServiceRequest) GetLimit() int32 {
	if m != nil {
		return m.Limit
	}
	return 0
}

func (m *ListProjectServiceRequest) GetView() string {
	if m != nil {
		return m.View
	}
	return ""
}

func (m *ListProjectServiceRequest) GetQ() string {
	if m != nil {
		return m.Q
	}
	return ""
}

type UpdateProjectServiceRequest struct {
	Prj                  string           `protobuf:"bytes,1,opt,name=prj,proto3" json:"prj,omitempty"`
	Data                 *project.Project `protobuf:"bytes,2,opt,name=data,proto3" json:"data,omitempty"`
	XXX_NoUnkeyedLiteral struct{}         `json:"-"`
	XXX_unrecognized     []byte           `json:"-"`
	XXX_sizecache        int32            `json:"-"`
}

func (m *UpdateProjectServiceRequest) Reset()         { *m = UpdateProjectServiceRequest{} }
func (m *UpdateProjectServiceRequest) String() string { return proto.CompactTextString(m) }
func (*UpdateProjectServiceRequest) ProtoMessage()    {}
func (*UpdateProjectServiceRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_3c31cc769e894134, []int{4}
}

func (m *UpdateProjectServiceRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UpdateProjectServiceRequest.Unmarshal(m, b)
}
func (m *UpdateProjectServiceRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UpdateProjectServiceRequest.Marshal(b, m, deterministic)
}
func (m *UpdateProjectServiceRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UpdateProjectServiceRequest.Merge(m, src)
}
func (m *UpdateProjectServiceRequest) XXX_Size() int {
	return xxx_messageInfo_UpdateProjectServiceRequest.Size(m)
}
func (m *UpdateProjectServiceRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_UpdateProjectServiceRequest.DiscardUnknown(m)
}

var xxx_messageInfo_UpdateProjectServiceRequest proto.InternalMessageInfo

func (m *UpdateProjectServiceRequest) GetPrj() string {
	if m != nil {
		return m.Prj
	}
	return ""
}

func (m *UpdateProjectServiceRequest) GetData() *project.Project {
	if m != nil {
		return m.Data
	}
	return nil
}

func init() {
	proto.RegisterType((*CreateProjectServiceRequest)(nil), "projectservice.CreateProjectServiceRequest")
	proto.RegisterType((*DeleteProjectServiceRequest)(nil), "projectservice.DeleteProjectServiceRequest")
	proto.RegisterType((*GetProjectServiceRequest)(nil), "projectservice.GetProjectServiceRequest")
	proto.RegisterType((*ListProjectServiceRequest)(nil), "projectservice.ListProjectServiceRequest")
	proto.RegisterType((*UpdateProjectServiceRequest)(nil), "projectservice.UpdateProjectServiceRequest")
}

func init() { proto.RegisterFile("projectservice/service.proto", fileDescriptor_3c31cc769e894134) }

var fileDescriptor_3c31cc769e894134 = []byte{
	// 498 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x8c, 0x53, 0xdd, 0x6e, 0xd3, 0x30,
	0x14, 0x56, 0xb6, 0x76, 0x6c, 0x67, 0x3f, 0x9a, 0x2c, 0xa8, 0xb2, 0xb4, 0x9a, 0x4a, 0xa8, 0xa6,
	0x0e, 0xa6, 0x44, 0x1a, 0x6f, 0x40, 0x99, 0xb8, 0xe1, 0x02, 0x05, 0xed, 0x8a, 0x0b, 0x94, 0x26,
	0x67, 0x95, 0x4b, 0x1a, 0xa7, 0xb1, 0x3b, 0x14, 0x0d, 0x6e, 0xf6, 0x04, 0x48, 0xbc, 0x09, 0xaf,
	0xc2, 0x2b, 0xf0, 0x20, 0x28, 0xc7, 0xae, 0x46, 0xba, 0xb9, 0xec, 0x2a, 0x3e, 0xf6, 0xf9, 0x7e,
	0x7c, 0xfc, 0x05, 0x7a, 0x45, 0x29, 0xa6, 0x98, 0x28, 0x89, 0xe5, 0x35, 0x4f, 0x30, 0x34, 0xdf,
	0xa0, 0x28, 0x85, 0x12, 0xec, 0xa0, 0x79, 0xea, 0xf5, 0x26, 0x42, 0x4c, 0x32, 0x0c, 0xe3, 0x82,
	0x87, 0x71, 0x9e, 0x0b, 0x15, 0x2b, 0x2e, 0x72, 0xa9, 0xbb, 0xbd, 0x67, 0xa6, 0x3b, 0x34, 0x5f,
	0xb3, 0xdd, 0x35, 0x20, 0xaa, 0xc6, 0x8b, 0xab, 0x10, 0x67, 0x85, 0xaa, 0xf4, 0xa1, 0x3f, 0x82,
	0xee, 0xa8, 0xc4, 0x58, 0xe1, 0x07, 0x8d, 0xf9, 0xa8, 0x95, 0x22, 0x9c, 0x2f, 0x50, 0x2a, 0x36,
	0x80, 0x56, 0x1a, 0xab, 0xd8, 0x75, 0xfa, 0xce, 0x70, 0xf7, 0xfc, 0x30, 0x58, 0x32, 0x9b, 0xee,
	0x88, 0x4e, 0xfd, 0x4f, 0xd0, 0x7d, 0x8b, 0x19, 0xda, 0x48, 0x0e, 0x61, 0xb3, 0x28, 0xa7, 0xc4,
	0xb1, 0x13, 0xd5, 0x4b, 0xf6, 0xd2, 0xd0, 0x6e, 0x10, 0x6d, 0x27, 0xd0, 0x0e, 0x83, 0xa5, 0xc3,
	0xe0, 0xa2, 0x76, 0x68, 0xc8, 0xcf, 0xc0, 0x7d, 0x87, 0xea, 0x91, 0xcc, 0xfe, 0x2f, 0x07, 0x8e,
	0xde, 0x73, 0x69, 0xe9, 0xef, 0xc0, 0xd6, 0x15, 0xc7, 0x2c, 0x95, 0x06, 0x62, 0x2a, 0x76, 0x04,
	0xdb, 0xa2, 0x4c, 0xb1, 0xfc, 0x3c, 0xae, 0xc8, 0xd3, 0x4e, 0xf4, 0x84, 0xea, 0x37, 0x95, 0x86,
	0x64, 0x0a, 0x4b, 0x77, 0x73, 0x09, 0xa9, 0x2b, 0xc6, 0xa0, 0x55, 0xc4, 0x13, 0x74, 0x5b, 0x7d,
	0x67, 0xd8, 0x8e, 0x68, 0xcd, 0x9e, 0x42, 0x3b, 0xe3, 0x33, 0xae, 0xdc, 0x36, 0x6d, 0xea, 0xa2,
	0xee, 0xbc, 0xe6, 0xf8, 0xd5, 0xdd, 0x26, 0x3c, 0xad, 0xd9, 0x1e, 0x38, 0x73, 0x77, 0x97, 0x36,
	0x9c, 0xb9, 0x7f, 0x09, 0xdd, 0xcb, 0x22, 0x8d, 0x1f, 0x3f, 0xbf, 0x41, 0x63, 0x7e, 0x96, 0x67,
	0x39, 0xff, 0xd1, 0x86, 0x83, 0x26, 0x23, 0xfb, 0x06, 0xfb, 0x8d, 0xe7, 0x66, 0xaf, 0x82, 0x66,
	0xc4, 0x82, 0x35, 0x69, 0xf0, 0x3a, 0xab, 0x42, 0x17, 0xb9, 0xe2, 0xaa, 0xf2, 0x4f, 0x6e, 0x7f,
	0xff, 0xf9, 0xb9, 0xd1, 0x67, 0xc7, 0xe1, 0x4c, 0x24, 0x5f, 0x6a, 0xed, 0x65, 0x04, 0x65, 0x98,
	0x10, 0x5f, 0x30, 0x95, 0x22, 0x67, 0xb7, 0x0e, 0xec, 0x37, 0x82, 0x72, 0x5f, 0x7e, 0x4d, 0x8e,
	0x3c, 0x4b, 0x4e, 0xfc, 0x33, 0x92, 0x3f, 0x61, 0x83, 0x07, 0xe4, 0x6f, 0x8a, 0x72, 0xfa, 0x3d,
	0x4c, 0x89, 0x55, 0x9b, 0xa8, 0x00, 0xee, 0xf2, 0xc4, 0x86, 0xab, 0x06, 0x6c, 0x59, 0xb3, 0x5e,
	0xfe, 0x94, 0xd4, 0x5f, 0xb0, 0xe7, 0x56, 0xf5, 0x09, 0x2a, 0x2d, 0x7d, 0x03, 0x7b, 0xff, 0x64,
	0x53, 0xb2, 0xd3, 0x55, 0x71, 0x6b, 0x72, 0x3d, 0x6f, 0x55, 0x7d, 0x24, 0xb2, 0x0c, 0x93, 0xfa,
	0xf7, 0xf7, 0x07, 0xe4, 0xe0, 0x98, 0xf5, 0x1e, 0x70, 0x90, 0x71, 0xa9, 0xee, 0x86, 0xdf, 0x48,
	0xd9, 0xfd, 0xe1, 0xaf, 0x09, 0xa1, 0xf5, 0xfa, 0xff, 0x1f, 0xfe, 0x82, 0x58, 0xc9, 0xc4, 0x78,
	0x8b, 0x9e, 0xee, 0xf5, 0xdf, 0x00, 0x00, 0x00, 0xff, 0xff, 0x67, 0x23, 0x9a, 0x69, 0xf7, 0x04,
	0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// ProjectServiceClient is the client API for ProjectService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type ProjectServiceClient interface {
	// Creates a new Project
	CreateProject(ctx context.Context, in *CreateProjectServiceRequest, opts ...grpc.CallOption) (*project.ProjectEntity, error)
	// Delete a Project
	DeleteProject(ctx context.Context, in *DeleteProjectServiceRequest, opts ...grpc.CallOption) (*protobuf.Empty, error)
	// The Get method takes zero or more parameters, and returns a ProjectEntity which contains a Project
	GetProject(ctx context.Context, in *GetProjectServiceRequest, opts ...grpc.CallOption) (*project.ProjectEntity, error)
	// The List method takes zero or more parameters as input, and returns a ProjectCollection of ProjectEntity that match the input parameters.
	ListProjects(ctx context.Context, in *ListProjectServiceRequest, opts ...grpc.CallOption) (*project.ProjectCollection, error)
	// Updates a Project, partial updates are supported
	UpdateProject(ctx context.Context, in *UpdateProjectServiceRequest, opts ...grpc.CallOption) (*project.ProjectEntity, error)
}

type projectServiceClient struct {
	cc *grpc.ClientConn
}

func NewProjectServiceClient(cc *grpc.ClientConn) ProjectServiceClient {
	return &projectServiceClient{cc}
}

func (c *projectServiceClient) CreateProject(ctx context.Context, in *CreateProjectServiceRequest, opts ...grpc.CallOption) (*project.ProjectEntity, error) {
	out := new(project.ProjectEntity)
	err := c.cc.Invoke(ctx, "/projectservice.ProjectService/CreateProject", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *projectServiceClient) DeleteProject(ctx context.Context, in *DeleteProjectServiceRequest, opts ...grpc.CallOption) (*protobuf.Empty, error) {
	out := new(protobuf.Empty)
	err := c.cc.Invoke(ctx, "/projectservice.ProjectService/DeleteProject", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *projectServiceClient) GetProject(ctx context.Context, in *GetProjectServiceRequest, opts ...grpc.CallOption) (*project.ProjectEntity, error) {
	out := new(project.ProjectEntity)
	err := c.cc.Invoke(ctx, "/projectservice.ProjectService/GetProject", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *projectServiceClient) ListProjects(ctx context.Context, in *ListProjectServiceRequest, opts ...grpc.CallOption) (*project.ProjectCollection, error) {
	out := new(project.ProjectCollection)
	err := c.cc.Invoke(ctx, "/projectservice.ProjectService/ListProjects", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *projectServiceClient) UpdateProject(ctx context.Context, in *UpdateProjectServiceRequest, opts ...grpc.CallOption) (*project.ProjectEntity, error) {
	out := new(project.ProjectEntity)
	err := c.cc.Invoke(ctx, "/projectservice.ProjectService/UpdateProject", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ProjectServiceServer is the server API for ProjectService service.
type ProjectServiceServer interface {
	// Creates a new Project
	CreateProject(context.Context, *CreateProjectServiceRequest) (*project.ProjectEntity, error)
	// Delete a Project
	DeleteProject(context.Context, *DeleteProjectServiceRequest) (*protobuf.Empty, error)
	// The Get method takes zero or more parameters, and returns a ProjectEntity which contains a Project
	GetProject(context.Context, *GetProjectServiceRequest) (*project.ProjectEntity, error)
	// The List method takes zero or more parameters as input, and returns a ProjectCollection of ProjectEntity that match the input parameters.
	ListProjects(context.Context, *ListProjectServiceRequest) (*project.ProjectCollection, error)
	// Updates a Project, partial updates are supported
	UpdateProject(context.Context, *UpdateProjectServiceRequest) (*project.ProjectEntity, error)
}

// UnimplementedProjectServiceServer can be embedded to have forward compatible implementations.
type UnimplementedProjectServiceServer struct {
}

func (*UnimplementedProjectServiceServer) CreateProject(ctx context.Context, req *CreateProjectServiceRequest) (*project.ProjectEntity, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateProject not implemented")
}
func (*UnimplementedProjectServiceServer) DeleteProject(ctx context.Context, req *DeleteProjectServiceRequest) (*protobuf.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteProject not implemented")
}
func (*UnimplementedProjectServiceServer) GetProject(ctx context.Context, req *GetProjectServiceRequest) (*project.ProjectEntity, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetProject not implemented")
}
func (*UnimplementedProjectServiceServer) ListProjects(ctx context.Context, req *ListProjectServiceRequest) (*project.ProjectCollection, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListProjects not implemented")
}
func (*UnimplementedProjectServiceServer) UpdateProject(ctx context.Context, req *UpdateProjectServiceRequest) (*project.ProjectEntity, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateProject not implemented")
}

func RegisterProjectServiceServer(s *grpc.Server, srv ProjectServiceServer) {
	s.RegisterService(&_ProjectService_serviceDesc, srv)
}

func _ProjectService_CreateProject_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateProjectServiceRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ProjectServiceServer).CreateProject(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/projectservice.ProjectService/CreateProject",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ProjectServiceServer).CreateProject(ctx, req.(*CreateProjectServiceRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ProjectService_DeleteProject_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteProjectServiceRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ProjectServiceServer).DeleteProject(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/projectservice.ProjectService/DeleteProject",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ProjectServiceServer).DeleteProject(ctx, req.(*DeleteProjectServiceRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ProjectService_GetProject_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetProjectServiceRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ProjectServiceServer).GetProject(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/projectservice.ProjectService/GetProject",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ProjectServiceServer).GetProject(ctx, req.(*GetProjectServiceRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ProjectService_ListProjects_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListProjectServiceRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ProjectServiceServer).ListProjects(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/projectservice.ProjectService/ListProjects",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ProjectServiceServer).ListProjects(ctx, req.(*ListProjectServiceRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ProjectService_UpdateProject_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateProjectServiceRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ProjectServiceServer).UpdateProject(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/projectservice.ProjectService/UpdateProject",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ProjectServiceServer).UpdateProject(ctx, req.(*UpdateProjectServiceRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _ProjectService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "projectservice.ProjectService",
	HandlerType: (*ProjectServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateProject",
			Handler:    _ProjectService_CreateProject_Handler,
		},
		{
			MethodName: "DeleteProject",
			Handler:    _ProjectService_DeleteProject_Handler,
		},
		{
			MethodName: "GetProject",
			Handler:    _ProjectService_GetProject_Handler,
		},
		{
			MethodName: "ListProjects",
			Handler:    _ProjectService_ListProjects_Handler,
		},
		{
			MethodName: "UpdateProject",
			Handler:    _ProjectService_UpdateProject_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "projectservice/service.proto",
}
