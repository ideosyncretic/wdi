class CreateJoinTablePizzaTopping < ActiveRecord::Migration[5.0]
  def change
    create_join_table :pizzas, :toppings do |t|
      # t.index [:pizza_id, :topping_id]
      # t.index [:topping_id, :pizza_id]
    end
  end
end
