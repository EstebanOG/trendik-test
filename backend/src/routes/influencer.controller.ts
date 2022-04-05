import {RequestHandler} from 'express'
import Influencer from './influencer'
export const createInfluencer: RequestHandler = async (req, res) =>{
    const influencerFound = await Influencer.findOne({url: req.body.url})
    if(influencerFound)
        return res.status(301).json({message: 'The USERNAME already exists'})

    const influencer = new Influencer(req.body)
    const savedInfluencer = await influencer.save()
    res.json(savedInfluencer)
}

export const getInfluencers: RequestHandler = async (req, res) => {
    try {
        const influencers = await Influencer.find()
        return res.json(influencers)
    } catch (error) {
        res.json(error)
    }
}

export const getInfluencer: RequestHandler = async (req, res) => {
    try {
        const influencerFound = await Influencer.findById(req.params.id);
        if (!influencerFound) return res.status(204).json();
        return res.json(influencerFound)
    } catch (error) {
        return res.status(204).json();
    }
       
}