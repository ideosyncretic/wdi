class AlterColumnManagersPhoneNumber < ActiveRecord::Migration[5.0]
  def self.up
    change_table :managers do |t|
      t.change :phone_number, :string
    end
  end
end
