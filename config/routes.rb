Rails.application.routes.draw do
  root to: 'pages#index'

  namespace :api do
    namespace :v1, defaults: { format: :json },
                   constraints: { format: :json },
                   only: %i[ index create show update destroy ] do
      resources :airlines, param: :slug
      resources :reviews, only: [:create, :destroy]
    end
  end

  get '*path', to: 'pages#index', via: :all
end
