migrate((db) => {
  const collection = new Collection({
    "id": "3hbmmbe0cvbqwxf",
    "created": "2023-05-11 01:57:00.114Z",
    "updated": "2023-05-11 01:57:00.114Z",
    "name": "note_collection",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vldkqwnf",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "twnb7ps6",
        "name": "content",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("3hbmmbe0cvbqwxf");

  return dao.deleteCollection(collection);
})
