<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderStuff extends Model
{ 
    use HasFactory;

    protected $fillable = [
        'tanggal',
        'stock_stuff_id',
        'client_id',
        'jumlah',
        'piece_id',
        'approve'
    ];

    public function StockStuff()
    {
        return $this->belongsTo(StockStuff::class);
    }

    public function Piece()
    {
        return $this->belongsTo(Piece::class);
    }

    public function Client()
    {
        return $this->belongsTo(Client::class);
    }
}
