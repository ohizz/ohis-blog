
export const config = {
  dataset: process.env.NEXT_PUBLIC_DATASET,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  apiVersion: "2021-08-11", 
  useCdn:typeof document !== 'undefined' && process.env.NODE_ENV === 'production',
  };
  