<?php
namespace App\Http\Controllers;
use Illuminate\Contracts\Session\Session;
use App\Exports\XxxExport;
use Maatwebsite\Excel\Facades\Excel;
use App\Jobs\SendEmail;
use App\Models\BackgroundItem;
use App\Models\Background;
use App\Models\Bangtin;
use App\Models\Expense;
use Illuminate\Http\Request;
use PDF;
use File;
class BangtinController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return IlluminateHttpResponse
     */
    public function index()
    {
        $bangtin = Bangtin::all();
        return response()->json($bangtin);
    }

   

    /**
     * Store a newly created resource in storage.
     *
     * @param  IlluminateHttpRequest  $request
     * @return IlluminateHttpResponse
     */
    public function store(Request $request)
    {
        $backgrounditems=new Bangtin;
       
        $request->validate([
            'image' => 'required',
            'image.*' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'title' => 'required',
            'content' => 'required',
            'demo' => 'required',
            
        ]);
        if ($request->hasFile('image'))
        {
              $file      = $request->file('image');        
              $filename  = $file->getClientOriginalName();
              $extension = $file->getClientOriginalExtension();
              $picture   = $filename;
              $file->move('C:\xampp\htdocs\Laravel\Laravel_project\CRUD_API\test\public\assets\img', $picture);
              $backgrounditems->image=$picture;
              $backgrounditems->content=$request->content;
              $backgrounditems->title=$request->title; 
              $backgrounditems->demo=$request->demo;      
              $backgrounditems->save();


              $data = [
                'title' => 'Thông báo PNV',
                'name' => "HaMongKhang",
                'email' => "hamongkhang@gmail.com",
                'subject' => "Thông báo PNV",
                'message' => "Tin nhắn"
            ];

            $test =  SendEmail::dispatch($data)->delay(now()->addMinute(1));


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
        $backgrounditems= Bangtin::find($id);
        $image=$backgrounditems->image;
        if ($request->title==null){
            $title=$backgrounditems->title;
        }else{
            $title=$request->title;
        }
        if ($request->content==null){
            $content=$backgrounditems->content;
        }else{
            $content=$request->content;
        }
        if ($request->demo==null){
            $demo=$backgrounditems->demo;
        }else{
            $demo=$request->demo;
        }


        if ($request->hasFile('image'))
        {
              $file      = $request->file('image');
              $filename  = $file->getClientOriginalName();
              $extension = $file->getClientOriginalExtension();
              $picture   = $filename;
              $file->move('C:\xampp\htdocs\Laravel\Laravel_project\CRUD_API\test\public\assets\img', $picture);
              $backgrounditems->image=$picture;
              $backgrounditems->title=$title;
              $backgrounditems->content=$content;  
              $backgrounditems->demo=$demo;      
              $backgrounditems->save();
              return response()->json(["message" => "Upload successfully"]);
        }
        else
        {
            $backgrounditems->image=$image;
            $backgrounditems->title=$title;
            $backgrounditems->content=$content;  
            $backgrounditems->demo=$demo;         
            $backgrounditems->save();
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
        $backgrounditems= Bangtin::find($id);
        $backgrounditems->delete();
        return response()->json([
        'message' => $backgrounditems
    ]);
    }
}