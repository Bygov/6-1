function App() {
  type Book = {
    title: string;
    rating?: number;
  };

  type Library = {
    books: Book[];
  };

  function addBook(library: Library, book: Book): Library {
    return {
      ...library,
      books: [...library.books, book],
    };
  }

  function getAverageRating(books: Book[]): number {
    const ratings = books
      .map((book) => book.rating)
      .filter((rating): rating is number => rating !== undefined);

    if (ratings.length === 0) return 0;
    return ratings.reduce((sum, r) => sum + r, 0) / ratings.length;
  }

  const initialLibrary: Library = {
    books: [
      { title: "Гарри Поттер", rating: 5 },
      { title: "Властелин колец", rating: 4 },
      { title: "Дюна" },
    ],
  };

  const newBook: Book = { title: "1984", rating: 5 };
  const updatedLibrary = addBook(initialLibrary, newBook);

  console.log("Старая библиотека:", initialLibrary.books.length);
  console.log("Новая библиотека:", updatedLibrary.books.length);
  console.log(
    "Средний рейтинг новой библиотеки:",
    getAverageRating(updatedLibrary.books),
  );
}
export default App;
