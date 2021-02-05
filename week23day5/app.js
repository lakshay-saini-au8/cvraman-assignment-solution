import express from "express";
import { v4 as uuidv4 } from "uuid";
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const data = [];

app.listen(3333, console.log("server"));
