<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    protected $connection ='mysqlSecond';
    protected $table = 'clients';
    use HasFactory;

    protected $fillable = [
        'name',
        'address',
        'province',
        'kabupaten',
        'zipcode',
        'email',
        'phone',
        'fax',
        'logo'
    ];
}
