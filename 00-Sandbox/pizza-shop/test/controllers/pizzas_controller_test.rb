require 'test_helper'

class PizzasControllerTest < ActionDispatch::IntegrationTest
  setup do
    @pizza = pizzas(:one)
  end

  test "should get index" do
    get pizzas_url
    assert_response :success
  end

  test "should get new" do
    get new_pizza_url
    assert_response :success
  end

  test "should create pizza" do
    assert_difference('Pizza.count') do
      post pizzas_url, params: { pizza: { cheese: @pizza.cheese, name: @pizza.name } }
    end

    assert_redirected_to pizza_path(Pizza.last)
  end

  test "should show pizza" do
    get pizza_url(@pizza)
    assert_response :success
  end

  test "should get edit" do
    get edit_pizza_url(@pizza)
    assert_response :success
  end

  test "should update pizza" do
    patch pizza_url(@pizza), params: { pizza: { cheese: @pizza.cheese, name: @pizza.name } }
    assert_redirected_to pizza_path(@pizza)
  end

  test "should destroy pizza" do
    assert_difference('Pizza.count', -1) do
      delete pizza_url(@pizza)
    end

    assert_redirected_to pizzas_path
  end
end
