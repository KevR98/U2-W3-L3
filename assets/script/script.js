// URL https://striveschool-api.herokuapp.com/books

const getBooks = function () {
  fetch('https://striveschool-api.herokuapp.com/books')
    .then((res) => {
      console.log('RESPONSE', res);
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('LA RESPONSE DA STRIVESCHOOL NON È OK');
      }
    })
    .then((bookObj) => {
      console.log(bookObj);
      console.log(bookObj[0]);

      const book = document.getElementById('cardBook');
      for (let i = 0; i < bookObj.length; i++) {
        book.innerHTML += `
        <div class="col col-12 col-sm-6 col-md-3">
            <div class="card mb-3">
                <img src="${bookObj[i].img}" class="card-img-top" alt="Pandemic">
                    <div class="card-body">
                    <h2 class="card-title">${bookObj[i].title}</h2>
                    <h5 class="card-text">Price: ${bookObj[i].price}</h5>
                    <a href="#" class="btn btn-danger">SCARTA</a>
                </div>
            </div>
        </div>
      `;
      }
    })
    .catch((err) => {
      console.log('ERRORE!', err);
    });
};

getBooks();
