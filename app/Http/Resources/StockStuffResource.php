<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class StockStuffResource extends JsonResource
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
            'nama_barang' => $this->nama_barang,
            'jumlah' => $this->jumlah,
            'piece_id' => $this->piece_id,
            'harga_satuan' => $this->harga_satuan,
            'piece' => $this->piece,
        ];
    }
}
