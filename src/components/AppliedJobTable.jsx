import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
const AppliedJobTable = () => {
  const { allAppliedJobs } = useSelector(store => store.job);
  const statusColorMap = {
    pending: "bg-gray-400 text-black",
    rejected: "bg-red-400 text-black",
    accepted: "bg-green-400 text-black",
  };
    useEffect(() => {
    const fetchAppliedJobs = async () => {
      try {
        const res = await axios.get(`${APPLICATION_API_END_POINT}/user/applied-jobs`, { withCredentials: true });
        if (res.data.success) {
          useDispatch(setAllAppliedJobs(res.data.allAppliedJobs));
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchAppliedJobs();
  }, [useDispatch]); 
  return (
    <div>
      <Table>
        <TableCaption>List of your applied jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Job Role </TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            allAppliedJobs.length <= 0 ? <span>You haven't applied any job yet</span> : allAppliedJobs.map((appliedJob) => (
              <TableRow key={appliedJob._id}>
                <TableCell>{appliedJob.createdAt.split("T")[0]}</TableCell>
                <TableCell>{appliedJob.job.title}</TableCell>
                <TableCell>{appliedJob.job.company.name}</TableCell>
                <TableCell className="text-right">
                  {/* <Badge className={`text-black ${appliedJob.status==="rejected" ? 'bg-red-400' : appliedJob.status==="pending" ? 'bg-gray-400':'bg-green-400'}`}>{String(appliedJob.status).toUpperCase()}</Badge> */}
                  {(() => {
                    const rawStatus = appliedJob.status || "pending";
                      const status = appliedJob.status ? String(appliedJob.status).toLowerCase() : "pending";
                    const badgeClass =
                      statusColorMap[status] || "bg-black text-white";
                    return (
                      <Badge className={statusColorMap[status] || "bg-black text-white"}>{status}</Badge>
                    );
                  })()}
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  )
}

export default AppliedJobTable