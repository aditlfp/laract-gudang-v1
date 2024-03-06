<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $userAuth = Auth::user()->id;
        $user = User::on('mysqlSecond')->where('id', $userAuth)->firstOrFail();
        return Inertia::render('Dashboard', ['user' => $user]);
    }
}
