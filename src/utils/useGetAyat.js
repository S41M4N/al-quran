import useGet from '../hooks/useGet'

const useGetAyat = (surah, ayat) => {
  const { data, ...other } = useGet(
    `https://api.quran.com/api/v4/quran/verses/imlaei?verse_key=${surah}:${ayat}`
  )

  let formattedData = null

  if (data) {
    formattedData = data.verses[0].text_imlaei
  }

  return { ayat: formattedData, ...other }
}

export default useGetAyat
