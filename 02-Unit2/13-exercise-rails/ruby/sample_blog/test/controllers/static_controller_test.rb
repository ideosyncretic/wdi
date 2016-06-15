require 'test_helper'

class StaticControllerTest < ActionDispatch::IntegrationTest
  test "should get about" do
    get static_about_url
    assert_response :success
  end

  test "should get faq" do
    get static_faq_url
    assert_response :success
  end

end
