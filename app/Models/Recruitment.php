<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;



class Recruitment extends Model
{
    protected $table="recruitment";
    protected $fillable = [
        'id','organisation','reporting','status','location','background','responsibility','skill','language','created_at','updated_at'
    ];
}