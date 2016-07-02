require 'test_helper'

class SecretStuffControllerTest < ActionDispatch::IntegrationTest
  test "should get public_page" do
    get secret_stuff_public_page_url
    assert_response :success
  end

  test "should get secret_page" do
    get secret_stuff_secret_page_url
    assert_response :success
  end

end
