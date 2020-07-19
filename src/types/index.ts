import { firestore } from 'firebase';

export type Plugin = {
  id: string;
  image: string[];
  description: string;
  name: string;
  terms: string;
  updateDate: firestore.Timestamp | null;
  version: string;
  company: string;
};

export const buildPlugin = (data: firebase.firestore.DocumentData) => {
  const plugin: Plugin = {
    id: data.id,
    image: data.image,
    description: data.description,
    name: data.name,
    terms: data.terms,
    updateDate: data.updateDate,
    version: data.version,
    company: data.company,
  };

  return plugin;
};
