<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;



class Expense extends Model
{
    protected $table="contact";
    protected $fillable = [
        'name', 'email','image'
    ];
}