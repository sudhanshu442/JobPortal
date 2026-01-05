import React, { useEffect } from "react";
import Navbar from "./shared/Navbar";
import {  useSelector } from "react-redux";
import { Badge } from "./ui/badge";
import { Link } from "react-router-dom";
import axios from "axios";
import useGetAllSavedJobs from "@/hooks/useGetAllSavedJobs";

const SavedJobs = () => {
  useGetAllSavedJobs(); // ✅ YAHI CALL KARNA HAI
  const {savedJobs=[]} = useSelector((store) => store.job);
  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto my-8">
        <h1 className="text-2xl font-bold mb-6">Saved Jobs</h1>

        {savedJobs.length === 0 ? (
          <p className="text-gray-500">No saved jobs yet.</p>
        ) : (
          <div className="grid gap-5">
            {savedJobs.map((job) => (
              <div
                key={job._id}
                className="border rounded-xl p-5 bg-white shadow-sm"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-lg font-semibold">{job.title}</h2>
                    <p className="text-sm text-gray-600">
                      {job.company?.name}
                    </p>
                  </div>

                  <Badge className="bg-purple-600 text-white">Saved</Badge>
                </div>

                <p className="text-sm mt-2">
                  {job.description?.slice(0, 120)}...
                </p>

                <Link
                  to={`/job/${job._id}`}
                  className="inline-block mt-3 text-blue-600 font-medium"
                >
                  View Job →
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SavedJobs;
