Rails.application.routes.draw do
  root to: 'static_pages#root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :users, only: [:new, :create, :show, :update]  do
      resources :posts, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:index, :show, :create, :update, :destroy, :edit]
    resources :comments, except: [:new, :edit]
  end
end