class JellyfishesController < ApplicationController
  before_action :authenticate_user, only: [:create, :edit, :update, :destroy]

  layout 'jellyfishes'

  def index
    @jellyfishes = Jellyfish.all
  end


  def show
  end

  def new
  end

  def create
  end

  def edit
  end

  def update
  end

  def destroy
  end

  # def to_param  # overridden
  # name
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_jellyfish
      @jellyfishes = Jellyfish.all
      @jellyfish = Jellyfish.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def jellyfish_params
      params.require(:jellyfish).permit(:name, :scientific_name, :diameter, :lifespan, :rank, :higher_classification, :description, :image)
    end

end
