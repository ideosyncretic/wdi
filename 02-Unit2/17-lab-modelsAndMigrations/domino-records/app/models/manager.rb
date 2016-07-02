class Manager < ApplicationRecord
  has_many :artists, dependent: :destroy
end
