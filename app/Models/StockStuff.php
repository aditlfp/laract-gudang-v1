<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StockStuff extends Model
{
    use HasFactory;

    protected $fillable = [
        'nama_barang',
        'jumlah',
        'piece_id',
        'harga_satuan'
    ];

    public function Piece()
    {
        return $this->belongsTo(Piece::class);
    }
}
