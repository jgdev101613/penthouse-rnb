// item format: "name|detail|extra"  (t: c = cocktail, p = price row, s = shots/bottle)
const raw = [
  { id: 'starters', section: 'Food', label: 'Starters', groups: [
    { title: 'Small Plates', t: 'f', items: [
      'Wagyu Aburi & Foie Gras (A5)|Torched wagyu tenderloin, foie gras, tare|2 pcs 1,500',
      'Wagyu Aburi & Foie Gras|Torched foie gras, tare|2 pcs 500/6 pcs 1,300',
      'Baked Scallops|Scallops, cream spinach, mozzarella, Emmental cheese|2 pcs 450/6 pcs 1,200',
      'Penthouse Crab Cakes|Blue crab patty, sauce gribiche|2 pcs 260/6 pcs 680',
      'Salmon Ceviche|Salmon belly, jalapeño crudo, fresh cilantro, confit cherry tomatoes|680',
      'Wagyu Beef Tataki (Hanging Tender)|Sake onion, ponzu and garlic chips|600',
      'Tuna Tartar|Japanese-style tuna tartar, yuzu avocado purée, crispy tempura nori|480',
      'Salmon Belly Aburi|Torched salmon belly aburi|450'] },
    { title: 'Appetizers', t: 'f', items: [
      'Rib-eye Salpicao|US choice rib-eye, garlic, alioli, sourdough|950',
      'Crispy Stuffed Chicken Wings|Chicken wings, ground sirloin, buffalo sauce, garlic aioli|2 pcs 330/6 pcs 900',
      'Grilled Suahe w/ Chimichurri|Pickled mustard and salsa verde|750',
      'Pan Seared Scallops|Pacific Bay scallops, cauliflower mousse, soy beurre noisette, tempura, cress|720',
      'Pulpo|Galician-style pulpo, tomato salsa, chimichurri, potato espuma|720',
      'Beef Carpaccio|Beef tenderloin, arugula, red wine poached pear, shaved parmesan|600',
      'Shrimp Quesadilla|Grilled shrimps, cheddar, mixed pepper, red onion, cilantro|600',
      'Pulled Beef Sliders|Braised brisket, mini brioche, relish, garlic mayo, cheddar, jalapeño|580',
      'Tuna Sashimi Tostadas|Tuna sashimi, truffle cream cheese, ponzu, jalapeño, red onion|520',
      'Oyster Mushroom Chicharones|Crispy oyster mushroom, spiced vinegar|420',
      'Garlic Parmesan Fries|Homemade fries, parmesan, tomato ketchup|350'] },
  ]},
  { id: 'italian', section: 'Food', label: 'Pizza & Pasta', groups: [
    { title: 'Pizza', t: 'f', items: [
      'Reuben Pizza|Pastrami, Swiss cheese, pickles, spicy remoulade, Pic-nik|780',
      'Salami Pizza|Salami, mozzarella, pickled peppers, black olives, feta, cream cheese|780',
      'Spinach Pizza|Mozzarella, cream cheese, garlic confit, truffle aioli|720',
      'Quattro Formaggi|Mozzarella, brie, gorgonzola, parmesan, Mornay sauce|720',
      'Margherita|Tomatoes, basil, mozzarella, marinara and pesto sauce|480'] },
    { title: 'Pasta', t: 'f', items: [
      'Black Pasta|Squid ink spaghetti, shrimps, scallops, mussels, clams, seafood bisque, parmesan|680',
      'Uni Carbonara|Uni, mushroom confit, udon, spring onion, parsley, lemon zest|680',
      'Mushroom Fettuccine Tartufata|Mushroom confit, fettuccine, cream, truffle|680',
      'Shrimp Pesto Linguine|Signature pesto, cherry tomatoes, tiger prawns, garlic bread|620',
      'Bolognese|Spaghettini, classic bolognese ragu, parmesan, basil, grilled sourdough|480'] },
  ]},
  { id: 'fresh', section: 'Food', label: 'Salad & Filipino', groups: [
    { title: 'Salad', t: 'f', items: [
      'Burrata Salad|Burrata, tapenade salsa, cherry tomato, pesto|880',
      'Adlai Tabouleh Salad|Grilled shrimps, parsley, feta, peppers, tomato, citrus dressing|600',
      'Papaya & Pomelo Salad|Grilled beef slices, papaya, pomelo, rice noodles, nuoc cham, spring roll|520'] },
    { title: 'Filipino', t: 'f', items: [
      'Crispy Pork Sisig|Crispy fried pork belly, liver sauce, egg|480',
      'Kinilaw|Malasugui, fresh coconut cream, ginger, bell pepper, onion, cilantro|420'] },
  ]},
  { id: 'mains', section: 'Food', label: 'Mains & Dessert', groups: [
    { title: 'Mains', t: 'f', items: [
      'Grilled USDA Rib-Eye Steak|450g Black Angus rib-eye, mashed potato, garlic confit, creamed spinach|2,700',
      'Surf & Turf|USDA Angus rib-eye, baked suahe prawn, chimichurri, creamy peppercorn sauce|2,300',
      'Kimchi & Onion Pork Ribs|Slow-braised pork ribs, chili glaze, red onion, bell peppers, kimchi sesame sauce|980',
      'Pan Roasted Salmon|Atlantic salmon steak, potato espuma, baby vegetables, prosecco beurre blanc|950',
      'Braised Beef Short Ribs|USDA short ribs, mashed potato, buttered vegetables, red wine jus|950',
      'Beef Kebab|Mediterranean-style beef kebab, harissa, fragrant basmati rice|620',
      'Chicken Wrap|Sautéed chicken breast, mixed vegetables, french fries, Asian Thousand Island|550'] },
    { title: 'Dessert', t: 'f', items: ['New York Cheesecake||280','Flourless Chocolate Cake||250'] },
  ]},
  { id: 'cocktails', label: 'Cocktails', groups: [
    { title: 'Signature Cocktails', price: '450', t: 'c', items: [
      'Charmaine|Gin, fresh kiwi, strawberry, lime','Melon Honey Spritzer|Sauvignon Blanc, agave honey',
      'Frozen Kiwi Strawberry Mojito|Rum, fresh kiwi, strawberry','Dragonfruit Mojito|Rum, fresh dragon fruit',
      'Decadence|Gin, fresh pomelo juice, aloe juice','Night in the Plaza|Vodka, fresh watermelon juice',
      'Sweet Daisy|Vodka, fresh lemon juice','Henry Gatz|Gin, thyme, fresh mango juice',
      'Jimmy Gatz|Rum, fresh mango juice','Dan Cody|Gin, fresh lime juice','Rabustatini|Vodka, espresso',
      'Apollo 8747 (new)|Blended whiskey, ginger, lemon','Destiny (new)|Vodka, lemon, fresh strawberry & apple',
      'Penthouse White Sangria|Gin, white wine, pineapple, apple','Penthouse Red Sangria|Brandy, red wine, apple, orange'] },
    { title: 'Sparkling Wine Cocktails', price: '450', t: 'c', items: [
      'Jealous Lover|Jello, sparkling wine','East Egg|Peach, sparkling wine','Forbidden Orange|Campari, Cointreau, Asti, Chamdor',
      'Gatz|Fresh orange juice, lemon, sparkling wine','Jazzy Curve|Cherry brandy, cherry syrup, sparkling wine',
      'Melon Fizz|Asti, Valdivieso, vodka, Midori','Rose-ni|Strawberry, vodka, Chamdor, Asti',
      'Royal Berry|Raspberry, Asti, Valdivieso, vodka','Sweet Sexy|Gin, honey ginger, Asti, Chamdor',
      'Winter Berry|Blueberry, Asti, Valdivieso, vodka, elderflower','Yale|Gin, sparkling wine'] },
    { title: 'Special Cocktail', price: '450', t: 'c', items: ['Hot Mama|Grey Goose, lemon juice, red chili and chili finger'] },
  ]},
  { id: 'beer', label: 'Beer', groups: [
    { title: 'Imported', t: 'p', items: ['Corona|270','Hoegaarden|270','Stella Artois|270','Heineken|200'] },
    { title: 'Local', t: 'p', items: ['San Miguel Premium|170','San Miguel Super Dry|170','San Miguel Pale Pilsen|150','San Miguel Light|150','Smirnoff Mule|150'] },
    { title: 'Craft', t: 'p', items: ['Crazy Carabao Wheat|210','Crazy Carabao Indian Pale Ale|210','Crazy Carabao Pale Ale|210'] },
  ]},
  { id: 'spirits', label: 'Spirits', groups: [
    { title: 'Gin', t: 's', items: ['Botanist||10,000','Nordes||9,000','Monkey 47|750|8,000','Four Pillars Bloody Shiraz|500|8,000','Four Pillars Rare Dry Gin|470|7,000',"Hendrick's|420|6,500",'Chase GB|460|5,500','Tanqueray|300|3,000','Bombay Sapphire|250|2,800'] },
    { title: 'Vodka', t: 's', items: ['Belvedere 3L||28,000','Belvedere 1.75L||13,800','Belvedere 750|400|5,500','Grey Goose 1.5L||12,000','Grey Goose 750|400|5,300','Absolut Citron|250|2,700','Absolut Kurant|250|2,700','Absolut Blue|220|2,500','Russian Standard|220|2,300'] },
    { title: 'Rum', t: 's', items: ['Don Papa 10 Years|500|8,000','Don Papa 7 Years|300|4,000','Bacardi 8|350|5,000','Bacardi Black|250|2,500','Bacardi Gold|220|2,400','Bacardi Superior|220|2,400','Captain Morgan|220|2,400','Malibu Coconut|220|2,400'] },
    { title: 'Tequila', t: 's', items: ['Don Julio Añejo|850|11,500','Don Julio Blanco|600|8,000','Patrón Añejo|550|8,000','Patrón Silver|500|6,500','Cazadores|280|4,000','Jose Cuervo Gold 1L|250|3,500'] },
    { title: 'Bourbon', t: 's', items: ['Bulleit 1L|350|5,000',"Jack Daniel's|350|3,800","Maker's Mark|250|3,800",'Jim Beam White|220|2,800'] },
    { title: 'Cognac', t: 's', items: ['Hennessy VSOP|500|7,500','Hennessy VS|350|4,500'] },
    { title: 'Liqueur', t: 's', items: ['Absinthe|350|4,500','Frangelico|260|3,000','Baileys Irish Cream|250|2,500','Campari|250|2,500','Cointreau|250|2,500','Disaronno|250|2,500','Vacarri Sambuca|250|2,500','Midori|250|2,500','Jägermeister|250|2,500','Kahlúa|250|2,200','Tequila Rose|250|2,200'] },
  ]},
  { id: 'whiskey', label: 'Whiskey', groups: [
    { title: 'Japanese Whiskey', t: 's', items: ['Hibiki 17 Years||60,000','Suntory Yamazaki 12 Years||40,000','Hakushu Single Malt||15,000','Nikka Miyagikyo Single Malt||15,000'] },
    { title: 'Single Malt', t: 's', items: ['The Macallan 15 Years Fine Oak||17,000','The Macallan 12 Years Fine Oak|800|11,500','The Macallan 12 Years Double Cask|800|11,500','The Balvenie 17 Years||28,000','The Balvenie 12 Years|550|11,000','Highland Park 25 Years||60,000','Highland Dark Origins||12,000','Dalmore 15 Years|750|15,000','Dalmore 12 Years|700|10,000','Oban 14 Years||11,000','Glenlivet 18 Years||11,000','Glenlivet 15 Years|600|7,000','Glenlivet 12 Years|450|5,000','Glenmorangie 10 Years|400|5,000','Glenfiddich 18 Years||12,000','Glenfiddich 15 Years|500|7,000','Glenfiddich 12 Years|450|5,000','Singleton 15 Years||8,500','Singleton 12 Years|500|6,000'] },
    { title: 'Blended Whiskey', t: 's', items: ['Royal Salute 21 Yrs||16,000','Johnnie Walker Blue||19,000','Johnnie Walker Gold 1.75L||12,000','Johnnie Walker Double Black|450|6,100','Johnnie Walker Gold|400|5,500','Johnnie Walker Black 1L|340|4,500','Chivas Regal 18 Years|600|7,000','Chivas Regal 12 Years|350|4,300',"Dewar's 18 Years|500|7,900","Dewar's 15 Years 1L||5,000","Dewar's 12 Years|350|3,600",'Ballantines Finest||3,500','Teeling Small Batch||4,000','Jameson|350|3,500'] },
  ]},
  { id: 'soft', label: 'Non-Alcoholic', groups: [
    { title: 'Sodas & Mixers', t: 'p', items: ['Red Bull|280','Coke (Regular / Zero)|120','Sprite|120','Ginger Ale / Tonic / Soda|120'] },
    { title: 'Coffee & Tea', t: 'p', items: ['Iced Coffee|165','Hot Coffee|165','Espresso|165','Hot Tea|150'] },
    { title: 'Water', t: 'p', items: ['Perrier|160','Bottle Water|100'] },
    { title: 'Fresh Juice & Shake', t: 'p', items: ['Fresh Four Seasons Shake|250','Fresh Mixed Shake|180','Fresh Mango Shake|150','Fresh Watermelon Shake|150','Fresh Strawberry Shake|150','Fresh Four Seasons Juice|130','Fresh Mixed Juice|130','Fresh Mango Juice|130','Fresh Watermelon Juice|130','Fresh Strawberry Juice|130','Fresh Orange Juice|130','Fresh Lemon Juice|130'] },
    { title: 'Juice', t: 'p', items: ['Cranberry Juice|100','Four Seasons Juice|90','Pineapple Juice|90','Orange Juice|90','Apple Juice|90','Aloe Juice|90','Iced Tea|90'] },
  ]},
]

// ---- IMAGES: every item uses the placeholder until you add its URL here (key = exact item name) ----
export const PLACEHOLDER = '/placeholder.svg'
export const IMAGES = {
  // 'Charmaine': 'https://your-site.com/images/charmaine.jpg',
  // 'Pulpo': '/images/pulpo.jpg',
}
const parse = (t, s) => {
  const [a, b, c] = s.split('|')
  const it = t === 'c' ? { name: a, detail: b } : t === 'p' ? { name: a, price: b } : t === 's' ? { name: a, shot: b, price: c } : { name: a, detail: b, price: c }
  return { ...it, img: IMAGES[a] || PLACEHOLDER }
}
export const sections = ['Food', 'Drinks']
export const cats = raw.map(c => ({ ...c, section: c.section || 'Drinks', groups: c.groups.map(g => ({ ...g, items: g.items.map(s => parse(g.t, s)) })) }))
