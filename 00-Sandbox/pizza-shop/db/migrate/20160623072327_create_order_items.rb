class CreateOrderItems < ActiveRecord::Migration[5.0]
  def change
    create_table :order_items do |t|
      t.belongs_to :order, foreign_key: true
      t.belongs_to :pizza, foreign_key: true
      t.decimal :price
      t.integer :size

      t.timestamps
    end
  end
end
