import { useState } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Settings from '../components/Settings/Settings'
import Content from '../components/Content/Content'

const MainPage = () => {
  const [settingsOpen, setSettingsOpen] = useState(false)

  return (
    <div className="app__container">
      <Header setSettingsOpen={setSettingsOpen} />
      <Content />
      <Footer />
      {settingsOpen && <Settings setSettingsOpen={setSettingsOpen} />}
    </div>
  )
}

export default MainPage
