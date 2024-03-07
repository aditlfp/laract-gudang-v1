<?php

namespace App\Http\Controllers;

use App\Models\OrderStuff;
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

        $order = OrderStuff::orderBy('created_at' , 'desc')->with(['client', 'stock_stuff', 'piece'])->get();
        return Inertia::render('Dashboard', compact('user', 'order'));
    }
}
