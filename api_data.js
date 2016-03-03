define({ "api": [
  {
    "type": "post",
    "url": "/admin/login",
    "title": "Логин админа",
    "name": "AdminLogin",
    "group": "AdminAuth",
    "description": "<p>Админов нельзя регистрировать. Можно только логиниться с данными указанными в сорцах (до смены пароля).</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>jwt, use it in Authorization header</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/admin/auth.js",
    "groupTitle": "AdminAuth",
    "error": {
      "fields": {
        "(401": [
          {
            "group": "(401",
            "optional": false,
            "field": "NotAuthorized",
            "description": "<p>неверные логин или пароль</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"error\": \"Not Authorized\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/admin/auth/regtoken",
    "title": "Токен регистрации",
    "name": "RegistrationToken",
    "group": "AdminAuth",
    "description": "<p>Отдает токен, который используется при регистрации юзеров. Генерит новый токен каждый день</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Админ будет давать этот токен юзерам для регистрации</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "registration token",
          "content": "{\n  \"token\": \"1234567890abcdef\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/admin/auth.js",
    "groupTitle": "AdminAuth",
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>ошибка в запросе</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Authorized\n{\n  \"error\": \"Provide id\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/admin/users",
    "title": "Список бариста",
    "name": "UsersList",
    "group": "Users",
    "description": "<p>не выдает админов</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>список юзеров</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "users.id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.login",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.role",
            "description": "<p>по умолчанию <code>barista</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "user list:",
          "content": "[{\n  \"id\": 1,\n  \"login\": \"vlad\",\n  \"name\": \"Влад\",\n  \"role\": \"barista\"\n}, {\n  \"id\": 2,\n  \"login\": \"anton\",\n  \"name\": \"Антон\",\n  \"role\": \"barista\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/admin/users.js",
    "groupTitle": "Users",
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>ошибка в запросе</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Authorized\n{\n  \"error\": \"Provide id\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/admin/users/:id",
    "title": "Отдельный пользователь",
    "name": "UsersShow",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/admin/users.js",
    "groupTitle": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.login",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.role",
            "description": "<p>по умолчанию <code>barista</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "user object:",
          "content": "{\n  \"id\": 1,\n  \"login\": \"vlad\",\n  \"name\": \"Влад\",\n  \"role\": \"barista\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>ошибка в запросе</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Authorized\n{\n  \"error\": \"Provide id\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/admin/users/:id",
    "title": "Обновление пользователя",
    "name": "UsersShow",
    "group": "Users",
    "description": "<p>Пока, думаю, админу у юзеров нечего обновлять, но метод пускай будет</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>объект, содержащий обновляемые поля</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user.name",
            "description": "<p>поле, например, <code>name</code></p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/admin/users.js",
    "groupTitle": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.login",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.role",
            "description": "<p>по умолчанию <code>barista</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "user object:",
          "content": "{\n  \"id\": 1,\n  \"login\": \"vlad\",\n  \"name\": \"Влад\",\n  \"role\": \"barista\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>ошибка в запросе</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Authorized\n{\n  \"error\": \"Provide id\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });
