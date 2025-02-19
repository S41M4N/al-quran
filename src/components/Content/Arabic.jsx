import { useSelector } from 'react-redux'
import { useNavigation } from '../../hooks/useNavigation'
import useGetAyat from '../../utils/useGetAyat'
import SkeletonLoader from '../SkeletonLoader/SkeletonLoader'

const Arabic = () => {
  const { surah, ayat } = useNavigation()
  const { ayat: ayatData, isLoading } = useGetAyat(surah, ayat)

  const arabicFontSize = useSelector((state) => state.settings.arabicFontSize)

  return (
    <div className="content__arabic" style={{ fontSize: arabicFontSize }}>
      {isLoading ? <SkeletonLoader /> : ayatData}
    </div>
  )
}

export default Arabic
