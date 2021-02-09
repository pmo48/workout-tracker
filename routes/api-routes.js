//requires in data model connecting to mongodb and router for express

const Fitness = require("../models/fitness.js");
const router = require("express").Router();

//api route for getting workout data in fitness collection, in addition to using aggregate mongoose functionality to aggregate total duration

router.get("/api/workouts", (req, res) => {
  Fitness.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: '$exercises.duration'
        }
      }
    }
  ])
    .then(dbFitness => {
      res.json(dbFitness);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//updates workouts

router.put("/api/workouts/:id", ({ body, params}, res) => {
  Fitness.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    { new: true }
    )
    .then(dbFitness => {
      res.json(dbFitness);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//creates new workouts

router.post("/api/workouts", ({ body }, res) => {
    Fitness.create(body)
      .then(dbFitness => {
        res.json(dbFitness);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  //returns a range of workout data including aggregate to reflect total duration of workouts, ordered by id desc

  router.get("/api/workouts/range", (req, res) => {
    Fitness.aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: '$exercises.duration'
          }
        }
      }
    ]).sort({ _id: -1 }).limit(7)
      .then(dbFitness => {
        res.json(dbFitness);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  module.exports = router;