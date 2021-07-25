<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;



class Impact extends Model
{
    protected $table="impacts";
    protected $fillable = [
        'id','impact_content','created_at','updated_at'
    ];
}