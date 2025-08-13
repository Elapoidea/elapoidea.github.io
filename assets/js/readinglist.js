fetch('../assets/data/books.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('reading-list');

    for (const [category, items] of Object.entries(data)) {
      const categoryDiv = document.createElement('div');
      categoryDiv.classList.add('category');

      const categoryTitle = document.createElement('h2');
      categoryTitle.textContent = category;
      categoryDiv.appendChild(categoryTitle);

      if (typeof items === 'object' && !Array.isArray(items)) {
        // Subcategories present
        for (const [subCategory, books] of Object.entries(items)) {
          const subTitle = document.createElement('h3');
          subTitle.textContent = subCategory;
          categoryDiv.appendChild(subTitle);

          const ul = document.createElement('ul');
          books.forEach(book => {
            const li = document.createElement('li');

            const titleSpan = document.createElement('span');
            titleSpan.classList.add('book-title');
            titleSpan.textContent = book.title;

            const authorSpan = document.createElement('span');
            authorSpan.classList.add('book-author');
            authorSpan.textContent = book.author;

            li.appendChild(titleSpan);
            li.appendChild(authorSpan);
            ul.appendChild(li);
          });
          categoryDiv.appendChild(ul);
        }
      } else {
        // No subcategories, just list of books
        const ul = document.createElement('ul');
        items.forEach(book => {
          const li = document.createElement('li');

          const titleSpan = document.createElement('span');
          titleSpan.classList.add('book-title');
          titleSpan.textContent = book.title;

          const authorSpan = document.createElement('span');
          authorSpan.classList.add('book-author');
          authorSpan.textContent = book.author;

          li.appendChild(titleSpan);
          li.appendChild(authorSpan);
          ul.appendChild(li);
        });
        categoryDiv.appendChild(ul);
      }

      container.appendChild(categoryDiv);
    }
  })
  .catch(error => console.error('Error loading books:', error));