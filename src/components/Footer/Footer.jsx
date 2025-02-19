import PropTypes from 'prop-types'
import './footer.scss'
import SurahPicker from './SurahPicker'
import NextPrevController from './NextPrevController'
import Player from '../Player/Player'

const Footer = () => {
  return (
    <div className="footer__container">
      <SurahPicker />
      <Player />
      <NextPrevController />
    </div>
  )
}

Footer.propTypes = {
  surah: PropTypes.number.isRequired,
  ayat: PropTypes.number.isRequired,
  setSurah: PropTypes.func.isRequired,
  setAyat: PropTypes.func.isRequired
}

export default Footer
