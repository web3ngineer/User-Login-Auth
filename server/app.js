import express  from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true,
}))

app.use(express.json({limit:'16kb'}));
app.use(express.urlencoded({extended: true, limit:'16kb'}));
app.use(express.static("public"));
app.use(cookieParser())



import { userRouter } from "./routes/routes.js";

app.use("/user/api", userRouter);

export { app }



// middleware 
// const middleware = (req, res, next) => {
//     console.log('Hello this is middleware');
// }
// middleware();

// app.get('/', (req, res) => {
//     res.send('Hello from the main server');
// });
// app.get('/about', middleware, (req, res) => {
//     res.send('Hello from about section');
// });
// app.get('/contact', (req, res) => {
//     res.send('Hello from contact section');
// });
// app.get('/signin', (req, res) => {
//     res.send('Hello from signin section');
// });
// app.get('/signup', (req, res) => {
//     res.send('Hello from signup section');
// });


