// Init Marvel
const marvel = new Marvel();

// Init UI
const ui = new UI();

marvel.getComics()
      .then(ui.paint)
      .catch(console.error);
