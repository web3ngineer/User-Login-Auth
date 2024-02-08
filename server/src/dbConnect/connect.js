import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionReq = await mongoose.connect(`${process.env.DB_URI}/${process.env.DB_NAME}`,{
            // useNewUrlParser: true,
            // useCreateIndex: true,
            // useUnifiedTopology: true,
            // useFindAndModify: false,
        })
        console.log(`MongoDB Connected... DB_Host:${connectionReq.connection.host}`);
        // console.log(`${process.env.DB_URI}`)
        
    } catch (err) {
        console.error("MongoDB Connection Error !!!", err);
        process.exit(1);
    }
}

export default connectDB