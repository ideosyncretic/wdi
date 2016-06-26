# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

moon = Jellyfish.create({
name: 'Moon Jellyfish',
scientific_name: 'Aurelia aurita',
diameter: '25–40cm (adult)',
lifespan: '1 year',
rank: 'Species',
higher_classification: 'Aurelia',
description: "These alien-looking creatures are named for their translucent, moonlike circular bells. Instead of long, trailing tentacles, moon jellies have a short, fine fringe (cilia) that sweeps food toward the mucous layer on the edges of the bells. Prey is stored in pouches until the oral arms pick it up and begin to digest it.

The coloration of a moon jelly often changes depending on its diet. If the jelly feeds extensively on crustaceans, it turns pink or lavender. An orange tint hints that a jelly's been feeding on brine shrimp.

Scientists have studied the life cycle of this jelly extensively. They know the adult male moon jelly releases strands of sperm, which are ingested by female moon jellies. After fertilization, larvae settle on or near the seafloor and grow into polyps. Polyps alternate between feeding and reproductive stages for up to 25 years. In the reproductive phase, polyps launch buds of cloned juveniles, known as ephyrae, which grow into adult medusae.

Found worldwide in temperate and tropical waters, moon jellies feed in quiet bays and harbors. Although moon jellies have a sting, they pose little threat to humans.",
image: 'http://www.terraspirit.com/memories/110810_moonjellyfish.jpg'
})

egg_yolk = Jellyfish.create({
name: 'Egg Yolk Jellyfish',
scientific_name: 'Phacellophora camtschatica',
diameter: '60cm',
lifespan: '1 year',
rank: 'Species',
higher_classification: 'Phacellophora',
description: "Phacellophora camtschatica, known as the fried egg jellyfish, egg-yolk jellyfish or the ecehb jellyfish is a very large jellyfish, with a bell up to 60 cm (2 ft) in diameter and sixteen clusters of up to a few dozen tentacles, each up to 6 metres (20 ft) long. It has traditionally been included in the family Ulmaridae, but is now considered the only member of the family Phacellophoridae.[1]

This cool-water species can be found in many parts of the world's oceans. It feeds mostly on smaller jellyfish and other gelatinous zooplankton, which become ensnared in the tentacles (Strand & Hamner, 1988). Because the sting of this jellyfish is so weak, many small crustaceans, including larval crabs (Cancer gracilis) and Amphipoda, regularly ride on its bell and even steal food from its oral arms and tentacles (Towanda & Thuesen, 2006). The life cycle of this jellyfish is well known (Widmer 2006), because it is kept in culture at the Monterey Bay Aquarium. It alternates between a benthic stage that is attached to rocks and piers that reproduces asexually and the planktonic stage that reproduces sexually in the water column; there are both males and females in the plankton.

A smaller jellyfish, Cotylorhiza tuberculata, typically found in warmer water, particularly in the Mediterranean Sea, is also popularly called a fried egg jellyfish.",
image: 'http://2.bp.blogspot.com/-f6FrbB9kDDM/TreJFgxnxHI/AAAAAAAAB-Y/wkKYkL3_XSY/s1600/Fried+Egg+Jellyfish1.jpg'
})
