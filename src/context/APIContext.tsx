import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { APIService } from '@/services/api.service';
import { IGamesList } from "@/interfaces/context/IAPIService";

const apiService = new APIService;

export const APIContext = createContext<{
  gamesList: IGamesList[] | null;
  apiService: APIService
}>({
  gamesList: null,
  apiService
});


export const APIProvider = ({ children }: PropsWithChildren) => {
  const [gamesList, setGamesList] = useState<IGamesList[] | null>(null);

  useEffect(() => {
    const getGamesData = async () => {
      const getGames = await apiService.getGamesList();
      setGamesList(getGames)
      console.log('FROM CONTEXT ALL => ', getGames)
    };
    getGamesData();
  }, [])

  return (
    <APIContext.Provider value={{
      gamesList,
      apiService
    }}>
      {children}
    </APIContext.Provider>
  )
}