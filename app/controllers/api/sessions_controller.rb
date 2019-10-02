# need to chagne the 'render' lines

class Api::SessionsController < ApplicationController
  def create
    # what about phone // ignore phone ...
    @user = User.find_by_credentails(params[:user][:email], params[:user][:password])
    if @user 
      login!(@user)
      # give path to show (where Jbuilder lives)
      render "api/users/show" # user exists
    else
      render json: ["User with such credentails does not exist"], status: 401
    end
  end

  def destroy
    if current_user
      logout!
      render "api/users/show"
    else
      render json: ["Nobody has signed in"], status: 401
  end
end