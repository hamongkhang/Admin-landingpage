<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laravel </title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <base href="{{asset('')}}">
    <link href='http://fonts.googleapis.com/css?family=Dosis:300,400' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="source/assets/dest/css/font-awesome.min.css">
    <link rel="stylesheet" href="source/assets/dest/vendors/colorbox/example3/colorbox.css">
    <link rel="stylesheet" href="source/assets/dest/rs-plugin/css/settings.css">
    <link rel="stylesheet" href="source/assets/dest/rs-plugin/css/responsive.css">
    <link rel="stylesheet" title="style" href="source/assets/dest/css/style.css">
    <link rel="stylesheet" href="source/assets/dest/css/animate.css">
    <link rel="stylesheet" title="style" href="source/assets/dest/css/huong-style.css">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.25/css/jquery.dataTables.css">
    <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.10.25/js/jquery.dataTables.js"></script>
    <script src="https://cdn.ckeditor.com/4.16.1/standard/ckeditor.js"></script>
 </head>
 
 <body>
      <div>
         <h2>Title: {{ $data['title'] }}</h2>
         <p>Passerellesnumeriques Viet Nam vừa đăng tải bài viết mới. Bạn hãy truy cập vào website để hiểu rõ hơn.</p>
      </div>
 </body>

</html>
