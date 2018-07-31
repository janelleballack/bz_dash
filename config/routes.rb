Rails.application.routes.draw do
  namespace :api do
    resources :clients
  end
end
