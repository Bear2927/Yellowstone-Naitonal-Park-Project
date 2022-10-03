class Geyser < ApplicationRecord
    has_many :visitors
    has_many :animals, through: :visitors
end
