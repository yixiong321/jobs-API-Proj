const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Please provide the company name"],
      maxlength: 50,
      trim: true,
    },
    position: {
      type: String,
      required: [true, "Please provide the position"],
      maxlength: 100,
      trim: true,
    },
    status: {
      type: String,
      enum: ["Interview", "Pending", "Declined"],
      default: "Pending",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", JobSchema);
