class SadaPayment < ApplicationRecord
        validates :sada_name, presence: true 
        validates :sada_number, presence: true
end
