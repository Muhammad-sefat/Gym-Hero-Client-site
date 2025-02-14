import { useEffect, useState } from "react";

const ActiveLogPage = () => {
  const [activities, setActivities] = useState([]);
  console.log(activities);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Activity Log</h2>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full leading-normal bg-white">
          <thead>
            <tr className="bg-gray-200 border-b">
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Time
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Activity
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Details
              </th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-900">
                  {activity.time}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  <div className="flex items-center">
                    <span className="mr-2">
                      <i className={`icon-${activity.type}`}></i>
                    </span>
                    {activity.type}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {activity.details}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActiveLogPage;
