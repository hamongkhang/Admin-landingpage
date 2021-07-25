<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;



class Status extends Model
{
    protected $table="status";
    protected $fillable = [
        'id','status_mess','status_color','created_at','updated_at'
    ];
}