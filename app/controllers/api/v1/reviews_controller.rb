class Api::V1::ReviewsController < ApplicationController
  before_action :find_review, only: %i[destroy]

  def create
    @review = Review.new(review_params)
    @review.save!
  end

  def destroy
    @review.destroy

    head :no_content
  end

  private

  def review_params
    params.require(:data).permit(:title, :description, :score, :airline_id)
  end

  def find_review
    @review = Review.find(params[:id])
  end
end
