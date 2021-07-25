<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;



class BackgroundItem extends Model
{
    protected $table="backgrounditems";
    protected $fillable = [
        'id','background_item_image','background_item_title','background_item_content','created_at','updated_at'
    ];
}