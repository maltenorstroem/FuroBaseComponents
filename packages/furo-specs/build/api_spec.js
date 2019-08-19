export const Services = {
  "ProjectService": {
    "name": "project_service",
    "description": "service specs for the project api",
    "version": "0.0.1",
    "lifecycle": {"deprecated": false, "info": "This version is still valid"},
    "__proto": {
      "package": "project",
      "imports": ["project.proto", "project_entity.proto", "project_collection.proto", "protobuf/empty.proto"]
    },
    "services": {
      "List": {
        "description": "The List method takes zero or more parameters as input, and returns a ProjectCollection of ProjectEntity that match the input parameters.",
        "rpc_name": "ListProjects",
        "data": {"request": null, "response": "project.ProjectCollection"},
        "query": {
          "q": {
            "description": "Query term to search a project",
            "type": "string",
            "meta": {"label": "Search", "hint": ""},
            "__proto": {"type": "string"}
          }
        },
        "deeplink": {
          "description": "Describe_the_query_params_if_you_have",
          "rel": "list",
          "href": "/api/projects",
          "method": "GET"
        }
      },
      "Create": {
        "description": "Creates a new Project",
        "rpc_name": "CreateProject",
        "data": {"request": "project.Project", "response": "project.ProjectEntity"},
        "query": {},
        "deeplink": {"rel": "create", "href": "/api/projects", "method": "POST"}
      },
      "Get": {
        "description": "The Get method takes zero or more parameters, and returns a ProjectEntity which contains a Project",
        "rpc_name": "GetProject",
        "data": {"request": null, "response": "project.ProjectEntity"},
        "query": {},
        "deeplink": {"rel": "self", "href": "/api/projects/{var}", "method": "GET"}
      },
      "Update": {
        "description": "Updates a Project, partial updates are supported",
        "rpc_name": "UpdateProject",
        "data": {"request": "project.Project", "response": "project.ProjectEntity"},
        "query": {},
        "deeplink": {"rel": "update", "href": "/api/projects/{var}", "method": "PATCH"}
      },
      "Delete": {
        "description": "Delete a Project",
        "rpc_name": "DeleteProject",
        "data": {"request": "protobuf.Empty", "response": "protobuf.Empty"},
        "query": {},
        "deeplink": {"rel": "delete", "href": "/api/projects/{var}", "method": "DELETE"}
      }
    }
  },
  "person_service": {
    "name": "person_service",
    "description": "service specs for the person api",
    "version": "0.0.1",
    "lifecycle": {"deprecated": false, "info": "This version is still valid"},
    "__proto": {
      "package": "person",
      "imports": ["person.proto", "person_entity.proto", "person_collection.proto", "protobuf/empty.proto"]
    },
    "services": {
      "List": {
        "description": "The List method takes zero or more parameters as input, and returns a PersonCollection of PersonEntity that match the input parameters.",
        "rpc_name": "ListPersons",
        "data": {"request": null, "response": "person.PersonCollection"},
        "query": {
          "q": {
            "description": "Query term to search a person",
            "type": "string",
            "meta": {"label": "Search", "hint": ""},
            "__proto": {"type": "string"}
          }
        },
        "deeplink": {
          "description": "Describe_the_query_params_if_you_have",
          "rel": "list",
          "href": "/api/persons",
          "method": "GET"
        }
      },
      "Create": {
        "description": "Creates a new Person",
        "rpc_name": "CreatePerson",
        "data": {"request": "person.Person", "response": "person.PersonEntity"},
        "query": {},
        "deeplink": {"rel": "create", "href": "/api/persons", "method": "POST"}
      },
      "Get": {
        "description": "The Get method takes zero or more parameters, and returns a PersonEntity which contains a Person",
        "rpc_name": "GetPerson",
        "data": {"request": null, "response": "person.PersonEntity"},
        "query": {},
        "deeplink": {"rel": "self", "href": "/api/persons/{prs}", "method": "GET"}
      },
      "Update": {
        "description": "Updates a Person, partial updates are supported",
        "rpc_name": "UpdatePerson",
        "data": {"request": "person.Person", "response": "person.PersonEntity"},
        "query": {},
        "deeplink": {"rel": "update", "href": "/api/persons/{prs}", "method": "PATCH"}
      },
      "Delete": {
        "description": "Delete a Person",
        "rpc_name": "DeletePerson",
        "data": {"request": "protobuf.Empty", "response": "protobuf.Empty"},
        "query": {},
        "deeplink": {"rel": "delete", "href": "/api/persons/{prs}", "method": "DELETE"}
      }
    }
  },
  "tree_service": {
    "name": "tree_service",
    "description": "service specs for the tree api",
    "version": "0.0.1",
    "lifecycle": {"deprecated": false, "info": "This version is still valid"},
    "__proto": {
      "package": "tree",
      "imports": ["tree.proto", "tree_entity.proto", "tree_collection.proto", "protobuf/empty.proto"]
    },
    "services": {
      "List": {
        "description": "The List method takes zero or more parameters as input, and returns a TreeCollection of TreeEntity that match the input parameters.",
        "rpc_name": "ListTrees",
        "data": {"request": null, "response": "tree.TreeCollection"},
        "query": {
          "q": {
            "description": "Query term to search a tree",
            "type": "string",
            "meta": {"label": "Search", "hint": ""},
            "__proto": {"type": "string"}
          }
        },
        "deeplink": {
          "description": "Describe_the_query_params_if_you_have",
          "rel": "list",
          "href": "/api/trees",
          "method": "GET"
        }
      },
      "Create": {
        "description": "Creates a new Tree",
        "rpc_name": "CreateTree",
        "data": {"request": "tree.Tree", "response": "tree.TreeEntity"},
        "query": {},
        "deeplink": {"rel": "create", "href": "/api/trees", "method": "POST"}
      },
      "Get": {
        "description": "The Get method takes zero or more parameters, and returns a TreeEntity which contains a Tree",
        "rpc_name": "GetTree",
        "data": {"request": null, "response": "tree.TreeEntity"},
        "query": {},
        "deeplink": {"rel": "self", "href": "/api/trees/{tre}", "method": "GET"}
      },
      "Update": {
        "description": "Updates a Tree, partial updates are supported",
        "rpc_name": "UpdateTree",
        "data": {"request": "tree.Tree", "response": "tree.TreeEntity"},
        "query": {},
        "deeplink": {"rel": "update", "href": "/api/trees/{tre}", "method": "PATCH"}
      },
      "Delete": {
        "description": "Delete a Tree",
        "rpc_name": "DeleteTree",
        "data": {"request": "protobuf.Empty", "response": "protobuf.Empty"},
        "query": {},
        "deeplink": {"rel": "delete", "href": "/api/trees/{tre}", "method": "DELETE"}
      }
    }
  },
  "project_members_service": {
    "name": "project_members_service",
    "description": "The members of a project",
    "version": "1.0.0",
    "lifecycle": {"deprecated": false, "info": "This version is still valid"},
    "__proto": {
      "package": "projectmember",
      "imports": ["person/person_entity.proto", "person/person_collection.proto", "furo/meta.proto", "furo/link.proto", "protobuf/empty.proto"]
    },
    "services": {
      "Unsubscribe": {
        "description": "Custom method to unsubscribe a member, complete PersonEntity is expected",
        "data": {"request": "person.PersonEntity", "response": "person.PersonCollection"},
        "query": {},
        "deeplink": {
          "description": "{prs} stands for person",
          "rel": "list",
          "href": "/api/members/{prs}:unsubscribe",
          "method": "POST"
        }
      },
      "List": {
        "description": "Get a collection with PersonEntities",
        "data": {"request": null, "response": "person.PersonCollection"},
        "query": {
          "q": {
            "description": "Query term to search a member",
            "type": "string",
            "meta": {"label": "Search", "hint": ""},
            "__proto": {"type": "string"}
          }
        },
        "deeplink": {"rel": "list", "href": "/api/members", "method": "GET"}
      }
    }
  },
  "task_service": {
    "name": "task_service",
    "description": "service specs for the task api",
    "version": "0.0.1",
    "lifecycle": {"deprecated": false, "info": "This version is still valid"},
    "__proto": {
      "package": "task",
      "imports": ["task.proto", "task_entity.proto", "task_collection.proto", "protobuf/empty.proto"]
    },
    "services": {
      "List": {
        "description": "The List method takes zero or more parameters as input, and returns a TaskCollection of TaskEntity that match the input parameters.",
        "rpc_name": "ListTasks",
        "data": {"request": null, "response": "task.TaskCollection"},
        "query": {
          "q": {
            "description": "Query term to search a task",
            "type": "string",
            "meta": {"label": "Search", "hint": ""},
            "__proto": {"type": "string"}
          }
        },
        "deeplink": {
          "description": "Describe_the_query_params_if_you_have",
          "rel": "list",
          "href": "/api/tasks",
          "method": "GET"
        }
      },
      "Create": {
        "description": "Creates a new Task",
        "rpc_name": "CreateTask",
        "data": {"request": "task.Task", "response": "task.TaskEntity"},
        "query": {},
        "deeplink": {"rel": "create", "href": "/api/tasks", "method": "POST"}
      },
      "Get": {
        "description": "The Get method takes zero or more parameters, and returns a TaskEntity which contains a Task",
        "rpc_name": "GetTask",
        "data": {"request": null, "response": "task.TaskEntity"},
        "query": {},
        "deeplink": {"rel": "self", "href": "/api/tasks/{var}", "method": "GET"}
      },
      "Update": {
        "description": "Updates a Task, partial updates are supported",
        "rpc_name": "UpdateTask",
        "data": {"request": "task.Task", "response": "task.TaskEntity"},
        "query": {},
        "deeplink": {"rel": "update", "href": "/api/tasks/{var}", "method": "PATCH"}
      },
      "Delete": {
        "description": "Delete a Task",
        "rpc_name": "DeleteTask",
        "data": {"request": "protobuf.Empty", "response": "protobuf.Empty"},
        "query": {},
        "deeplink": {"rel": "delete", "href": "/api/tasks/{var}", "method": "DELETE"}
      }
    }
  }
}
export const Types = {
  "tree.Tree": {
    "name": "tree",
    "type": "Tree",
    "description": "Singletonresource of the navigationtree",
    "__proto": {"package": "tree", "imports": ["treeitem.proto"]},
    "fields": {
      "display_name": {
        "description": "String representation of the node",
        "type": "string",
        "meta": {"readonly": true, "tree-searcb-index": true},
        "__proto": {"number": 1}
      },
      "id": {"description": "Id of the node", "type": "string", "__proto": {"number": 2}},
      "subtitle": {
        "description": "subtitle of the node",
        "type": "string",
        "meta": {"tree-searcb-index": true},
        "__proto": {"number": 3}
      },
      "description": {
        "description": "description of the node",
        "meta": {"tree-searcb-index": true},
        "type": "string",
        "__proto": {"number": 4}
      },
      "panel": {
        "description": "Indicator which panel type is loaded",
        "type": "string",
        "meta": {"readonly": true, "tree-searcb-index": false},
        "__proto": {"number": 5}
      },
      "icon": {"description": "icon of the node", "type": "string", "__proto": {"number": 6}},
      "key_words": {
        "description": "key words of the node",
        "meta": {"tree-searcb-index": true},
        "type": "string",
        "__proto": {"number": 7}
      },
      "has_error": {"description": "if node has error", "type": "bool", "__proto": {"number": 8}},
      "open": {"description": "node open or not", "type": "bool", "__proto": {"number": 9}},
      "root": {"description": "Rootnode of the tree", "type": "tree.Treeitem", "meta": {}, "__proto": {"number": 10}}
    }
  },
  "tree.TreeEntity": {
    "name": "tree_entity",
    "type": "TreeEntity",
    "description": "TreeEntity with Tree",
    "__proto": {"package": "tree", "imports": ["tree.proto", "furo/meta.proto", "furo/link.proto"]},
    "fields": {
      "data": {"description": "contains a tree.Tree", "type": "tree.Tree", "__proto": {"number": 1}},
      "links": {
        "description": "Hateoas links",
        "type": "furo.Link",
        "meta": {"repeated": true},
        "__proto": {"number": 2}
      },
      "meta": {"description": "Meta for the response", "type": "furo.Meta", "__proto": {"number": 3}}
    }
  },
  "task.TaskEntity": {
    "name": "task_entity",
    "type": "TaskEntity",
    "description": "TaskEntity with Task",
    "__proto": {"package": "task", "imports": ["task.proto", "furo/meta.proto", "furo/link.proto"]},
    "fields": {
      "data": {"description": "contains a task.Task", "type": "task.Task", "__proto": {"number": 1}},
      "links": {
        "description": "Hateoas links",
        "type": "furo.Link",
        "meta": {"repeated": true},
        "__proto": {"number": 2}
      },
      "meta": {"description": "Meta for the response", "type": "furo.Meta", "__proto": {"number": 3}}
    }
  },
  "person.Person": {
    "name": "person",
    "type": "Person",
    "description": "Person message type",
    "__proto": {"package": "person", "imports": []},
    "fields": {
      "display_name": {
        "description": "Localized String representation of a person",
        "type": "string",
        "meta": {"label": "Person", "default": "", "hint": "", "readonly": true},
        "constraints": {},
        "options": [],
        "__proto": {"number": 1}
      },
      "name": {
        "description": "Name of a person",
        "type": "string",
        "meta": {"label": "Name", "default": "", "hint": ""},
        "constraints": {},
        "options": [],
        "__proto": {"number": 2}
      },
      "first_name": {
        "description": "First name of a person",
        "type": "string",
        "meta": {"label": "First name", "default": "", "hint": ""},
        "constraints": {},
        "options": [],
        "__proto": {"number": 3}
      },
      "phone_nr": {
        "description": "Internal phone number",
        "type": "string",
        "meta": {"label": "Phone No", "default": "", "hint": ""},
        "constraints": {},
        "options": [],
        "__proto": {"number": 4}
      },
      "skills": {
        "description": "List of main skills of a person",
        "type": "string",
        "meta": {"label": "Skills", "default": "", "hint": "", "repeated": true},
        "constraints": {},
        "options": [],
        "__proto": {"number": 5}
      }
    }
  },
  "person.PersonCollection": {
    "name": "person_collection",
    "type": "PersonCollection",
    "description": "PersonCollection with repeated PersonEntity",
    "__proto": {"package": "person", "imports": ["person_entity.proto", "furo/meta.proto", "furo/link.proto"]},
    "fields": {
      "meta": {"description": "Meta for the response", "type": "furo.Meta", "__proto": {"number": 2}},
      "links": {
        "description": "Hateoas links",
        "type": "furo.Link",
        "meta": {"repeated": true},
        "__proto": {"number": 3}
      },
      "entities": {
        "description": "Contains a person.PersonEntity repeated",
        "type": "person.PersonEntity",
        "meta": {"repeated": true},
        "__proto": {"number": 4}
      }
    }
  },
  "tree.TreeCollection": {
    "name": "tree_collection",
    "type": "TreeCollection",
    "description": "TreeCollection with repeated TreeEntity",
    "__proto": {"package": "tree", "imports": ["tree_entity.proto", "furo/meta.proto", "furo/link.proto"]},
    "fields": {
      "meta": {"description": "Meta for the response", "type": "furo.Meta", "__proto": {"number": 2}},
      "links": {
        "description": "Hateoas links",
        "type": "furo.Link",
        "meta": {"repeated": true},
        "__proto": {"number": 3}
      },
      "entities": {
        "description": "Contains a tree.TreeEntity repeated",
        "type": "tree.TreeEntity",
        "meta": {"repeated": true},
        "__proto": {"number": 4}
      }
    }
  },
  "task.TaskCollection": {
    "name": "task_collection",
    "type": "TaskCollection",
    "description": "TaskCollection with repeated TaskEntity",
    "__proto": {"package": "task", "imports": ["task_entity.proto", "furo/meta.proto", "furo/link.proto"]},
    "fields": {
      "meta": {"description": "Meta for the response", "type": "furo.Meta", "__proto": {"number": 2}},
      "links": {
        "description": "Hateoas links",
        "type": "furo.Link",
        "meta": {"repeated": true},
        "__proto": {"number": 3}
      },
      "entities": {
        "description": "Contains a task.TaskEntity repeated",
        "type": "task.TaskEntity",
        "meta": {"repeated": true},
        "__proto": {"number": 4}
      }
    }
  },
  "tree.Treeitem": {
    "name": "treeitem",
    "type": "Treeitem",
    "description": "Item of the navigationtree",
    "__proto": {"package": "tree", "imports": ["furo/link.proto"]},
    "fields": {
      "display_name": {
        "description": "String representation of the node",
        "type": "string",
        "meta": {"readonly": true, "tree-searcb-index": true},
        "__proto": {"number": 1}
      },
      "id": {"description": "Id of the node", "type": "string", "__proto": {"number": 2}},
      "subtitle": {
        "description": "subtitle of the node",
        "type": "string",
        "meta": {"tree-searcb-index": true},
        "__proto": {"number": 3}
      },
      "description": {
        "description": "description of the node",
        "meta": {"tree-searcb-index": true},
        "type": "string",
        "__proto": {"number": 4}
      },
      "icon": {"description": "icon of the node", "type": "string", "__proto": {"number": 5}},
      "key_words": {
        "description": "key words of the node",
        "meta": {"tree-searcb-index": true},
        "type": "string",
        "__proto": {"number": 6}
      },
      "has_error": {"description": "if node has error", "type": "bool", "__proto": {"number": 7}},
      "open": {"description": "node open or not", "type": "bool", "__proto": {"number": 8}},
      "link": {"description": "Deeplink information of this node", "type": "furo.Link", "__proto": {"number": 9}},
      "children": {
        "description": "Children of this node",
        "type": "tree.Treeitem",
        "meta": {"repeated": true},
        "__proto": {"number": 10}
      }
    }
  },
  "task.Task": {
    "name": "task",
    "type": "Task",
    "description": "Task data description",
    "__proto": {"package": "task", "imports": ["person/person.proto", "project/project_collection.proto"]},
    "fields": {
      "display_name": {
        "description": "Localized String representation of a task",
        "type": "project.ProjectCollection",
        "meta": {"label": "Task", "default": "", "hint": "", "readonly": true},
        "constraints": {},
        "options": [],
        "__proto": {"number": 1}
      },
      "description": {
        "description": "Short task description",
        "type": "string",
        "meta": {"label": "Description", "default": "", "hint": ""},
        "constraints": {},
        "options": [],
        "__proto": {"number": 2}
      },
      "estimated_time": {
        "description": "Estimated time in days",
        "type": "int",
        "meta": {"label": "Est. days", "default": "", "hint": ""},
        "constraints": {},
        "options": [],
        "__proto": {"number": 3, "type": "int32"}
      },
      "owner": {
        "description": "Owner of a task",
        "type": "person.Person",
        "meta": {"label": "Owner", "default": "", "hint": ""},
        "constraints": {},
        "options": [],
        "__proto": {"number": 4}
      },
      "subtasks": {
        "description": "List of subtasks",
        "type": "task.Task",
        "meta": {"label": "Subtask", "default": "", "hint": "", "required": true},
        "constraints": {},
        "options": [],
        "__proto": {"number": 5}
      }
    }
  },
  "project.ProjectCollection": {
    "name": "project_collection",
    "type": "ProjectCollection",
    "description": "ProjectCollection with repeated ProjectEntity",
    "__proto": {"package": "project", "imports": ["project_entity.proto", "furo/meta.proto", "furo/link.proto"]},
    "fields": {
      "meta": {"description": "Meta for the response", "type": "furo.Meta", "__proto": {"number": 2}},
      "links": {
        "description": "Hateoas links",
        "type": "furo.Link",
        "meta": {"repeated": true},
        "__proto": {"number": 3}
      },
      "entities": {
        "description": "Contains a project.ProjectEntity repeated",
        "type": "project.ProjectEntity",
        "meta": {"repeated": true},
        "__proto": {"number": 4}
      }
    }
  },
  "project.ProjectEntity": {
    "name": "project_entity",
    "type": "ProjectEntity",
    "description": "ProjectEntity with Project",
    "__proto": {"package": "project", "imports": ["project.proto", "furo/meta.proto", "furo/link.proto"]},
    "fields": {
      "data": {
        "description": "contains a project.Project",
        "type": "project.Project",
        "__proto": {"number": 1}
      },
      "links": {
        "description": "Hateoas links",
        "type": "furo.Link",
        "meta": {"repeated": true},
        "__proto": {"number": 2}
      },
      "meta": {"description": "Meta for the response", "type": "furo.Meta", "__proto": {"number": 3}}
    }
  },
  "person.PersonEntity": {
    "name": "person_entity",
    "type": "PersonEntity",
    "description": "PersonEntity with Person",
    "__proto": {"package": "person", "imports": ["person.proto", "furo/meta.proto", "furo/link.proto"]},
    "fields": {
      "data": {"description": "contains a person.Person", "type": "person.Person", "__proto": {"number": 1}},
      "links": {
        "description": "Hateoas links",
        "type": "furo.Link",
        "meta": {"repeated": true},
        "__proto": {"number": 2}
      },
      "meta": {"description": "Meta for the response", "type": "furo.Meta", "__proto": {"number": 3}}
    }
  },
  "project.Project": {
    "name": "project",
    "type": "Project",
    "description": "Project description",
    "__proto": {"package": "project", "imports": ["google/money.proto", "google/date.proto", "person/person.proto"]},
    "fields": {
      "display_name": {
        "description": "Localized String representation of a project",
        "type": "string",
        "meta": {"label": "Project", "default": "", "hint": "", "readonly": true},
        "constraints": {},
        "options": [],
        "__proto": {"number": 1}
      },
      "start": {
        "description": "Start date of the project",
        "type": "google.Date",
        "meta": {"label": "Project start", "default": "", "hint": ""},
        "constraints": {},
        "options": [],
        "__proto": {"number": 2}
      },
      "end": {
        "description": "Prospective end date of the project",
        "type": "google.Date",
        "meta": {"label": "Project end", "default": "", "hint": ""},
        "constraints": {},
        "options": [],
        "__proto": {"number": 3}
      },
      "description": {
        "description": "Short project description",
        "type": "string",
        "meta": {"label": "Description", "default": "", "hint": ""},
        "constraints": {},
        "options": [],
        "__proto": {"number": 4}
      },
      "members": {
        "description": "List of project members",
        "type": "person.Person",
        "meta": {"label": "Project members", "default": "", "hint": "", "repeated": true},
        "constraints": {},
        "options": [],
        "__proto": {"number": 5}
      },
      "cost_limit": {
        "description": "Project cost limit",
        "type": "google.Money",
        "meta": {"label": "Cost limit", "default": "", "hint": "", "required": true},
        "constraints": {"max": 25000},
        "options": [],
        "__proto": {"number": 6}
      }
    }
  },
  "google.Money": {
    "name": "money",
    "type": "Money",
    "description": "Represents an amount of money with its currency type. https://github.com/googleapis/googleapis/blob/master/google/money.proto",
    "__proto": {"package": "google", "imports": []},
    "fields": {
      "display_name": {
        "description": "String representation of money entity",
        "type": "string",
        "meta": {"default": "", "hint": "", "readonly": true},
        "constraints": {},
        "options": [],
        "__proto": {"number": 1}
      },
      "currency_code": {
        "description": "The 3-letter currency code defined in ISO 4217.",
        "type": "string",
        "meta": {"label": "Währungscode", "default": "", "hint": ""},
        "constraints": {},
        "options": [],
        "__proto": {"number": 2}
      },
      "units": {
        "description": "The whole units of the amount.",
        "type": "int",
        "meta": {"label": "Ganzahliger Währungsbetrag", "default": "", "hint": ""},
        "constraints": {},
        "options": [],
        "__proto": {"number": 3, "type": "int64"}
      },
      "nanos": {
        "description": "Number of nano (10^-9) units of the amount. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.",
        "type": "int",
        "meta": {"label": "Nanos", "default": "", "hint": ""},
        "constraints": {},
        "options": [],
        "__proto": {"number": 4, "type": "int64"}
      }
    }
  },
  "furo.Fieldmeta": {
    "name": "fieldmeta",
    "type": "Fieldmeta",
    "description": "meta",
    "__proto": {"package": "furo", "imports": []},
    "fields": {"label": {"type": "string", "description": "meta information of a field", "__proto": {"number": 1}}}
  },
  "protobuf.Empty": {
    "name": "empty",
    "type": "Empty",
    "description": "https://github.com/protocolbuffers/protobuf/blob/master/src/protobuf/empty.proto",
    "__proto": {"package": "protobuf", "imports": []},
    "fields": {}
  },
  "furo.Link": {
    "name": "link",
    "type": "Link",
    "description": "link",
    "__proto": {"package": "furo", "imports": []},
    "fields": {
      "rel": {"description": "the relationship", "type": "string", "__proto": {"number": 1}},
      "method": {"description": "method of curl", "type": "string", "__proto": {"number": 2}},
      "href": {"description": "link", "type": "string", "__proto": {"number": 3}},
      "type": {"description": "mime type", "type": "string", "__proto": {"number": 4}}
    }
  },
  "furo.Metafield": {
    "name": "metafield",
    "type": "Metafield",
    "description": "fields of meta info",
    "__proto": {"package": "furo", "imports": ["fieldconstraint.proto", "fieldmeta.proto"]},
    "fields": {
      "meta": {
        "description": "meta information of a field",
        "type": "furo.Fieldmeta",
        "__proto": {"number": 3}
      },
      "constraints": {
        "description": "constraints of a field",
        "type": "furo.Fieldconstraint",
        "__proto": {"number": 4, "repeated": true}
      }
    }
  },
  "furo.Reference": {
    "name": "reference",
    "type": "Reference",
    "description": "reference",
    "__proto": {"package": "furo", "imports": []},
    "fields": {
      "display_name": {
        "description": "String representation of the reference",
        "type": "string",
        "meta": {"readonly": true},
        "constraints": {},
        "__proto": {"number": 1}
      },
      "id": {"description": "Id of the reference", "type": "string", "__proto": {"number": 2}},
      "rel": {"description": "the relationship", "type": "string", "__proto": {"number": 3}},
      "method": {
        "description": "method of curl GET, POST, PUT, PATCH, DELETE",
        "type": "string",
        "__proto": {"number": 4}
      },
      "href": {"description": "link", "type": "string", "__proto": {"number": 5}},
      "type": {"description": "mime type", "type": "string", "__proto": {"number": 6}}
    }
  },
  "furo.Fieldconstraint": {
    "name": "fieldconstraint",
    "type": "Fieldconstraint",
    "description": "constrains of fields",
    "__proto": {"package": "furo", "imports": []},
    "fields": {
      "constraint": {
        "description": "constrain of a field",
        "type": "keyValuePair",
        "__proto": {"number": 1, "map_from": "string", "map_to": "string"}
      }
    }
  },
  "furo.Meta": {
    "name": "meta",
    "type": "Meta",
    "description": "meta info",
    "__proto": {"package": "furo", "imports": ["metafield.proto"]},
    "fields": {
      "meta": {
        "description": "fields of meta info",
        "type": "keyValuePair",
        "__proto": {"number": 1, "map_from": "string", "map_to": "furo.Metafield"}
      }
    }
  },
  "google.protobuf.Any": {
    "name": "any",
    "type": "Any",
    "description": "Any` contains an arbitrary serialized protocol buffer message along with a\n// URL that describes the type of the serialized message. https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/any.proto",
    "__proto": {
      "package": "google.protobuf",
      "options": {
        "csharp_namespace": "Google.Protobuf.WellKnownTypes",
        "go_package": "github.com/golang/protobuf/ptypes/any",
        "java_package": "com.google.protobuf",
        "java_outer_classname": "AnyProto",
        "java_multiple_files": true,
        "objc_class_prefix": "GPB"
      },
      "imports": []
    },
    "fields": {
      "type_url": {"type": "string", "__proto": {"number": 1}},
      "value": {"type": "ArrayBuffer", "__proto": {"number": 2, "type": "bytes"}}
    }
  },
  "google.Date": {
    "name": "date",
    "type": "Date",
    "description": "Date, https://github.com/googleapis/googleapis/blob/master/google/date.proto ",
    "__proto": {"package": "google", "imports": []},
    "fields": {
      "display_name": {
        "description": "Localized String representation of date",
        "type": "string",
        "meta": {"label": "Datum", "default": "", "hint": "", "readonly": true},
        "constraints": {},
        "options": [],
        "__proto": {"number": 4}
      },
      "year": {
        "description": "Year of date. Must be from 1 to 9999, or 0 if specifying a date without a year.",
        "type": "int",
        "meta": {"default": "", "hint": ""},
        "constraints": {},
        "options": [],
        "__proto": {"number": 1, "type": "int32"}
      },
      "month": {
        "description": "Month of year. Must be from 1 to 12, or 0 if specifying a year without a month and day.",
        "type": "int",
        "meta": {"default": "", "hint": ""},
        "constraints": {},
        "options": [],
        "__proto": {"number": 2, "type": "int32"}
      },
      "day": {
        "description": "Day of month. Must be from 1 to 31 and valid for the year and month, or 0. if specifying a year by itself or a year and month where the day is not significant.",
        "type": "int",
        "meta": {"default": "", "hint": ""},
        "constraints": {},
        "options": [],
        "__proto": {"number": 3, "type": "int32"}
      }
    }
  }
}