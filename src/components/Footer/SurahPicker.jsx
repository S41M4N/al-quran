import surahList from "../../data/surah-list";
import { useNavigation } from "../../hooks/useNavigation";

const SurahPicker = () => {
  const { surah, ayat, setSurah, setAyat } = useNavigation();

  const surahInfo = surahList[surah - 1];

  const ayatList = Array.from(
    { length: surahInfo.verses_count },
    (_, i) => i + 1
  );

  const handleSurahChange = (event) => {
    setSurah(parseInt(event.target.value));
    setAyat(1);
  };

  return (
    <div className="surah-picker">
      <select
        className="surah-picker__select"
        onChange={handleSurahChange}
        value={surah}
      >
        {surahList.map((option) => (
          <option key={option.id} value={option.id}>
            {option.id}. {option.name_simple}
          </option>
        ))}
      </select>

      <select
        className="surah-picker__select"
        value={ayat}
        onChange={(event) => setAyat(parseInt(event.target.value))}
      >
        {ayatList.map((number) => (
          <option key={number} value={number}>
            {number}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SurahPicker;
