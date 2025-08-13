import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function HealthRecords() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Resident Health Records
                </h2>
            }
        >
            <Head title="Resident Health Records" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <p className="mb-4">
                                View and search resident health profiles parsed
                                from uploaded Excel files.
                            </p>
                            {/* Search and filters */}
                            <div className="mb-4">
                                <input
                                    type="text"
                                    placeholder="Search by name, barangay, or health condition"
                                    className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                                />
                            </div>
                            {/* Table placeholder */}
                            <div>
                                <h3 className="font-semibold mb-2">
                                    Health Records
                                </h3>
                                <p className="text-sm text-gray-500">
                                    (Display age, address, health status, last
                                    update, with filter options)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
