import { images } from "./imageMap";

export const AppData = {

  "menuCategories": [
    {
      "id": "starters",
      "name": "Starters Tease",
      "description": "Begin your culinary journey with our exquisite starters",
      "icon": images.FHlijnfbdTJG59qY03ZdNkZtx3A
    },
    {
      "id": "indian",
      "name": "Regal Indian Heritage",
      "description": "A luxurious journey through India's rich culinary heritage crafted with precision, passion, and timeless flavor.",
      "icon": images.vpR1IO3xOMoAivOMEPR9A6Z8
    },
    {
      "id": "japanese",
      "name": "Japanese Legacy",
      "description": "A refined journey through Japan's culinary traditions where purity, balance, and craftsmanship meet on every plate",
      "icon": images.Bb0OC1SIO6iqIF1PDO3IlAOKnI
    },
    {
      "id": "italian",
      "name": "Italian Grandeur",
      "description": "Experience Italy's culinary heritage reimagined where simple ingredients are transformed into exquisite dishes",
      "icon": images.MNTVjV4ZaLMAxIKchXY5jh14
    },
    {
      "id": "dessert",
      "name": "Desserts Sweet Surrender",
      "description": "Experience Italy's culinary heritage reimagined where simple ingredients are transformed into exquisite dishes",
      "icon": images.FHlijnfbdTJG59qY03ZdNkZtx3A
    },
    {
      "id": "drinks",
      "name": "Drinks Sip In Style",
      "description": "From rare wines to handcrafted cocktails each sip designed to elevate your dining experience",
      "icon": images.sgVdSzjP88jus7syLkwzgex6rg
    }
  ],

  "menuItems": [
    {
      "id": "foie-gras-kiss",
      "name": "Foie Gras Kiss",
      "category": "starters",
      "description": "Silky smooth terrine of ethically sourced foie gras, subtly sweet fig jam providing a delightful counterpoint, accompanied by thin slices of warm, buttered brioche.",
      "price": 48,
      "calories": 320,
      "tags": ["Signature Dessert"],
      "isSignature": true,
      "image": images._8ZRBF9h7rHgRxyPpRln96DMnR5w
    },
    {
      "id": "caviar-pearls",
      "name": "Caviar Pearls",
      "category": "starters",
      "description": "Delicate and glistening Osetra caviar, sustainably sourced, served atop a dollop of chilled crème fraîche with miniature, perfectly toasted blini.",
      "price": 65,
      "calories": 200,
      "tags": ["Signature Dish"],
      "isSignature": true,
      "image": images._4RKqYayWW9SQszIdde4gZNF7oI
    },
    {
      "id": "lobster-whisper",
      "name": "Lobster Whisper",
      "category": "starters",
      "description": "Chilled, succulent lobster tail, gently poached to retain its sweetness, paired with a light and airy avocado mousse and a zesty citrus vinaigrette.",
      "price": 42,
      "calories": 250,
      "tags": [],
      "image": images.FFsrTYYOWED1RmoKS7QftPqRqg
    },
    {
      "id": "scallop-jewel",
      "name": "Scallop Jewel",
      "category": "starters",
      "description": "Single, plump Hokkaido scallop, pan-seared to caramelised perfection, resting on a bed of fragrant truffle emulsion, garnished with delicate microgreens.",
      "price": 39,
      "calories": 210,
      "tags": [],
      "image": images.JWureOQhnWAaZX0oa4lwNSfmv4
    },
    {
      "id": "saffron-biryani-royale",
      "name": "Saffron Biryani Royale",
      "category": "indian",
      "description": "Fragrant long-grain Basmati rice infused with saffron threads, layered with incredibly tender pieces of slow-cooked lamb and aromatic Indian spices.",
      "price": 55,
      "calories": 680,
      "tags": ["Signature Dish"],
      "isSignature": true,
      "image": images.WBxJ3qin8yeN6rGQ4kSLed0T7xY
    },
    {
      "id": "tandoori-prawn-eclat",
      "name": "Tandoori Prawn Éclat",
      "category": "indian",
      "description": "Majestic jumbo prawns marinated in a vibrant blend of spiced yogurt and aromatic herbs, charred to smoky perfection in our traditional tandoor oven.",
      "price": 49,
      "calories": 350,
      "tags": [],
      "image": images.TdaKJyupjpC5mugkSDZkNKM9Is
    },
    {
      "id": "black-truffle-dal",
      "name": "Black Truffle Dal",
      "category": "indian",
      "description": "Slow-cooked black lentils simmered overnight for ultimate creaminess, finished with butter and a delicate infusion of precious black truffle oil.",
      "price": 32,
      "calories": 410,
      "tags": [],
      "image": images.pSrtHx9ydClC0JdpVp8FxA4bg
    },
    {
      "id": "malai-kofta-velvet",
      "name": "Malai Kofta Velvet",
      "category": "indian",
      "description": "Exquisitely smooth dumplings of fresh paneer and potato, simmered in a rich and creamy cashew nut gravy.",
      "price": 38,
      "calories": 520,
      "tags": [],
      "image": images.DT5WF6p6is8vOc6TjR0LkUQtEI
    },

    // ================= JAPANESE =================
    {
      "id": "wagyu-tataki-umami",
      "name": "Wagyu Tataki Umami",
      "category": "japanese",
      "description": "Thinly sliced A5 grade Wagyu beef, quickly seared to retain its melt-in-your-mouth texture, served with ponzu sauce and fresh ginger.",
      "price": 75,
      "calories": 280,
      "tags": ["Signature Dish"],
      "isSignature": true,
      "image": images.VVmSiZIDXxbCfGHyCSKoc2Aa1Y
    },
    {
      "id": "truffle-edamame-silk",
      "name": "Truffle Edamame Silk",
      "category": "japanese",
      "description": "Young, tender edamame pods steamed and tossed with fragrant white truffle oil and delicate sea salt flakes.",
      "price": 28,
      "calories": 190,
      "tags": [],
      "image": images._3yeUHDD8TUqnL2Yu44xBhiZKPjE
    },
    {
      "id": "king-crab-delight",
      "name": "King Crab Delight",
      "category": "japanese",
      "description": "Succulent legs of Alaskan king crab, gently steamed, accompanied by a delicate yuzu-infused butter.",
      "price": 52,
      "calories": 310,
      "tags": [],
      "image": images.WMz77fCCOb4mnqLsN1qxug8U
    },
    {
      "id": "toro-sashimi-azure",
      "name": "Toro Sashimi Azure",
      "category": "japanese",
      "description": "Exquisite slices of premium bluefin tuna belly, prized for its marbling and delicate flavor.",
      "price": 68,
      "calories": 220,
      "tags": [],
      "image": images._1tBderSjhSHzxTMgyPHa3DerNJU
    },
    {
      "id": "osso-buco-ambrosia",
      "name": "Osso Buco Ambrosia",
      "category": "italian",
      "description": "Slowly braised veal shank served atop saffron-infused risotto, finished with fresh gremolata.",
      "price": 62,
      "calories": 750,
      "tags": ["Signature Dish"],
      "isSignature": true,
      "image": images._6RMJsTBylnAjePd99Bps75drXE
    },
    {
      "id": "lobster-ravioli-divine",
      "name": "Lobster Ravioli Divine",
      "category": "italian",
      "description": "Handmade ravioli filled with sweet chunks of lobster, served in a rich bisque reduction.",
      "price": 45,
      "calories": 480,
      "tags": [],
      "image": images._4Gkmt6M0BPG6bC9nL0xu431los
    },
    {
      "id": "burrata-cloud-caprese",
      "name": "Burrata Cloud Caprese",
      "category": "italian",
      "description": "Creamy Apulian burrata served with heirloom tomatoes and cold-pressed basil oil.",
      "price": 35,
      "calories": 380,
      "tags": [],
      "image": images.HzuhMB3Tdb4nMQ2KNv4ATDSjk2g
    },
    {
      "id": "truffle-tagliatelle-dream",
      "name": "Truffle Tagliatelle Dream",
      "category": "italian",
      "description": "Freshly made ribbons of tagliatelle tossed in decadent black truffle cream sauce.",
      "price": 58,
      "calories": 620,
      "tags": [],
      "image": images._2MMxVIk84cW5laraN8M4wE0mRo
    },

    // ================= DESSERT =================
    {
      "id": "passion-souffle-etoile",
      "name": "Passion Soufflé Étoile",
      "category": "dessert",
      "description": "A light and airy soufflé infused with exotic passion fruit, served with classic crème anglaise.",
      "price": 32,
      "calories": 310,
      "tags": ["Signature Dish"],
      "isSignature": true,
      "image": images._1TeDhiFzE9GV7mFPrWPf5UaPs8w
    },
    {
      "id": "lemon-tart-lumiere",
      "name": "Lemon Tart Lumière",
      "category": "dessert",
      "description": "Bright lemon curd encased in a delicate pastry shell, adorned with crisp meringue kisses.",
      "price": 22,
      "calories": 360,
      "tags": [],
      "image": images.aqvzLa12C5We1cOrOh3M4lzG3e4
    },
    {
      "id": "pistachio-bliss-parfait",
      "name": "Pistachio Bliss Parfait",
      "category": "dessert",
      "description": "Elegant layers of smooth pistachio mousse, almond biscotti crumble and Chantilly cream.",
      "price": 25,
      "calories": 390,
      "tags": [],
      "image": images._6ED4RFuqoLcIaOxv7U0S29ZZz5U
    },
    {
      "id": "chocolate-decadence-noir",
      "name": "Chocolate Decadence Noir",
      "category": "dessert",
      "description": "Intensely rich dark chocolate lava cake with molten center and raspberry coulis.",
      "price": 28,
      "calories": 450,
      "tags": [],
      "image": images.b4ZxaMMO05NazcWjTEjt6kv4A
    },

    // ================= DRINKS =================
    {
      "id": "grand-cru-elegance",
      "name": "Grand Cru Elegance",
      "category": "drinks",
      "description": "Meticulously selected Grand Cru Burgundy, Pinot Noir with complex layers of red fruit.",
      "price": 95,
      "calories": 160,
      "tags": ["Signature Drink"],
      "isSignature": true,
      "image": images.cDcsV8kitOIP6wus6TFe55S6Hw
    },
    {
      "id": "citrus-burst-refresher",
      "name": "Citrus Burst Refresher",
      "category": "drinks",
      "description": "Freshly squeezed blood orange juice, lime and mint topped with sparkling water.",
      "price": 15,
      "calories": 120,
      "tags": [],
      "image": images.P4I3P1uuV4RPl4rAOvghJ3xhgBU
    },
    {
      "id": "midnight-velvet-martini",
      "name": "Midnight Velvet Martini",
      "category": "drinks",
      "description": "Smooth vodka shaken with rich blackcurrant liqueur and fresh lime juice.",
      "price": 20,
      "calories": 210,
      "tags": [],
      "image": images._3xlkkL7E9xrae72CKxVGHzwAQBk
    },
    {
      "id": "sparkling-elixir-royale",
      "name": "Sparkling Elixir Royale",
      "category": "drinks",
      "description": "Premium Champagne mingled with elderflower liqueur and ruby-red raspberries.",
      "price": 25,
      "calories": 180,
      "tags": [],
      "image": images.u2106RvdPepafdjv3tIoZzAVbV0
    }
  ],

  "restaurantInfo": {
    "name": "s7",
    "tagline": "Exclusive Affair of Exceptional Flavors Where Every Bite Tells a Story",
    "description": "A modern and dynamic restaurant perfect for fine dining — featuring smooth service, bold flavors, and flexible menus to showcase culinary excellence, ambiance, and customer satisfaction in style.",
    "address": "123 Culinary Boulevard, Fine Dining District",
    "phone": "+1 (555) 123-4567",
    "email": "reservations@s7.com",
    "hours": {
      "monday": "5:00 PM - 11:00 PM",
      "tuesday": "5:00 PM - 11:00 PM",
      "wednesday": "5:00 PM - 11:00 PM",
      "thursday": "5:00 PM - 11:00 PM",
      "friday": "5:00 PM - 12:00 AM",
      "saturday": "12:00 PM - 12:00 AM",
      "sunday": "12:00 PM - 10:00 PM"
    }
  },
  "aboutSection": {
    "milestones": [
      {
        "id": "milestone-1",
        "year": "1990",
        "title": "A Seed of Sophistication",
        "description": "Born from a quiet ambition to create a dining space that honored tradition while reimagining luxury. In 1990, nestled in a historic European courtyard, our doors opened to just a handful of guests each evening, promising flavors drawn from memory and made with intention.",
        "img": images.pdMZIqs4J9gptLiQcZ5W0gYPUw
      },
      {
        "id": "milestone-2",
        "year": "2000",
        "title": "The Signature Emerges",
        "description": "A decade later, Began to earn its name as a culinary destination. By 2000, our menu evolved to include a global lens pairing Mediterranean elegance with French technique and seasonal produce. Our private wine cellar and tasting experiences debuted, setting a new standard for intimate fine dining.",
        "img": images.e0A7bg7r7GorJG8ESV0MAWgacuM
      },
      {
        "id": "milestone-3",
        "year": "2015",
        "title": "A New Fire Ignites",
        "description": "With a renewed spirit, 2015 marked the introduction of open-fire cooking, charcoal-kissed desserts, and live kitchen artistry. We also introduced chef-led experiences and garden-to-table philosophy, deepening our connection to the elements and offering guests something rare: purity, without pretense.",
        "img": images.XwHViKjAoXA7FYyf5ZzWIBwzE
      },
      {
        "id": "milestone-4",
        "year": "2025",
        "title": "The World on a Plate",
        "description": "Today, Its is a destination defined not by its size, but by its soul. We host fewer guests, but craft deeper memories. Each dish reflects global grace and local pride. With exclusive tastings, immersive wine pairings, and fire-kissed desserts, our journey continues always forward, always refined.",
        "img": images._0Cau2YA5I8X0DW1HAMu1EbJ6mOg
      }
    ],
    "highlights": [
      {
        "id": "highlight-1",
        "title": "Timeless Heritage",
        "description": "Signature dishes that evolve with inspiration and culture",
        "icon": "heritage"
      },
      {
        "id": "highlight-2",
        "title": "World-Class Beverage",
        "description": "Signature 7–10 course tasting menus are available",
        "icon": "beverage"
      },
      {
        "id": "highlight-3",
        "title": "Emotion & Elegance",
        "description": "Live piano or ambient jazz, tailored per evening",
        "icon": "music"
      },
      {
        "id": "highlight-4",
        "title": "Exclusivity & Experience",
        "description": "Personalized service from a dedicated host",
        "icon": "service"
      }
    ],
    "team": {
      "title": "The Architects of Taste",
      "subtitle": "Devoted to perfection meet the hands and hearts behind extraordinary experience.",
      "members": [
        {
          "id": "chef-1",
          "name": "Julien Deveraux",
          "position": "Executive Chef",
          "image": images.h9zeqrutEMctb15sn7NnFXChU,
          "bio": "Leading our culinary vision with decades of Michelin-starred experience"
        },
        {
          "id": "chef-2",
          "name": "Cameron Lang",
          "position": "Seafood Specialist",
          "image": images.bTtBzsxXjDCf2WIaUYShIEFqRus,
          "bio": "Master of ocean-to-plate artistry and sustainable fishing practices"
        },
        {
          "id": "chef-3",
          "name": "Sofia Beaumont",
          "position": "Pastry Maestro",
          "image": images.kuUmjfmXjEyW5zT2dRMfvAYmtaw,
          "bio": "Crafting sweet perfection with French technique and artistic innovation"
        }
      ]
    }
  },

  "testimonials": [
    {
      "id": 1,
      "name": "Lizzy B.",
      "designation": "Actress",
      "avatar": images.ZedukbhAqTWzhWu7XgfHVuuBpc,
      "image": images.TH0dtcymw6YcwIqWLOAv7RnULQbf23,
      "rating": 5,
      "title": "A Memorable Feast For The Senses",
      "description": "It’s more than a meal it’s a memory. The setting was intimate, the staff gracious, and each dish a masterpiece."
    },
    {
      "id": 2,
      "name": "Nolan Brown",
      "designation": "CEO",
      "avatar": images.adA3ca5MJSdYVtT9ZmtqJigs,
      "image": images.e3RFHas37fsz8NapHWnzO24Rq0E,
      "rating": 5,
      "title": "An Opulent And Luxury Experience",
      "description": "An extraordinary experience from start to finish. Every detail from the ambiance to the final course was perfection."
    }
  ]

}
export const menuItems = [
  {
    id: 'regal',
    title: 'Regal Indian Heritage',
    description: "A luxurious journey through India's rich culinary heritage crafted with precision, passion, and timeless flavor.",
    image: images._9V7SDG3tB838YFpryLeteV38NM
  },
  {
    id: 'japanese',
    title: 'Japanese Legacy',
    description: "A refined journey through Japan's culinary traditions where purity, balance, and craftsmanship meet on every plate",
    image: images.tpGFIq7ObwXoiJyNP1brE9tUM
  },
  {
    id: 'italian',
    title: 'Italian Grandeur',
    description: "Experience Italy's culinary heritage reimagined where simple ingredients are transformed into exquisite dishes",
    image: images.efH3GoySpPrc2pWkXRQXroWHems
  },
  {
    id: 'drinks',
    title: 'Drinks Sip In Style',
    description: 'From rare wines to handcrafted cocktails each sip designed to elevate your dining experience',
    image: images.sZ3PTm542DAM4Bn6XjcOyb1gV3M
  }
];