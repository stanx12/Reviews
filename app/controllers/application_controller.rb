class ApplicationController < ActionController::Base
  include ErrorHandling

  protect_from_forgery with: :exception, prepend: true, unless: -> { request.format.json? }
end
