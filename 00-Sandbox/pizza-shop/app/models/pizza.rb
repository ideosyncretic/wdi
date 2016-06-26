class Pizza < ApplicationRecord
  has_many :order_items, dependent: :destroy
  has_and_belongs_to_many :toppings
end
