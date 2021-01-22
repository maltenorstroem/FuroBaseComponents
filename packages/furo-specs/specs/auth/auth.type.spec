name: auth
type: Auth
description: autogenerated
__proto:
    package: auth
    targetfile: auth.proto
    imports: []
    options: {}
fields:
    id:
        type: string
        description: Identity of Auth
        __proto:
            number: 1
            oneof: ""
        __ui: null
        meta:
            default: ""
            hint: ""
            label: Id
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    username:
        type: string
        description: The unique username, ussualy an email address
        __proto:
            number: 2
            oneof: ""
        __ui: null
        meta:
            default: ""
            hint: ""
            label: Username
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    password:
        type: string
        description: Das _neue_ Kennwort des Benutzers
        __proto:
            number: 3
            oneof: ""
        __ui: null
        meta:
            default: ""
            hint: Look under your keyboard
            label: Password
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    role:
        type: string
        description: ""
        __proto:
            number: 4
            oneof: ""
        __ui: null
        meta:
            default: ""
            hint: ""
            label: Role
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
