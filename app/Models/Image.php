<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;



class Image extends Model
{
    protected $table="image";
    protected $fillable = [
        'image','created_at','updated_at'
    ];
}