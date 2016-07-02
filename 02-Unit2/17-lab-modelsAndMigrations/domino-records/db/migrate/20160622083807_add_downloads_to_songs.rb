class AddDownloadsToSongs < ActiveRecord::Migration[5.0]
  def change
    add_column :songs, :downloads, :integer
  end
end
