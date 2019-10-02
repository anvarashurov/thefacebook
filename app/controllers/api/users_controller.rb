# need to change 'render' lines

class Api::UsersController < ApplicationController
  def create
    # create a new user with given params
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      #success register / possibly verify
      render "api/users/show"
      # render json: "Success Register"
    else
      # render json: "Error"
      render json: @user.errors.full_messages, status: 401
    end
  end

  def user_params
    params.require(:user).permit(:first_name, :last_name, :password, :birth_date,
    :gender, :email, :phone_number)
  end
end