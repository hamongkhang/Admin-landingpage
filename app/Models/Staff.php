<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;



class Staff extends Model
{
    protected $table="staff";
    protected $fillable = [
        'id','staff_image','staff_name','staff_function','staff_facebook','staff_email','staff_phone','admission_content','created_at','updated_at'
    ];
}