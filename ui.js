class UI {
    paint(marvel) {
        //show marvel rights
        document.querySelector('.copyright').innerHTML = `
            <h1>${marvel.copyright}</h1>
            <p>${marvel.attributionHTML}</p>
        `;

        //only comics from api
        const comics = marvel.data.results;
        //show marvel comics
        let output = '';

        comics.forEach(comic => {
            output +=
                `
                <li>
									<div class='description'><p>${comic.description}</p></div>
									<img src="${comic.thumbnail.path}.${comic.thumbnail.extension}">
									<h3>${comic.title}</h3>
                </li>
            `;

        });
        document.querySelector('.comics ul').innerHTML = output;
    }
}