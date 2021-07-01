class ErrorService
  def self.process(error, request)
    case error
    when ActiveRecord::RecordNotFound
      code = 404
      errors = [{ code: 404, message: 'Not Found', resource: request.path, detail: error&.message }]
    when ActiveRecord::RecordInvalid
      code = 422
      errors = error.record.errors.messages.map do |field_name, message|
        { code: 422, message: message, resource: request.path, detail: field_name.to_s}
      end
    else
      code = 500
      errors = [{ code: 500, message: error.message, resource: request.path }]
    end

    [code, errors]
  end
end