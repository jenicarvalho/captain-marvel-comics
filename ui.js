class UI {
    constructor() {
        this.copyright = document.querySelector('.copyright');
        this.comics = document.querySelector('.comics ul');
    }

    paint(marvel) { 
        //show marvel rights
        this.copyright.innerHTML =  `
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
        this.comics.innerHTML = output;
    }
}