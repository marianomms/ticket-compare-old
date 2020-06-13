# frozen_string_literal: true

Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      get 'things', to: 'things#index'

      resources :tickets, only: [:show] do
        member do
          get 'image', to: 'tickets#image'
        end
      end
    end
  end

  # Rails send all requests that are not for the API to our App component (via StaticController#index)
  get '*pages', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end
  root 'static#index'
end
