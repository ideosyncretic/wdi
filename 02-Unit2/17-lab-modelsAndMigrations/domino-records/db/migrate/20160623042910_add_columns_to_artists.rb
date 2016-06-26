class AddColumnsToArtists < ActiveRecord::Migration[5.0]
  def change
    add_column :artists, :photo_url, :string
    add_column :artists, :nationality, :string
    add_column :artists, :instrument, :string
    add_column :artists, :home_address, :string
  end
end
