import * as React from 'react';

import {
  Button,
  Card,
  Hero,
  Layout,
  Nav,
  TextField,
  Theme,
} from '../src';

const logo = require('./images/logo.svg');
const image1 = require('./images/tabs.svg');
const image2 = require('./images/images.svg');
const image3 = require('./images/account.svg');
const heroImage = require('./images/hero.svg');

interface State {
  textValue: string;
}

class App extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      textValue: '',
    };

    this.handleTextChange = this.handleTextChange.bind(this);
  }

  render() {
    const {textValue} = this.state;

    return (
      <Theme>
        <Nav
          branding={
            <a href="/">
              <img
                src={logo}
                alt="React Design System Logo"
                style={{ width: '10rem' }}
              />
            </a>
          }
          items={[
            {url: '#', content: 'Hello'},
            {url: '#', content: 'About us'},
            {url: '#', content: 'Services'},
            {url: '#', content: 'Contact'},
          ]}
        />
        <Hero
          title="React Design System"
          description="A collection of React components to help you build interfaces quicker and easier."
          background={heroImage}
        />
        <Layout>
          <Card title="Dissentias" image={image1}>
            <p>Usu soleat facete dissentias ne. Nec no hinc case, aperiri discere ea qui.</p>
            <p>Vix eros habeo sadipscing ad, soluta iisque eam in, tale inani mei cu.</p>
            <Button primary>Check it out</Button>
          </Card>
          <Card title="Qui inermis senserit" image={image2}>
            <p>Vix eros habeo sadipscing ad, soluta iisque eam in, tale inani mei cu.</p>
            <p>Veri probatus contentiones qui ea. An qui inermis senserit, albucius molestiae euripidis ut sed.</p>
            <Button>Check it out</Button>
          </Card>
          <Card title="Nec no hinc" image={image3}>
            <p>Lorem ipsum dolor sit amet, ea suscipit consulatu sea, adipiscing suscipiantur eos ei.</p>
            <p>Usu soleat facete dissentias ne. Nec no hinc case, aperiri discere ea qui.</p>
            <TextField id="test" type="email" label="Email" value={textValue} onChange={this.handleTextChange} />
            <Button>Check it out</Button>
          </Card>
        </Layout>
      </Theme>
    );
  }

  handleTextChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({textValue: event.target.value});
  }
}

export default App;
