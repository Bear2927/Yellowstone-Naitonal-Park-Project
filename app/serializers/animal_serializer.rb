class AnimalSerializer < ActiveModel::Serializer
  attributes :id, :name, :population, :fact, :image

  has_many :visitors
end
