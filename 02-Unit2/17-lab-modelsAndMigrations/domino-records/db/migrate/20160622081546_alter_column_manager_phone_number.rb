class AlterColumnManagerPhoneNumber < ActiveRecord::Migration[5.0]
  def self.up
    change_table :managers do |t|
      t.change :phone_number, :integer
    end
  end
end
