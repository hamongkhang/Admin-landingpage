<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;



class Login extends Model
{
    protected $table="admin";
    protected $fillable = [
        'id', 'username','password','created_at','updated_at'
    ];
}