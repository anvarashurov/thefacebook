class SessionsController < ApplicationController
  def new
  end

  def create
    # what about phone // ignore phone ...
    @user = User.find_by_credentails(params[:user][:email], params[:user][:password])
    if @user 
      render json: @user # user exists
    else
      render json: "User with such credentails does not exist"
    end
  end

  def destroy
    logout!
    render json: "Log out success"
  end
end