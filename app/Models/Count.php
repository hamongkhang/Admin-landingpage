<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;



class Count extends Model
{
    protected $table="count";
    protected $fillable = [
        'id', 'count_1','count_2','count_3','count_4','count_5','count_6','count_7','created_at','updated_at'
    ];
}