class SessionsController < ApplicationController
  # session is triggered after user login

  def new
    # $jellyfishes = Jellyfish.all
  end

  def create
    # firstly, find user by email
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
      redirect_to root_path, notice: 'Logged In'
    else
      flash.now.alert = 'invalid login details'
      # displays immediately
      render 'new'
      # immediate, not new request
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path, notice: 'Logged Out'
  end
end
