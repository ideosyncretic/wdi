class StaticController < ApplicationController
  def about
    @name = params[:name]
  end

  def faq
  end
end
