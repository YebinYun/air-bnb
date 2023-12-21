import { useRecoilState } from "recoil";
import { getHotelListQuerySelector } from "./getHotelListQuery";
import useGetHotelList from "./getHotelList";

type UseGetHotelListItemResult = {
  fetchHotelData: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
  options: any;
  changeData: (data: any) => void;
};

const useGetHotelListItem = (): UseGetHotelListItemResult => {
  const [query, setQuery] = useRecoilState(getHotelListQuerySelector);
  const { fetchData, options, changeData } = useGetHotelList();

  const fetchHotelData = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const data = await fetchData();
      console.log("data", data);
      setQuery((prevQuery) => ({
        ...prevQuery,
        [e.target.name]: e.target.value,
      }));
    } catch (error) {
      console.error(error);
    }
  };

  return { fetchHotelData, options, changeData };
};

export default useGetHotelListItem;
