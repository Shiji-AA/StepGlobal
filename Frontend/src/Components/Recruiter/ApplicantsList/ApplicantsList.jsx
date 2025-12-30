import  { useEffect, useState } from 'react'
import { axiosInstanceRecruiter } from '../../../api/axiosInstance';
import toast from 'react-hot-toast';
import RecruiterNavbar from '../RecruiterNavbar/RecruiterNavbar';

function ApplicantsList() {
    const [applicants, setApplicants] = useState([]);

    // Fetch applicants' data
    useEffect(() => {
        axiosInstanceRecruiter
            .get('/applicantsList') // Update with your API endpoint
            .then((response) => {
                if (response.data.success) {
                    console.log(response.data,"APPLICANTS LIST")
                    setApplicants(response.data.applications);
                } else {
                    toast.error(response.data.message || 'Failed to fetch applicants.');
                }
            })
            .catch((error) => {
                console.error('Error in fetching applicants:', error);
                toast.error('An error occurred while fetching applicants.');
            });
    }, []);

    // Update application status
    const handleStatusChange = (applicationId, newStatus) => {
        axiosInstanceRecruiter
            .patch(`/updateApplicationStatus/${applicationId}`, { status: newStatus })
            .then((response) => {
                if (response.data.success) {
                    toast.success('Application status updated successfully!');
                    setApplicants((prev) =>
                        prev.map((app) =>
                            app._id === applicationId ? { ...app, status: newStatus } : app
                        )
                    );
                } else {
                    toast.error(response.data.message || 'Failed to update status.');
                }
            })
            .catch((error) => {
                console.error('Error updating status:', error);
                toast.error('An error occurred while updating the status.');
            });
    };

    return (
      <>
      <RecruiterNavbar/>
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold text-center mb-6">Applicants List</h1>
            {applicants.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="table-auto w-full bg-white rounded-lg shadow-md">
                        <thead className="bg-gray-200 text-gray-700">
                            <tr>
                                <th className="px-4 py-2 text-left">Candidate Name</th>
                                <th className="px-4 py-2 text-left">Email</th>
                                <th className="px-4 py-2 text-left">Job Title</th>
                                <th className="px-4 py-2 text-left">Current Status</th>
                                <th className="px-4 py-2 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {applicants.map((app) => (
                                <tr
                                    key={app._id}
                                    className="border-b hover:bg-gray-100 transition-colors"
                                >
                                    <td className="px-4 py-2">{app.userId.name}</td>
                                    <td className="px-4 py-2">{app.userId.email}</td>
                                    <td className="px-4 py-2">{app.jobId.jobTitle}</td>
                                    <td className="px-4 py-2">
                                        <span
                                            className={`px-3 py-1 rounded-full text-white ${
                                                app.status === 'Approved'
                                                    ? 'bg-green-500'
                                                    : app.status === 'Rejected'
                                                    ? 'bg-red-500'
                                                    : 'bg-yellow-500'
                                            }`}
                                        >
                                            {app.status || 'Pending'}
                                        </span>
                                    </td>
                                    <td className="px-4 py-2 flex space-x-2">
                                        <button
                                            onClick={() => handleStatusChange(app._id, 'Approved')}
                                            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                                        >
                                            Approve
                                        </button>
                                        <button
                                            onClick={() => handleStatusChange(app._id, 'Rejected')}
                                            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                                        >
                                            Reject
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-center text-gray-500">No applicants found.</p>
            )}
        </div>
      </>
    );
}

export default ApplicantsList;
