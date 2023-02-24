import axios from "axios";

export const jsonDeptList = (param) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "get",
        url: process.env.REACT_APP_Servlet230216_IP + "dept/jsonbDeptList.st1",
        params: param,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

/* rafce - arrow function export deafault */
