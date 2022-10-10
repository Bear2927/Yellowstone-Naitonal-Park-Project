class AddSpottedToAnimals < ActiveRecord::Migration[7.0]
  def change
    add_column :animals, :spotted, :integer
  end
end
