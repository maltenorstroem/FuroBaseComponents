{
  "name": "ProjectService",
  "description": "service specs for the project api",
  "version": "0.0.1",
  "lifecycle": {
    "deprecated": false,
    "info": "This version is still valid"
  },
  "__proto": {
    "package": "project",
    "imports": [
      "project.proto",
      "project_entity.proto",
      "project_collection.proto",
      "protobuf/empty.proto"
    ]
  },
  "services": {
    "List": {
      "description": "The List method takes zero or more parameters as input, and returns a ProjectCollection of ProjectEntity that match the input parameters.",
      "rpc_name": "ListProjects",
      "data": {
        "request": null,
        "response": "project.ProjectCollection"
      },
      "query": {
        "q": {
          "description": "Query term to search a project",
          "type": "string",
          "meta": {
            "label": "Search",
            "hint": ""
          },
          "__proto": {
            "type": "string"
          }
        }
      },
      "deeplink": {
        "description":"Describe_the_query_params_if_you_have",
        "rel": "list",
        "href": "/mockdata/projects/list.json",
        "method": "GET"
      }
    },
    "Create": {
      "description": "Creates a new Project",
      "rpc_name": "CreateProject",
      "data": {
        "request": "project.Project",
        "response": "project.ProjectEntity"
      },
      "query": {
      },
      "deeplink": {
        "rel": "create",
        "href": "/mockdata/projects/create.json",
        "method": "GET"
      }
    },
    "Get": {
      "description": "The Get method takes zero or more parameters, and returns a ProjectEntity which contains a Project",
      "rpc_name": "GetProject",
      "data": {
        "request": null,
        "response": "project.ProjectEntity"
      },
      "query": {
      },
      "deeplink": {
        "rel": "self",
        "href": "/mockdata/projects/1/get.json",
        "method": "GET"
      }
    },
    "Update": {
      "description": "Updates a Project, partial updates are supported",
      "rpc_name": "UpdateProject",
      "data": {
        "request": "project.Project",
        "response": "project.ProjectEntity"
      },
      "query": {},
      "deeplink": {
        "rel": "update",
        "href": "/mockdata/projects/1/update.json",
        "method": "GET"
      }
    },
    "Delete": {
      "description": "Delete a Project",
      "rpc_name": "DeleteProject",
      "data": {
        "request": "protobuf.Empty",
        "response": "protobuf.Empty"
      },
      "query": {},
      "deeplink": {
        "rel": "delete",
        "href": "/mockdata/projects/1/delete.json",
        "method": "GET"
      }
    }
  }
}
