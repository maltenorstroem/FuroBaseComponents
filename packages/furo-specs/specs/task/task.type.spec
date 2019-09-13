{
  "name": "task",
  "type": "Task",
  "description": "Task data description",
  "__proto": {
    "package": "task",
    "imports": [
      "furo/reference.proto"
    ],
    "targetfile": "task.proto"
  },
  "fields": {
    "id": {
      "description": "Identity of a task",
      "type": "string",
      "meta": {
        "label": "Id",
        "default": "",
        "hint": "",
        "readonly": true
      },
      "constraints": {},
      "__proto": {
        "number": 1
      }
    },
    "display_name": {
      "description": "Localized String representation of a task",
      "type": "string",
      "meta": {
        "label": "task.display_name.label",
        "default": "",
        "hint": "task.display_name.hint",
        "readonly": true
      },
      "constraints": {},
      "__proto": {
        "number": 2
      }
    },
    "description": {
      "description": "Short task description",
      "type": "string",
      "meta": {
        "label": "task.desc.label",
        "default": "",
        "hint": ""
      },
      "constraints": {
        "required": true,
        "max": {
          "value": 180,
          "message": "task.desc.maxlength"
        }
      },
      "__proto": {
        "number": 3
      }
    },
    "estimated_time": {
      "description": "Estimated time in days",
      "type": "int",
      "meta": {
        "label": "Est. days",
        "default": "",
        "hint": ""
      },
      "constraints": {},
      "__proto": {
        "number": 4,
        "type": "int32"
      }
    },
    "owner": {
      "description": "Owner of a task",
      "type": "furo.Reference",
      "meta": {
        "label": "Owner",
        "default": {
          "link":{
            "rel": "list",
            "href": "/mockdata/persons/list.json",
            "method": "Get",
            "type": "person.Person"
          }
        },
        "hint": ""
      },
      "constraints": {},
      "__proto": {
        "number": 5
      }
    },
    "subtasks": {
      "description": "List of subtasks",
      "type": "task.Task",
      "meta": {
        "label": "Subtask",
        "default": "",
        "hint": "",
        "repeated": true
      },
      "constraints": {},
      "__proto": {
        "number": 6
      }
    }
  }
}
