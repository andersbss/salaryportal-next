import { ErrorLogInput } from './dto';
import ErrorLogRepository from './error-log-repository';

const createErrorLog = async (input: ErrorLogInput): Promise<ErrorLogInput> => {
  const errorLog = await ErrorLogRepository.create({ ...input, createdAt: new Date() });
  return errorLog;
};

export const ErrorLogService = {
  createErrorLog,
};
