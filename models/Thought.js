const { Schema, model } = require("mongoose");
const reaction = require("./Reaction");
const dateFormat = require("../utils/dateFormat");

const thought = new Schema(
  {
    thoughtText: {
      type: String,
      required: "Must leave a though",
      minlength: 2,
      maxlength: 200,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reaction],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

thought.virtual("reactions").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", thought);

module.exports = { Thought };
