import PropTypes from "prop-types";
import MenuIcon from "../../assets/icons/menu.svg";
import surahList from "../../data/surah-list";
import { useNavigation } from "../../hooks/useNavigation";
import "./header.scss";

const Header = ({ setSettingsOpen }) => {
  const { surah, ayat } = useNavigation();

  const info = surahList[surah - 1];

  if (surah !== info.id) return <b>Something went wrong</b>;

  return (
    <div className="header__container">
      <div className="container header__content">
        <div></div>
        <div>
          {info.id}. {info.name_simple} - {info.translated_name.name} ({ayat})
        </div>
        <div>
          <img
            onClick={() => setSettingsOpen((prev) => !prev)}
            className="header__settings"
            src={MenuIcon}
          />
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  setSettingsOpen: PropTypes.func.isRequired,
};

export default Header;
