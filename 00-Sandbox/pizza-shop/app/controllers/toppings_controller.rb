class ToppingsController < ApplicationController
  before_action :set_topping, only: [:show, :edit, :update, :destroy]

  # GET /toppings
  # GET /toppings.json
  def index
    @toppings = Topping.all
  end

  # GET /toppings/1
  # GET /toppings/1.json
  def show
  end

  # GET /toppings/new
  def new
    @topping = Topping.new
  end

  # GET /toppings/1/edit
  def edit
  end

  # POST /toppings
  # POST /toppings.json
  def create
    @topping = Topping.new(topping_params)

    respond_to do |format|
      if @topping.save
        format.html { redirect_to @topping, notice: 'Topping was successfully created.' }
        format.json { render :show, status: :created, location: @topping }
      else
        format.html { render :new }
        format.json { render json: @topping.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /toppings/1
  # PATCH/PUT /toppings/1.json
  def update
    respond_to do |format|
      if @topping.update(topping_params)
        format.html { redirect_to @topping, notice: 'Topping was successfully updated.' }
        format.json { render :show, status: :ok, location: @topping }
      else
        format.html { render :edit }
        format.json { render json: @topping.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /toppings/1
  # DELETE /toppings/1.json
  def destroy
    @topping.destroy
    respond_to do |format|
      format.html { redirect_to toppings_url, notice: 'Topping was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_topping
      @topping = Topping.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def topping_params
      params.require(:topping).permit(:name)
    end
end
