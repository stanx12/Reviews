class Api::V1::AirlinesController < ApplicationController
  before_action :find_airline, only: %i[show update]
  before_action :include_reviews?, only: %i[index show]

  def index
    @airlines = Airline.all
  end

  def show
  end

  def create
    @airline = Airline.new(airline_params)
    @airline.save!
  end

  def update
    @airline.update!(airline_params)
  end

  private

  def find_airline
    @airline = Airline.find_by!(slug: params[:slug])
  end

  def include_reviews?
    @include_reviews = params[:include_reviews].present? && JSON.parse(params[:include_reviews])
  end

  def airline_params
    params.require(:data).permit(:name, :image_url)
  end
end
