import { JWT_SECRET } from "./config.js";
import jwt from "jsonwebtoken"

function Authenticate(req, res, next) {
    const authHeader =  req.headers.authorization // dont put the quotes like "Bearer jwt" in headers as it's by default seen as string
    
    if (!authHeader.startsWith('Bearer')) {
        return res.status(403).send("Wrong Authorization Header")
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