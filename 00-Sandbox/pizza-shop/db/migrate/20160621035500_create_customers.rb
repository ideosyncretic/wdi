class CreateCustomers < ActiveRecord::Migration[5.0]
  def change
    create_table :customers do |t|
      t.string :name
      t.string :email

      t.timestamps
    end
  end
end

# def up
#   create_table :customers do |t|
#     t.string :name
#     t.string :email
#
#     t.timestamps
#   end
# end

# def down
#   drop_table :customers
# end


# common actions are UP, DOWN, and CHANGE. UP goes to the latest record, DOWN goes to a previous record, CHANGE does both.
