class CreateEasyPayments < ActiveRecord::Migration[7.0]
  def change
    create_table :easy_payments do |t|
      t.string :easy_name
      t.string :easy_number

      t.timestamps
    end
  end
end
