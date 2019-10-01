class User < ApplicationRecord
  # model level validations
  # either phone number or email address
  validates :first_name, :last_name, :phone_number, :email_address, 
  :password_digest, :session_token, :birth_date, :gender,
  presence: true
  # phone number is optional
  validates :email_address, :session_token, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}

  attr_reader :password
  after_initialize :ensure_session_token
  
  def self.find_by_credentials(username, password)
    @user = User.find(username.id)
    if @user
      if @user.is_password?(password)
        # need to show user page (where feed lives)
        render json: "User Exists"
      else
        # password is not correct
        render json: "Either username or password is incorrect" 
      end
    else
      # need to try logging in again
      render json: "User with such details does not exist"
    end
  end

  def is_password?(password)
    # return value: true or false 
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end
  
  def password=(password)
    # save password for length
    @password = password 
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    # the return value is later used to assign it to session[:session_token]
    self.session_token
  end

end