class CreatePizzas < ActiveRecord::Migration[5.0]
  def change
    create_table :pizzas do |t|
      t.string :name
      t.boolean :cheese

      t.timestamps
    end
  end
end
