<?php
namespace App\Http\Controllers;
use Illuminate\Contracts\Session\Session;
use App\Exports\XxxExport;
use Maatwebsite\Excel\Facades\Excel;
use App\Jobs\SendEmail;
use App\Models\Gallery;

use Illuminate\Http\Request;
use PDF;
use File;
class GalleryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return IlluminateHttpResponse
     */
    public function index()
    {
        $gallery = Gallery::all();
        return response()->json($gallery);
    }
   

    /**
     * Store a newly created resource in storage.
     *
     * @param  IlluminateHttpRequest  $request
     * @return IlluminateHttpResponse
     */
    public function store(Request $request)
    {
         $staffs=new Gallery;
       
        $request->validate([
            'image' => 'required',
            'image.*' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
        if ($request->hasFile('image'))
        {
              $file      = $request->file('image');        
              $filename  = $file->getClientOriginalName();
              $extension = $file->getClientOriginalExtension();
              $picture   = $filename;
              $file->move('C:\xampp\htdocs\Laravel\Laravel_project\CRUD_API\test\public\assets\img', $picture);
              $staffs->gallery_image=$picture;    
              $staffs->save();
              return response()->json(["message" => "Upload successfully"]);
        } 
        else
        {
              return response()->json(["message" => "Upload Failed"]);
        }
        // $data=Expense::all();
        // $pdf = PDF::loadView('pdf_view', $data);
        // return $pdf->download('invoice.pdf');
        // $message = [
        //     'type' => 'Hello Thầy Đình đẹp traiiii!!!',
        //     'thanks' =>$request->name,
        // ];
        // SendEmail::dispatch($message, $request->email)->delay(now()->addMinute(1));
    }
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
        $staffs= Gallery::find($id);
        $image=$staffs->gallery_image;

        if ($request->hasFile('image'))
        {
              $file      = $request->file('image');
              $filename  = $file->getClientOriginalName();
              $extension = $file->getClientOriginalExtension();
              $picture   = $filename;
              $file->move('C:\xampp\htdocs\Laravel\Laravel_project\CRUD_API\test\public\assets\img', $picture);
              $staffs->gallery_image=$picture; 
              $staffs->save();
              return response()->json(["message" => "Upload successfully"]);
        }
        else
        {
            $staffs->gallery_image=$image;
            $staffs->save();
            return response()->json(["message" => "Upload successfully"]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  AppExpense  $expense
     * @return IlluminateHttpResponse
     */
    public function destroy($id)
    {
        $backgrounditems= Gallery::find($id);
        $backgrounditems->delete();
        return response()->json([
        'message' => $backgrounditems
    ]);
    }
}