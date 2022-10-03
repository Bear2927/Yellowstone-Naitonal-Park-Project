puts "Yellowstone info seeding..."


a1 = Animal.create(name: "Bison", population: 5450, fact:  "Bison are the largest mammal in North America. Male bison (called bulls) weigh up to 2,000 pounds and stand 6 feet tall, while females (called cows) weigh up to 1,000 pounds and reach a height of 5 feet.", image: "https://a-z-animals.com/media/2021/12/Bearded-Animals-Bison.jpg")
a2 = Animal.create(name: "Cougar", population: 42, fact:  "A cougar eats until full, then caches the carcass for later meals. Cougars spend an average of 4 days consuming an elk or deer and 5 days hunting for the next meal.", image: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Mountain_Lion_in_Glacier_National_Park.jpg")
a3 = Animal.create(name: "Black Bear", population: 650, fact:  "Black bears eat almost anything, including grass, fruits, tree cambium, eggs, insects, fish, elk calves, and carrion. Their short, curved claws enable them to climb trees but do not allow them to dig for roots or ants as well as a grizzly bear can.", image: "https://images.unsplash.com/photo-1563036203-8ecb9d80bea7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmxhY2slMjBiZWFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80")
a4 = Animal.create(name: "Grizzly Bear", population: 728, fact:  "Grizzly bears can run up to 40 miles per hour.", image: "https://www.expeditionsalaska.com/wp-content/uploads/2017/04/16-brown-bear-photos-2377.jpg")
a5 = Animal.create(name: "Elk", population: 20000, fact: "Bull elk begin growing their first set of antlers when they are about one year old. Antler growth is triggered in spring by a combination of two factors: a depression of testosterone levels and lengthening daylight.", image: "https://www.nps.gov/common/uploads/grid_builder/yell/crop16_9/41860828-1DD8-B71B-0B9296FEBFFF0D90.jpg?width=465&quality=90&mode=crop")
a6 = Animal.create(name: "Pronghorn", population: 500, fact: "Their large liver (proportionately, almost twice the size of a domestic sheeps liver) may be able to remove plant toxins from the blood stream.", image: "https://www.nps.gov/yell/learn/nature/images/20150916_ndh-yell-4263.jpg?maxwidth=1200&maxheight=1200&autorotate=false")


g1 = Geyser.create(name: "Old Faithful", date_discovered: "1870", fact: "Old Faithful erupts every 35 to 120 minutes for 1 1/2 to 5 minutes. Its maximum height ranges from 90 to 184 feet.", image: "https://yellowstone.net/geysers/wp-content/uploads/sites/2/2022/07/74-2-007b-500x590.jpg")
g2 = Geyser.create(name: "Beehive", date_discovered: "1870", fact: "Eruptions of Beehive Geyser last about 5 minutes and are 200 feet (61 m) high", image: "https://yellowstonenaturalist.com/wp-content/uploads/2020/01/Beehive71012J1041.jpg")
g3 = Geyser.create(name: "Castle", date_discovered: "1870", fact: "The Castle Geyser has a 10- to 12-hour eruption cycle. The geyser erupts hot water for about 20 minutes in a vertical column that reaches a height of 90 ft (27 m) before changing to a noisy steam phase that issues for 30 to 40 minutes.", image: "https://th.bing.com/th/id/OIP.iyHH82jW3XTAYsggAmOd1QHaJQ?w=158&h=198&c=7&r=0&o=5&pid=1.7")
g4 = Geyser.create(name: "Anemone", date_discovered: "1904", fact: "Big Anemone usually erupts every 7 to 10 minutes for about 45 seconds to a height of about 10 feet. Little Anemone usually erupts every 20 to 35 minutes for up to 10 minutes to a height of about 5 feet.", image: "https://th.bing.com/th/id/R.8dfa0e02ed457430f9995fdaa26c842e?rik=HV0UC4dFijhIrg&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2ff%2ff6%2fAnemone_Geyser.jpg&ehk=H0%2bw%2fjNVU6z4PRh52f3GRV4Vjc78nh3TxdoFM%2fvnb%2fw%3d&risl=&pid=ImgRaw&r=0")

v1 = Visitor.create(name: "Barrett", animal_id: a1.id, geyser_id: g1.id)
v2 = Visitor.create(name: "Simon", animal_id: a2.id, geyser_id: g3.id)
v3 = Visitor.create(name: "Christian", animal_id: a3.id, geyser_id: g2.id)
v4 = Visitor.create(name: "Barrett", animal_id: a4.id, geyser_id: g1.id)
v5 = Visitor.create(name: "Barrett", animal_id: a5.id, geyser_id: g2.id)
v6 = Visitor.create(name: "Barrett", animal_id: a6.id, geyser_id: g4.id)


puts "Yellowstone info created"