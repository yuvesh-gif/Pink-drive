<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserCreateRequest;
use App\Http\Requests\UserUpdateRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;

class UserController extends Controller
{
    public function index(){

        return User::paginate();
    }

    public function show($id){

        $user = User::find($id);

        return $user;
    }

    public function store(UserCreateRequest $request){

    
        $user = User::create(
            $request->only('first_name','last_name','email')
            + ['password'=> Hash::make(1234)]
        );

        return response($user,Response::HTTP_CREATED);

    }

    public function update(UserUpdateRequest $request, $id){

        $user = User::find($id);

        $user->update($request->only('first_name','last_name','email'));

        return response($user,Response::HTTP_ACCEPTED);

    }

    public function destroy($id){

        $user = User::find($id);

        return $user->destroy();
    }
}
