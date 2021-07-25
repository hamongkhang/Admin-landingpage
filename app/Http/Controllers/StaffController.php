<?php
namespace App\Http\Controllers;
use Illuminate\Contracts\Session\Session;
use App\Exports\XxxExport;
use Maatwebsite\Excel\Facades\Excel;
use App\Jobs\SendEmail;
use App\Models\Staff;

use Illuminate\Http\Request;
use PDF;
use File;
class StaffController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return IlluminateHttpResponse
     */
    public function index()
    {
        $staff = Staff::all();
        return response()->json($staff);
    }
   

    /**
     * Store a newly created resource in storage.
     *
     * @param  IlluminateHttpRequest  $request
     * @return IlluminateHttpResponse
     */
    public function store(Request $request)
    {
        $staffs=new Staff;
       
        $request->validate([
            'image' => 'required',
            'image.*' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'name' => 'required',
            'email' => 'required',
            'function' => 'required',
            'phone' => 'required',
            'facebook' => 'required',
        ]);
        if ($request->hasFile('image'))
        {
              $file      = $request->file('image');        
              $filename  = $file->getClientOriginalName();
              $extension = $file->getClientOriginalExtension();
              $picture   = $filename;
              $file->move('C:\xampp\htdocs\Laravel\Laravel_project\CRUD_API\test\public\assets\img', $picture);
              $staffs->staff_image=$picture;
              $staffs->staff_function=$request->function;
              $staffs->staff_phone=$request->phone; 
              $staffs->staff_email=$request->email; 
              $staffs->staff_facebook=$request->facebook; 
              $staffs->staff_name=$request->name;      
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
        $staffs= Staff::find($id);
        $image=$staffs->staff_image;
        $function=$staffs->staff_function;
        $name=$staffs->staff_name;
        $phone=$staffs->staff_phone;
        $email=$staffs->staff_email;
        $facebook=$staffs->staff_facebook;
        if ($request->name==null){
            $name=$staffs->staff_name;
        }else{
            $name=$request->name;
        }
        if ($request->email==null){
            $email=$staffs->staff_email;
        }else{
            $email=$request->email;
        }

        if ($request->function==null){
            $function=$staffs->staff_function;
        }else{
            $function=$request->function;
        }

        if ($request->phone==null){
            $phone=$staffs->staff_phone;
        }else{
            $phone=$request->phone;
        }
        
        if ($request->facebook==null){
            $facebook=$staffs->staff_facebook;
        }else{
            $facebook=$request->facebook;
        }
    


        if ($request->hasFile('image'))
        {
              $file      = $request->file('image');
              $filename  = $file->getClientOriginalName();
              $extension = $file->getClientOriginalExtension();
              $picture   = $filename;
              $file->move('C:\xampp\htdocs\Laravel\Laravel_project\CRUD_API\test\public\assets\img', $picture);
              $staffs->staff_image=$picture;
              $staffs->staff_name=$name;
              $staffs->staff_function=$function; 
              $staffs->staff_phone=$phone;      
              $staffs->staff_email=$email; 
              $staffs->staff_facebook=$facebook; 
              $staffs->save();
              return response()->json(["message" => "Upload successfully"]);
        }
        else
        {
            $staffs->staff_image=$image;
            $staffs->staff_name=$name;
            $staffs->staff_function=$function; 
            $staffs->staff_phone=$phone;      
            $staffs->staff_email=$email; 
            $staffs->staff_facebook=$facebook;       
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
        $backgrounditems= Staff::find($id);
        $backgrounditems->delete();
        return response()->json([
        'message' => $backgrounditems
    ]);
    }
}