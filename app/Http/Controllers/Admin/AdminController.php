<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\PieceResource;
use App\Http\Resources\StockResource as OrderResource;
use App\Http\Resources\StockStuffResource;
use App\Models\OrderStuff;
use App\Models\Piece;
use App\Models\StockStuff;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index()
    {
        $userAuth = Auth::user()->id;
        $user = User::on('mysqlSecond')->where('id', $userAuth)->firstOrFail();

        $orders = OrderStuff::with(['client', 'StockStuff', 'Piece'])->paginate(25);
        $order =  OrderResource::collection($orders);

        $pieces = Piece::orderBy('id', 'desc')->paginate(25);
        $piece = PieceResource::collection($pieces);

        $stockStuffs = StockStuff::orderBy('id', 'desc')->paginate(25);
        $stock = StockStuffResource::collection($stockStuffs);

        return Inertia::render('Admin/Index', compact('user', 'order', 'piece', 'stock'));
    }
}
