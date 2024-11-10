import { Schema, model } from "mongoose";

const formSchema = new Schema(
  {
    title: { type: String },
    inputs: [
      {
        type: { type: String },
        label: { type: String },
        placeholder: { type: String },
        LpId: { type: String },
      },
    ],
  },
  { timestamps: true }
);

export const Form = model("Form", formSchema);
