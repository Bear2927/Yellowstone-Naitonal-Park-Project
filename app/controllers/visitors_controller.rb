class VisitorsController < ApplicationController

    def index
        render json: Visitor.all, status: :ok
    end

    def show
        visitor = Visitor.find(params[:id])
        render json: geyser, status: :ok
    end
end
