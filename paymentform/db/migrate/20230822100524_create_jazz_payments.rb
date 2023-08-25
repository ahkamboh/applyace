class CreateJazzPayments < ActiveRecord::Migration[7.0]
  def change
    create_table :jazz_payments do |t|
      t.string :jazz_name
      t.string :jazz_number

      t.timestamps
    end
  end
end
