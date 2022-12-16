import axios from "axios";

const authoFatch = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    Accept: "http://localhost:4000",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2Mzk1ZDBkMGFhMmM0NjQ1ZTRiOTcyYjgiLCJpZCI6IjYzOTVkMGQwYWEyYzQ2NDVlNGI5NzJiOCIsImlhdCI6MTY3MTEwODMzMywiZXhwIjoxNjcxMTA5MjMzfQ.sjboPLdIFsPDPoWih7d92zwHxP1IcC5GWtVRTCoXSCk  ",
  },
});
export default authoFatch;
