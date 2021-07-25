<?php
namespace App\Http\Controllers;
use Illuminate\Contracts\Session\Session;
use App\Exports\XxxExport;
use Maatwebsite\Excel\Facades\Excel;
use App\Jobs\SendEmail;
use App\Models\Recruitment;

use Illuminate\Http\Request;
use PDF;
use File;
class RecruitmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return IlluminateHttpResponse
     */
    public function index()
    {
        $recruitment = Recruitment::all();
        return response()->json($recruitment);
    }
   

    /**
     * Store a newly created resource in storage.
     *
     * @param  IlluminateHttpRequest  $request
     * @return IlluminateHttpResponse
     */
    public function store(Request $request)
    {
        $count=new Recruitment;
       
        $request->validate([
            'count_1' => 'required',
            'count_2' => 'required',
            'count_3' => 'required',
            'count_4' => 'required',
            'count_5' => 'required',
            'count_6' => 'required',
            'count_7' => 'required',
            'count_8' => 'required',
        ]);
              $count->organisation=$request->count_1; 
              $count->reporting=$request->count_2;      
              $count->status=$request->count_3; 
              $count->location=$request->count_4; 
              $count->background=$request->count_5; 
              $count->responsibility=$request->count_6; 
              $count->skill=$request->count_7; 
              $count->language=$request->count_8; 
              $count->save();
              return response()->json(["message" => "Upload successfully"]);
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
    public function update($id,Request $request)
    {
        $count= Recruitment::find($id);
        if ($request->count_1==null){
            $count_1=$count->organisation;
        }else{
            $count_1=$request->count_1;
        }

        if ($request->count_2==null){
            $count_2=$count->reporting;
        }else{
            $count_2=$request->count_2;
        }

        if ($request->count_3==null){
            $count_3=$count->status;
        }else{
            $count_3=$request->count_3;
        }
        
        if ($request->count_4==null){
            $count_4=$count->location;
        }else{
            $count_4=$request->count_4;
        }
        
        if ($request->count_5==null){
            $count_5=$count->background;
        }else{
            $count_5=$request->count_5;
        }
        
        if ($request->count_6==null){
            $count_6=$count->responsibility;
        }else{
            $count_6=$request->count_6;
        }
        
        if ($request->count_7==null){
            $count_7=$count->skill;
        }else{
            $count_7=$request->count_7;
        }
        if ($request->count_8==null){
            $count_8=$count->language;
        }else{
            $count_8=$request->count_8;
        }
    
              $count->organisation=$count_1;    
              $count->reporting=$count_2;     
              $count->status=$count_3;      
              $count->location=$count_4;     
              $count->background=$count_5;     
              $count->responsibility=$count_6;     
              $count->skill=$count_7;    
              $count->language=$count_8;  
              $count->save();
              return response()->json(["message" => "Upload successfully"]);
    }


    public function destroy($id)
    {
        $count= Recruitment::find($id);
        $count->delete();
        return response()->json([
        'message' => $count
    ]);
    }
}