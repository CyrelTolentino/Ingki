<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\AnalyticsController;
use App\Http\Controllers\SettingsController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', fn() => redirect()->route('login'));

// Authenticated & Verified Routes
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/home', function () {
        return Inertia::render('Home/Home'); // resources/js/Pages/Home/Home.jsx
    })->name('home');

    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard'); // resources/js/Pages/Dashboard.jsx
    })->name('dashboard');

    Route::get('/analytics', function () {
        return Inertia::render('Analytics/Analytics'); // resources/js/Pages/Analytics/Analytics.jsx
    })->name('analytics');

    Route::get('/settings', function () {
        return Inertia::render('Settings/Settings'); // resources/js/Pages/Settings/Settings.jsx
    })->name('settings');

     Route::get('/barangay-reports', function () {
        return Inertia::render('BarangayReports/BarangayReports'); // resources/js/Pages/Settings/Settings.jsx
    })->name('barangay-reports');

     Route::get('/health-records', function () {
        return Inertia::render('HealthRecords/HealthRecords'); // resources/js/Pages/Settings/Settings.jsx
    })->name('health-records');

     Route::get('/upload', function () {
        return Inertia::render('Upload/Upload'); // resources/js/Pages/Settings/Settings.jsx
    })->name('upload');

    // Profile Routes
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
