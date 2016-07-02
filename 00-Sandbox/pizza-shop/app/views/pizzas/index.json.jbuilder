json.array!(@pizzas) do |pizza|
  json.extract! pizza, :id, :name, :cheese
  json.url pizza_url(pizza, format: :json)
end
