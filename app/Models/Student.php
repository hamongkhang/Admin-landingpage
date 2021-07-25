<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;



class Student extends Model
{
    protected $table="student";
    protected $fillable = [
        'id','student_name','student_mess','student_image','created_at','updated_at'
    ];
}