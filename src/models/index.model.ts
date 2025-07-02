import mongoose, {Schema} from "mongoose";

const indexSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},    
});

export const IndexModel = mongoose.model("Index", indexSchema);