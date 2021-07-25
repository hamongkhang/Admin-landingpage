<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;



class Localcompany extends Model
{
    protected $table="localcompany";
    protected $fillable = [
        'id','localcompany_image','localcompany_link','created_at','updated_at'
    ];
}