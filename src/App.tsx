import { Container } from './components/container/Container';
import { Logo } from './components/logo/Logo';
import { Menu } from './components/menu/Menu';
import { CountDown } from './components/countDown/CountDown';
import { DefaultInput } from './components/defaultInput/DefaultInput';

import './styles/theme.css';
import './styles/global.css';
export function App() {
  return (
    <>
      <Container>
        <Logo/>
      </Container>

      <Container>
        <Menu/>
      </Container>

      <Container>
        <CountDown/>
      </Container>

      <Container>
        <form action="" className='form'>
          <div className="formRow">
            <DefaultInput id='meuInput' type='text' labelText='Task' placeholder='Digite algo'/>
          </div>

          <div className="formRow">
            <p>
              Lorem ipsum dolor sit amet.
            </p>
          </div>

          <div className="formRow">
            <p>
              Ciclos
            </p>
            <p>
              0 0 0 0 0 0 0
            </p>
          </div>

          <div className="formRow">
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  )
}

