class Shop
  attr_accessor :name, :products

  def initialize(name)
    @name = name
    @products = {}
  end

  def create_product(product_name, stock)
    @products[product_name] = stock
  end

  def sell_product(product_name, quantity)
      @products[product_name] -= quantity unless quantity > @products[product_name]
  end

  def restock_product(product_name, stock)
    @products[product_name] += stock
  end


end
