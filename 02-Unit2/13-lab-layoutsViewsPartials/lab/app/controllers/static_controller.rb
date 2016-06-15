class StaticController < ApplicationController

  def index
    @page = params[:page]
    if @page == "1"
      render "index1"
    elsif @page == "2"
      render "index2"
    else render "index.html"
    end
  end

end
