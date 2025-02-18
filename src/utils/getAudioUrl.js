import useGet from '../hooks/useGet'

const useGetAudioUrl = (surah, ayat) => {
  const { data, ...other } = useGet(`https://api.quran.com/api/v4/recitations/7/by_ayah/${surah}:${ayat}`)

  let formattedData = null

  if (data) {
    formattedData = 'https://verses.quran.com/' + data.audio_files[0].url
  }

  return { url: formattedData, ...other }
}

export default useGetAudioUrl
