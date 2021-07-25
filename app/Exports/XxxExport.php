<?php

namespace App\Exports;

use App\Xxx;
use Maatwebsite\Excel\Concerns\FromCollection;

class XxxExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return Xxx::all();
    }
}
