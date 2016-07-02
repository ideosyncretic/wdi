class AddArtistLastNameToSongs < ActiveRecord::Migration[5.0]
  def change
    add_column :songs, :artist_last_name, :string
  end
end
