class SecretStuffController < ApplicationController

  before_action :authenticate_user, only: :secret_page

  def public_page
  end

  def secret_page
  end
  
end
