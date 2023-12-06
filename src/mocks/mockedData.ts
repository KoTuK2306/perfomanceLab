type Category = "Еда" | "Одежда" | "Электроника";
interface StoreProduct {
  category: Category;
  price: number;
  id: number;
  name: string;
}

export const mockedData: StoreProduct[] = [
  {
    id: 1,
    price: 50,
    category: "Еда",
    name: "Шоколадный батончик",
  },
  {
    id: 2,
    price: 2000,
    category: "Одежда",
    name: "Кожаная куртка",
  },
  {
    id: 3,
    price: 15000,
    category: "Электроника",
    name: "Ноутбук Acer Aspire",
  },
  {
    id: 4,
    price: 120,
    category: "Еда",
    name: "Фруктовый йогурт",
  },
  {
    id: 5,
    price: 1500,
    category: "Одежда",
    name: "Джинсы Levi's",
  },
  {
    id: 6,
    price: 25000,
    category: "Электроника",
    name: "Смартфон Samsung Galaxy S21",
  },
  {
    id: 7,
    price: 70,
    category: "Еда",
    name: "Пакет чипсов",
  },
  {
    id: 8,
    price: 5000,
    category: "Одежда",
    name: "Кроссовки Nike Air Max",
  },
  {
    id: 9,
    price: 35000,
    category: "Электроника",
    name: "Ноутбук Apple MacBook Pro",
  },
  {
    id: 10,
    price: 90,
    category: "Еда",
    name: "Бутерброд с ветчиной и сыром",
  },
  {
    id: 11,
    price: 3000,
    category: "Одежда",
    name: "Худи Adidas",
  },
  {
    id: 12,
    price: 20000,
    category: "Электроника",
    name: "Планшет Samsung Galaxy Tab S7",
  },
  {
    id: 13,
    price: 80,
    category: "Еда",
    name: "Банка газировки Coca-Cola",
  },
  {
    id: 14,
    price: 2500,
    category: "Электроника",
    name: "Футболка Tommy Hilfiger",
  },
  {
    id: 15,
    price: 45000,
    category: "Электроника",
    name: "Ноутбук Dell XPS",
  },
  {
    id: 16,
    price: 100,
    category: "Еда",
    name: "Пицца Маргарита",
  },
  {
    id: 17,
    price: 4000,
    category: "Одежда",
    name: "Кожаные ботинки Timberland",
  },
  {
    id: 18,
    price: 30000,
    category: "Электроника",
    name: "Смартфон iPhone 12",
  },
  {
    id: 19,
    price: 60,
    category: "Еда",
    name: "Пакет молока",
  },
  {
    id: 20,
    price: 3500,
    category: "Одежда",
    name: "Куртка Columbia",
  },
  {
    id: 21,
    price: 40000,
    category: "Электроника",
    name: "Ноутбук Lenovo ThinkPad",
  },
  {
    id: 22,
    price: 150,
    category: "Еда",
    name: "Суши набор",
  },
  {
    id: 23,
    price: 2000,
    category: "Одежда",
    name: "Суши набор",
  },
  {
    id: 24,
    price: 2000,
    category: "Одежда",
    name: "Шарф Burberry",
  },
  {
    id: 25,
    price: 2000,
    category: "Одежда",
    name: "Шарф Burberry",
  },
  {
    id: 26,
    price: 50000,
    category: "Электроника",
    name: "Ноутбук HP Spectre x360",
  },
  {
    id: 27,
    price: 50000,
    category: "Электроника",
    name: "Ноутбук HP Spectre x360",
  },
  {
    id: 28,
    price: 350000,
    category: "Электроника",
    name: "Ноутбук Asus ROG G703",
  },
  {
    id: 29,
    price: 350000,
    category: "Электроника",
    name: "Ноутбук Asus ROG G703",
  },
  {
    id: 30,
    price: 110,
    category: "Еда",
    name: "Бургер с картофелем фри",
  },
  {
    id: 31,
    price: 110,
    category: "Еда",
    name: "Бургер с картофелем фри",
  },
  {
    id: 32,
    price: 70,
    category: "Еда",
    name: "Пакет орехов",
  },
  {
    id: 33,
    price: 70,
    category: "Еда",
    name: "Пакет орехов",
  },
  {
    id: 34,
    price: 4500,
    category: "Одежда",
    name: "Пальто Max Mara",
  },
  {
    id: 35,
    price: 4500,
    category: "Одежда",
    name: "Пальто Max Mara",
  },
  {
    id: 36,
    price: 3500,
    category: "Одежда",
    name: "Куртка Stone Island",
  },
  {
    id: 37,
    price: 3500,
    category: "Одежда",
    name: "Куртка Stone Island",
  },
  {
    id: 38,
    price: 60000,
    category: "Электроника",
    name: "Ноутбук Asus ROG Zephyrus",
  },
  {
    id: 39,
    price: 60000,
    category: "Электроника",
    name: "Ноутбук Asus ROG Zephyrus",
  },
  {
    id: 40,
    price: 400000,
    category: "Электроника",
    name: "Ноутбук HP Omen X",
  },
  {
    id: 41,
    price: 400000,
    category: "Электроника",
    name: "Ноутбук HP Omen X",
  },
  {
    id: 42,
    price: 40,
    category: "Еда",
    name: "Пачка печенья Oreo",
  },
  {
    id: 43,
    price: 40,
    category: "Еда",
    name: "Пачка печенья Oreo",
  },
  {
    id: 44,
    price: 40,
    category: "Еда",
    name: "Пачка печенья Oreo",
  },
  {
    id: 45,
    price: 120,
    category: "Еда",
    name: "Салат Греческий",
  },
  {
    id: 46,
    price: 120,
    category: "Еда",
    name: "Салат Греческий",
  },
  {
    id: 47,
    price: 1500,
    category: "Одежда",
    name: "Рубашка Calvin Klein",
  },
  {
    id: 48,
    price: 5000,
    category: "Одежда",
    name: "Кроссовки Adidas Superstar",
  },
  {
    id: 49,
    price: 5000,
    category: "Одежда",
    name: "Кроссовки Adidas Superstar",
  },
  {
    id: 50,
    price: 55000,
    category: "Электроника",
    name: "Ноутбук MSI GS65 Stealth Thin",
  },
  {
    id: 51,
    price: 500000,
    category: "Электроника",
    name: "Ноутбук MSI GT83 Titan",
  },
  {
    id: 52,
    price: 500000,
    category: "Электроника",
    name: "Ноутбук MSI GT83 Titan",
  },
  {
    id: 53,
    price: 70,
    category: "Еда",
    name: "Конфеты Raffaello",
  },
  {
    id: 54,
    price: 90,
    category: "Еда",
    name: "Пицца с морепродуктами",
  },
  {
    id: 55,
    price: 90,
    category: "Еда",
    name: "Пицца с морепродуктами",
  },
  {
    id: 56,
    price: 3500,
    category: "Одежда",
    name: "Куртка The North Face",
  },
  {
    id: 57,
    price: 3000,
    category: "Одежда",
    name: "Джинсы Lee",
  },
  {
    id: 58,
    price: 3000,
    category: "Одежда",
    name: "Джинсы Lee",
  },
  {
    id: 59,
    price: 70000,
    category: "Электроника",
    name: "Ноутбук Razer Blade Pro",
  },
  {
    id: 60,
    price: 700000,
    category: "Электроника",
    name: "Ноутбук Dell G7 17",
  },
  {
    id: 61,
    price: 700000,
    category: "Электроника",
    name: "Ноутбук Dell G7 17",
  },
  {
    id: 62,
    price: 120,
    category: "Еда",
    name: "Салат Цезарь",
  },
  {
    id: 63,
    price: 70,
    category: "Еда",
    name: "Пакет кукурузных палочек",
  },
  {
    id: 64,
    price: 70,
    category: "Еда",
    name: "Пакет кукурузных палочек",
  },
  {
    id: 65,
    price: 5000,
    category: "Одежда",
    name: "Кроссовки Reebok Classic",
  },
  {
    id: 66,
    price: 2500,
    category: "Одежда",
    name: "Свитшот Nike",
  },
  {
    id: 67,
    price: 2500,
    category: "Одежда",
    name: "Свитшот Nike",
  },
  {
    id: 68,
    price: 80000,
    category: "Электроника",
    name: "Ноутбук Alienware Area-51m",
  },
  {
    id: 69,
    price: 800000,
    category: "Электроника",
    name: "Ноутбук MSI GS75 Stealth",
  },
  {
    id: 70,
    price: 800000,
    category: "Электроника",
    name: "Ноутбук MSI GS75 Stealth",
  },
  {
    id: 71,
    price: 90,
    category: "Еда",
    name: "Пицца Пепперони",
  },
  {
    id: 72,
    price: 100,
    category: "Еда",
    name: "Шаурма с говядиной",
  },
  {
    id: 73,
    price: 100,
    category: "Еда",
    name: "Шаурма с говядиной",
  },
  {
    id: 74,
    price: 2000,
    category: "Одежда",
    name: "Футболка Nike",
  },
  {
    id: 75,
    price: 4000,
    category: "Одежда",
    name: "Куртка Moncler",
  },
  {
    id: 76,
    price: 4000,
    category: "Одежда",
    name: "Куртка Moncler",
  },
  {
    id: 77,
    price: 90000,
    category: "Электроника",
    name: "Ноутбук MSI GT76 Titan",
  },
  {
    id: 78,
    price: 900000,
    category: "Электроника",
    name: "Ноутбук Acer Predator Triton 500 SE",
  },
  {
    id: 79,
    price: 900000,
    category: "Электроника",
    name: "Ноутбук Acer Predator Triton 500 SE",
  },
  {
    id: 80,
    price: 70,
    category: "Еда",
    name: "Пачка чая Lipton",
  },
  {
    id: 81,
    price: 60,
    category: "Еда",
    name: "Яблоки",
  },
  {
    id: 82,
    price: 60,
    category: "Еда",
    name: "Яблоки",
  },
  {
    id: 83,
    price: 3000,
    category: "Одежда",
    name: "Джинсы Wrangler",
  },
  {
    id: 84,
    price: 1500,
    category: "Одежда",
    name: "Футболка Adidas",
  },
  {
    id: 85,
    price: 1500,
    category: "Одежда",
    name: "Футболка Adidas",
  },
  {
    id: 86,
    price: 100000,
    category: "Электроника",
    name: "Ноутбук Acer Predator Triton",
  },
  {
    id: 87,
    price: 1000000,
    category: "Электроника",
    name: "Ноутбук ASUS ROG Zephyrus Duo 15 SE",
  },
  {
    id: 88,
    price: 1000000,
    category: "Электроника",
    name: "Ноутбук ASUS ROG Zephyrus Duo 15 SE",
  },
  {
    id: 89,
    price: 70,
    category: "Еда",
    name: "Пакет семечек",
  },
  {
    id: 90,
    price: 150,
    category: "Еда",
    name: "Суши набор Унаги",
  },
  {
    id: 91,
    price: 150,
    category: "Еда",
    name: "Суши набор Унаги",
  },
  {
    id: 92,
    price: 2500,
    category: "Одежда",
    name: "Свитшот Puma",
  },
  {
    id: 93,
    price: 2000,
    category: "Одежда",
    name: "Солнечные очки Ray-Ban",
  },
  {
    id: 94,
    price: 2000,
    category: "Одежда",
    name: "Солнечные очки Ray-Ban",
  },
  {
    id: 95,
    price: 120000,
    category: "Электроника",
    name: "Ноутбук ASUS ROG Mothership",
  },
  {
    id: 96,
    price: 100,
    category: "Еда",
    name: "Шаурма с курицей",
  },
  {
    id: 97,
    price: 4000,
    category: "Одежда",
    name: "Куртка Alpha Industries",
  },
  {
    id: 98,
    price: 150000,
    category: "Электроника",
    name: "Ноутбук Lenovo Legion Y740",
  },
  {
    id: 99,
    price: 60,
    category: "Еда",
    name: "Бананы",
  },
  {
    id: 100,
    price: 1500,
    category: "Одежда",
    name: "Толстовка Champion",
  },
  {
    id: 101,
    price: 200000,
    category: "Электроника",
    name: "Ноутбук Dell Alienware m15 R5",
  },
  {
    id: 102,
    price: 150,
    category: "Еда",
    name: "Суши набор Ф̈иладельфия",
  },
  {
    id: 103,
    price: 2000,
    category: "Одежда",
    name: "Кепка New Era",
  },
  {
    id: 104,
    price: 250000,
    category: "Электроника",
    name: "Ноутбук MSI GE76 Raider",
  },
  {
    id: 105,
    price: 110,
    category: "Еда",
    name: "Паста Карбонара",
  },
  {
    id: 106,
    price: 4500,
    category: "Одежда",
    name: "Куртка Canada Goose",
  },
  {
    id: 107,
    price: 300000,
    category: "Электроника",
    name: "Ноутбук Acer Predator Helios",
  },
  {
    id: 108,
    price: 40,
    category: "Еда",
    name: "Пачка чипсов Pringles",
  },
  {
    id: 109,
    price: 1500,
    category: "Одежда",
    name: "Футболка Lacoste",
  },
  {
    id: 110,
    price: 350000,
    category: "Электроника",
    name: "Ноутбук Asus ROG G703",
  },
  {
    id: 111,
    price: 3500,
    category: "Одежда",
    name: "Куртка Stone Island",
  },
  {
    id: 112,
    price: 400000,
    category: "Электроника",
    name: "Ноутбук HP Omen X",
  },
  {
    id: 113,
    price: 5000,
    category: "Одежда",
    name: "Кроссовки Adidas Superstar",
  },
  {
    id: 114,
    price: 500000,
    category: "Электроника",
    name: "Ноутбук MSI GT83 Titan",
  },
  {
    id: 115,
    price: 2000,
    category: "Одежда",
    name: "Ремень Gucci",
  },
];