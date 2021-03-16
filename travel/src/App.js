import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { userAPI } from './api/api';
import CountryPage from './countrypage/CountryPage';
import Footer from './components/Footer/Footer';
import GridLayout from './components/GridLayout/GridLayout';
import NavigationBar from './components/NavigationBar/NavigationBar';

function App() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');
  const [lang, setLang] = useState('en');

  const currentLanguage = localStorage.getItem('selectedLanguage');

  if (!localStorage.getItem('selectedLanguage')) {
    setLang('en');
    localStorage.setItem('selectedLanguage', lang);
  }

  const handleLanguageChange = (event) => {
    setLang(event.target.value);
    localStorage.setItem('selectedLanguage', event.target.value);
  };

  const handleSearchChange = (value) => {
    setFilter(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await userAPI.getCountries(currentLanguage);

      setData(result);
    };

    fetchData();
  }, [lang, currentLanguage]);

  return (
    <div className="App">
      <NavigationBar
        handleSearchChange={handleSearchChange}
        lang={currentLanguage}
        handleLanguageChange={handleLanguageChange}
      />

      <Container>
        <main>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Redirect from="/" to="/countries" />}
            />
            <Route
              exact
              path="/countries"
              render={() => <GridLayout countries={data} filter={filter} />}
            />
            <Route
              exact
              path="/countries/:countryId?"
              render={() => <CountryPage lang={currentLanguage} />}
            />
            <Route
              path="*"
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
  );
}

const AppContainer = () => (
  <Router>
    <App />
  </Router>
);

export default AppContainer;
