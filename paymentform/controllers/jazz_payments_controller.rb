class JazzPaymentsController < ApplicationController

    def index
        @jazz_payment  = JazzPayment.all
      end
    def create
      @jazz_payment = JazzPayment.create(jazz_payment_params)
      if @jazz_payment.save
        redirect_to jazz_payments_path
      else
        render 'index'
      end
    end
  
    private
  
    def jazz_payment_params
      params.require(:jazz_payment).permit(:jazz_name, :jazz_number,:payment_method )
    end
end
