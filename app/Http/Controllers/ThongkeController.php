<?php
namespace App\Http\Controllers;
use Illuminate\Contracts\Session\Session;
use App\Exports\XxxExport;
use Maatwebsite\Excel\Facades\Excel;
use App\Jobs\SendEmail;
use App\Models\Admission;
use App\Models\Bangtin;
use App\Models\Company;
use App\Models\Donation;
use App\Models\Client;
use Illuminate\Http\Request;
use PDF;
use File;
use Carbon\Carbon;
class ThongkeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return IlluminateHttpResponse
     */
    public function index()
    {
      


        $thu = Carbon::now()->dayOfWeek+1;
        $ngay = Carbon::now();
        if($thu===2){
            $thu2=$ngay;
            $thu3=$ngay->addDays(1);
            $thu4=$ngay->addDays(2);
            $thu5=$ngay->addDays(3);
            $thu6=$ngay->addDays(4);
            $thu7=$ngay->addDays(5);
            $thu8=$ngay->addDays(6);
        } 
        else if($thu===3){
            $thu2=$ngay->subDays(1);$ngay = Carbon::now();
            $thu3=$ngay;$ngay = Carbon::now();
            $thu4=$ngay->addDays(1);$ngay = Carbon::now();
            $thu5=$ngay->addDays(2);$ngay = Carbon::now();
            $thu6=$ngay->addDays(3);$ngay = Carbon::now();
            $thu7=$ngay->addDays(4);$ngay = Carbon::now();
            $thu8=$ngay->addDays(5);$ngay = Carbon::now();
        }else if($thu===4){
            $thu2=$ngay->subDays(2);$ngay = Carbon::now();
            $thu3=$ngay->subDays(1);$ngay = Carbon::now();
            $thu4=$ngay;$ngay = Carbon::now();
            $thu5=$ngay->addDays(1);$ngay = Carbon::now();
            $thu6=$ngay->addDays(2);$ngay = Carbon::now();
            $thu7=$ngay->addDays(3);$ngay = Carbon::now();
            $thu8=$ngay->addDays(4);$ngay = Carbon::now();
        } else if($thu===5){
            $thu2=$ngay->subDays(3);$ngay = Carbon::now();
            $thu3=$ngay->subDays(2);$ngay = Carbon::now();
            $thu4=$ngay->subDays(1);$ngay = Carbon::now();
            $thu5=$ngay;
            $thu6=$ngay->addDays(1);$ngay = Carbon::now();
            $thu7=$ngay->addDays(2);$ngay = Carbon::now();
            $thu8=$ngay->addDays(3);$ngay = Carbon::now();
        } else if($thu===6){
            $thu2=$ngay->subDays(4);$ngay = Carbon::now();
            $thu3=$ngay->subDays(3);$ngay = Carbon::now();
            $thu4=$ngay->subDays(2);$ngay = Carbon::now();
            $thu5=$ngay->subDays(1);$ngay = Carbon::now();
            $thu6=$ngay;$ngay = Carbon::now();
            $thu7=$ngay->addDays(1);$ngay = Carbon::now();
            $thu8=$ngay->addDays(2);$ngay = Carbon::now();
        } else if($thu===7){
            $thu2=$ngay->subDays(5);$ngay = Carbon::now();
            $thu3=$ngay->subDays(3);$ngay = Carbon::now();
            $thu4=$ngay->subDays(3);$ngay = Carbon::now();
            $thu5=$ngay->subDays(2);$ngay = Carbon::now();
            $thu6=$ngay->subDays(1);$ngay = Carbon::now();
            $thu7=$ngay;$ngay = Carbon::now();
            $thu8=$ngay->addDays(1);$ngay = Carbon::now();
        }else{
            $thu2=$ngay->subDays(6);$ngay = Carbon::now();
            $thu3=$ngay->subDays(5);$ngay = Carbon::now();
            $thu4=$ngay->subDays(4);$ngay = Carbon::now();
            $thu5=$ngay->subDays(3);$ngay = Carbon::now();
            $thu6=$ngay->subDays(2);$ngay = Carbon::now();
            $thu7=$ngay->subDays(1);$ngay = Carbon::now();
            $thu8=$ngay;$ngay = Carbon::now();
        }
        $user2 = Donation::whereDate('created_at', $thu2)->get();
        $user3 = Donation::whereDate('created_at', $thu3)->get();
        $user4 = Donation::whereDate('created_at', $thu4)->get();
        $user5 = Donation::whereDate('created_at', $thu5)->get();
        $user6 = Donation::whereDate('created_at', $thu6)->get();
        $user7 = Donation::whereDate('created_at', $thu7)->get();
        $user8 = Donation::whereDate('created_at', $thu8)->get();
        $dem2=$user2->sum('money');
        $dem3=$user3->sum('money');
        //$dem3=$user3->sum('money');
        $dem4=$user4->sum('money');
        $dem5=$user5->sum('money');
        $dem6=$user6->sum('money');
        $dem7=$user7->sum('money');
        $dem8=$user8->sum('money');
        $sum=$dem2+$dem3+$dem4+$dem5+$dem6+$dem7+$dem8;
        $countBangtin = Bangtin::count();
        $countCompany= Company::count();
        $countClient= Client::count();
        $countDonation= Donation::count();
        $month1 = Donation::whereMonth('created_at', 1)->get();
        $month2 = Donation::whereMonth('created_at', 2)->get();
        $month3 = Donation::whereMonth('created_at', 3)->get();
        $month4 = Donation::whereMonth('created_at', 4)->get();
        $month5 = Donation::whereMonth('created_at', 5)->get();
        $month6 = Donation::whereMonth('created_at', 6)->get();
        $month7 = Donation::whereMonth('created_at', 7)->get();
        $month8 = Donation::whereMonth('created_at', 8)->get();
        $month9 = Donation::whereMonth('created_at', 9)->get();
        $month10 = Donation::whereMonth('created_at', 10)->get();
        $month11 = Donation::whereMonth('created_at', 11)->get();
        $month12 = Donation::whereMonth('created_at', 12)->get();
        $demmonth1=$month1->sum('money');
        $demmonth2=$month2->sum('money');
        $demmonth3=$month3->sum('money');
        $demmonth4=$month4->sum('money');
        $demmonth5=$month5->sum('money');
        $demmonth6=$month6->sum('money');
        $demmonth7=$month7->sum('money');
        $demmonth8=$month8->sum('money');
        $demmonth9=$month9->sum('money');
        $demmonth10=$month10->sum('money');
        $demmonth11=$month11->sum('money');
        $demmonth12=$month12->sum('money');
$sum2=$demmonth1+$demmonth2+$demmonth3+$demmonth4+$demmonth5+$demmonth6+$demmonth7+$demmonth8+$demmonth9+$demmonth10+$demmonth11+$demmonth12;

$nay = Donation::whereDate('created_at', Carbon::now())->get();
$demtien=$nay->sum('money');
        return response()->json([$countBangtin,$countCompany,$countClient,$dem2,$dem3,$dem4,$dem5,$dem6,$dem7,$dem8,$sum,$demmonth1,$demmonth2,$demmonth3,$demmonth4,$demmonth5,$demmonth6,$demmonth7,$demmonth8,$demmonth9,$demmonth10,$demmonth11,$demmonth12,$sum2,$demtien,$countDonation]);
    }
    public function indexClient()
    {
        $countClient= Client::count();
        $clients = Client::all();
        return response()->json($clients);
    }


    public function indexCount()
    {
      


        $thu = Carbon::now()->dayOfWeek+1;
        $ngay = Carbon::now();
        if($thu===2){
            $thu2=$ngay;
            $thu3=$ngay->addDays(1);
            $thu4=$ngay->addDays(2);
            $thu5=$ngay->addDays(3);
            $thu6=$ngay->addDays(4);
            $thu7=$ngay->addDays(5);
            $thu8=$ngay->addDays(6);
        } 
        else if($thu===3){
            $thu2=$ngay->subDays(1);$ngay = Carbon::now();
            $thu3=$ngay;$ngay = Carbon::now();
            $thu4=$ngay->addDays(1);$ngay = Carbon::now();
            $thu5=$ngay->addDays(2);$ngay = Carbon::now();
            $thu6=$ngay->addDays(3);$ngay = Carbon::now();
            $thu7=$ngay->addDays(4);$ngay = Carbon::now();
            $thu8=$ngay->addDays(5);$ngay = Carbon::now();
        }else if($thu===4){
            $thu2=$ngay->subDays(2);$ngay = Carbon::now();
            $thu3=$ngay->subDays(1);$ngay = Carbon::now();
            $thu4=$ngay;$ngay = Carbon::now();
            $thu5=$ngay->addDays(1);$ngay = Carbon::now();
            $thu6=$ngay->addDays(2);$ngay = Carbon::now();
            $thu7=$ngay->addDays(3);$ngay = Carbon::now();
            $thu8=$ngay->addDays(4);$ngay = Carbon::now();
        } else if($thu===5){
            $thu2=$ngay->subDays(3);$ngay = Carbon::now();
            $thu3=$ngay->subDays(2);$ngay = Carbon::now();
            $thu4=$ngay->subDays(1);$ngay = Carbon::now();
            $thu5=$ngay;
            $thu6=$ngay->addDays(1);$ngay = Carbon::now();
            $thu7=$ngay->addDays(2);$ngay = Carbon::now();
            $thu8=$ngay->addDays(3);$ngay = Carbon::now();
        } else if($thu===6){
            $thu2=$ngay->subDays(4);$ngay = Carbon::now();
            $thu3=$ngay->subDays(3);$ngay = Carbon::now();
            $thu4=$ngay->subDays(2);$ngay = Carbon::now();
            $thu5=$ngay->subDays(1);$ngay = Carbon::now();
            $thu6=$ngay;$ngay = Carbon::now();
            $thu7=$ngay->addDays(1);$ngay = Carbon::now();
            $thu8=$ngay->addDays(2);$ngay = Carbon::now();
        } else if($thu===7){
            $thu2=$ngay->subDays(5);$ngay = Carbon::now();
            $thu3=$ngay->subDays(3);$ngay = Carbon::now();
            $thu4=$ngay->subDays(3);$ngay = Carbon::now();
            $thu5=$ngay->subDays(2);$ngay = Carbon::now();
            $thu6=$ngay->subDays(1);$ngay = Carbon::now();
            $thu7=$ngay;$ngay = Carbon::now();
            $thu8=$ngay->addDays(1);$ngay = Carbon::now();
        }else{
            $thu2=$ngay->subDays(6);$ngay = Carbon::now();
            $thu3=$ngay->subDays(5);$ngay = Carbon::now();
            $thu4=$ngay->subDays(4);$ngay = Carbon::now();
            $thu5=$ngay->subDays(3);$ngay = Carbon::now();
            $thu6=$ngay->subDays(2);$ngay = Carbon::now();
            $thu7=$ngay->subDays(1);$ngay = Carbon::now();
            $thu8=$ngay;$ngay = Carbon::now();
        }
        $user2 = Donation::whereDate('created_at', $thu2)->get();
        $user3 = Donation::whereDate('created_at', $thu3)->get();
        $user4 = Donation::whereDate('created_at', $thu4)->get();
        $user5 = Donation::whereDate('created_at', $thu5)->get();
        $user6 = Donation::whereDate('created_at', $thu6)->get();
        $user7 = Donation::whereDate('created_at', $thu7)->get();
        $user8 = Donation::whereDate('created_at', $thu8)->get();
        $dem2=$user2->count();
        $dem3=$user3->count();
        //$dem3=$user3->sum('id');
        $dem4=$user4->count();
        $dem5=$user5->count();
        $dem6=$user6->count();
        $dem7=$user7->count();
        $dem8=$user8->count();
        $sum=$dem2+$dem3+$dem4+$dem5+$dem6+$dem7+$dem8;
        $countBangtin = Bangtin::count();
        $countCompany= Company::count();
        $countClient= Client::count();
        $month1 = Donation::whereMonth('created_at', 1)->get();
        $month2 = Donation::whereMonth('created_at', 2)->get();
        $month3 = Donation::whereMonth('created_at', 3)->get();
        $month4 = Donation::whereMonth('created_at', 4)->get();
        $month5 = Donation::whereMonth('created_at', 5)->get();
        $month6 = Donation::whereMonth('created_at', 6)->get();
        $month7 = Donation::whereMonth('created_at', 7)->get();
        $month8 = Donation::whereMonth('created_at', 8)->get();
        $month9 = Donation::whereMonth('created_at', 9)->get();
        $month10 = Donation::whereMonth('created_at', 10)->get();
        $month11 = Donation::whereMonth('created_at', 11)->get();
        $month12 = Donation::whereMonth('created_at', 12)->get();
        $demmonth1=$month1->count();
        $demmonth2=$month2->count();
        $demmonth3=$month3->count();
        $demmonth4=$month4->count();
        $demmonth5=$month5->count();
        $demmonth6=$month6->count();
        $demmonth7=$month7->count();
        $demmonth8=$month8->count();
        $demmonth9=$month9->count();
        $demmonth10=$month10->count();
        $demmonth11=$month11->count();
        $demmonth12=$month12->count();
$sum2=$demmonth1+$demmonth2+$demmonth3+$demmonth4+$demmonth5+$demmonth6+$demmonth7+$demmonth8+$demmonth9+$demmonth10+$demmonth11+$demmonth12;
$nay = Client::whereDate('created_at', Carbon::now())->get();
$demtien=$nay->count();
        return response()->json([$countBangtin,$countCompany,$countClient,$dem2,$dem3,$dem4,$dem5,$dem6,$dem7,$dem8,$sum,$demmonth1,$demmonth2,$demmonth3,$demmonth4,$demmonth5,$demmonth6,$demmonth7,$demmonth8,$demmonth9,$demmonth10,$demmonth11,$demmonth12,$sum2,$demtien]);
    }
   




    public function thongkeThang()
    {
        $countClient= Client::count();
        $clients = Client::all();
        return response()->json($clients);
    }
    public function createPDF() {
        $countBangtin = Bangtin::count();
        $countCompany= Company::count();
        $countClient= Client::count();
        $thu = Carbon::now()->dayOfWeek+1;
        $ngay = Carbon::now();
        if($thu===2){
            $thu2=$ngay;
            $thu3=$ngay->addDays(1);
            $thu4=$ngay->addDays(2);
            $thu5=$ngay->addDays(3);
            $thu6=$ngay->addDays(4);
            $thu7=$ngay->addDays(5);
            $thu8=$ngay->addDays(6);
        } 
        else if($thu===3){
            $thu2=$ngay->subDays(1);$ngay = Carbon::now();
            $thu3=$ngay;$ngay = Carbon::now();
            $thu4=$ngay->addDays(1);$ngay = Carbon::now();
            $thu5=$ngay->addDays(2);$ngay = Carbon::now();
            $thu6=$ngay->addDays(3);$ngay = Carbon::now();
            $thu7=$ngay->addDays(4);$ngay = Carbon::now();
            $thu8=$ngay->addDays(5);$ngay = Carbon::now();
        }else if($thu===4){
            $thu2=$ngay->subDays(2);$ngay = Carbon::now();
            $thu3=$ngay->subDays(1);$ngay = Carbon::now();
            $thu4=$ngay;$ngay = Carbon::now();
            $thu5=$ngay->addDays(1);$ngay = Carbon::now();
            $thu6=$ngay->addDays(2);$ngay = Carbon::now();
            $thu7=$ngay->addDays(3);$ngay = Carbon::now();
            $thu8=$ngay->addDays(4);$ngay = Carbon::now();
        } else if($thu===5){
            $thu2=$ngay->subDays(3);$ngay = Carbon::now();
            $thu3=$ngay->subDays(2);$ngay = Carbon::now();
            $thu4=$ngay->subDays(1);$ngay = Carbon::now();
            $thu5=$ngay;
            $thu6=$ngay->addDays(1);$ngay = Carbon::now();
            $thu7=$ngay->addDays(2);$ngay = Carbon::now();
            $thu8=$ngay->addDays(3);$ngay = Carbon::now();
        } else if($thu===6){
            $thu2=$ngay->subDays(4);$ngay = Carbon::now();
            $thu3=$ngay->subDays(3);$ngay = Carbon::now();
            $thu4=$ngay->subDays(2);$ngay = Carbon::now();
            $thu5=$ngay->subDays(1);$ngay = Carbon::now();
            $thu6=$ngay;$ngay = Carbon::now();
            $thu7=$ngay->addDays(1);$ngay = Carbon::now();
            $thu8=$ngay->addDays(2);$ngay = Carbon::now();
        } else if($thu===7){
            $thu2=$ngay->subDays(5);$ngay = Carbon::now();
            $thu3=$ngay->subDays(3);$ngay = Carbon::now();
            $thu4=$ngay->subDays(3);$ngay = Carbon::now();
            $thu5=$ngay->subDays(2);$ngay = Carbon::now();
            $thu6=$ngay->subDays(1);$ngay = Carbon::now();
            $thu7=$ngay;$ngay = Carbon::now();
            $thu8=$ngay->addDays(1);$ngay = Carbon::now();
        }else{
            $thu2=$ngay->subDays(6);$ngay = Carbon::now();
            $thu3=$ngay->subDays(5);$ngay = Carbon::now();
            $thu4=$ngay->subDays(4);$ngay = Carbon::now();
            $thu5=$ngay->subDays(3);$ngay = Carbon::now();
            $thu6=$ngay->subDays(2);$ngay = Carbon::now();
            $thu7=$ngay->subDays(1);$ngay = Carbon::now();
            $thu8=$ngay;$ngay = Carbon::now();
        }
        $user2 = Client::whereDate('created_at', $thu2)->get();
        $user3 = Client::whereDate('created_at', $thu3)->get();
        $user4 = Client::whereDate('created_at', $thu4)->get();
        $user5 = Client::whereDate('created_at', $thu5)->get();
        $user6 = Client::whereDate('created_at', $thu6)->get();
        $user7 = Client::whereDate('created_at', $thu7)->get();
        $user8 = Client::whereDate('created_at', $thu8)->get();
        $dem2=$user2->count();
        $dem3=$user3->count();
        $dem4=$user4->count();
        $dem5=$user5->count();
        $dem6=$user6->count();
        $dem7=$user7->count();
        $dem8=$user8->count();
        $sum=$dem2+$dem3+$dem4+$dem5+$dem6+$dem7+$dem8;
        $countBangtin = Bangtin::count();
        $countCompany= Company::count();
        $countClient= Client::count();
        $month1 = Client::whereMonth('created_at', 1)->get();
        $month2 = Client::whereMonth('created_at', 2)->get();
        $month3 = Client::whereMonth('created_at', 3)->get();
        $month4 = Client::whereMonth('created_at', 4)->get();
        $month5 = Client::whereMonth('created_at', 5)->get();
        $month6 = Client::whereMonth('created_at', 6)->get();
        $month7 = Client::whereMonth('created_at', 7)->get();
        $month8 = Client::whereMonth('created_at', 8)->get();
        $month9 = Client::whereMonth('created_at', 9)->get();
        $month10 = Client::whereMonth('created_at', 10)->get();
        $month11 = Client::whereMonth('created_at', 11)->get();
        $month12 = Client::whereMonth('created_at', 12)->get();
        $demmonth1=$month1->count();
        $demmonth2=$month2->count();
        $demmonth3=$month3->count();
        $demmonth4=$month4->count();
        $demmonth5=$month5->count();
        $demmonth6=$month6->count();
        $demmonth7=$month7->count();
        $demmonth8=$month8->count();
        $demmonth9=$month9->count();
        $demmonth10=$month10->count();
        $demmonth11=$month11->count();
        $demmonth12=$month12->count();
$sum2=$demmonth1+$demmonth2+$demmonth3+$demmonth4+$demmonth5+$demmonth6+$demmonth7+$demmonth8+$demmonth9+$demmonth10+$demmonth11+$demmonth12;


        $data = ['countBangtin' => $countBangtin,'countCompany' => $countCompany,'countClient' => $countClient,'dem2' => $dem2,'dem3' => $dem3,'dem4' => $dem4,'dem5' => $dem5,'dem6' => $dem6,'dem7' => $dem7,'dem8' => $dem8,'sum' => $sum,'demmonth1' => $demmonth1,'demmonth2' => $demmonth2,'demmonth3' => $demmonth3,'demmonth4' => $demmonth4,'demmonth5' => $demmonth5,'demmonth6' => $demmonth6,'demmonth7' => $demmonth7,'demmonth8' => $demmonth8,'demmonth9' => $demmonth9,'demmonth10' => $demmonth10,'demmonth11' => $demmonth11,'demmonth12' => $demmonth12,'sum2' => $sum2];
        
        // share data to view

        $pdf = PDF::loadView('thongke', compact('data'));
  
        // download PDF file with download method
        return $pdf->download('thongke.pdf');
      }

}