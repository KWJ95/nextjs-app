migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("c8jodyqhjv0aok0");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "c8jodyqhjv0aok0",
    "created": "2023-05-11 01:58:32.743Z",
    "updated": "2023-05-11 02:51:27.047Z",
    "name": "people",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "m0wn3beg",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ihxualzl",
        "name": "gender",
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
        "id": "ekshvek9",
        "name": "height",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "qdvju8t1",
        "name": "unit",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": 2,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "bdpmdlp4",
        "name": "color",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
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
