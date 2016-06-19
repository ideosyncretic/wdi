class JellyfishController < ApplicationController

  def index
  end

  def show
    @jellyfish = params[:id]
    if @jellyfish === "moon"
      @title = "Moon Jellyfish"
    end

    if @jellyfish === "golden"
      @title = "Golden Jellyfish"
    end

    if @jellyfish === "box"
      @title = "Box Jellyfish"
    end

    if @jellyfish === "moon"
      @title = "Moon Jellyfish"
    end

    if @jellyfish === "moon"
      @title = "Moon Jellyfish"
    end

    if @jellyfish === "moon"
      @title = "Moon Jellyfish"
    end

  end

end
