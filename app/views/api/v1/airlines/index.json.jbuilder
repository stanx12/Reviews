json.data do
  json.array! @airlines do |airline|
    json.partial! 'api/v1/airlines/airline', airline: airline, include_reviews: @include_reviews
  end
end
