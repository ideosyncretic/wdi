class AddPhoneNumberToManager < ActiveRecord::Migration[5.0]
  def change
    add_column :managers, :phone_number, :integer
  end
end
