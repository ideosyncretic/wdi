class CreateJellyfishes < ActiveRecord::Migration[5.0]
  def change
    create_table :jellyfishes do |t|
      t.string :name
      t.string :scientific_name
      t.string :diameter
      t.string :lifespan
      t.string :rank
      t.string :higher_classification
      t.text :description
      t.string :image

      t.timestamps
    end
  end
end
