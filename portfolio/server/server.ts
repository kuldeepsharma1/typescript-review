import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import connectDB from "./utils/db";
import postsRouter from './routes/posts'

const app = express();

app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true,
}));
app.use(express.json());
app.use('/api/',postsRouter);


app.get("/test", (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
        success: true,
        message: "API is working",
        name: "this is title",
    });
});

// creating server
app.listen(8000, () => {
    console.log(`Server is connected with port 8000`);
    connectDB();
});