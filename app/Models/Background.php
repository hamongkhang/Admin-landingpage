<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;



class Background extends Model
{
    protected $table="backgrounds";
    protected $fillable = [
        'id', 'background_title','background_content','created_at','updated_at'
    ];
}