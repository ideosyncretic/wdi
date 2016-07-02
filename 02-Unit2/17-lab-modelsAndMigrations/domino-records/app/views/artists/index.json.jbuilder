json.array!(@artists) do |artist|
  json.extract! artist, :id, :manager_id
  json.url artist_url(artist, format: :json)
end
