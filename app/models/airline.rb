class Airline < ApplicationRecord
  before_create :slugify

  has_many :reviews

  def avg_score
    return 0.0 if reviews.empty?

    reviews.average(:score)
           .round(2)
           .to_f
  end

  private

  def slugify
    self.slug = name.parameterize
  end
end
