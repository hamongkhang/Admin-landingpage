<?php
namespace App\Http\Controllers;
use Illuminate\Contracts\Session\Session;
use App\Exports\XxxExport;
use Maatwebsite\Excel\Facades\Excel;
use App\Jobs\SendEmail;
use App\Models\Login;
use App\Models\Thongbao;
use Illuminate\Http\Request;
use PDF;
use File;
class LoginController extends Controller
{
    
    /**
     * Display a listing of the resource.
     *
     * @return IlluminateHttpResponse
     */
    public function index()
    {
        $login = Login::all();
        return response()->json($login);
    }
    public function indexThongbao()
    {
        $login = Thongbao::all();
        return response()->json($login);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  IlluminateHttpRequest  $request
     * @return IlluminateHttpResponse
     */
    public function store(Request $request)
    {
        $login=new Login;
       
        $request->validate([
            'username' => 'required',
            'password' => 'required',
        ]);
        if(($request->username==="hamongkhang@gmail.com") && ($request->password==="123456789"))
        {
              $login->username=$request->username; 
              $login->id=1; 
              $login->password=$request->password;     
              $login->save();
              return response()->json(["message" => "Login successfully"]);
        }
        else{
            return response()->json(["message" => "Login Failed"]);
        }
    }
        
        public function destroy($id)
        {
            $backgrounditems= Login::find($id);
            $backgrounditems->delete();
            return response()->json([
            'message' => $backgrounditems
        ]);
        }
    
}