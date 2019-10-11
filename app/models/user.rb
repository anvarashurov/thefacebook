class User < ApplicationRecord
  # model level validations
  # either phone number or email address
  validates :first_name, :last_name, :email_address,
  :birthday, :gender, :password_digest, :session_token, presence: true
  # phone number is optional
  validates :email_address, :session_token, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}
  attr_reader :password
  after_initialize :ensure_session_token
  
  # debugger
  
  has_many :authored_post,
    class_name: "Post",
    foreign_key: :author_id,
    primary_key: :id
  
  def self.find_by_credentials(email, password)
    @user = User.find_by(email_address: email)
    #   if @user.is_password?(password)
    #     # need to show user page (where feed lives)
    #     render json: ["User Exists"]
    #   else
    #     # password is not correct
    #     render json: ["Either email or password is incorrect"], status: 401
    #   end
    # else
    #   debugger
    #   # need to try logging in again
    #   render json: ["User with such details does not exist"], status: 401
    # end
    return nil unless @user
    @user.is_password?(password) ? @user : nil

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