import { createSlice } from "@reduxjs/toolkit";
// import { setSearchJobByText } from "./companySlice";
const jobSlice = createSlice({
  name: "job",
  initialState: {
    allJobs: [],
    allAdminJobs: [],
    singleJob: null,
    searchJobByText: "",
    allAppliedJobs: [],
    savedJobs: [],
  },
  reducers: {
    setAllJobs: (state, action) => {
      state.allJobs = action.payload;
    },
    setSingleJob: (state, action) => {
      state.singleJob = action.payload;
    },
    setAllAdminJobs: (state, action) => {
      state.allAdminJobs = action.payload;
    },
    setSearchJobByText: (state, action) => {
      state.searchJobByText = action.payload;
    },
    setAllAppliedJobs: (state, action) => {
      state.allAppliedJobs = action.payload;
    },
    setSavedJobs: (state, action) => {
      state.savedJobs = action.payload;
    },
    updateAppliedJobStatus: (state, action) => {
      const { applicationId, status } = action.payload;
      const job = state.allAppliedJobs.find(item => item._id === applicationId);
      if (job) job.status = status;
    }
  }
})
export const { setAllJobs, setSingleJob, setAllAdminJobs, setSearchJobByText, setAllAppliedJobs, updateAppliedJobStatus, setSavedJobs } = jobSlice.actions;
export default jobSlice.reducer;