<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;



class Gallery extends Model
{
    protected $table="gallery";
    protected $fillable = [
        'id','gallery_image','created_at','updated_at'
    ];
}