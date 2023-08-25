class AddPaymentMethodToCreditCards < ActiveRecord::Migration[7.0]
  def change
    add_column :credit_cards, :payment_method, :string
  end
end
