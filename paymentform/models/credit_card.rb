class CreditCard < ApplicationRecord
    validates :card_holder, presence: true
  validates :card_number, presence: true, length: { in: 16..19 }
  validates :expiration_date, presence: true,length: { is: 5 }
  validates :cvv, presence: true, length: { is: 3 }
end
