function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === false) {
    const case1 = input.toLowerCase();
    return case1;
  } else {
    const case2 = input.toUpperCase();
    return case2;
  }
}
formatString("Hello");








function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const filtered = items.filter((item) => item.rating >= 4);
  return filtered;
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

filterByRating(books);







function concatenateArrays<T>(...arrays: T[][]): T[] {
  const concatArray: T[] = [];
  for (const array of arrays) {
    concatArray.push(...array);
  }

  return concatArray;
}

concatenateArrays(["a", "b"], ["c"]);







class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo() {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  getModel() {
    return `Model: ${this.model}`;
  }
}

const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo();
myCar.getModel();







function processValue(value: string | number): number {
    if (typeof value === "string") {
      return value.length;
    } else {
      return value * 2;
    }
  }
  processValue("hello");








  interface Product {
    name: string;
    price: number;
  }

  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
      return null;
    }
    let expensive = products[0];
    for (const product of products) {
      if (product.price > expensive.price) {
        expensive = product;
      }
    }
    return expensive;
  }

  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 },
  ];

  
getMostExpensiveProduct(products);










enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  function getDayType(day: Day): string {
    if (day === Day.Sunday) {
      return "Weekend";
    } else {
      return "Weekday";
    }
  }

  getDayType(Day.Monday);












  async function squareAsync(n: number): Promise<number> {
    if (n < 0) {
      throw new Error("Negative number not allowed");
    }

    return new Promise((result) => {
      setTimeout(() => {
        result(n * n);
      }, 1000);
    });
  }

  squareAsync(4).then(console.log);
