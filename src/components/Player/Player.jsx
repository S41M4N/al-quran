import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import PauseIcon from '../../assets/icons/pause.svg'
import PlayIcon from '../../assets/icons/play.svg'
import useGetAudioUrl from '../../utils/getAudioUrl'
import { useNavigation } from '../../hooks/useNavigation'
import { handleNext } from '../../utils/handleNavigation'
import './player.scss'

const Player = () => {
  const { surah, ayat, setSurah, setAyat } = useNavigation()

  const [isPlaying, setIsPlaying] = useState(false)
  const [isReadyToPlay, setIsReadyToPlay] = useState(false)

  const audioRef = useRef(null)
  const { url, isLoading } = useGetAudioUrl(surah, ayat)
  const autoNext = useSelector((state) => state.settings.autoNext)
  const autoPlay = useSelector((state) => state.settings.autoPlay)

  const togglePlayPause = () => {
    if (isPlaying) audioRef.current.pause()
    else audioRef.current.play()
    setIsPlaying(!isPlaying)
  }

  const onAudioLoaded = () => {
    setIsReadyToPlay(true)
    if (autoPlay) {
      audioRef.current.play().then(() => setIsPlaying(true))
    }
  }

  useEffect(() => {
    setIsReadyToPlay(false)

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    }
  }, [surah, ayat])

  const handleAudioEnd = () => {
    setIsPlaying(false)
    if (autoNext) handleNext({ ayat, surah, setSurah, setAyat })
  }

  return (
    <div className="player__container">
      <audio
        ref={audioRef}
        src={url}
        onEnded={handleAudioEnd}
        onLoadedData={onAudioLoaded}
        style={{ display: 'none' }}
      />
      {isLoading || !isReadyToPlay ? (
        <div className="player__spinner" />
      ) : (
        <div onClick={togglePlayPause} className="player__control">
          {isPlaying ? (
            <img className="player__control-img" src={PauseIcon} />
          ) : (
            <img className="player__control-img" src={PlayIcon} />
          )}
        </div>
      )}
    </div>
  )
}

Player.propTypes = {
  surah: PropTypes.number.isRequired,
  ayat: PropTypes.number.isRequired,
  setSurah: PropTypes.func.isRequired,
  setAyat: PropTypes.func.isRequired
}

export default Player
