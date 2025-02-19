import parse, { domToReact } from 'html-react-parser'
import { useSelector } from 'react-redux'
import { useNavigation } from '../../../hooks/useNavigation'
import { useGetTranslatedAyat } from '../../../utils/useGetTranslations'
import SkeletonLoader from '../../SkeletonLoader/SkeletonLoader'
import EnglishFootNote from './EnglishFootnote'

const EnglishTranslation = () => {
  const { surah, ayat } = useNavigation()
  const { translation, isLoading } = useGetTranslatedAyat(surah, ayat, 'en')

  const fontSize = useSelector((state) => state.settings.englishFontSize)

  const options = {
    replace: (domNode) => {
      if (domNode.name && domNode.name === 'sup') {
        const footNote = domNode.attribs?.foot_note

        return (
          <EnglishFootNote footNoteId={footNote}>{domToReact(domNode.children, options)}</EnglishFootNote>
        )
      }
    }
  }

  const parsedHtml = parse(translation || '', options)

  return (
    <div className={`content__translated`}>
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <div className={`content__translated content__translated--en`} style={{ fontSize }}>
          {parsedHtml}
        </div>
      )}
    </div>
  )
}

export default EnglishTranslation
