import { useDispatch, useSelector } from 'react-redux'
import {
  setArabicFontSize,
  setAutoNext,
  setAutoPlay,
  setBanglaFontSize,
  setBanglaTafsirFontSize,
  setEnglishFontSize,
  setShowBangla,
  setShowBanglaTafsir
} from '../../store/slice/settings'
import { setShowEnglish } from '../../store/slice/settings'

const fontRange = Array.from({ length: 60 }, (_, i) => i + 8)

const Content = () => {
  const dispatch = useDispatch()
  const autoPlay = useSelector((state) => state.settings.autoPlay)
  const autoNext = useSelector((state) => state.settings.autoNext)
  const showBangla = useSelector((state) => state.settings.showBangla)
  const showEnglish = useSelector((state) => state.settings.showEnglish)
  const showBanglaTafsir = useSelector((state) => state.settings.showBanglaTafsir)

  const arabicFontSize = useSelector((state) => state.settings.arabicFontSize)
  const banglaFontSize = useSelector((state) => state.settings.banglaFontSize)
  const banglaTafsirFontSize = useSelector((state) => state.settings.banglaTafsirFontSize)
  const englishFontSize = useSelector((state) => state.settings.englishFontSize)

  return (
    <>
      <div className="settings__item">
        <label>
          <input type="checkbox" checked={autoPlay} onChange={() => dispatch(setAutoPlay(!autoPlay))} />
          <div className="settings__item-checkbox--title">Auto Play Audio</div>
        </label>
      </div>

      <div className="settings__item">
        <label>
          <input type="checkbox" checked={autoNext} onChange={() => dispatch(setAutoNext(!autoNext))} />
          <div className="settings__item-checkbox--title">Auto Next Ayat</div>
        </label>
      </div>

      <div className="settings__item">
        <label>
          <input type="checkbox" checked={showBangla} onChange={() => dispatch(setShowBangla(!showBangla))} />
          <div className="settings__item-checkbox--title">Show Bangla Translation</div>
        </label>
      </div>

      <div className="settings__item">
        <label>
          <input
            type="checkbox"
            checked={showEnglish}
            onChange={() => dispatch(setShowEnglish(!showEnglish))}
          />
          <div className="settings__item-checkbox--title">Show English Translation</div>
        </label>
      </div>

      <div className="settings__item">
        <label>
          <input
            type="checkbox"
            checked={showBanglaTafsir}
            onChange={() => dispatch(setShowBanglaTafsir(!showBanglaTafsir))}
          />
          <div className="settings__item-checkbox--title">Show Bangla Tafsir</div>
        </label>
      </div>

      <div className="settings__item">
        Arabic Font Size
        <select
          className="surah-picker__select"
          value={arabicFontSize}
          onChange={(event) => dispatch(setArabicFontSize(event.target.value))}
        >
          {fontRange.map((number) => (
            <option key={number} value={`${number}px`}>
              {number}px
            </option>
          ))}
        </select>
      </div>

      <div className="settings__item">
        Bangla Font Size
        <select
          className="surah-picker__select"
          value={banglaFontSize}
          onChange={(event) => dispatch(setBanglaFontSize(event.target.value))}
        >
          {fontRange.map((number) => (
            <option key={number} value={`${number}px`}>
              {number}px
            </option>
          ))}
        </select>
      </div>

      <div className="settings__item">
        English Font Size
        <select
          className="surah-picker__select"
          value={englishFontSize}
          onChange={(event) => dispatch(setEnglishFontSize(event.target.value))}
        >
          {fontRange.map((number) => (
            <option key={number} value={`${number}px`}>
              {number}px
            </option>
          ))}
        </select>
      </div>

      <div className="settings__item">
        Tafsir Font Size (Bangla)
        <select
          className="surah-picker__select"
          value={banglaTafsirFontSize}
          onChange={(event) => dispatch(setBanglaTafsirFontSize(event.target.value))}
        >
          {fontRange.map((number) => (
            <option key={number} value={`${number}px`}>
              {number}px
            </option>
          ))}
        </select>
      </div>

      <div className="settings__credits">
        <b>Credits:</b>
        <p>
          Data Provider{' '}
          <a href="https://quran.com/" target="__blank">
            Quran.com
          </a>
        </p>
        <p>
          Bangla Translation & Tafsir:{' '}
          <a href="https://www.abubakarzakaria.com/" target="__blank">
            Dr. Abu Bakr Muhammad Zakaria
          </a>
        </p>
        <p>
          English Translator:{' '}
          <a href="https://theclearquran.org/" target="__blank">
            Dr. Mustafa Khattab
          </a>
        </p>
        <p>
          Quran Reciter:{' '}
          <a href="https://alfan.link/Alafasy" target="__blank">
            Mishary Bin Rashid AlAfasy
          </a>
        </p>
      </div>
    </>
  )
}

export default Content
