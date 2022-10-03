class Animal < ApplicationRecord
    has_many :visitors, dependent: :destroy
    has_many :geysers, through: :visitors

    validates :name, :fact, :image, presence: true
    validates :name, uniqueness: true
    validates :population, numericality: { greater_than: 0 }
end
