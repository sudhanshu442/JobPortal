
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setSavedJobs } from "@/redux/jobSlice";

const useGetAllSavedJobs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSavedJobs = async () => {
      try {
        const res = await axios.get(
          "/api/v1/user/saved-jobs",
          { withCredentials: true }
        );
        if (res.data.success) {
          dispatch(setSavedJobs(res.data.savedJobs || []));
        }
      } catch (error) {
        console.log("Error fetching saved jobs", error);
        dispatch(setSavedJobs([])); // safety
      }
    };

    fetchSavedJobs();
  }, [dispatch]);
};

export default useGetAllSavedJobs;







