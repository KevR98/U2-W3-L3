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
      bookObj.forEach((bookItem) => {
        book.innerHTML += `
        <div class="col col-12 col-sm-6 col-md-3">
            <div class="card mb-3 h-100">
                <img src="${bookItem.img}" class="card-img-top" alt="Pandemic">
                    <div class="card-body">
                    <h2 class="card-title">${bookItem.title}</h2>
                    <p class="card-text fs-2">Price: ${bookItem.price}</p>
                    <a href="#" class="btn btn-danger remove">SCARTA</a>
                </div>
            </div>
        </div>
      `;
      });
      const removeBtn = document.querySelectorAll('.remove');
      removeBtn.forEach((btn) => {
        btn.addEventListener('click', function (e) {
          // Trova il genitore colonna della card e rimuovilo
          const cardCol = e.target.closest('.col');
          if (cardCol) cardCol.remove();
        });
      });
    })
    .catch((err) => {
      console.log('ERRORE!', err);
    });
};

getBooks();
