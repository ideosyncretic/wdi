class RenameColumnManagersPhoneNumber < ActiveRecord::Migration[5.0]
  def up
    rename_column :managers, :phone_number, :cell_phone_number
  end

  def down
    rename_column :managers, :phone_number, :cell_phone_number
  end

end
