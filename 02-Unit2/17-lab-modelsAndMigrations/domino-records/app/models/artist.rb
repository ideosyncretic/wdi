class Artist < ApplicationRecord
  belongs_to :manager
  has_and_belongs_to_many :songs
end
