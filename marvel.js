class Marvel {
    constructor() {
        this.apiKey = '557d152cca9e00f01d39d309d6c670be';
        this.hash = '728a067f9d179bbf5062bb620551c127'; 
    }

    //fech from marvel
    async getComics() {
        const response = await fetch(`https://gateway.marvel.com/v1/public/characters/1010338/comics?orderBy=onsaleDate&limit=24&ts=1&apikey=${this.apiKey}&hash=${this.hash}`);
        
        const responseData = await response.json();

        return responseData;

    }
}