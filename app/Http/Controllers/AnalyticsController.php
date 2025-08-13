<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class AnalyticsController extends Controller
{
    public function index()
    {
        return Inertia::render('Analytics/Analytics'); // resources/js/Pages/Analytics/Index.jsx
    }
}
