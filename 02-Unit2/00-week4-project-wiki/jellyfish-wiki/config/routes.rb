Rails.application.routes.draw do
  resources :jellyfishes
  root 'jellyfishes#index'

  get 'index', to: 'jellyfishes#index'

  get 'about', to: 'static#about'
  get 'faq', to: 'static#faq'

  resources :users
  get 'login', to: 'sessions#new'
  delete 'logout', to: 'sessions#destroy'
  # add another route to lead to sessions
  resources :sessions, only:[:new, :create, :destroy]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
