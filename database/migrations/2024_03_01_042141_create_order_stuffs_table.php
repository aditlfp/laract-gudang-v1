<?php

use App\Models\Client;
use App\Models\Kerjsama;
use App\Models\Piece;
use App\Models\StockStuff;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('order_stuffs', function (Blueprint $table) {
            $table->id();
            $table->string('tanggal');
            $table->foreignIdFor(StockStuff::class);
            $table->foreignIdFor(Client::class);
            $table->string('jumlah');
            $table->foreignIdFor(Piece::class);
            $table->string('approve')->default('waiting');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order_stuffs');
    }
};
