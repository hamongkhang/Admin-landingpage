<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;



class Thongbao extends Model
{
    protected $table="thongbao";
    protected $fillable = [
        'id', 'name','content','created_at','updated_at'
    ];
}