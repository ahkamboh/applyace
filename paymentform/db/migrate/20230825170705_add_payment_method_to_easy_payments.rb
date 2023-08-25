class AddPaymentMethodToEasyPayments < ActiveRecord::Migration[7.0]
  def change
    add_column :easy_payments, :payment_method, :string
  end
end
