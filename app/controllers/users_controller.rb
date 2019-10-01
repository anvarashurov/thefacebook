# need to change 'render' lines

class UsersController < ApplicationController
  def new
  end

  def create
    # create a new user with given params
    @user = User.new(user_params)
    if @user.save
      #success register / possibly verify
      render json: @user
      # render json: "Success Register"
    else
      # render json: "Error"
      render json: @user.errors.full_messages
    end
  end

  def user_params
    params.require(:user).permit(:first_name, :last_name, :password, :birth_date,
    :gender, :email, :phone_number)
  end
end