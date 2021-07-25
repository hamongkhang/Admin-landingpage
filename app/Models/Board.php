<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;



class Board extends Model
{
    protected $table="board";
    protected $fillable = [
        'id', 'board_name','board_function','created_at','updated_at'
    ];
}