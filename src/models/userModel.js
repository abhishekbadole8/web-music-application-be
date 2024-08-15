const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      Required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      Required: true,
    },
    password: {
      type: String,
      Required: true,
    },
    playlistIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Playlist",
      },
    ],
  },
  {
    timeStamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);