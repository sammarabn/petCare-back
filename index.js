import express, {json, urlencoded} from 'express';
import routes from "./routes.js";
import pkg from "mongoose";
import cors from "cors";
import "dotenv/config";
import  cookieParser from "cookie-parser";



const { connect } = pkg;
const app = express();
app.use(cors());
app.use(json());
app.use(cookieParser());
app.use(urlencoded({ extended: true }));

connect("mongodb://localhost:27017");

app.use(routes);
app.listen(9000, () => console.log('Server ativo na porta 9000'))