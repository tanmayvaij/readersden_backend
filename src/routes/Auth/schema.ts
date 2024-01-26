import { Schema, model } from "mongoose";

export const UserSchema = model(
  "user",
  new Schema({
    name: {
      required: true,
      type: String,
    },
    email: {
      required: true,
      type: String,
      unique: true,
    },
    number: {
      required: true,
      type: String,
    },
    password: {
      required: true,
      type: String,
    },
  })
);
