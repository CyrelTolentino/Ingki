import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function Settings() {
    const [theme, setTheme] = useState("system");
    const [notifications, setNotifications] = useState(true);
    const [language, setLanguage] = useState("en");
    const [dateFormat, setDateFormat] = useState("MM/DD/YYYY");
    const [twoFactor, setTwoFactor] = useState(false);
    const [publicProfile, setPublicProfile] = useState(true);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Settings
                </h2>
            }
        >
            <Head title="Settings" />

            <div className="py-12">
                <div className="mx-auto max-w-4xl sm:px-6 lg:px-8 space-y-6">
                    {/* General Settings */}
                    <div className="bg-white dark:bg-gray-800 shadow-sm sm:rounded-lg p-6">
                        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
                            General Settings
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Language
                                </label>
                                <select
                                    value={language}
                                    onChange={(e) =>
                                        setLanguage(e.target.value)
                                    }
                                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                                >
                                    <option value="en">English</option>
                                    <option value="ph">Filipino</option>
                                    <option value="es">Spanish</option>
                                    <option value="fr">French</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Date Format
                                </label>
                                <select
                                    value={dateFormat}
                                    onChange={(e) =>
                                        setDateFormat(e.target.value)
                                    }
                                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                                >
                                    <option value="MM/DD/YYYY">
                                        MM/DD/YYYY
                                    </option>
                                    <option value="DD/MM/YYYY">
                                        DD/MM/YYYY
                                    </option>
                                    <option value="YYYY-MM-DD">
                                        YYYY-MM-DD
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Privacy & Security */}
                    <div className="bg-white dark:bg-gray-800 shadow-sm sm:rounded-lg p-6">
                        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
                            Privacy & Security
                        </h3>
                        <div className="space-y-4">
                            <label className="flex items-center space-x-3">
                                <input
                                    type="checkbox"
                                    checked={twoFactor}
                                    onChange={(e) =>
                                        setTwoFactor(e.target.checked)
                                    }
                                    className="rounded border-gray-300 dark:border-gray-700 dark:bg-gray-900"
                                />
                                <span className="text-gray-800 dark:text-gray-200">
                                    Enable Two-Factor Authentication
                                </span>
                            </label>
                            <label className="flex items-center space-x-3">
                                <input
                                    type="checkbox"
                                    checked={publicProfile}
                                    onChange={(e) =>
                                        setPublicProfile(e.target.checked)
                                    }
                                    className="rounded border-gray-300 dark:border-gray-700 dark:bg-gray-900"
                                />
                                <span className="text-gray-800 dark:text-gray-200">
                                    Make My Profile Public
                                </span>
                            </label>
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                                Request Data Export
                            </button>
                        </div>
                    </div>

                    {/* Theme Settings */}
                    <div className="bg-white dark:bg-gray-800 shadow-sm sm:rounded-lg p-6">
                        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
                            Appearance
                        </h3>
                        <select
                            value={theme}
                            onChange={(e) => setTheme(e.target.value)}
                            className="block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                        >
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                            <option value="system">System Default</option>
                        </select>
                    </div>

                    {/* Notifications */}
                    <div className="bg-white dark:bg-gray-800 shadow-sm sm:rounded-lg p-6">
                        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
                            Notifications
                        </h3>
                        <label className="flex items-center space-x-3">
                            <input
                                type="checkbox"
                                checked={notifications}
                                onChange={(e) =>
                                    setNotifications(e.target.checked)
                                }
                                className="rounded border-gray-300 dark:border-gray-700 dark:bg-gray-900"
                            />
                            <span className="text-gray-800 dark:text-gray-200">
                                Enable Email Notifications
                            </span>
                        </label>
                    </div>

                    {/* Account Actions */}
                    <div className="bg-white dark:bg-gray-800 shadow-sm sm:rounded-lg p-6">
                        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
                            Account
                        </h3>
                        <div className="space-x-3">
                            <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
                                Delete Account
                            </button>
                            <button className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700">
                                Log Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
