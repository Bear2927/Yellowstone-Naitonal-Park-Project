class VisitorSerializer < ActiveModel::Serializer
  attributes :id, :name, :animal_id, :geyser_id

  has_many :animals
  has_many :geysers
end
