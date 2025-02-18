import PropTypes from 'prop-types'
import CloseIcon from '../../assets/icons/close.svg'
import Content from './Content'
import './settings.scss'

const Settings = ({ setSettingsOpen }) => {
  const handleClick = (event) => {
    if (event.target === event.currentTarget) {
      setSettingsOpen(false)
    }
  }

  return (
    <div className="settings__container" onClick={handleClick}>
      <div className="settings__card">
        <div className="settings__header">
          <div>Options</div>
          <div>
            <img className="settings__header--icon" onClick={() => setSettingsOpen(false)} src={CloseIcon} />
          </div>
        </div>
        <div className="settings__content">
          <Content />
        </div>
      </div>
    </div>
  )
}

Settings.propTypes = {
  setSettingsOpen: PropTypes.func.isRequired
}

export default Settings
