import { useSelector } from 'react-redux'
import { useNavigation } from '../../../hooks/useNavigation'
import SkeletonLoader from '../../SkeletonLoader/SkeletonLoader'
import { useGetTranslatedAyat } from '../../../utils/useGetTranslations'

const BanglaTranslation = () => {
  const { surah, ayat } = useNavigation()
  const { translation, isLoading } = useGetTranslatedAyat(surah, ayat, 'bn')
  const fontSize = useSelector((state) => state.settings.banglaFontSize)

  return (
    <div className={`content__translated`}>
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <div
          className={`content__translated content__translated--bn`}
          style={{ fontSize }}
          dangerouslySetInnerHTML={{ __html: translation }}
        />
      )}
    </div>
  )
}

export default BanglaTranslation
