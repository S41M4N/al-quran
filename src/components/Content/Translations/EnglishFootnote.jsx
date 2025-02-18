import { useState } from 'react'
import PropTypes from 'prop-types'
import Popup from 'reactjs-popup'
import './footnote.scss'

const EnglishFootNote = ({ footNoteId, children }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [footNoteContent, setFootNoteContent] = useState('')

  const fetchFootNote = async () => {
    setIsLoading(true)

    try {
      const response = await fetch(`https://quran.com/api/proxy/content/api/qdc/foot_notes/${footNoteId}`)
      const data = await response.json()
      setFootNoteContent(data.foot_note.text)
    } catch (error) {
      console.error('Error fetching footnote:', error)
      setFootNoteContent('Error fetching data.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Popup
      trigger={<sup className="footnote__trigger">{children}</sup>}
      position="bottom center"
      on="click"
      onOpen={fetchFootNote}
      keepTooltipInside="body"
      className="tooltip"
    >
      <div
        className={`content__translated content__translated--bn footnote__content`}
        style={{ fontSize: '15px' }}
        dangerouslySetInnerHTML={{
          __html: isLoading ? 'Loading...' : footNoteContent
        }}
      />
    </Popup>
  )
}

EnglishFootNote.propTypes = {
  footNoteId: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default EnglishFootNote
