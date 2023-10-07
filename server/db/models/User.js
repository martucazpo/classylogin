const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    todos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Todo"
    }]
},{
    timestamps: true,
    timeseries: true
}
)

module.exports = mongoose.model("User", userSchema)