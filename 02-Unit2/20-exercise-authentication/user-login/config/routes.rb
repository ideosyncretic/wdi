Rails.application.routes.draw do
  get 'secret_stuff/public_page'

  get 'secret_stuff/secret_page'

  # get 'sessions/new'
  #
  # get 'sessions/create'
  #
  # get 'sessions/destroy'
  root 'users#index'
  resources :users

  get 'login', to: 'sessions#new'
  delete 'logout', to: 'sessions#destroy'
  # add another route to lead to sessions
  resources :sessions, only:[:new, :create]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
