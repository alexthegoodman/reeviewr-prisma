# Failed applyMigration at 2019-07-06T14:23:50.780Z
## RPC Input One Line
```json
{"id":1,"jsonrpc":"2.0","method":"applyMigration","params":{"projectInfo":"","force":false,"migrationId":"20190706102329-inti","steps":[{"stepType":"CreateModel","name":"User","embedded":false},{"stepType":"CreateModel","name":"UserMeta","embedded":false},{"stepType":"CreateModel","name":"Post","embedded":false},{"stepType":"CreateModel","name":"PostMeta","embedded":false},{"stepType":"CreateModel","name":"Review","embedded":false},{"stepType":"CreateModel","name":"ReviewMeta","embedded":false},{"stepType":"CreateField","model":"User","name":"id","type":{"Base":"Int"},"arity":"required","isUnique":false,"id":{"strategy":"Auto","sequence":null}},{"stepType":"CreateField","model":"User","name":"userType","type":{"Base":"Int"},"arity":"required","isUnique":false},{"stepType":"CreateField","model":"User","name":"userEmail","type":{"Base":"String"},"arity":"required","isUnique":true},{"stepType":"CreateField","model":"User","name":"userPassword","type":{"Base":"String"},"arity":"required","isUnique":false},{"stepType":"CreateField","model":"User","name":"publicHash","type":{"Base":"String"},"arity":"required","isUnique":true},{"stepType":"CreateField","model":"User","name":"privateHash","type":{"Base":"String"},"arity":"required","isUnique":true},{"stepType":"CreateField","model":"User","name":"confirmHash","type":{"Base":"String"},"arity":"required","isUnique":true},{"stepType":"CreateField","model":"User","name":"forgotHash","type":{"Base":"String"},"arity":"required","isUnique":true},{"stepType":"CreateField","model":"User","name":"userConfirmed","type":{"Base":"Int"},"arity":"required","isUnique":false},{"stepType":"CreateField","model":"User","name":"userDeleted","type":{"Base":"Boolean"},"arity":"required","isUnique":false,"default":{"Boolean":false}},{"stepType":"CreateField","model":"User","name":"userMeta","type":{"Relation":{"to":"UserMeta","to_fields":[],"name":"UserToUserMeta","on_delete":"None"}},"arity":"list","isUnique":false},{"stepType":"CreateField","model":"User","name":"posts","type":{"Relation":{"to":"Post","to_fields":[],"name":"PostToUser","on_delete":"None"}},"arity":"list","isUnique":false},{"stepType":"CreateField","model":"User","name":"reviews","type":{"Relation":{"to":"Review","to_fields":[],"name":"ReviewToUser","on_delete":"None"}},"arity":"list","isUnique":false},{"stepType":"CreateField","model":"UserMeta","name":"id","type":{"Base":"Int"},"arity":"required","isUnique":false,"id":{"strategy":"Auto","sequence":null}},{"stepType":"CreateField","model":"UserMeta","name":"user","type":{"Relation":{"to":"User","to_fields":["id"],"name":"UserToUserMeta","on_delete":"None"}},"arity":"required","isUnique":false},{"stepType":"CreateField","model":"UserMeta","name":"metaType","type":{"Base":"String"},"arity":"required","isUnique":false},{"stepType":"CreateField","model":"UserMeta","name":"metaName","type":{"Base":"String"},"arity":"required","isUnique":false},{"stepType":"CreateField","model":"UserMeta","name":"metaValue","type":{"Base":"String"},"arity":"required","isUnique":false},{"stepType":"CreateField","model":"UserMeta","name":"metaDeleted","type":{"Base":"Boolean"},"arity":"required","isUnique":false,"default":{"Boolean":false}},{"stepType":"CreateField","model":"Post","name":"id","type":{"Base":"Int"},"arity":"required","isUnique":false,"id":{"strategy":"Auto","sequence":null}},{"stepType":"CreateField","model":"Post","name":"user","type":{"Relation":{"to":"User","to_fields":["id"],"name":"PostToUser","on_delete":"None"}},"arity":"required","isUnique":false},{"stepType":"CreateField","model":"Post","name":"itemType","type":{"Base":"String"},"arity":"required","isUnique":false},{"stepType":"CreateField","model":"Post","name":"itemStatus","type":{"Base":"String"},"arity":"required","isUnique":false},{"stepType":"CreateField","model":"Post","name":"itemUrlSegment","type":{"Base":"String"},"arity":"required","isUnique":false},{"stepType":"CreateField","model":"Post","name":"itemMimeType","type":{"Base":"String"},"arity":"required","isUnique":false},{"stepType":"CreateField","model":"Post","name":"itemName","type":{"Base":"String"},"arity":"required","isUnique":false},{"stepType":"CreateField","model":"Post","name":"itemContent","type":{"Base":"String"},"arity":"required","isUnique":false},{"stepType":"CreateField","model":"Post","name":"itemDeleted","type":{"Base":"Boolean"},"arity":"required","isUnique":false,"default":{"Boolean":false}},{"stepType":"CreateField","model":"Post","name":"itemMeta","type":{"Relation":{"to":"PostMeta","to_fields":[],"name":"PostToPostMeta","on_delete":"None"}},"arity":"list","isUnique":false},{"stepType":"CreateField","model":"Post","name":"reviews","type":{"Relation":{"to":"Review","to_fields":[],"name":"PostToReview","on_delete":"None"}},"arity":"list","isUnique":false},{"stepType":"CreateField","model":"PostMeta","name":"id","type":{"Base":"Int"},"arity":"required","isUnique":false,"id":{"strategy":"Auto","sequence":null}},{"stepType":"CreateField","model":"PostMeta","name":"post","type":{"Relation":{"to":"Post","to_fields":["id"],"name":"PostToPostMeta","on_delete":"None"}},"arity":"required","isUnique":false},{"stepType":"CreateField","model":"PostMeta","name":"metaType","type":{"Base":"String"},"arity":"required","isUnique":false},{"stepType":"CreateField","model":"PostMeta","name":"metaName","type":{"Base":"String"},"arity":"required","isUnique":false},{"stepType":"CreateField","model":"PostMeta","name":"metaValue","type":{"Base":"String"},"arity":"required","isUnique":false},{"stepType":"CreateField","model":"PostMeta","name":"metaDeleted","type":{"Base":"Boolean"},"arity":"required","isUnique":false,"default":{"Boolean":false}},{"stepType":"CreateField","model":"Review","name":"id","type":{"Base":"Int"},"arity":"required","isUnique":false,"id":{"strategy":"Auto","sequence":null}},{"stepType":"CreateField","model":"Review","name":"user","type":{"Relation":{"to":"User","to_fields":["id"],"name":"ReviewToUser","on_delete":"None"}},"arity":"required","isUnique":false},{"stepType":"CreateField","model":"Review","name":"itemType","type":{"Base":"String"},"arity":"required","isUnique":false},{"stepType":"CreateField","model":"Review","name":"itemStatus","type":{"Base":"String"},"arity":"required","isUnique":false},{"stepType":"CreateField","model":"Review","name":"itemUrlSegment","type":{"Base":"String"},"arity":"required","isUnique":false},{"stepType":"CreateField","model":"Review","name":"itemMimeType","type":{"Base":"String"},"arity":"required","isUnique":false},{"stepType":"CreateField","model":"Review","name":"itemName","type":{"Base":"String"},"arity":"required","isUnique":false},{"stepType":"CreateField","model":"Review","name":"itemContent","type":{"Base":"String"},"arity":"required","isUnique":false},{"stepType":"CreateField","model":"Review","name":"itemDeleted","type":{"Base":"Boolean"},"arity":"required","isUnique":false,"default":{"Boolean":false}},{"stepType":"CreateField","model":"Review","name":"itemMeta","type":{"Relation":{"to":"ReviewMeta","to_fields":[],"name":"ReviewToReviewMeta","on_delete":"None"}},"arity":"list","isUnique":false},{"stepType":"CreateField","model":"Review","name":"post","type":{"Relation":{"to":"Post","to_fields":["id"],"name":"PostToReview","on_delete":"None"}},"arity":"required","isUnique":false},{"stepType":"CreateField","model":"ReviewMeta","name":"id","type":{"Base":"Int"},"arity":"required","isUnique":false,"id":{"strategy":"Auto","sequence":null}},{"stepType":"CreateField","model":"ReviewMeta","name":"review","type":{"Relation":{"to":"Review","to_fields":["id"],"name":"ReviewToReviewMeta","on_delete":"None"}},"arity":"required","isUnique":false},{"stepType":"CreateField","model":"ReviewMeta","name":"metaType","type":{"Base":"String"},"arity":"required","isUnique":false},{"stepType":"CreateField","model":"ReviewMeta","name":"metaName","type":{"Base":"String"},"arity":"required","isUnique":false},{"stepType":"CreateField","model":"ReviewMeta","name":"metaValue","type":{"Base":"String"},"arity":"required","isUnique":false},{"stepType":"CreateField","model":"ReviewMeta","name":"metaDeleted","type":{"Base":"Boolean"},"arity":"required","isUnique":false,"default":{"Boolean":false}}],"sourceConfig":"datasource db {\n  provider = \"mysql\"\n  url      = \"mysql://root:root@127.0.0.1:3306/reeviewr-prisma2\"\n}\n\nmodel User {\n  id            Int        @id\n  userType      Int\n  userEmail     String     @unique\n  userPassword  String\n  publicHash    String     @unique\n  privateHash   String     @unique\n  confirmHash   String     @unique\n  forgotHash    String     @unique\n  userConfirmed Int\n  userDeleted   Boolean    @default(false)\n  userMeta      UserMeta[]\n  posts         Post[]\n  reviews       Review[]\n}\n\nmodel UserMeta {\n  id          Int     @id\n  user        User\n  metaType    String\n  metaName    String\n  metaValue   String\n  metaDeleted Boolean @default(false)\n}\n\nmodel Post {\n  id             Int        @id\n  user           User\n  itemType       String\n  itemStatus     String\n  itemUrlSegment String\n  itemMimeType   String\n  itemName       String\n  itemContent    String\n  itemDeleted    Boolean    @default(false)\n  itemMeta       PostMeta[]\n  reviews        Review[]\n}\n\nmodel PostMeta {\n  id          Int     @id\n  post        Post\n  metaType    String\n  metaName    String\n  metaValue   String\n  metaDeleted Boolean @default(false)\n}\n\nmodel Review {\n  id             Int          @id\n  user           User\n  itemType       String\n  itemStatus     String\n  itemUrlSegment String\n  itemMimeType   String\n  itemName       String\n  itemContent    String\n  itemDeleted    Boolean      @default(false)\n  itemMeta       ReviewMeta[]\n  post           Post\n}\n\nmodel ReviewMeta {\n  id          Int     @id\n  review      Review\n  metaType    String\n  metaName    String\n  metaValue   String\n  metaDeleted Boolean @default(false)\n}"}}
```

