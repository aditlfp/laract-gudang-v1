<?php

namespace App\Http\Controllers;

use App\Http\Requests\StockStuffRequest;
use App\Http\Resources\StockStuffResource;
use App\Models\StockStuff;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StockStuffController extends Controller
{
    public function index()
    {
        $stockStuffs = StockStuff::orderBy('id', 'desc')
            ->paginate(25);

        return Inertia::render('StockStuff/Index', [
            'stockStuffs' => StockStuffResource::collection($stockStuffs),
        ]);
    }

    public function create()
    {
        return Inertia::render('StockStuff/Create');
    }

    public function store(StockStuffRequest $request)
    {
        $stockStuff = StockStuff::create($request->validated());

        return redirect()->route('stock-stuffs.index');
    }

    public function edit(StockStuff $stockStuff)
    {
        return Inertia::render('StockStuff/Edit', [
            'stockStuff' => new StockStuffResource($stockStuff),
        ]);
    }

    public function update(StockStuffRequest $request, StockStuff $stockStuff)
    {
        $stockStuff->update($request->validated());

        return redirect()->route('stock-stuffs.index');
    }

    public function destroy(StockStuff $stockStuff)
    {
        $stockStuff->delete();

        return redirect()->route('stock-stuffs.index');
    }
}
