# links up to database
class Customer < ApplicationRecord
  has_many :orders, dependent: :destroy
  has_many :order_items, through :orders
  has_many :pizzas, through :order_items
  
  validates :name, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true, format: { with: /\b[A-Z0-9._%a-z\-]+@(?:[A-Z0-9a-z\-]+\.)+[A-Za-z]{2,4}\z/,
    message: "only allows letters" }

  def full_name
    "Mr/Mrs" + name
    # first_name + " " + last_name
  end

  # def premium_member?
  #   total_spend > 5000
  # end

end
