import * as React from 'react';
import * as styles from './App.scss';

import Card from './components/Card';
import Hero from './components/Hero';
import Layout from './components/Layout';
import Nav from './components/Nav';

const natalieImage = require('./images/natalie.jpg');
const elliotImage = require('./images/elliot.jpg');
const dominicImage = require('./images/dominic.jpg');
const heroImage = require('./images/hero.jpg');

class App extends React.Component {
  render() {
    return (
      <div className={styles.App}>
        <Nav
          branding={<p>Test</p>}
          items={[
            {url: '#', content: 'Hello'},
            {url: '#', content: 'About us'},
            {url: '#', content: 'Services'},
            {url: '#', content: 'Contact'},
          ]}
        />
        <Hero
          title="The Ultimate Design Framework"
          description="Morbi sed vulputate turpis. Nullam porta, nunc quis faucibus efficitur, erat tortor consectetur urna, id pharetra lacus massa quis sem."
          background={heroImage}
        />
        <Layout>
          <Card title="Elliot" image={elliotImage}>
            <p>Usu soleat facete dissentias ne. Nec no hinc case, aperiri discere ea qui.</p>
            <p>Vix eros habeo sadipscing ad, soluta iisque eam in, tale inani mei cu.</p>
          </Card>
          <Card title="Dominic" image={dominicImage}>
            <p>Vix eros habeo sadipscing ad, soluta iisque eam in, tale inani mei cu.</p>
            <p>Veri probatus contentiones qui ea. An qui inermis senserit, albucius molestiae euripidis ut sed.</p>
          </Card>
          <Card title="Natalie" image={natalieImage}>
            <p>Lorem ipsum dolor sit amet, ea suscipit consulatu sea, adipiscing suscipiantur eos ei.</p>
            <p>Usu soleat facete dissentias ne. Nec no hinc case, aperiri discere ea qui.</p>
          </Card>
        </Layout>
      </div>
    );
  }
}

export default App;
