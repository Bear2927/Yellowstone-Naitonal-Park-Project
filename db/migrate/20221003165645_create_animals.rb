class CreateAnimals < ActiveRecord::Migration[7.0]
  def change
    create_table :animals do |t|
      t.string :name
      t.integer :population
      t.string :fact
      t.string :image

      t.timestamps
    end
  end
end
