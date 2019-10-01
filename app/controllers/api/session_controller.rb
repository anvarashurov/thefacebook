class SessionsController < ApplicationController
  def create
    # what about phone // ignore phone ...
    @user = User.find_by_credentails(params[:user][:email], params[:user][:password])
    if @user 
      login!(@user)
      # give path to show (where Jbuilder lives)
      render json: @user # user exists
    else
      render json: ["User with such credentails does not exist"], status: 401
    end
  end

  def destroy
    logout!
    render json: "Log out success"
  end
end