import { JWT_SECRET } from "./config.js";
import jwt from "jsonwebtoken"

function Authenticate(req, res, next) {
    const authHeader =  req.headers.authorization
    if (!authHeader.startsWith('Bearer')) {
        return res.status(403).send()
    }
    const token = authHeader.split(' ')[1]

    try {
        const decoded = jwt.verify(token, JWT_SECRET)
        if (decoded.userId) {
            req.userId = decoded.userId
            next()
        }
        else return res.send(403).send()
        
    } catch (err) {
        return res.status(403).send()
    }
}

export default Authenticate;