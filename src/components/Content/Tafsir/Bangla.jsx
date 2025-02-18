import { useSelector } from 'react-redux'
import { useNavigation } from '../../../hooks/useNavigation'
import { useGetBanglaTafsir } from '../../../utils/useGetTranslations'
import SkeletonLoader from '../../SkeletonLoader/SkeletonLoader'

const BanglaTafsir = () => {
  const { surah, ayat } = useNavigation()
  const fontSize = useSelector((state) => state.settings.banglaTafsirFontSize)

  const { tafsir, isLoading } = useGetBanglaTafsir(surah, ayat)

  return (
    <div className={`content__translated`}>
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <div
          className={`content__translated content__translated--bn`}
          style={{ fontSize }}
          dangerouslySetInnerHTML={{ __html: tafsir }}
        />
      )}
    </div>
  )
}

export default BanglaTafsir
