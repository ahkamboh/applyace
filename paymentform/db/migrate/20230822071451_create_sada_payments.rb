class CreateSadaPayments < ActiveRecord::Migration[7.0]
  def change
    create_table :sada_payments do |t|
      t.string :sada_name
      t.string :sada_number

      t.timestamps
    end
  end
end


