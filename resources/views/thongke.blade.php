<h1>Management</h1>
<table class="table table-bordered" id="laravel_crud">
 <thead>
    <tr>
       <th>New</th>
       <th>Account</th>
       <th>Partner</th>
       <th>Donater</th>
        
    </tr>
 </thead>
 <tbody>
    <tr>
       <td>{{ $data['countBangtin']}}</td>
       <td>{{ $data['countClient'] }}</td>
       <td>{{ $data['countCompany'] }}</td>
       <td>{{ 500 }}</td>
         
    </tr>
 </tbody>
</table>


<h1>This week</h1>
<h3>Total: {{$data['sum']}}</h3>
<table class="table table-bordered" id="laravel_crud">
 <thead>
    <tr>
       <th>Sun</th>
       <th>Mon</th>
       <th>Tue</th>
       <th>Web</th>
       <th>Thu</th>
       <th>Fri</th>
       <th>Sat</th>
    </tr>
 </thead>
 <tbody>
    <tr>
       <td>{{ $data['dem2']}}</td>
       <td>{{ $data['dem3'] }}</td>
       <td>{{ $data['dem4'] }}</td>
       <td>{{ $data['dem5']}}</td>
       <td>{{ $data['dem6'] }}</td>
       <td>{{ $data['dem7'] }}</td>
       <td>{{ $data['dem8'] }}</td>
    </tr>
 </tbody>
</table>



<h1>This Year</h1>
<h3>Total: {{$data['sum2']}}</h3>
<table class="table table-bordered" id="laravel_crud">
 <thead>
    <tr>
       <th>Jan</th>
       <th>Feb</th>
       <th>Mar</th>
       <th>Apr</th>
       <th>May</th>
       <th>Jun</th>
       <th>Jul</th>
       <th>Aug</th>
       <th>Sec</th>
       <th>Oct</th>
       <th>Nov</th>
       <th>Dec</th>
    </tr>
 </thead>
 <tbody>
    <tr>
       <td>{{ $data['demmonth1']}}</td>
       <td>{{ $data['demmonth2'] }}</td>
       <td>{{ $data['demmonth3'] }}</td>
       <td>{{ $data['demmonth4'] }}</td>
       <td>{{ $data['demmonth5']}}</td>
       <td>{{ $data['demmonth6'] }}</td>
       <td>{{ $data['demmonth7'] }}</td>
       <td>{{ $data['demmonth8'] }}</td>
       <td>{{ $data['demmonth9']}}</td>
       <td>{{ $data['demmonth10'] }}</td>
       <td>{{ $data['demmonth11'] }}</td>
       <td>{{ $data['demmonth12'] }}</td>
    </tr>
 </tbody>
</table>