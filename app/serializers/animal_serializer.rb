class AnimalSerializer < ActiveModel::Serializer
  attributes :id, :name, :population, :fact, :image, :spotted

  has_many :visitors
end
