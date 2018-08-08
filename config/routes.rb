Rails.application.routes.draw do
  namespace :api do
    resources :clients
    resources :lists
    resources :projects
    
  end
end
