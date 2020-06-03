import mongoose from "mongoose";

const listSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    dropDups: true,
    lowercase: true,
  },
  list: {
    type: Array,
    required: true,
  },
});

listSchema.index({ userEmail: 1 }, { unique: true });

export const List = mongoose.model("list", listSchema);
