migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("c8jodyqhjv0aok0")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("c8jodyqhjv0aok0")

  // remove
  collection.schema.removeField("qdvju8t1")

  return dao.saveCollection(collection)
})
