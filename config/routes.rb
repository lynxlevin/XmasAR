Rails.application.routes.draw do
  root to: "ar#index"
  get 'demo', to: 'ar#demo'
end
