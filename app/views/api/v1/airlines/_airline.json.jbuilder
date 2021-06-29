json.id airline.id
json.name airline.name
json.slug airline.slug
json.score airline.avg_score
if include_reviews.present? && include_reviews
  json.reviews(airline.reviews) do |review|
    json.partial! 'api/v1/reviews/review', review: review
  end
end
