const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FitnessSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    
    exercises: [
        {
            type: {
                type: String,
                trim: true
            },

            name: {
                type: String,
                trim: true
            },

            weight: {
                type: Number
            },

            sets: {
                type: Number
            },

            reps: {
                type: Number
            },

            duration: {
                type: Number
            },

            distance: {
                type: Number
            }
        }
    ] 
  });
  
  const Fitness = mongoose.model("Fitness", FitnessSchema);
  
  module.exports = Fitness;