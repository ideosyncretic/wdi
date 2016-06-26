class RemoveDownloadsFromSongs < ActiveRecord::Migration[5.0]
  def change
    remove_column :songs, :downloads, :integer
  end
end
