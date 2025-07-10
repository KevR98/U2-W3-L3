// URL https://striveschool-api.herokuapp.com/books

const getBooks = function () {
  fetch('https://striveschool-api.herokuapp.com/books')
    .then((res) => {
      console.log('RESPONSE', res);
      if (res.ok) {
        // Faccio un controllo... e se il server è OK, esprapolo il JSON
        return res.json();
      } else {
        // Con questo codice, mando direttamente alla catch con un messaggio
        throw new Error('LA RESPONSE DA STRIVESCHOOL NON È OK');
      }
    })
    .then((bookObj) => {
      // Richiamo in una variabile il div con id "cardBook"
      const book = document.getElementById('cardBook');
      // Con un forEach richiamo ciclo l'array dell'API
      bookObj.forEach((bookItem) => {
        // Creo l'HTML con += (Ovvero che aggiunge)
        book.innerHTML += `
        <div class="col col-12 col-sm-6 col-md-3">
            <div class="card mb-3 h-100 rounded-4 overflow-hidden">
                <img src="${bookItem.img}" class="card-img-top flex-grow-1" alt="Pandemic">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title flex-grow-0">${bookItem.title}</h5>
                    <p class="card-text fs-5 flex-grow-1">Price: ${bookItem.price}€</p>
                    <div class="d-flex justify-content-between">
                    <button class="btn btn-primary add">COMPRA</button>
                    <button class="btn btn-danger remove">SCARTA</button>
                    </div>
                </div>
            </div>
        </div>
      `;
      });

      // Assegno la variabile removeCard alla classe con bottone remove
      const removeCard = document.querySelectorAll('.remove');
      // Faccio un ciclo forEach dove assegno un parametro "btn"
      removeCard.forEach((btn) => {
        // Creo l'evento listener che al click del bottone (usato come parametro)
        btn.addEventListener('click', function (e) {
          // Va a cercare il padre più vicino a ".col"... gli assegna la classe d-none
          btn.closest('.col').classList.add('d-none');
        });
      });
    })
    .catch((err) => {
      console.log('ERRORE!', err);
    });
};

getBooks();
