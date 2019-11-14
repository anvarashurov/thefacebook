Rails.application.routes.draw do
  root to: 'static_pages#root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  #  change is defaults format json
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:new, :index, :create, :show, :update, :patch]  do
      resources :posts, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:index, :show, :create, :update, :destroy, :edit]
    resources :comments, except: [:new, :edit]
    resources :friend, only: [:create, :update, :destroy]
  end
end