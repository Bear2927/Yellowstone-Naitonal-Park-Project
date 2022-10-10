class AnimalsController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :invalid

    def index
        render json: Animal.all, status: :ok
    end

    def show
        animal = Animal.find(params[:id])
        render json: animal, status: :ok
    end

    def create
        animal = Animal.create!(animal_params)
        render json: animal, status: :created
    end

    def update
        animal = Animal.find(params[:id])
        animal.update!(animal_params)
        render json: animal, status: :accepted
    end

    def destroy
        animal = Animal.find(params[:id])
        animal.destroy
        head :no_content
    end

    private

    def animal_params
        params.permit(:name, :population, :fact, :image, :spotted)
    end

    def not_found
        render json: { error: "Animal not found" }, status: :not_found
    end

    def invalid(error)
        render json: { error: error.message }, status: :unprocessable_entity
    end

end
