import {Router} from 'express'
const router = Router();

import {getInfluencers, getInfluencer, createInfluencer} from './influencer.controller'

router.post('/influencer', createInfluencer);

router.get('/influencers', getInfluencers);

router.get('/influencer/:id', getInfluencer);

export default router