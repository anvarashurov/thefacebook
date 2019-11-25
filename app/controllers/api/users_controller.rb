# need to change 'render' lines

class Api::UsersController < ApplicationController
  def create
    # create a new user with given params
    @user = User.new(user_params)
    birthday = params[:user][:birthday][:month] + "/" + params[:user][:birthday][:day] + "/" + params[:user][:birthday][:year]
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

  def index
    @users = User.all
    if @users 
      render "api/users/index"
    end
  end


  def show
    @user = User.find(params[:id])
    if @user
      render "api/users/show"
    end
  end

  def update
    @user = User.find(current_user.id)
    if @user.update_attributes(user_params)
        render "api/users/show"
    else 
      render json: @user.errors.full_messages 
    end 

  end

  def user_params
    
    params.require(:user).permit(:first_name, :last_name, :password, :gender, :email_address, :profilePhoto, :coverPhoto, 
    :bio, :current_city, :workplace, :school, :hometown, :rel_status, photos: [], :birthday => [:month, :day, :year])
    # , :birthday => [:month, :day, :year]
  end
end