## RPC Input Readable
```json
{
  "id": 1,
  "jsonrpc": "2.0",
  "method": "applyMigration",
  "params": {
    "projectInfo": "",
    "force": false,
    "migrationId": "20190706102329-inti",
    "steps": [
      {
        "stepType": "CreateModel",
        "name": "User",
        "embedded": false
      },
      {
        "stepType": "CreateModel",
        "name": "UserMeta",
        "embedded": false
      },
      {
        "stepType": "CreateModel",
        "name": "Post",
        "embedded": false
      },
      {
        "stepType": "CreateModel",
        "name": "PostMeta",
        "embedded": false
      },
      {
        "stepType": "CreateModel",
        "name": "Review",
        "embedded": false
      },
      {
        "stepType": "CreateModel",
        "name": "ReviewMeta",
        "embedded": false
      },
      {
        "stepType": "CreateField",
        "model": "User",
        "name": "id",
        "type": {
          "Base": "Int"
        },
        "arity": "required",
        "isUnique": false,
        "id": {
          "strategy": "Auto",
          "sequence": null
        }
      },
      {
        "stepType": "CreateField",
        "model": "User",
        "name": "userType",
        "type": {
          "Base": "Int"
        },
        "arity": "required",
        "isUnique": false
      },
      {
        "stepType": "CreateField",
        "model": "User",
        "name": "userEmail",
        "type": {
          "Base": "String"
        },
        "arity": "required",
        "isUnique": true
      },
      {
        "stepType": "CreateField",
        "model": "User",
        "name": "userPassword",
        "type": {
          "Base": "String"
        },
        "arity": "required",
        "isUnique": false
      },
      {
        "stepType": "CreateField",
        "model": "User",
        "name": "publicHash",
        "type": {
          "Base": "String"
        },
        "arity": "required",
        "isUnique": true
      },
      {
        "stepType": "CreateField",
        "model": "User",
        "name": "privateHash",
        "type": {
          "Base": "String"
        },
        "arity": "required",
        "isUnique": true
      },
      {
        "stepType": "CreateField",
        "model": "User",
        "name": "confirmHash",
        "type": {
          "Base": "String"
        },
        "arity": "required",
        "isUnique": true
      },
      {
        "stepType": "CreateField",
        "model": "User",
        "name": "forgotHash",
        "type": {
          "Base": "String"
        },
        "arity": "required",
        "isUnique": true
      },
      {
        "stepType": "CreateField",
        "model": "User",
        "name": "userConfirmed",
        "type": {
          "Base": "Int"
        },
        "arity": "required",
        "isUnique": false
      },
      {
        "stepType": "CreateField",
        "model": "User",
        "name": "userDeleted",
        "type": {
          "Base": "Boolean"
        },
        "arity": "required",
        "isUnique": false,
        "default": {
          "Boolean": false
        }
      },
      {
        "stepType": "CreateField",
        "model": "User",
        "name": "userMeta",
        "type": {
          "Relation": {
            "to": "UserMeta",
            "to_fields": [],
            "name": "UserToUserMeta",
            "on_delete": "None"
          }
        },
        "arity": "list",
        "isUnique": false
      },
      {
        "stepType": "CreateField",
        "model": "User",
        "name": "posts",
        "type": {
          "Relation": {
            "to": "Post",
            "to_fields": [],
            "name": "PostToUser",
            "on_delete": "None"
          }
        },
        "arity": "list",
        "isUnique": false
      },
      {
        "stepType": "CreateField",
        "model": "User",
        "name": "reviews",
        "type": {
          "Relation": {
            "to": "Review",
            "to_fields": [],
            "name": "ReviewToUser",
            "on_delete": "None"
          }
        },
        "arity": "list",
        "isUnique": false
      },
      {
        "stepType": "CreateField",
        "model": "UserMeta",
        "name": "id",
        "type": {
          "Base": "Int"
        },
        "arity": "required",
        "isUnique": false,
        "id": {
          "strategy": "Auto",
          "sequence": null
        }
      },
      {
        "stepType": "CreateField",
        "model": "UserMeta",
        "name": "user",
        "type": {
          "Relation": {
            "to": "User",
            "to_fields": [
              "id"
            ],
            "name": "UserToUserMeta",
            "on_delete": "None"
          }
        },
        "arity": "required",
        "isUnique": false
      },
      {
        "stepType": "CreateField",
        "model": "UserMeta",
        "name": "metaType",
        "type": {
          "Base": "String"
        },
        "arity": "required",
        "isUnique": false
      },
      {
        "stepType": "CreateField",
        "model": "UserMeta",
        "name": "metaName",
        "type": {
          "Base": "String"
        },
        "arity": "required",
        "isUnique": false
      },
      {
        "stepType": "CreateField",
        "model": "UserMeta",
        "name": "metaValue",
        "type": {
          "Base": "String"
        },
        "arity": "required",
        "isUnique": false
      },
      {
        "stepType": "CreateField",
        "model": "UserMeta",
        "name": "metaDeleted",
        "type": {
          "Base": "Boolean"
        },
        "arity": "required",
        "isUnique": false,
        "default": {
          "Boolean": false
        }
      },
      {
        "stepType": "CreateField",
        "model": "Post",
        "name": "id",
        "type": {
          "Base": "Int"
        },
        "arity": "required",
        "isUnique": false,
        "id": {
          "strategy": "Auto",
          "sequence": null
        }
      },
      {
        "stepType": "CreateField",
        "model": "Post",
        "name": "user",
        "type": {
          "Relation": {
            "to": "User",
            "to_fields": [
              "id"
            ],
            "name": "PostToUser",
            "on_delete": "None"
          }
        },
        "arity": "required",
        "isUnique": false
      },
      {
        "stepType": "CreateField",
        "model": "Post",
        "name": "itemType",
        "type": {
          "Base": "String"
        },
        "arity": "required",
        "isUnique": false
      },
      {
        "stepType": "CreateField",
        "model": "Post",
        "name": "itemStatus",
        "type": {
          "Base": "String"
        },
        "arity": "required",
        "isUnique": false
      },
      {
        "stepType": "CreateField",
        "model": "Post",
        "name": "itemUrlSegment",
        "type": {
          "Base": "String"
        },
        "arity": "required",
        "isUnique": false
      },
      {
        "stepType": "CreateField",
        "model": "Post",
        "name": "itemMimeType",
        "type": {
          "Base": "String"
        },
        "arity": "required",
        "isUnique": false
      },
      {
        "stepType": "CreateField",
        "model": "Post",
        "name": "itemName",
        "type": {
          "Base": "String"
        },
        "arity": "required",
        "isUnique": false
      },
      {
        "stepType": "CreateField",
        "model": "Post",
        "name": "itemContent",
        "type": {
          "Base": "String"
        },
        "arity": "required",
        "isUnique": false
      },
      {
        "stepType": "CreateField",
        "model": "Post",
        "name": "itemDeleted",
        "type": {
          "Base": "Boolean"
        },
        "arity": "required",
        "isUnique": false,
        "default": {
          "Boolean": false
        }
      },
      {
        "stepType": "CreateField",
        "model": "Post",
        "name": "itemMeta",
        "type": {
          "Relation": {
            "to": "PostMeta",
            "to_fields": [],
            "name": "PostToPostMeta",
            "on_delete": "None"
          }
        },
        "arity": "list",
        "isUnique": false
      },
      {
        "stepType": "CreateField",
        "model": "Post",
        "name": "reviews",
        "type": {
          "Relation": {
            "to": "Review",
            "to_fields": [],
            "name": "PostToReview",
            "on_delete": "None"
          }
        },
        "arity": "list",
        "isUnique": false
      },
      {
        "stepType": "CreateField",
        "model": "PostMeta",
        "name": "id",
        "type": {
          "Base": "Int"
        },
        "arity": "required",
        "isUnique": false,
        "id": {
          "strategy": "Auto",
          "sequence": null
        }
      },
      {
        "stepType": "CreateField",
        "model": "PostMeta",
        "name": "post",
        "type": {
          "Relation": {
            "to": "Post",
            "to_fields": [
              "id"
            ],
            "name": "PostToPostMeta",
            "on_delete": "None"
          }
        },
        "arity": "required",
        "isUnique": false
      },
      {
        "stepType": "CreateField",
        "model": "PostMeta",
        "name": "metaType",
        "type": {
          "Base": "String"
        },
        "arity": "required",
        "isUnique": false
      },
      {
        "stepType": "CreateField",
        "model": "PostMeta",
        "name": "metaName",
        "type": {
          "Base": "String"
        },
        "arity": "required",
        "isUnique": false
      },
      {
        "stepType": "CreateField",
        "model": "PostMeta",
        "name": "metaValue",
        "type": {
          "Base": "String"
        },
        "arity": "required",
        "isUnique": false
      },
      {
        "stepType": "CreateField",
        "model": "PostMeta",
        "name": "metaDeleted",
        "type": {
          "Base": "Boolean"
        },
        "arity": "required",
        "isUnique": false,
        "default": {
          "Boolean": false
        }
      },
      {
        "stepType": "CreateField",
        "model": "Review",
        "name": "id",
        "type": {
          "Base": "Int"
        },
        "arity": "required",
        "isUnique": false,
        "id": {
          "strategy": "Auto",
          "sequence": null
        }
      },
      {
        "stepType": "CreateField",
        "model": "Review",
        "name": "user",
        "type": {
          "Relation": {
            "to": "User",
            "to_fields": [
              "id"
            ],
            "name": "ReviewToUser",
            "on_delete": "None"
          }
        },
        "arity": "required",
        "isUnique": false
      },
      {
        "stepType": "CreateField",
        "model": "Review",
        "name": "itemType",
        "type": {
          "Base": "String"
        },
        "arity": "required",
        "isUnique": false
      },
      {
        "stepType": "CreateField",
        "model": "Review",
        "name": "itemStatus",
        "type": {
          "Base": "String"
        },
        "arity": "required",
        "isUnique": false
      },
      {
        "stepType": "CreateField",
        "model": "Review",
        "name": "itemUrlSegment",
        "type": {
          "Base": "String"
        },
        "arity": "required",
        "isUnique": false
      },
      {
        "stepType": "CreateField",
        "model": "Review",
        "name": "itemMimeType",
        "type": {
          "Base": "String"
        },
        "arity": "required",
        "isUnique": false
      },
      {
        "stepType": "CreateField",
        "model": "Review",
        "name": "itemName",
        "type": {
          "Base": "String"
        },
        "arity": "required",
        "isUnique": false
      },
      {
        "stepType": "CreateField",
        "model": "Review",
        "name": "itemContent",
        "type": {
          "Base": "String"
        },
        "arity": "required",
        "isUnique": false
      },
      {
        "stepType": "CreateField",
        "model": "Review",
        "name": "itemDeleted",
        "type": {
          "Base": "Boolean"
        },
        "arity": "required",
        "isUnique": false,
        "default": {
          "Boolean": false
        }
      },
      {
        "stepType": "CreateField",
        "model": "Review",
        "name": "itemMeta",
        "type": {
          "Relation": {
            "to": "ReviewMeta",
            "to_fields": [],
            "name": "ReviewToReviewMeta",
            "on_delete": "None"
          }
        },
        "arity": "list",
        "isUnique": false
      },
      {
        "stepType": "CreateField",
        "model": "Review",
        "name": "post",
        "type": {
          "Relation": {
            "to": "Post",
            "to_fields": [
              "id"
            ],
            "name": "PostToReview",
            "on_delete": "None"
          }
        },
        "arity": "required",
        "isUnique": false
      },
      {
        "stepType": "CreateField",
        "model": "ReviewMeta",
        "name": "id",
        "type": {
          "Base": "Int"
        },
        "arity": "required",
        "isUnique": false,
        "id": {
          "strategy": "Auto",
          "sequence": null
        }
      },
      {
        "stepType": "CreateField",
        "model": "ReviewMeta",
        "name": "review",
        "type": {
          "Relation": {
            "to": "Review",
            "to_fields": [
              "id"
            ],
            "name": "ReviewToReviewMeta",
            "on_delete": "None"
          }
        },
        "arity": "required",
        "isUnique": false
      },
      {
        "stepType": "CreateField",
        "model": "ReviewMeta",
        "name": "metaType",
        "type": {
          "Base": "String"
        },
        "arity": "required",
        "isUnique": false
      },
      {
        "stepType": "CreateField",
        "model": "ReviewMeta",
        "name": "metaName",
        "type": {
          "Base": "String"
        },
        "arity": "required",
        "isUnique": false
      },
      {
        "stepType": "CreateField",
        "model": "ReviewMeta",
        "name": "metaValue",
        "type": {
          "Base": "String"
        },
        "arity": "required",
        "isUnique": false
      },
      {
        "stepType": "CreateField",
        "model": "ReviewMeta",
        "name": "metaDeleted",
        "type": {
          "Base": "Boolean"
        },
        "arity": "required",
        "isUnique": false,
        "default": {
          "Boolean": false
        }
      }
    ],
    "sourceConfig": "datasource db {\n  provider = \"mysql\"\n  url      = \"mysql://root:root@127.0.0.1:3306/reeviewr-prisma2\"\n}\n\nmodel User {\n  id            Int        @id\n  userType      Int\n  userEmail     String     @unique\n  userPassword  String\n  publicHash    String     @unique\n  privateHash   String     @unique\n  confirmHash   String     @unique\n  forgotHash    String     @unique\n  userConfirmed Int\n  userDeleted   Boolean    @default(false)\n  userMeta      UserMeta[]\n  posts         Post[]\n  reviews       Review[]\n}\n\nmodel UserMeta {\n  id          Int     @id\n  user        User\n  metaType    String\n  metaName    String\n  metaValue   String\n  metaDeleted Boolean @default(false)\n}\n\nmodel Post {\n  id             Int        @id\n  user           User\n  itemType       String\n  itemStatus     String\n  itemUrlSegment String\n  itemMimeType   String\n  itemName       String\n  itemContent    String\n  itemDeleted    Boolean    @default(false)\n  itemMeta       PostMeta[]\n  reviews        Review[]\n}\n\nmodel PostMeta {\n  id          Int     @id\n  post        Post\n  metaType    String\n  metaName    String\n  metaValue   String\n  metaDeleted Boolean @default(false)\n}\n\nmodel Review {\n  id             Int          @id\n  user           User\n  itemType       String\n  itemStatus     String\n  itemUrlSegment String\n  itemMimeType   String\n  itemName       String\n  itemContent    String\n  itemDeleted    Boolean      @default(false)\n  itemMeta       ReviewMeta[]\n  post           Post\n}\n\nmodel ReviewMeta {\n  id          Int     @id\n  review      Review\n  metaType    String\n  metaName    String\n  metaValue   String\n  metaDeleted Boolean @default(false)\n}"
  }
}
```


