import { Schema as MongooseSchema, model, models } from 'mongoose';

export interface ReportModel {
  id: string;
  title: string;
}

const Schema = new MongooseSchema<ReportModel>({
  title: String,
});

const ReportModelSchema = models.Report || model<ReportModel>('Report', Schema);

export default ReportModelSchema;
