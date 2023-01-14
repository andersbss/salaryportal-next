export type ReportResponse = {
  id: string;
  title: string;
  addedToTheseThreads: {
    id: string;
    urlId: string;
    title: string;
  }[];
};
