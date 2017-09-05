import express from 'express';
import { MongoClient } from 'mongodb';
import assert from 'assert';
import config from '../config';

let mdb;

MongoClient.connect('mongodb://admin:fedor3520@ds125774.mlab.com:25774/dailychallenges', (err, db) => {
  assert.equal(null, err);

  mdb = db;
});

const router = express.Router();

router.get('/dailychallenges', (req, res) => {
  let challenges = {};
  console.log('Im here!' )
  mdb.collection('challenges').find({})
    .each((err, challenge) => {
      assert.equal(null, err);
      console.log(challenge + " WTF!!");
      if(!challenge) {
        res.send({challenges});
        return;
      }

      challenges[challenge.id] = challenge;
    });
});

router.post('/dailychallengesinsert', (req, res) => {
    console.log(req.body);

    mdb.collection('challenges').insertOne(
      {id: req.body.id, title: req.body.title, difficulty: req.body.difficulty, date: req.body.date, done: req.body.done}
    ).then(response => {
      console.info('One new challenge inserted into the database: ', response.insertedCount);
      res.send({});
  });
})

router.put('/dailychallenges', (req, res) => {
  console.log(req.body);

  mdb.collection('challenges').updateOne(
    {"id" : req.body.id},
    {$set: {"done" : true}}
  ).then(response => {
    console.info('The last challenge was updated with the value of done set to true!');
    res.send({});
  });
})




router.get('/dailychallenges/:challengeId', (req, res) => {

});

export default router;
