 
 export interface IGamesList {
   developer: string
   freetogame_profile_url: string
   game_url: string
   genre: string
   id: number
   platform: string
   publisher: string
   release_date: string
   short_description: string
   thumbnail: string
   title: string
 }

 export interface ISystemReq {
   os: string;
   processor: string;
   memory: string;
   graphics: string;
   storage: string
  }

 export interface IGameDetails extends IGamesList {
  description: string;
  minimum_system_requirements: ISystemReq;
  screenshots: {id: number; image: string}[];
  status: string;
 }