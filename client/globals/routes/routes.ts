const routes = {
  home: () => '/',
  reports: {
    new: () => '/reports/new',
  },
  threads: {
    id: (id: string) => `/threads/${id}`,
  },
} as const;

export default routes;
