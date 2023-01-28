import mongoose from 'mongoose';

export const connectDB = async (): Promise<boolean> => {
  try {
    await mongoose.connect(process.env.MONGO_URL as string);
    return true;
  } catch (error) {
    console.log(`Failed to connect to MongoDB: ${error}`);
    return false;
  }
};