## RPC Response
```
null
```

## Stack Trace
```bash
[/var/root/.cargo/git/checkouts/prisma-query-a8c45647247f5d6d/bed0838/src/connector/mysql.rs:83] self.pool.state() = State {
    connections: 10,
    idle_connections: 10,
}
[migration-engine/connectors/sql-migration-connector/src/lib.rs:273] format!("CREATE SCHEMA IF NOT EXISTS `{}` DEFAULT CHARACTER SET latin1;" , &
        self . schema_name) = "CREATE SCHEMA IF NOT EXISTS `reeviewr-prisma2` DEFAULT CHARACTER SET latin1;"
[/var/root/.cargo/git/checkouts/prisma-query-a8c45647247f5d6d/bed0838/src/connector/mysql.rs:83] self.pool.state() = State {
    connections: 10,
    idle_connections: 10,
}
[migration-engine/connectors/sql-migration-connector/src/sql_migration_persistence.rs:38] m.make_from(barrel_variant) = "CREATE TABLE reeviewr-prisma2._Migration (revision INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY, name TEXT NOT NULL, datamodel TEXT NOT NULL, status TEXT NOT NULL, applied INTEGER NOT NULL, rolled_back INTEGER NOT NULL, datamodel_steps TEXT NOT NULL, database_migration TEXT NOT NULL, errors TEXT NOT NULL, started_at datetime(3) NOT NULL, finished_at datetime(3));"
[/var/root/.cargo/git/checkouts/prisma-query-a8c45647247f5d6d/bed0838/src/connector/mysql.rs:83] self.pool.state() = State {
    connections: 10,
    idle_connections: 10,
}
[/var/root/.cargo/git/checkouts/prisma-query-a8c45647247f5d6d/bed0838/src/connector/mysql.rs:83] self.pool.state() = State {
    connections: 10,
    idle_connections: 10,
}
[/var/root/.cargo/git/checkouts/prisma-query-a8c45647247f5d6d/bed0838/src/connector/mysql.rs:83] self.pool.state() = State {
    connections: 10,
    idle_connections: 10,
}
[/var/root/.cargo/git/checkouts/prisma-query-a8c45647247f5d6d/bed0838/src/connector/mysql.rs:162] visitor::Mysql::build(q) = (
    "SELECT `reeviewr-prisma2`.`_Migration`.* FROM `reeviewr-prisma2`.`_Migration` WHERE `status` = ? ORDER BY `revision` DESC",
    [
        Text(
            "MigrationSuccess",
        ),
    ],
)
thread 'main' panicked at 'called `Result::unwrap()` on an `Err` value: QueryError(MySqlError { ERROR 1146 (42S02): Table 'reeviewr-prisma2._migration' doesn't exist }

stack backtrace:
   0: backtrace::backtrace::trace::h5511721bea6fa8d5 (0x10b684a4e)
   1: backtrace::capture::Backtrace::new_unresolved::h28f9c9663a9420c8 (0x10b683ba8)
   2: failure::backtrace::internal::InternalBacktrace::new::hbb41405b6d19ab81 (0x10b683549)
   3: <failure::backtrace::Backtrace as core::default::Default>::default::h0458ad281d4247c8 (0x10b683735)
   4: prisma_query::connector::mysql::<impl prisma_query::transaction::Connection for r2d2::PooledConnection<r2d2_mysql::pool::MysqlConnectionManager>>::query_raw::hc99ec08579310d81 (0x10b157324)
   5: prisma_query::connector::mysql::<impl prisma_query::transaction::Connection for r2d2::PooledConnection<r2d2_mysql::pool::MysqlConnectionManager>>::query::hd94177cfbdd03f2d (0x10b1571b7)
   6: <prisma_query::connector::mysql::Mysql as prisma_query::transaction::Connectional>::query_on_connection::h69042a0dd25fc843 (0x10b16c972)
   7: <sql_migration_connector::sql_migration_persistence::SqlMigrationPersistence as migration_connector::migration_persistence::MigrationPersistence>::last::h7d428eddc3f73464 (0x10b08e3e6)
   8: <migration_core::commands::apply_migration::ApplyMigrationCommand as migration_core::commands::command::MigrationCommand>::execute::hb1fecfb17308176d (0x10b0056e1)
   9: <F as jsonrpc_core::calls::RpcMethodSimple>::call::h9769a5ec0d6f22b8 (0x10b04ddf6)
  10: <F as jsonrpc_core::calls::RpcMethod<T>>::call::h47f83054ff2b4bfa (0x10aff6b9c)
  11: <futures::future::lazy::Lazy<F,R> as futures::future::Future>::poll::h668ec6fc9740aa9c (0x10b009e12)
  12: <futures::future::then::Then<A,B,F> as futures::future::Future>::poll::h550d42fd170acd67 (0x10aff73f0)
  13: <futures::future::map::Map<A,F> as futures::future::Future>::poll::h5c2ff7578e36ca81 (0x10b01329f)
  14: <futures::future::either::Either<A,B> as futures::future::Future>::poll::h5a312a2b26e314b8 (0x10b00a120)
  15: futures::task_impl::std::set::h39259597f0c1dd44 (0x10b041d6f)
  16: std::thread::local::LocalKey<T>::with::h388c44217b14f1f6 (0x10b045996)
  17: futures::future::Future::wait::h8889cef155e7abec (0x10b0130ef)
  18: jsonrpc_core::io::IoHandler<M>::handle_request_sync::hf66c69aa485c6f61 (0x10aff170f)
  19: migration_core::rpc_api::RpcApi::handle::h3b78035f1bef1619 (0x10b051f0b)
  20: migration_engine::main::h3526b2b95e311013 (0x10afcdffd)
  21: std::rt::lang_start::{{closure}}::ha0811c078ac13879 (0x10afcdfa6)
  22: std::panicking::try::do_call::h1252fc9a2ff235eb (0x10b6a9e88)
  23: __rust_maybe_catch_panic (0x10b6ae26f)
  24: std::rt::lang_start_internal::h4c054360e442146c (0x10b6aa96e)
  25: main (0x10afce059))', src/libcore/result.rs:997:5
stack backtrace:
   0: std::sys::unix::backtrace::tracing::imp::unwind_backtrace
   1: std::sys_common::backtrace::_print
   2: std::panicking::default_hook::{{closure}}
   3: std::panicking::default_hook
   4: std::panicking::rust_panic_with_hook
   5: std::panicking::continue_panic_fmt
   6: rust_begin_unwind
   7: core::panicking::panic_fmt
   8: core::result::unwrap_failed
   9: <sql_migration_connector::sql_migration_persistence::SqlMigrationPersistence as migration_connector::migration_persistence::MigrationPersistence>::last
  10: <migration_core::commands::apply_migration::ApplyMigrationCommand as migration_core::commands::command::MigrationCommand>::execute
  11: <F as jsonrpc_core::calls::RpcMethodSimple>::call
  12: <F as jsonrpc_core::calls::RpcMethod<T>>::call
  13: <futures::future::lazy::Lazy<F,R> as futures::future::Future>::poll
  14: <futures::future::then::Then<A,B,F> as futures::future::Future>::poll
  15: <futures::future::map::Map<A,F> as futures::future::Future>::poll
  16: <futures::future::either::Either<A,B> as futures::future::Future>::poll
  17: futures::task_impl::std::set
  18: std::thread::local::LocalKey<T>::with
  19: futures::future::Future::wait
  20: jsonrpc_core::io::IoHandler<M>::handle_request_sync
  21: migration_core::rpc_api::RpcApi::handle
  22: migration_engine::main
  23: std::rt::lang_start::{{closure}}
  24: std::panicking::try::do_call
  25: __rust_maybe_catch_panic
  26: std::rt::lang_start_internal
  27: main

```
