import axiosInstance from "core/configs/axios.config";
import { API } from "core/configs/api.config";

export const getLeadsService = () => {
  return axiosInstance.get(API.leads).then((res) => {
    console.log(res.data.record);
    return res.data.record as Leads[];
  });
};
