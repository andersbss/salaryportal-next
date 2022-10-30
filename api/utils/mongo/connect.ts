import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL as string);
  } catch (error) {
    console.log(`Failed to connect to MongoDB: ${error}`);
  }
};
