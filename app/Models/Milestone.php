<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;



class Milestone extends Model
{
    protected $table="milestones";
    protected $fillable = [
        'id', 'milestone_year','milestone_content','created_at','updated_at'
    ];
}