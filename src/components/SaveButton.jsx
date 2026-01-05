import { Bookmark } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSaveJob } from "@/redux/jobSlice";

const SaveButton = ({ jobId }) => {
  const dispatch = useDispatch();
  const { savedJobs } = useSelector(store => store.job);

  const isSaved = savedJobs.some(job => job._id === jobId);

  return (
    <button
      onClick={() => dispatch(toggleSaveJob(jobId))}
      className={`rounded-full p-2 transition-colors ${
        isSaved ? "bg-purple-600 text-white" : "bg-gray-200 text-black"
      }`}
    >
      <Bookmark fill={isSaved ? "white" : "none"} />
    </button>
  );
};

export default SaveButton;
