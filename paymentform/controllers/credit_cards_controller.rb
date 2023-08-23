class CreditCardsController < ApplicationController
    def index
      @credit_card = CreditCard.all
    end
  
    def create
      @credit_card = CreditCard.create(payment_params)
      if @credit_card.save
        redirect_to credit_cards_path
      else
        render 'index'
      end
    end
  
    private
  
    def payment_params
      params.require(:credit_card).permit(:card_holder, :card_number, :expiration_date, :cvv)
    end
  end
  