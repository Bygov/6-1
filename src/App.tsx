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
}
export default App;
