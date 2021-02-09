//uses mongoose to create schema 

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//fitness schema for collection
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
  
  //creates mongo collection schema model
  const Fitness = mongoose.model("Fitness", FitnessSchema);
  
  module.exports = Fitness;