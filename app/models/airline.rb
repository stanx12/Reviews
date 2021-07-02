class Airline < ApplicationRecord
  validates :name, presence: true,
                   uniqueness: true
  validates :image_url, format: { with: URI.regexp }

  before_create :slugify

  has_many :reviews

  def avg_score
    return 0.round(2) if reviews.empty?

    reviews.average(:score)
           .round(2)
           .to_f
  end

  private

  def slugify
    return nil unless name.present?

    self.slug = name.parameterize
  end
end
