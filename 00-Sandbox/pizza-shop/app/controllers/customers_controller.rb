class CustomersController < ApplicationController

  # CREATE
  def new
  end

  def create
  end

  # READ
  def index
    @customers = Customer.all
  end

  def show
    @customer = Customer.find(params[:id])
  end

  # UPDATE
  def edit
  end

  def update

  end

  # DELETE
  def destroy
  end

end
