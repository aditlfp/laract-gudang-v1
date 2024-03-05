<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class StockResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'tanggal' => $this->tanggal,
            'stock_stuff_id' => $this->stock_stuff_id,
            'kerjsama_id' => $this->kerjsama_id,
            'jumlah' => $this->jumlah,
            'piece_id' => $this->piece_id,
            'approve' => $this->approve,
            'stock_stuff' => $this->stock_stuff,
            'kerjasama' => $this->kerjasama,
            'piece' => $this->piece,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];;
    }
}
