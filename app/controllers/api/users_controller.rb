# need to change 'render' lines

class Api::UsersController < ApplicationController
  def create
    # create a new user with given params
    @user = User.new(user_params)
    birthday = params[:user][:birthday][:month] + "/" + params[:user][:birthday][:day] + "/" + params[:user][:birthday][:year]
    # debugger
    if @user.save
      @user.update(birthday: birthday)
      login!(@user)
      #success register / possibly verify
      render "api/users/show"
      # render json: "Success Register"
    else
      # render json: "Error"
      render json: @user.errors.full_messages, status: 401
    end
  end

  #  month = params[:user][:birthday][:month] 
  #   day = params[:user][:birthday][:day] 
  #   year = params[:user][:birthday][:year]
  #   debugger
  #   if((month && day) && year)
  #     @user.birthday = month + "/" + day + "/" + year
  #   end


  def show 
    # debugger
    @user = User.find(params[:id])
    # debugger
    if @user
      render "api/users/show"
    end
  end

  def user_params
    params.require(:user).permit(:first_name, :last_name, :password, :gender, :email_address, :birthday => [:month, :day, :year])
    # , :birthday => [:month, :day, :year]
  end
end