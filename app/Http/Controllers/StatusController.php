<?php
namespace App\Http\Controllers;
use Illuminate\Contracts\Session\Session;
use App\Exports\XxxExport;
use Maatwebsite\Excel\Facades\Excel;
use App\Jobs\SendEmail;
use App\Models\Status;

use Illuminate\Http\Request;
use PDF;
use File;
class StatusController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return IlluminateHttpResponse
     */
    public function index()
    {
        $status = Status::all();
        return response()->json($status);
    }
   

    /**
     * Store a newly created resource in storage.
     *
     * @param  IlluminateHttpRequest  $request
     * @return IlluminateHttpResponse
     */
    // public function store(Request $request)
    // {
    //     $expenses=new Expense;
       
    //     $request->validate([
    //         'image' => 'required',
    //         'image.*' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048'
    //     ]);
    //     if ($request->hasFile('image'))
    //     {
    //           $file      = $request->file('image');
    //           $filename  = $file->getClientOriginalName();
    //           $extension = $file->getClientOriginalExtension();
    //           $picture   = date('His').'-'.$filename;
    //           $file->move(public_path('img'), $picture);
    //           $expenses->image=$picture;
    //           $expenses->name=$request->name;
    //           $expenses->email=$request->email;      
    //           $expenses->save();
    //           return response()->json(["message" => "Upload successfully"]);
    //     } 
    //     else
    //     {
    //           return response()->json(["message" => "Upload Failed"]);
    //     }
    //     $data=Expense::all();
    //     $pdf = PDF::loadView('pdf_view', $data);
    //     return $pdf->download('invoice.pdf');
    //     $message = [
    //         'type' => 'Hello Thầy Đình đẹp traiiii!!!',
    //         'thanks' =>$request->name,
    //     ];
    //     SendEmail::dispatch($message, $request->email)->delay(now()->addMinute(1));
    // }
    // public function createPDF() {
    //     // retreive all records from db
    //     $data = Expense::all();
  
    //     // share data to view

    //     $pdf = PDF::loadView('pdf_view', $data);
  
    //     // download PDF file with download method
    //     return $pdf->download('pdf_file.pdf');
    //   }

    // public function show(Expense $expense)
    // {
    //     return $expense;
    // }

    // /**
    //  * Show the form for editing the specified resource.
    //  *
    //  * @param  AppExpense  $expense
    //  * @return IlluminateHttpResponse
    //  */

    // /**
    //  * Update the specified resource in storage.
    //  *
    //  * @param  IlluminateHttpRequest  $request
    //  * @param  AppExpense  $expense
    //  * @return IlluminateHttpResponse
    //  */
    // public function update(Expense $expense,Request $request)
    // {
    //     $image=$expense->image;
    //     if ($request->hasFile('image'))
    //     {
    //           $file      = $request->file('image');
    //           $filename  = $file->getClientOriginalName();
    //           $extension = $file->getClientOriginalExtension();
    //           $picture   = date('His').'-'.$filename;
    //           $file->move(public_path('img'), $picture);
    //           $expense->image=$picture;
    //           $expense->name=$request->name;
    //           $expense->email=$request->email;      
    //           $expense->save();
    //           return response()->json(["message" => "Upload successfully"]);
    //     } 
    //     else
    //     {
    //         $expense->image=$image;
    //         $expense->name=$request->name;
    //         $expense->email=$request->email;      
    //         $expense->save();
    //           return response()->json(["message" => $request->email]);
    //     }
           
    // }

    // /**
    //  * Remove the specified resource from storage.
    //  *
    //  * @param  AppExpense  $expense
    //  * @return IlluminateHttpResponse
    //  */
    // public function destroy(Expense $expense)
    // {
    //    $expense->delete();
    //   return response()->json([
    //     'message' => "Delete successfully"
    // ]);
    // }
}