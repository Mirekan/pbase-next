/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("rvfvwmovq56i72j");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "rvfvwmovq56i72j",
    "created": "2024-01-28 04:17:01.274Z",
    "updated": "2024-01-28 05:58:00.234Z",
    "name": "Posts_list",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rbueapii",
        "name": "Title",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "wkblavkv",
        "name": "content",
        "type": "editor",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "convertUrls": false
        }
      },
      {
        "system": false,
        "id": "0dwyxvpw",
        "name": "date",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
