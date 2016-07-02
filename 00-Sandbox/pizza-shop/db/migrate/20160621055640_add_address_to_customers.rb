class AddAddressToCustomers < ActiveRecord::Migration[5.0]
  def change
    add_column :customers, :address, :string
  end
end
