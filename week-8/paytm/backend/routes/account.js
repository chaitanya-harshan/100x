import express from 'express'
import Authenticate from '../middleware';
import { Account } from '../db';

const router = express.Router()

router.get("/balance", Authenticate, async (req,res) => {
    const account = await Account.findOne({userId: req.userId})
    if (!account) {
        return res.status(400).json({message: "Account doesn't exist in DB"})
    }

    return res.status(200).json({balance: account.balance})
})

export default router;