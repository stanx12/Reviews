json.data do
  json.partial! 'api/v1/airlines/airline', airline: @airline, include_reviews: @include_reviews
end