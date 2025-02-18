import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import Arabic from './Arabic'
import './content.scss'
import BanglaTafsir from './Tafsir/Bangla'
import BanglaTranslation from './Translations/Bangla'
import EnglishTranslation from './Translations/English'

const Content = () => {
  const showBangla = useSelector((state) => state.settings.showBangla)
  const showEnglish = useSelector((state) => state.settings.showEnglish)
  const showBanglaTafsir = useSelector((state) => state.settings.showBanglaTafsir)

  return (
    <div className="container content__container">
      <div className="content__card">
        <Arabic />
        {showBangla && <BanglaTranslation />}
        {showEnglish && <EnglishTranslation />}
        {showBanglaTafsir && <BanglaTafsir />}
      </div>
    </div>
  )
}

Content.propTypes = {
  surah: PropTypes.number.isRequired,
  ayat: PropTypes.number.isRequired
}

export default Content
