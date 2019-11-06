# need to change 'render' lines

class Api::UsersController < ApplicationController
  def create
    # create a new user with given params
    # debugger
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

  #   month = params[:user][:birthday][:month] 
  #   day = params[:user][:birthday][:day] 
  #   year = params[:user][:birthday][:year]
  #   debugger
  #   if((month && day) && year)
  #     @user.birthday = month + "/" + day + "/" + year
  #   end

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
    debugger

    @user = User.find(params[:id])
    if @user.update_attributes(user_params)
        render "api/users/show"
    else 
      render json: @user.errors.full_messages 
    end 

    # @user = User.find(current_user.id)
    
    # if @user
    #   @user.first_name = params[:first_name]
    #   @user.last_name = params[:last_name]  
    #   if @user.save 
    #     render "api/users/show"
    #   else
    #     render ["Unable to update user details"], status: 401
    #   end
    # else
    #   render ["User not found"], status: 404
    # end
  end

  def user_params
    params.require(:user).permit(:first_name, :last_name, :password, :gender, :email_address, :profilePhoto, :coverPhoto, 
    :bio, :current_user, :workplace, :school, :hometown, :rel_status, :birthday => [:month, :day, :year])
    # , :birthday => [:month, :day, :year]
  end
end