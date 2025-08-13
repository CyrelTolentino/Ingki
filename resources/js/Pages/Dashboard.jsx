import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

export default function Dashboard() {
    // Example data (replace with real props from backend)
    const healthStatus = [
        { name: "Healthy", value: 120 },
        { name: "With Conditions", value: 45 },
        { name: "At Risk", value: 25 },
        { name: "Recovered", value: 30 },
    ];

    const COLORS = ["#34d399", "#fbbf24", "#ef4444", "#60a5fa"];

    const recentUploads = [
        {
            file: "Barangay1_HealthData.xlsx",
            barangay: "Barangay 1",
            uploader: "Nurse Anna",
            date: "2025-08-12",
        },
        {
            file: "Barangay2_Report.xlsx",
            barangay: "Barangay 2",
            uploader: "Midwife Ben",
            date: "2025-08-11",
        },
        {
            file: "Barangay3_August.xlsx",
            barangay: "Barangay 3",
            uploader: "Health Worker Carla",
            date: "2025-08-10",
        },
    ];

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 space-y-8">
                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="bg-green-100 dark:bg-green-900 p-6 rounded-xl shadow text-center">
                            <p className="text-3xl font-bold">35</p>
                            <p className="text-gray-700 dark:text-gray-300">
                                Total Files
                            </p>
                        </div>
                        <div className="bg-blue-100 dark:bg-blue-900 p-6 rounded-xl shadow text-center">
                            <p className="text-3xl font-bold">195</p>
                            <p className="text-gray-700 dark:text-gray-300">
                                Residents
                            </p>
                        </div>
                        <div className="bg-yellow-100 dark:bg-yellow-900 p-6 rounded-xl shadow text-center">
                            <p className="text-3xl font-bold">25</p>
                            <p className="text-gray-700 dark:text-gray-300">
                                At Risk
                            </p>
                        </div>
                        <div className="bg-red-100 dark:bg-red-900 p-6 rounded-xl shadow text-center">
                            <p className="text-3xl font-bold">45</p>
                            <p className="text-gray-700 dark:text-gray-300">
                                With Conditions
                            </p>
                        </div>
                    </div>

                    {/* Health Status Pie Chart */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
                            Health Status Overview
                        </h3>
                        <ResponsiveContainer width="100%" height={250}>
                            <PieChart>
                                <Pie
                                    data={healthStatus}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    outerRadius={90}
                                    fill="#8884d8"
                                    dataKey="value"
                                    label={({ name, value }) =>
                                        `${name} (${value})`
                                    }
                                >
                                    {healthStatus.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={COLORS[index % COLORS.length]}
                                        />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Recent Uploads */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
                            Recent File Uploads
                        </h3>
                        <div className="overflow-x-auto">
                            <table className="min-w-full border border-gray-200 dark:border-gray-700">
                                <thead className="bg-gray-100 dark:bg-gray-700 dark:text-white">
                                    <tr>
                                        <th className="px-4 py-2 text-left">
                                            File Name
                                        </th>
                                        <th className="px-4 py-2 text-left">
                                            Barangay
                                        </th>
                                        <th className="px-4 py-2 text-left">
                                            Uploader
                                        </th>
                                        <th className="px-4 py-2 text-left">
                                            Date
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recentUploads.map((upload, index) => (
                                        <tr
                                            key={index}
                                            className="border-t dark:border-gray-700 dark:text-white"
                                        >
                                            <td className="px-4 py-2">
                                                {upload.file}
                                            </td>
                                            <td className="px-4 py-2">
                                                {upload.barangay}
                                            </td>
                                            <td className="px-4 py-2">
                                                {upload.uploader}
                                            </td>
                                            <td className="px-4 py-2">
                                                {upload.date}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
