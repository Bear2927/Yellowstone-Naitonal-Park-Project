class GeysersController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :not_found

    def index
        render json: Geyser.all, status: :ok
    end

    def show
        geyser = Geyser.find(params[:id])
        render json: geyser, status: :ok
    end

    def destroy
        geyser = Geyser.find(params[:id])
        geyser.destroy
        head :no_content
    end

    private 

    def not_found
        render json: { error: "Animal not found" }, status: :not_found
    end
end
