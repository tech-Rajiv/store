import mongoose, { model, models, Schema } from "mongoose";

const CategorySchema = new Schema({
  name: { type: String, required: true, unique: true },
  thumbnail: { type: String },
  description: { type: String },
});

const Category = models.Category || model("Category", CategorySchema);

export default Category;
