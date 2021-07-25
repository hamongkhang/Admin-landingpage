<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;



class Company extends Model
{
    protected $table="company";
    protected $fillable = [
     'id','company_name','company_image','company_content','company_link','created_at','updated_at'
    ];
}