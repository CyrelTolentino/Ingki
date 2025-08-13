import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
} from "recharts";

export default function Analytics() {
    // Example backend data
    const barangayUploads = [
        { name: "Barangay 1", files: 12 },
        { name: "Barangay 2", files: 8 },
        { name: "Barangay 3", files: 15 },
    ];

    const healthStatus = [
        { name: "Healthy", value: 120 },
        { name: "With Conditions", value: 45 },
        { name: "At Risk", value: 25 },
        { name: "Recovered", value: 30 },
    ];

    const COLORS = ["#34d399", "#fbbf24", "#ef4444", "#60a5fa"];

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Analytics
                </h2>
            }
        >
            <Head title="Analytics" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 space-y-8">
                    {/* Summary Stats */}
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
                                Residents Tracked
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

                    {/* Health Status Distribution */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
                            Health Status Distribution
                        </h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={healthStatus}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    outerRadius={100}
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
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    {/* File Uploads by Barangay */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
                            Files Uploaded per Barangay
                        </h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={barangayUploads}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="files" fill="#34d399" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
