module ErrorHandling
  extend ActiveSupport::Concern

  included do
    rescue_from Exception do |exception|
      status, @errors = ErrorService.process(exception, request)

      render 'api/v1/errors/errors', status: status
    end
  end
end