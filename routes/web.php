<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\OrderStuffController;
use App\Http\Controllers\PieceController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StockStuffController;
use App\Models\Client;
use App\Models\Kerjsama;
use App\Models\OrderStuff;
use App\Models\Roles;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
   return to_route('login');
});

Route::get('/test', function () 
{
    $eloquentVersion = Auth::user()->role_id;

    dd(Roles::find($eloquentVersion));
});

Route::get('/dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth', 'adm'])->prefix('admin')->group(function () {
    Route::resource('orders', OrderStuffController::class);
    Route::resource('pieces', PieceController::class);
    Route::resource('stock-stuffs', StockStuffController::class);
});

require __DIR__.'/auth.php';
