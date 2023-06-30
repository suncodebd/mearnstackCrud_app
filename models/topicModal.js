import mongoose from "mongoose";

const topicSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
  },
  { timestamps: true }
);

const TopicModal =
  mongoose.models.TopicModal || mongoose.model("TopicModal", topicSchema);

export default TopicModal;
