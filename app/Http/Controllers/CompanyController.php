<?php
namespace App\Http\Controllers;
use Illuminate\Contracts\Session\Session;
use App\Exports\XxxExport;
use Maatwebsite\Excel\Facades\Excel;
use App\Jobs\SendEmail;
use App\Models\Company;
use Illuminate\Http\Request;
use PDF;
use File;
class CompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return IlluminateHttpResponse
     */
    public function index()
    {
        $companys = Company::all();
        return response()->json($companys);
    }

   

    /**
     * Store a newly created resource in storage.
     *
     * @param  IlluminateHttpRequest  $request
     * @return IlluminateHttpResponse
     */
    public function store(Request $request)
    {
        $company=new Company;
       
        $request->validate([
            'image' => 'required',
            'image.*' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'name' => 'required',
            'content' => 'required',
            'link' =>'required'
        ]);
       // return response()->json(["message" => $request->image]);
        if ($request->hasFile('image'))
        {
              $file      = $request->file('image');        
              $filename  = $file->getClientOriginalName();
              $extension = $file->getClientOriginalExtension();
              $picture   = $filename;
              $file->move('C:\xampp\htdocs\Laravel\Laravel_project\CRUD_API\test\public\assets\img', $picture);
              $company->company_image=$picture;
              $company->company_content=$request->content;
              $company->company_name=$request->name; 
              $company->company_link=$request->link;       
              $company->save();
              return response()->json(["message" => "Upload successfully"]);
        } 
        else
        {
              return response()->json(["message" => "Upload Failed"]);
        }
       // return response()->json(["message" => "Upload Failed"]);
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
        $company= Company::find($id);
        $image=$company->company_image;
        $name=$company->company_name;
        $content=$company->company_content;
        if ($request->name==null){
            $name=$company->company_name;
        }else{
            $name=$request->name;
        }
        if ($request->content==null){
            $content=$company->company_content;
        }else{
            $content=$request->content;
        }
    


        if ($request->hasFile('image'))
        {
              $file      = $request->file('image');
              $filename  = $file->getClientOriginalName();
              $extension = $file->getClientOriginalExtension();
              $picture   = $filename;
              $file->move('C:\xampp\htdocs\Laravel\Laravel_project\CRUD_API\test\public\assets\img', $picture);
              $company->company_image=$picture;
              $company->company_name=$name;
              $company->company_content=$content;      
              $company->save();
              return response()->json(["message" => "Upload successfully"]);
        } 
        else
        {
            $company->company_image=$image;
            $company->company_name=$name;
            $company->company_content=$content;      
            $company->save();
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
        $company= Company::find($id);
        $company->delete();
        return response()->json([
        'message' => $company
    ]);
    }
}