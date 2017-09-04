import { MongoClient } from 'mongodb';
import assert from 'assert';
import config from './config';

MongoClient.connect(config.mongodbUri, (err, db) => {
  assert.equal(null, err);

  db.collection('challenges').insertMany([
    {id: 1, title: 'Face your deepest fears!', difficulty: 4, date: "03.09.2017"},
    {id: 2, title: 'Contribute to an Open Source project!', difficulty: 3, date: "03.09.2017"},
    {id: 3, title: 'Smile while working out!', difficulty: 1, date: "03.09.2017"},
    {id: 4, title: 'Keep an eye contact with anyone whom you talk to!', difficulty: 2, date: "03.09.2017"}
  ]).then(response => {
    console.info('Number of challenges inserted: ', response.insertedCount);
    db.close();
  });
});
