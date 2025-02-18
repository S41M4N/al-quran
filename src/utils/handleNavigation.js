import surahList from '../data/surah-list'

export const handlePrev = ({ ayat, surah, setSurah, setAyat }) => {
  if (ayat === 1 && surah === 1) return

  if (ayat === 1) {
    const prevSurah = surahList[surah - 2]
    setAyat(prevSurah.verses_count)
    setSurah(surah - 1)
  } else {
    setAyat(ayat - 1)
  }
}

export const handleNext = ({ ayat, surah, setSurah, setAyat }) => {
  const surahInfo = surahList[surah - 1]
  const lastAyat = surahInfo.verses_count

  if (ayat === lastAyat && surah === 114) return

  if (ayat === lastAyat) {
    setAyat(1)
    setSurah(surah + 1)
  } else {
    setAyat(ayat + 1)
  }
}
