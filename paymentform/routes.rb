Rails.application.routes.draw do

  get 'paymentform/index'


  resources :credit_cards
  resources :sada_payments
  resources :jazz_payments
  resources :easy_payments

end
