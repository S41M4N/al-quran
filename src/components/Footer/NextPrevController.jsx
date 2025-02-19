import PropTypes from "prop-types";
import { handleNext, handlePrev } from "../../utils/handleNavigation";
import { useNavigation } from "../../hooks/useNavigation";
import NextIcon from "../../assets/icons/next.svg";
import PrevIcon from "../../assets/icons/prev.svg";

const NextPrevController = () => {
  const { surah, ayat, setSurah, setAyat } = useNavigation();

  return (
    <div>
      <div className="next-prev__container">
        <div
          className="next-prev__button"
          onClick={() => handlePrev({ ayat, surah, setSurah, setAyat })}
        >
          <img src={PrevIcon} /> Prev
        </div>
        <div
          className="next-prev__button"
          onClick={() => handleNext({ ayat, surah, setSurah, setAyat })}
        >
          Next <img src={NextIcon} />
        </div>
      </div>
    </div>
  );
};

NextPrevController.propTypes = {
  surah: PropTypes.shape().isRequired,
  ayat: PropTypes.number.isRequired,
  setSurah: PropTypes.func.isRequired,
  setAyat: PropTypes.func.isRequired,
};

export default NextPrevController;
