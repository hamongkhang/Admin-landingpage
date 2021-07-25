<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;



class Bangtin extends Model
{
    protected $table="bangtin";
    protected $fillable = [
        'id', 'title','demo','content','image','created_at','updated_at'
    ];
}