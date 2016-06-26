class Order < ApplicationRecord
  belongs_to :customer
  # this line creates association. singular
  has_many :order_items, dependent: :destroy
  has_many :pizzas, through: order_items

  def name
    "#{customer.name}'s order on #{created_at.to_formatted_s(:short)}'"
  end

end
