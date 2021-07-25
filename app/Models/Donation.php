<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;



class Donation extends Model
{
    protected $table="donation";
    protected $fillable = [
        'id','companyName','name','email','lastName','phone','address1','address2','address3','money','birthday','created_at','updated_at'
    ];
}