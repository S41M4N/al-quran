import useGet from '../hooks/useGet'

export const useGetTranslatedAyat = (surah, ayat, translation) => {
  const translationKeys = { bn: 213, en: 131 }

  const { data, ...other } = useGet(
    `https://api.quran.com/api/v4/quran/translations/${translationKeys[translation]}?verse_key=${surah}:${ayat}`
  )

  let formattedData = null
  if (data) {
    formattedData = data.translations[0].text
  }

  return { translation: formattedData, ...other }
}

export const useGetBanglaTafsir = (surah, ayat) => {
  const { data, ...other } = useGet(
    `https://api.quran.com/api/v4/quran/tafsirs/166?verse_key=${surah}:${ayat}&fields=language_name,resource_name`
  )

  let formattedData = null
  if (data?.tafsirs) {
    const filteredTafsir = data.tafsirs.find(
      (tafsir) =>
        tafsir.language_name.toLowerCase() === 'bengali' &&
        tafsir.resource_name.toLowerCase() === 'tafsir abu bakr zakaria'
    )
    formattedData = filteredTafsir.text
  }

  return { tafsir: formattedData, ...other }
}
