const searchBook = () => {
    const inputField = document.getElementById('input-field');
    const searchText = inputField.value;
    //console.log(searchText);

    inputField.value = '';

    //load data


    const url = `https://openlibrary.org/search.json?q=${searchText}`;

    //console.log(url);

     fetch(url)
     .then(response => response.json())
     .then(data => displaySearchResult(data.docs));
}

const displaySearchResult = books => {
    const searchResult = document.getElementById('search-result');
     
    searchResult.innerHTML = '';

    books.forEach(book => {
        //console.log(book);

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">

        <img src= "https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">

        <div class="card-body">
        
           <h4 class="card-title text-success">${book.title}</h4>
            <p class="card-text">Author Name: ${typeof book.author_name === 'undefined'? 'Author not found':book.author_name[0]}</p>
          
          <p class="card-text">First Publish: ${typeof book.first_publish_year === 'undefined'? 'year not found' :book.first_publish_year}</p>

          <p class="card-text">Publisher : ${typeof book.publisher === 'undefined'? 'publisher not found' :book.publisher[0]}</p>

          <p class="card-text">Publish Year: ${typeof book.publish_year === 'undefined' ? 'not found': book.publish_year[0]}</p>
        

        </div>
      </div>
        `;

        searchResult.appendChild(div);
    })
}

