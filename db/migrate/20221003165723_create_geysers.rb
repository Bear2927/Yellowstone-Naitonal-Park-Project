class CreateGeysers < ActiveRecord::Migration[7.0]
  def change
    create_table :geysers do |t|
      t.string :name
      t.integer :date_discovered
      t.string :fact
      t.string :image

      t.timestamps
    end
  end
end
