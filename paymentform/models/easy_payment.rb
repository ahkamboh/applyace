class EasyPayment < ApplicationRecord
    validates :easy_name, presence: true 
    validates :easy_number, presence: true
end
