import axios from 'axios'; 

export class APIService {
  FTP_BASE_URL = 'https://free-to-play-games-database.p.rapidapi.com';
  FTP_API_KEY = 'f2ed1ec6a9mshb43ba09df11e9fep193b83jsnf290e5158ac8'
  FTP_REMOTE_HOST = 'free-to-play-games-database.p.rapidapi.com'
  
  // FTP CONFIG
  ftpRequestConfig = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': `${this.FTP_API_KEY}`,
      'X-RapidAPI-Host': `${this.FTP_REMOTE_HOST}`
    }
  };

  // get all games list
  public async getGamesList() {
    const getGamesData = await axios({
      ...this.ftpRequestConfig,
       url: `${this.FTP_BASE_URL}/api/games`
      });

    console.log('All GAmes => ',getGamesData);
    return getGamesData.data
  }

  // get game by ID
  public async getGamesByID(id: string) {
    const getGamesData = await axios({
      ...this.ftpRequestConfig,
       url: `${this.FTP_BASE_URL}/api/game?id=${id}`
      });

    console.log('All GAmes => ',getGamesData);
    return getGamesData.data
  }
}