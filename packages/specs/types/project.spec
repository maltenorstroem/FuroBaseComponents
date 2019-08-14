{
  "name": "Project",
  "type": "Project",
  "description": "Project description",
  "__proto": {
    "package": "furo.demo",
    "imports": [
      "google/type/money.proto",
      "google/type/date.proto",
      "person.proto"
    ]
  },
  "fields": {
    "display_name": {
      "description": "Localized String representation of a project",
      "type": "string",
      "meta": {
        "label": "Project",
        "default": "",
        "hint": "",
        "readonly": true
      },
      "constraints": {},
      "options": [],
      "__proto": {
        "number": 1
      }
    },
    "start": {
      "description": "Start date of the project",
      "type": "google.type.Date",
      "meta": {
        "label": "Project start",
        "default": "",
        "hint": ""
      },
      "constraints": {},
      "options": [],
      "__proto": {
        "number": 2,
        "type": "google.type.Date"
      }
    },
    "end": {
      "description": "Prospective end date of the project",
      "type": "google.type.Date",
      "meta": {
        "label": "Project end",
        "default": "",
        "hint": ""
      },
      "constraints": {},
      "options": [],
      "__proto": {
        "number": 3,
        "type": "google.type.Date"
      }
    },
    "description": {
      "description": "Short project description",
      "type": "string",
      "meta": {
        "label": "Description",
        "default": "",
        "hint": ""
      },
      "constraints": {},
      "options": [],
      "__proto": {
        "number": 4
      }
    },
    "members": {
      "description": "List of project members",
      "type": "Person",
      "meta": {
        "label": "Project members",
        "default": "",
        "hint": "",
        "repeated": true
      },
      "constraints": {},
      "options": [],
      "__proto": {
        "number": 5,
        "type": "Person"
      }
    },
    "cost_limit": {
      "description": "Project cost limit",
      "type": "google.type.Money",
      "meta": {
        "label": "Cost limit",
        "default": "",
        "hint": "",
        "required": true
      },
      "constraints": {
        "max": 25000
      },
      "options": [],
      "__proto": {
        "number": 6,
        "type": "google.type.Money"
      }
    }
  }
}
