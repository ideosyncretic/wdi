json.array!(@toppings) do |topping|
  json.extract! topping, :id, :name
  json.url topping_url(topping, format: :json)
end
