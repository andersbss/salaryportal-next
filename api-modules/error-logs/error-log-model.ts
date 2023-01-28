import { Schema as MongooseSchema, model, models } from 'mongoose';

export interface ErrorLogModel {
  id: string;
  message: string;
  stack: string;
  createdAt: Date;
}

const Schema = new MongooseSchema<ErrorLogModel>({
  message: String,
  stack: String,
  createdAt: Date,
});

const ErrorLogModelSchema = models.ErrorLog || model<ErrorLogModel>('ErrorLog', Schema);

export default ErrorLogModelSchema;
