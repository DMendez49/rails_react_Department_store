Rails.application.routes.draw do

  get 'index/create'
  namespace :api do
    resources :items, :departments
  end
end
