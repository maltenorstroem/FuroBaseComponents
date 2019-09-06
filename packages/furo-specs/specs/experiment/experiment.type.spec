{
  "name": "experiment",
  "type": "Experiment",
  "description": "experiment spec for testing",
  "__proto": {
    "package": "experiment",
    "imports": [
      "google/protobuf/any.proto",
      "furo/property.proto"
    ],
    "targetfile": "experiment.proto"
  },
  "fields": {
    "id": {
      "description": "Identity of a experiment",
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
      "description": "Localized String representation of a experiment",
      "type": "string",
      "meta": {
        "label": "experiment",
        "default": "",
        "hint": "",
        "readonly": true
      },
      "constraints": {},
      "__proto": {
        "number": 2
      }
    },
    "description": {
      "description": "Short experiment description",
      "type": "string",
      "meta": {
        "label": "Description",
        "default": "",
        "hint": ""
      },
      "constraints": {},
      "__proto": {
        "number": 3
      }
    },
    "furo_data_checkbox_input": {
      "description": "field for furo_data_checkbox_input for testing",
      "type": "bool",
      "meta": {
        "label": "checkbox_input",
        "default": "",
        "hint": "Hint",
        "readonly": false
      },
      "constraints": {},
      "__proto": {
        "number": 4
      }
    },
    "furo_data_text_input": {
      "description": "field for furo_data_text_input for testing",
      "type": "string",
      "meta": {
        "label": "text_input",
        "hint": "hint",
        "readonly": false
      },
      "constraints": {
        "required": {
          "value": true,
          "message": "This value must be set"
        },
        "min": {
          "value": 3,
          "message": "at least 3 characters"
        },
        "max": {
          "value": 15,
          "message": "15 characters maximum"
        },
        "pattern": {
          "value": "a.*",
          "message": "must start with a"
        }
      },
      "__proto": {
        "number": 5
      }
    },
    "furo_data_textarea_input": {
      "description": "field for furo_data_textarea_input for testing",
      "type": "string",
      "meta": {
        "label": "textarea_input",
        "hint": "hint",
        "readonly": false
      },
      "constraints": {},
      "__proto": {
        "number": 6
      }
    },
    "furo_data_time_input": {
      "description": "field for furo-data-time-input for testing",
      "type": "string",
      "meta": {
        "label": "time-input",
        "hint": "hint",
        "readonly": false
      },
      "constraints": {
        "min": {
          "value": "05:00",
          "message": "From 05:00"
        },
        "max": {
          "value": "19:00",
          "message": "to 19:00"
        },
        "step": {
          "value":"5",
          "message": "step 5"
        }
      },
      "__proto": {
        "number": 7
      }
    },
    "furo_data_range_input": {
      "description": "field for furo-data-range-input for testing",
      "type": "string",
      "meta": {
        "label": "range-input",
        "hint": "hint",
        "readonly": false
      },
      "constraints": {
        "min": {
          "value": 20,
          "message": "From 20"
        },
        "max": {
          "value": 50,
          "message": "to 50"
        },
        "step": {
          "value": "2.5",
          "message":"step 2.5"
        }

      },
      "__proto": {
        "number": 8
      }
    },
    "furo_data_number_input": {
      "description": "field for furo-data-number-input for testing",
      "type": "float",
      "meta": {
        "label": "number-input",
        "hint": "hint",
        "readonly": false
      },
      "constraints": {
        "min": {
          "value": 1,
          "message": "from 1"
        },
        "max": {
          "value": 555,
          "message": "to 555"
        },
        "step": {
          "value": "3",
          "message":"step 3"
        }
      },
      "__proto": {
        "number": 9
      }
    },
    "furo_data_color_input": {
      "description": "field for furo-data-color-input for testing",
      "type": "string",
      "meta": {
        "label": "color-input",
        "hint": "hint",
        "readonly": false
      },
      "constraints": {},
      "__proto": {
        "number": 10
      }
    },
    "furo_data_password_input": {
      "description": "field for furo-data-password-input for testing",
      "type": "string",
      "meta": {
        "label": "password-input",
        "hint": "hint",
        "readonly": false
      },
      "constraints": {
        "min": {
          "value": 6,
          "message": "min 6"
        },
        "max": {
          "value": 15,
          "message": "max 15"
        }
      },
      "__proto": {
        "number": 11
      }
    },
    "furo_data_search_input": {
      "description": "field for furo-search-input for testing",
      "type": "string",
      "meta": {
        "label": " search",
        "hint": "hint",
        "readonly": false
      },
      "constraints": {
        "min": {
          "value": 1,
          "message": "min 1"
        },
        "max": {
          "value": 15,
          "message": "max 15"
        },
        "pattern": {
          "value": "a.*",
          "message": "must start with a"
        }
      },
      "__proto": {
        "number": 12
      }
    },
    "furo_data_date_input": {
      "description": "field for furo-data-date-input for testing",
      "type": "string",
      "meta": {
        "label": "date-input",
        "hint": "hint",
        "readonly": false
      },
      "constraints": {
        "min": {
          "value": "1800-01-01",
          "message": "from 1800-01-01"
        },
        "max": {
          "value": "2099-12-31",
          "message": "to 2099-12-31"
        }
      },
      "__proto": {
        "number": 13
      }
    },
    "furo_data_bool_icon": {
      "description": "field for furo-data-bool-icon for testing",
      "type": "bool",
      "meta": {
        "label": "bool-icon input",
        "hint": "hint",
        "readonly": false
      },
      "constraints": {},
      "__proto": {
        "number": 14
      }
    },
    "the_any_type": {
      "description": "field for testing any",
      "type": "google.protobuf.Any",
      "meta": {
        "label": "can be anything",
        "hint": "hint",
        "readonly": false
      },
      "constraints": {},
      "__proto": {
        "number": 15
      }
    },
    "type_with_options": {
      "description": "field for testing static options",
      "type": "string",
      "meta": {
        "label": "String options",
        "hint": "Choose one",
        "options": {
          "list": [
            "option_1",
            "option_2",
            "option_3"
          ]
        }
      },
      "constraints": {},
      "__proto": {
        "number": 16
      }
    },
    "type_property": {
      "description": "field for testing property",
      "type": "furo.Property",
      "meta": {
        "label": "Additional fields",
        "repeated": true
      },
      "constraints": {},
      "__proto": {
        "number": 17
      }
    }
  }
}
