import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function BarangayReports() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Barangay Reports
                </h2>
            }
        >
            <Head title="Barangay Reports" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <p className="mb-4">
                                Generate and export health reports per barangay
                                for the selected date range.
                            </p>
                            {/* Date range & barangay filter */}
                            <div className="flex gap-4 mb-4">
                                <input
                                    type="date"
                                    className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                                />
                                <input
                                    type="date"
                                    className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                                />
                                <select className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600">
                                    <option>Select Barangay</option>
                                    <option>Barangay 1</option>
                                    <option>Barangay 2</option>
                                </select>
                            </div>
                            {/* Reports placeholder */}
                            <div>
                                <h3 className="font-semibold mb-2">Reports</h3>
                                <p className="text-sm text-gray-500">
                                    (Show charts, summary statistics, and export
                                    options for PDF/Excel)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
