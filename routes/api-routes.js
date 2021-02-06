// const express = require("express");
// const router = express.Router();
const Fitness = require("../models/fitness.js");

module.exports = function(router) {
router.get("/api/workouts", (req, res) => {
  Fitness.find({})
    .then(dbFitness => {
      res.json(dbFitness);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

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

router.post("/api/workouts", ({ body }, res) => {
    Fitness.create(body)
      .then(dbFitness => {
        res.json(dbFitness);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  
  router.get("/api/workouts/range", (req, res) => {
    Fitness.find({}).limit(5)
      .then(dbFitness => {
        res.json(dbFitness);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  

}

//code to use router
// router.get("/api/workouts", (req, res) => {
//   Fitness.find({})
//     .then(dbFitness => {
//       res.json(dbFitness);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

// router.put("/api/workouts/:id", ({ body, params}, res) => {
//   Fitness.findByIdAndUpdate(
//     params.id,
//     { $push: { exercises: body } },
//     { new: true }
//     )
//     .then(dbFitness => {
//       res.json(dbFitness);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

// router.post("/api/workouts", ({ body }, res) => {
//     Fitness.create(body)
//       .then(dbFitness => {
//         res.json(dbFitness);
//       })
//       .catch(err => {
//         res.status(400).json(err);
//       });
//   });
  
  
//   router.get("/api/workouts/range", (req, res) => {
//     Fitness.find({}.limit(5))
//       .then(dbFitness => {
//         res.json(dbFitness);
//       })
//       .catch(err => {
//         res.status(400).json(err);
//       });
//   });
  
//   module.exports = router;