// const FTP_BASE_URL = 'https://free-to-play-games-database.p.rapidapi.com';
const FTP_API_KEY = 'f2ed1ec6a9mshb43ba09df11e9fep193b83jsnf290e5158ac8'
const FTP_REMOTE_HOST = 'free-to-play-games-database.p.rapidapi.com'

// FTP CONFIG
export const ftpRequestConfig = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': `${FTP_API_KEY}`,
    'X-RapidAPI-Host': `${FTP_REMOTE_HOST}`
  }
};
