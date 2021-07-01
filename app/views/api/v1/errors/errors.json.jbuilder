json.errors do
  json.array! @errors do |error|
    json.partial! 'api/v1/errors/error', error: error
  end
end
