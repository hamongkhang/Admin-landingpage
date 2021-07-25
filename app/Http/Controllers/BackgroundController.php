<?php
namespace App\Http\Controllers;
use Illuminate\Contracts\Session\Session;
use App\Exports\XxxExport;
use Maatwebsite\Excel\Facades\Excel;
use App\Jobs\SendEmail;
use App\Models\Background;
use Illuminate\Http\Request;
use PDF;
use File;
class BackgroundController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return IlluminateHttpResponse
     */
    public function index()
    {
        $backgrounds = Background::all();
        return response()->json($backgrounds);
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
    public function update($id,Request $request)
    {
        $backgrounds= Background::find($id);
        $link=$backgrounds->background_link;
        $title=$backgrounds->background_title;
        $content=$backgrounds->background_content;
        if ($request->title==null){
            $title=$backgrounds->background_title;
        }else{
            $title=$request->title;
        }
        if ($request->content==null){
            $content=$backgrounds->background_content;
        }else{
            $content=$request->content;
        }
        if ($request->link==null){
            $link=$backgrounds->background_link;
        }else{
            $link=$request->link;
        }
       
            $backgrounds->background_link=$link;
            $backgrounds->background_title=$title;
            $backgrounds->background_content=$content;      
            $backgrounds->save();
            return response()->json(["message" => "Upload successfully"]);
       
    }


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