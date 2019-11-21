# need to chagne the 'render' lines

class Api::SessionsController < ApplicationController
  def create
    # what about phone // ignore phone ...
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user 
      login!(@user)
      # TODO BUG: when you log out, refresh, then login and press "friends" on navbar, its error. 
      #current_user = @user
      # give path to show (where Jbuilder lives)
      render "api/users/show" # user exists
    else
      render json: ["User with such credentails does not exist"], status: 404
    end
  end

  def destroy
    if current_user
      @user = current_user
      logout!
      render @user
    else
      render json: ["Nobody has signed in"], status: 401
    end
  end
end

# user = User.new

# user.first_name = "Anvar"
# user.last_name = "Ashurov"
# user.email_address = "an@gmail.com"
# user.password = "000000"
# user.birthday = "Oct 10 1995"
# user.gender = "Male"