<h1>Account Management</h1>
<table class="table table-bordered" id="laravel_crud">
 <thead>
    <tr>
       <th>Id</th>
       <th>Name</th>
       <th>Email</th>
       <th>Created at</th>
        
    </tr>
 </thead>
 <tbody>
    @foreach($data as $note)
    <tr>
       <td>{{ $note->id }}</td>
       <td>{{ $note->name }}</td>
       <td>{{ $note->email }}</td>
       <td>{{ \Carbon\Carbon::parse($note->created_at)->format('d/m/Y')}}</td>
         
    </tr>
    @endforeach
 </tbody>
</table>