<?php

namespace App\Http\Controllers;

use App\Exports\XxxExport;
use Maatwebsite\Excel\Facades\Excel;

class XxxController extends Controller 
{
    public function export() 
    {
        return Excel::download(new XxxExport, 'xxxx.xlsx'); //download file export
        return Excel::store(new XxxExport, 'xxxx.xlsx', 'disk-name'); //lưu file export trên ổ cứng
    }
}