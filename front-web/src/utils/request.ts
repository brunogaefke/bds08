import Axios from 'axios';
import { FilterData } from '../types';

const baseURL = 'http://localhost:8080';

export const makeRequest = Axios.create({
  baseURL,
});

export const buildFilterParams = (
  filterData?: FilterData,
  extraParams?: Record<string, unknown>
) => {
  return {
    storeId: filterData?.store?.id,
    ...extraParams,
  };
};
