import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Upload() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    File Upload & Management
                </h2>
            }
        >
            <Head title="File Upload & Management" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <p className="mb-4">
                                Upload and manage Excel files containing
                                barangay health records.
                            </p>
                            <div className="border-2 border-dashed border-gray-400 dark:border-gray-600 p-6 rounded-lg text-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700">
                                <p className="text-gray-500 dark:text-gray-400">
                                    Drag & drop your Excel file here or click to
                                    upload
                                </p>
                            </div>
                            {/* File list table placeholder */}
                            <div className="mt-6">
                                <h3 className="font-semibold mb-2">
                                    Uploaded Files
                                </h3>
                                <p className="text-sm text-gray-500">
                                    (Search, sort, filter by
                                    barangay/date/uploader)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
