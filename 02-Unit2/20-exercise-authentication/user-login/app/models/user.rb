class User < ApplicationRecord
  has_secure_password
  # does password hashing using bcrypt gem, and checks if passwords match

  validates :email, presence: true, uniqueness: true
  # email is main point of identification, so must be unique
end
