import { Router } from "express";
import { registerUser, loginUser, getCurrentUser, postContact, logoutUser } from "../controllers/user.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";


const userRouter = Router()

    userRouter.route("/register").post(registerUser)
    userRouter.route("/login").post(loginUser)

    // userRouter.route('/contact').get((req, res) => {
    //     res.cookie("test","Shivam");
    //     res.send('Hello from contact')
    // })
    userRouter.route('/current-user').get(verifyJWT,getCurrentUser)
    userRouter.route('/contact-data').get(verifyJWT,getCurrentUser)
    userRouter.route('/contact-post').post(verifyJWT,postContact)
    userRouter.route('/logout').post(verifyJWT,logoutUser)


export { userRouter }