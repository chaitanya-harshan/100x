import express from 'express'
import Authenticate from '../middleware.js';
import { Account } from '../db.js';
import mongoose from 'mongoose';

const router = express.Router()

router.get("/balance", Authenticate, async (req,res) => {
    const account = await Account.findOne({userId: req.userId})
    if (!account) {
        return res.status(400).json({message: "Account doesn't exist in DB"})
    }

    return res.status(200).json({balance: account.balance})
})


router.post("/transfer", Authenticate, async (req, res) => {
    const { to, amount } = req.body;
    const from = req.userId

    const session = await mongoose.startSession();
    session.startTransaction();

    const sender = await Account.findOne({userId: from}).session(session)
    if (!sender) {
        await session.abortTransaction()
        return res.status(400).send("Invalid Sender Account")
    }
    if (sender.balance < amount) {
        await session.abortTransaction()
        return res.status(400).send("Insufficient Balance")
    }
    if (!await Account.findOne({userId: to}).session(session)) {
        await session.abortTransaction()
        return res.status(400).send("Invalid Receiver Account")
    }

    try {
        await Account.updateOne(
          { userId: from },
          { $inc: { balance: -amount } }
        ).session(session);
        await Account.updateOne(
          { userId: to },
          { $inc: { balance: amount } }
        ).session(session);

        await session.commitTransaction()
        session.endSession()
        return res.status(200).json({message: "Transfer Successful"})

    } catch (err) {
        session.abortTransaction()
        session.endSession()
        console.log("Transaction Error", err);
        return res.status(400).send("Transfer Failed")
    }
})

export default router;