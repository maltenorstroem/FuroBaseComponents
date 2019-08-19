{
  "name": "task_service",
  "description": "service specs for the task api",
  "version": "0.0.1",
  "lifecycle": {
    "deprecated": false,
    "info": "This version is still valid"
  },
  "__proto": {
    "package": "task",
    "imports": [
      "task.proto",
      "task_entity.proto",
      "task_collection.proto",
      "protobuf/empty.proto"
    ]
  },
  "services": {
    "List": {
      "description": "The List method takes zero or more parameters as input, and returns a TaskCollection of TaskEntity that match the input parameters.",
      "data": {
        "request": null,
        "response": "task.TaskCollection"
      },
      "query": {
        "q": {
          "description": "Query term to search a task",
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
        "href": "/api/tasks",
        "method": "GET"
      }
    },
    "Create": {
      "description": "Creates a new Task",
      "data": {
        "request": "task.Task",
        "response": "task.TaskEntity"
      },
      "query": {
      },
      "deeplink": {
        "rel": "create",
        "href": "/api/tasks",
        "method": "POST"
      }
    },
    "Get": {
      "description": "The Get method takes zero or more parameters, and returns a TaskEntity which contains a Task",
      "data": {
        "request": null,
        "response": "task.TaskEntity"
      },
      "query": {
      },
      "deeplink": {
        "rel": "self",
        "href": "/api/tasks/{tsk}",
        "method": "GET"
      }
    },
    "Update": {
      "description": "Updates a Task, partial updates are supported",
      "data": {
        "request": "task.Task",
        "response": "task.TaskEntity"
      },
      "query": {},
      "deeplink": {
        "rel": "update",
        "href": "/api/tasks/{tsk}",
        "method": "PATCH"
      }
    },
    "Delete": {
      "description": "Delete a Task",
      "data": {
        "request": "protobuf.Empty",
        "response": "protobuf.Empty"
      },
      "query": {},
      "deeplink": {
        "rel": "delete",
        "href": "/api/tasks/{tsk}",
        "method": "DELETE"
      }
    }
  }
}
