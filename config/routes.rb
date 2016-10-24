Rails.application.routes.draw do
  get 'pattern_lib/index'

  root 'pattern_lib#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
