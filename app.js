// Init Marvel
const marvel = new Marvel();

// Init UI
const ui = new UI();

marvel.getComics()
      .then( results => {
        ui.paint(results);
      })
      .catch( error => console.log(error));