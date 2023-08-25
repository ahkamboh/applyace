class EasyPaymentsController < ApplicationController

    def index
        @easy_payment  = EasyPayment.all
      end
    def create
      @easy_payment = EasyPayment.create(easy_payment_params)
      if @easy_payment.save
        redirect_to easy_payments_path
      else
        render 'index'
      end
    end
  
    private
  
    def easy_payment_params
      params.require(:easy_payment).permit(:easy_name, :easy_number,:payment_method )
    end
end
