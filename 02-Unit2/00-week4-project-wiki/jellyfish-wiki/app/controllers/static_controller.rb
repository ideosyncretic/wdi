class StaticController < ApplicationController
  before_action :set_jellyfish

  def about
    # @jellyfishes = Jellyfish.all
  end

  def faq
    # @jellyfishes = Jellyfish.all
  end

end

def set_jellyfish
  @jellyfishes = Jellyfish.all
  # @jellyfish = Jellyfish.find(params[:id])
end
