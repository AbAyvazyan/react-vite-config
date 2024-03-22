import { IData } from './types';

const getDataAction = async (): Promise<IData[]> => {
  const response = await fetch('https://cloud.codesupply.co/endpoint/react/data.json');
  return response.json();
};

export default getDataAction;
