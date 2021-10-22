<?php

use App\Http\Controllers\UserController;
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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::post('login', 'AuthController@login');

Route::group(['middleware' => 'auth:api'], function (){
    Route::apiResource('users','UserController');
});

Route::get('users','UserController@index');
Route::get('users/{id}','UserController@show');
Route::post('users','UserController@store');
Route::put('users/{id}','UserController@update');
Route::delete('users/{id}','UserController@destroy');