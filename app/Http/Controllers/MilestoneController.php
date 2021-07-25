<?php
namespace App\Http\Controllers;
use Illuminate\Contracts\Session\Session;
use App\Exports\XxxExport;
use Maatwebsite\Excel\Facades\Excel;
use App\Jobs\SendEmail;
use App\Models\Milestone;

use Illuminate\Http\Request;
use PDF;
use File;
class MilestoneController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return IlluminateHttpResponse
     */
    public function index()
    {
        $milestones = Milestone::all();
        return response()->json($milestones);
    }
   

    /**
     * Store a newly created resource in storage.
     *
     * @param  IlluminateHttpRequest  $request
     * @return IlluminateHttpResponse
     */
    public function store(Request $request)
    {
        $milestones=new Milestone;
       
        $request->validate([
            'title' => 'required',
            'content' => 'required'
        ]);
              $milestones->milestone_content=$request->content;
              $milestones->milestone_year=$request->title;      
              $milestones->save();
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
        $backgrounditems= Milestone::find($id);
        if ($request->title==null){
            $title=$backgrounditems->milestone_year;
        }else{
            $title=$request->title;
        }
        if ($request->content==null){
            $content=$backgrounditems->milestone_content;
        }else{
            $content=$request->content;
        }
    
              $backgrounditems->milestone_year=$title;
              $backgrounditems->milestone_content=$content;      
              $backgrounditems->save();
              return response()->json(["message" => "Upload successfully"]);
    }


    public function destroy($id)
    {
        $backgrounditems= Milestone::find($id);
        $backgrounditems->delete();
        return response()->json([
        'message' => $backgrounditems
    ]);
    }
}