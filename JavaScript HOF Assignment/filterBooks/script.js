let bookDetails = [
  { Name: "Book1", Author: "Author1", Year: 2020 },
  { Name: "Book2", Author: "Author2", Year: 2000 },
  { Name: "Book3", Author: "Author3", Year: 2022 },
  { Name: "Book4", Author: "Author4", Year: 2009 },
  { Name: "Book5", Author: "Author5", Year: 2007 },
  { Name: "Book6", Author: "Author6", Year: 2023 },
  { Name: "Book7", Author: "Author7", Year: 2025 },
  { Name: "Book8", Author: "Author8", Year: 2002 },
  { Name: "Book9", Author: "Author9", Year: 2001 },
];

let filteredBooks = bookDetails.filter((element) => {
  return element["Year"] < 2010;
});

filteredBooks.forEach((el) => {
  el["Author"] = el["Author"].toUpperCase();
});

console.log(filteredBooks);
