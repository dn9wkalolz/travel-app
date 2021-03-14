import { Container } from '@material-ui/core'
import { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import { userAPI } from './api/api'
import './App.css'
import CountryPage from './countrypage/CountryPage'
import Footer from './components/Footer/Footer'
import GridLayout from './components/GridLayout/GridLayout'
import NavigationBar from './components/NavigationBar/NavigationBar'

function App() {
  const [data, setData] = useState(null)
  const [filter, setFilter] = useState('')
  const [lang, setLang] = useState('en')

  const handleLanguageChange = (event) => {
    setLang(event.target.value)
  }

  const handleSearchChange = (e) => {
    setFilter(e.target.value)
    console.log('Filter: ', filter)
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await userAPI.getCountries(lang)

      setData(result)
    }

    fetchData()
  }, [lang])

  return (
    <div className='App'>
      <NavigationBar
        onChange={handleSearchChange}
        lang={lang}
        handleLanguageChange={handleLanguageChange}
      />

      <Container>
        <main>
          <Switch>
            <Route
              exact
              path='/'
              render={() => <Redirect from='/' to='/countries' />}
            />
            <Route
              exact
              path='/countries'
              render={() => {
                return <GridLayout countries={data} filter={filter} />
              }}
            />
            <Route
              exact
              path='/countries/:countryId?'
              render={() => {
                return <CountryPage lang={lang} />
              }}
            />
            <Route
              path='*'
              render={() => (
                <div>
                  <h1>404 not found</h1>
                </div>
              )}
            />
          </Switch>
        </main>
      </Container>

      <Footer />
    </div>
  )
}

const AppContainer = () => {
  return (
    <Router>
      <App />
    </Router>
  )
}

export default AppContainer
