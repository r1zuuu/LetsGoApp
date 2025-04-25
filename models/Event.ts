import mongoose, { Schema } from "mongoose";

const EventSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  city: {
    type: String,
    required: true,
  },
  eventType: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  slug: {
    type: String,
    required: true,
  },
});

EventSchema.set("collection", "events");

const Event = mongoose.models.Events || mongoose.model("Events", EventSchema);

export default Event;
