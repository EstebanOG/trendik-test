import {Schema, model} from 'mongoose'

const influencerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    tags:{
        type: [String],
        index: true
    },
    locations:{
        type: [String],
        index: true
    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    followers:{
        type: Number,
        required: true
    },
    socialNetwork:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    }
    
}, {
    versionKey: false,
    timestamps: true
});

export default model('influencer', influencerSchema)