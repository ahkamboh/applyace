class AddPaymentMethodToSadaPayments < ActiveRecord::Migration[7.0]
  def change
    add_column :sada_payments, :payment_method, :string
  end
end
