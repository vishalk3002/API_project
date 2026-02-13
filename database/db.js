const mongoose = require("mongoose");
const connectToDB = async () => {
 try {
    const conn = await mongoose.connect(process.env.MONGO_URL);

    console.log("MongoDB connected successfully!");
    
  } catch (e) {
    console.error("MongoDB connection failed:", e.message);

    // ❌ NEVER DO process.exit on serverless
    throw new Error("DB connection failed");
  }
};

module.exports = connectToDB;
