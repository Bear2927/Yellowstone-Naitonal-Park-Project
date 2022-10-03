class GeysersController < ApplicationController

    def index
        render json: Geyser.all, status: :ok
    end

    def show
        geyser = Geyser.find(params[:id])
        render json: geyser, status: :ok
    end
end
