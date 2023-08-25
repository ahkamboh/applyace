class AddPaymentMethodToJazzPayments < ActiveRecord::Migration[7.0]
  def change
    add_column :jazz_payments, :payment_method, :string
  end
end
