
const projId = process.env.SANITY_STUDIO_API_PROJECT_ID;
const data = process.env.SANITY_STUDIO_API_DATASET;

export const config = {
    dataset:  projId,
    projectId: data,
    apiVersion: "2021-08-11", 
    useCdn:"production",
  };
  