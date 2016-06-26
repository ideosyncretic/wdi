# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Manager.destroy_all
Song.destroy_all
Artist.destroy_all

manager = Manager.create({
  name: 'Ricky Bobby',
  email: 'rbobby@gmail.com',
  office_number: '516-877-0304',
  cell_phone_number: '718-989-1231'
});

song = Song.create({
  title: 'The Best Song Ever',
  duration: '3:31',
  year_of_release: '2015',
  album_title: 'Best Album Ever',
  artist_last_name: 'Rox'
});

song2 = Song.create({
  title: 'The Worst',
  duration: '3:31',
  year_of_release: '2016',
  album_title: 'Worst Album Ever',
  artist_last_name: 'Taylor Swift'
});

artist = Artist.new
artist.name = 'Kevin Rox'
artist.songs << [song, song2]
artist.manager = manager
artist.photo_url = 'http://png.clipart.me/graphics/thumbs/144/anime-manga-rock-star-guitar-player_144647441.jpg'
artist.nationality = 'Italian'
artist.instrument = 'Guitar'
artist.home_address = '100 Rocks Lane'
if artist.save
  puts "record saved!"
end
