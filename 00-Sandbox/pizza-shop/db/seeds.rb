# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

  Customer.destroy_all

  customer = Customer.new
  customer.name = "Jon"
  customer.address = "Keong Saik Road"
  customer.email = "jon@gmail.com"

  # .save method adds record to database, ID is set.
  if customer.save
    puts "record saved!"
  end

  # .create tries to save this in databases
  Customer.create({
    name: "Gab",
    address: "Kreta Ayer Road",
    email: "gab@email.com"
    })
