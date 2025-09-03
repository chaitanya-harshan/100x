import express from "express";
import { BACKEND_URL } from "@repo/common/config";

const app = express();

app.get("/", (req, res) => {    
    res.json({ message: "Hello from the backend!"+BACKEND_URL });
});

app.listen(3003, () => {
    console.log("Backend server is running on http://localhost:3003");
});