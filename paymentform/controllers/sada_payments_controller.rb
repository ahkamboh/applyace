class SadaPaymentsController < ApplicationController
    def index
        @sada_payment  = SadaPayment.all
      end
    def create
      @sada_payment = SadaPayment.create(sada_payment_params)
      if @sada_payment.save
        redirect_to sada_payments_path
      else
        render 'index'
      end
    end
  
    private
  
    def sada_payment_params
      params.require(:sada_payment).permit(:sada_name, :sada_number,:payment_method )
    end
  end
  