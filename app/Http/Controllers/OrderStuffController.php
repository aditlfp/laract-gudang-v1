<?php

namespace App\Http\Controllers;

use App\Http\Requests\StockRequest as OrderRequest;
use App\Http\Resources\StockResource as OrderResource;
use App\Models\OrderStuff as Order;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderStuffController extends Controller
{
    public function index()
    {
        $orders = Order::orderBy('id', 'desc')
            ->paginate(25);

        return Inertia::render('Order/Index', [
            'orders' => OrderResource::collection($orders),
        ]);
    }

    public function create()
    {
        return Inertia::render('Order/Create');
    }

    public function store(OrderRequest $request)
    {
        $order = Order::create($request->validated());

        return redirect()->route('orders.index');
    }

    public function edit(Order $order)
    {
        return Inertia::render('Order/Edit', [
            'order' => new OrderResource($order),
        ]);
    }

    public function update(OrderRequest $request, Order $order)
    {
        $order->update($request->validated());

        return redirect()->route('orders.index');
    }

    public function destroy(Order $order)
    {
        $order->delete();

        return redirect()->route('orders.index');
    }
}
