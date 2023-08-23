class JazzPayment < ApplicationRecord
    validates :jazz_name, presence: true
        validates :jazz_number, presence: true
end
