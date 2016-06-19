Rails.application.routes.draw do
  resources :jellyfish
  root 'jellyfish#index'
  get 'index', to: 'jellyfish#index'
  get 'about', to: 'static#about'
  get 'faq', to: 'static#faq'
  # get 'about', to: 'jellyfish#species', as: 'jellyfish'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
