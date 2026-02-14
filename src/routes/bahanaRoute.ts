import { Router } from "express";
import { createBahana } from "../controllers/createBahana";

const bahanaRoute = Router();

bahanaRoute.get("/bahana", (req, res) => {
    res.json({message: "Bahana route is working"});
});

bahanaRoute.post("/bahana",createBahana)

export default bahanaRoute;