
const projId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const data = process.env.NEXT_PUBLIC_SANITY_DATASET;

export const config = {
    dataset:  projId,
    projectId: data,
    apiVersion: "2021-08-11", 
    useCdn:"production",
  };
  