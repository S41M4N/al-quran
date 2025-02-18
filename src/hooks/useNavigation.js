import { useDispatch, useSelector } from "react-redux";
import { setAyat, setSurah } from "../store/slice/navigation";

export const useNavigation = () => {
  const dispatch = useDispatch();
  const surah = useSelector((state) => state.navigation?.surah || 1);
  const ayat = useSelector((state) => state.navigation?.ayat || 1);

  const setNewSurah = (value) => dispatch(setSurah(value));
  const setNewAyat = (value) => dispatch(setAyat(value));

  return { surah, ayat, setSurah: setNewSurah, setAyat: setNewAyat };
};
