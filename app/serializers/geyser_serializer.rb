class GeyserSerializer < ActiveModel::Serializer
  attributes :id, :name, :date_discovered, :fact, :image

  has_many :visitors
end
