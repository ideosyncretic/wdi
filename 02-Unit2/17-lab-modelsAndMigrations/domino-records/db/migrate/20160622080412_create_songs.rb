class CreateSongs < ActiveRecord::Migration[5.0]
  def change
    create_table :songs do |t|
      t.string :title
      t.string :duration
      t.string :year_of_release
      t.string :album_title

      t.timestamps
    end
  end
end
