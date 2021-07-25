<?php
namespace App\Http\Controllers;
use Illuminate\Contracts\Session\Session;
use App\Exports\XxxExport;
use Maatwebsite\Excel\Facades\Excel;
use App\Jobs\SendEmail;
use App\Models\Student;

use Illuminate\Http\Request;
use PDF;
use File;
class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return IlluminateHttpResponse
     */
    public function index()
    {
        $student = Student::all();
        return response()->json($student);
    }
   

    /**
     * Store a newly created resource in storage.
     *
     * @param  IlluminateHttpRequest  $request
     * @return IlluminateHttpResponse
     */
    public function store(Request $request)
    {
        $staffs=new Student;
       
        $request->validate([
            'image' => 'required',
            'image.*' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'name' => 'required',
            'function' => 'required',
        ]);
        if ($request->hasFile('image'))
        {
              $file      = $request->file('image');        
              $filename  = $file->getClientOriginalName();
              $extension = $file->getClientOriginalExtension();
              $picture   = $filename;
              $file->move('C:\xampp\htdocs\Laravel\Laravel_project\CRUD_API\test\public\assets\img', $picture);
              $staffs->student_image=$picture;
              $staffs->student_mess=$request->function;
              $staffs->student_name=$request->name;      
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
        $staffs= Student::find($id);
        $image=$staffs->student_image;
        $function=$staffs->student_mess;
        $name=$staffs->student_name;
        if ($request->name==null){
            $name=$staffs->student_name;
        }else{
            $name=$request->name;
        }
        

        if ($request->function==null){
            $function=$staffs->student_mess;
        }else{
            $function=$request->function;
        }

        if ($request->hasFile('image'))
        {
              $file      = $request->file('image');
              $filename  = $file->getClientOriginalName();
              $extension = $file->getClientOriginalExtension();
              $picture   = $filename;
              $file->move('C:\xampp\htdocs\Laravel\Laravel_project\CRUD_API\test\public\assets\img', $picture);
              $staffs->student_image=$picture;
              $staffs->student_name=$name;
              $staffs->student_mess=$function; 
              $staffs->save();
              return response()->json(["message" => "Upload successfully"]);
        }
        else
        {
            $staffs->student_image=$image;
            $staffs->student_name=$name;
            $staffs->student_mess=$function; 
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
        $backgrounditems= Student::find($id);
        $backgrounditems->delete();
        return response()->json([
        'message' => $backgrounditems
    ]);
    }
}