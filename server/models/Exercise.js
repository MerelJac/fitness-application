const { Schema, model } = require("mongoose");

const exerciseSchema = new Schema(
  {
    userID: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    exerciseName: {
      type: String,
      unique: true,
    },
    parsedName: {
      type: Array,
    },
    oneRepMax: {
      type: Number,
    },
    searchName: {
      type: String,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    collection: "Exercise",
  }
);

// initalize
const Exercise = model("Exercise", exerciseSchema);

// error handling
const handleError = (err) => console.log(err);

// seed?
Exercise.create({
  userID: 3,
  full_name: "Back Squat",
  parsed_name: ["Back", "Squat"],
  one_rep_max: 165,
})
  .then((result) => console.log("New exercise log: ", result))
  .catch((err) => handleError(err));

//export
module.exports = Exercise;
