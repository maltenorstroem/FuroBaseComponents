{
  "theme": "ActionBaseTheme",
  "class_name": "taskTaskUpdateAction",
  "component_name": "task-task-update-action",
  "description": "service specs for the task api",
  "source": "./ui_specs/actions/task.task.update.action.spec",
  "service_name": "TaskService",
  "response_type": "task.TaskEntity",
  "imports": [],
  "items": [
    {
      "label": "save",
      "rel": "update",
      "icon": null,
      "component": "furo-button",
      "onclick": "-^update-req",
      "attrs": [
        "primary",
        "unelevated"
      ]
    },
    {
      "label": "reload",
      "rel": "self",
      "icon": null,
      "component": "furo-button",
      "onclick": "-^self-req",
      "attrs": [
        "unelevated"
      ]
    },
    {
      "component": "furo-empty-spacer"
    },
    {
      "label": "cancel",
      "rel": "reset",
      "icon": null,
      "component": "furo-button",
      "onclick": "-^reset-req",
      "attrs": [
        "unelevated"
      ]
    },
    {
      "label": "delete",
      "rel": "delete",
      "icon": "delete",
      "component": "furo-button",
      "onclick": "-^delete-req",
      "attrs": [
        "unelevated",
        "danger"
      ]
    }
  ],
  "request_type": "task.Task"
}