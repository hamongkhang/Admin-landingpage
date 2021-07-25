<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/expenses', 'ExpenseController@index')->name('expenses.all');

Route::get('/expenses/{expense}', 'ExpenseController@show')->name('expenses.show');
Route::get('/backgrounds', 'BackgroundController@index')->name('backgrounds.all');
Route::get('/background_items', 'BackgroundItemController@index')->name('background_items.all');
Route::get('/milestones', 'MilestoneController@index')->name('milestones.all');
Route::get('/impacts', 'ImpactController@index')->name('impacts.all');
Route::get('/admissions', 'AdmissionController@index')->name('admissions.all');
Route::get('/count', 'CountController@index')->name('count.all');
Route::get('/companys', 'CompanyController@index')->name('companys.all');
Route::get('/board', 'BoardController@index')->name('board.all');
Route::get('/gallery', 'GalleryController@index')->name('gallery.all');
Route::get('/recruitment', 'RecruitmentController@index')->name('recruitment.all');
Route::get('/localcompany', 'LocalcompanyController@index')->name('localcompany.all');
Route::get('/student', 'StudentController@index')->name('student.all');
Route::get('/staff', 'StaffController@index')->name('staff.all');
Route::get('/status', 'StatusController@index')->name('status.all');
Route::get('/partners', 'CompanyController@index')->name('partners.all');
Route::get('/boards', 'BoardController@index')->name('boards.all');
Route::get('/staffs', 'StaffController@index')->name('staffs.all');
Route::get('/students', 'StudentController@index')->name('students.all');
Route::get('/gallerys', 'GalleryController@index')->name('gallerys.all');
Route::get('/recruitments', 'RecruitmentController@index')->name('recruitments.all');
Route::get('/bangtins', 'BangtinController@index')->name('bangtins.all');
Route::get('/thongkes', 'ThongkeController@index')->name('thongkes.all');
Route::get('/clients', 'ThongkeController@indexClient')->name('clients.all');
Route::get('/login', 'LoginController@index')->name('login.all');
Route::get('/logins', 'LoginController@index')->name('logins.all');
Route::get('/thongbao', 'LoginController@indexThongbao')->name('thongbao.all');
Route::get('/thongkecount', 'ThongkeController@indexCount')->name('thongkecount.all');

// Route::get('background','')
Route::post('/expenses', 'ExpenseController@store')->name('expenses.store');
Route::post('/backgrounditems', 'BackgroundItemController@store')->name('backgrounditems.store');
Route::post('/milestones', 'MilestoneController@store')->name('milestones.store');
Route::post('/impacts', 'ImpactController@store')->name('impacts.store');
Route::post('/admissions', 'AdmissionController@store')->name('admissions.store');
Route::post('/count', 'CountController@store')->name('count.store');
Route::post('/expenses', 'ExpenseController@store')->name('expenses.store');
Route::post('/partners', 'CompanyController@store')->name('partners.store');
Route::post('/boards', 'BoardController@store')->name('boards.store');
Route::post('/staffs', 'StaffController@store')->name('staffs.store');
Route::post('/students', 'StudentController@store')->name('students.store');
Route::post('/gallerys', 'GalleryController@store')->name('gallerys.store');
Route::post('/recruitments', 'RecruitmentController@store')->name('recruitments.store');
Route::post('/bangtins', 'BangtinController@store')->name('bangtins.store');
Route::post('/login', 'LoginController@store')->name('login.store');

/////////////////////////////////////////////////////////////////////////////////
Route::delete('/expenses/{expense}', 'ExpenseController@destroy')->name('expenses.destroy');
Route::delete('/backgrounditems/{id}', 'BackgroundItemController@destroy')->name('backgrounditems.destroy');
Route::delete('/milestones/{id}', 'MilestoneController@destroy')->name('milestones.destroy');
Route::delete('/impacts/{id}', 'ImpactController@destroy')->name('impacts.destroy');
Route::delete('/admissions/{id}', 'AdmissionController@destroy')->name('admissions.destroy');
Route::delete('/count/{id}', 'CountController@destroy')->name('count.destroy');
Route::delete('/partners/{id}', 'CompanyController@destroy')->name('partners.destroy');
Route::delete('/boards/{id}', 'BoardController@destroy')->name('boards.destroy');
Route::delete('/staffs/{id}', 'StaffController@destroy')->name('staffs.destroy');
Route::delete('/students/{id}', 'StudentController@destroy')->name('students.destroy');
Route::delete('/gallerys/{id}', 'GalleryController@destroy')->name('gallerys.destroy');
Route::delete('/recruitments/{id}', 'RecruitmentController@destroy')->name('recruitments.destroy');
Route::delete('/bangtins/{id}', 'BangtinController@destroy')->name('bangtins.destroy');
Route::delete('/login/{id}', 'LoginController@destroy')->name('login.destroy');

//////////////////////////////////////////////////////////////////////////////////////////////
Route::post('/expenses/{expense}', 'ExpenseController@update')->name('expenses.update');
Route::post('/backgrounditems/{id}', 'BackgroundItemController@update')->name('backgrounditems.update');
Route::post('/backgrounds/{id}', 'BackgroundController@update')->name('backgrounds.update');
Route::post('/milestones/{id}', 'MilestoneController@update')->name('milestones.update');
Route::post('/impacts/{id}', 'ImpactController@update')->name('impacts.update');
Route::post('/admissions/{id}', 'AdmissionController@update')->name('admissions.update');
Route::post('/count/{id}', 'CountController@update')->name('count.update');
Route::post('/partners/{id}', 'CompanyController@update')->name('partners.update');
Route::post('/boards/{id}', 'BoardController@update')->name('boards.update');
Route::post('/staffs/{id}', 'StaffController@update')->name('staffs.update');
Route::post('/students/{id}', 'StudentController@update')->name('students.update');
Route::post('/gallerys/{id}', 'GalleryController@update')->name('gallerys.update');
Route::post('/bangtins/{id}', 'BangtinController@update')->name('bangtins.update');
Route::post('/recruitments/{id}', 'RecruitmentController@update')->name('recruitments.update');

Route::get('/staff', 'StaffController@index')->name('staff.all');
Route::get('/status', 'StatusController@index')->name('status.all');

Route::post('/contacts','ContactController@mail');