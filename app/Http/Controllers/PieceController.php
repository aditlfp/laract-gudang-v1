<?php

namespace App\Http\Controllers;

use App\Http\Requests\PieceRequest;
use App\Http\Resources\PieceResource;
use App\Models\Piece;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PieceController extends Controller
{
    public function index()
    {
        $pieces = Piece::orderBy('id', 'desc')
            ->paginate(25);

        return Inertia::render('Piece/Index', [
            'pieces' => PieceResource::collection($pieces),
        ]);
    }

    public function create()
    {
        return Inertia::render('Piece/Create');
    }

    public function store(PieceRequest $request)
    {
        $piece = Piece::create($request->validated());

        return redirect()->route('pieces.index');
    }

    public function edit(Piece $piece)
    {
        return Inertia::render('Piece/Edit', [
            'piece' => new PieceResource($piece),
        ]);
    }

    public function update(PieceRequest $request, Piece $piece)
    {
        $piece->update($request->validated());

        return redirect()->route('pieces.index');
    }

    public function destroy(Piece $piece)
    {
        $piece->delete();

        return redirect()->route('pieces.index');
    }
}
