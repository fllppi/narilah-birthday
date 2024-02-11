import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AppShell, MantineProvider, Group, UnstyledButton, Container } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import '@mantine/core/styles.css';

import NarilahLogo from './assets/img/logo-white.svg';
import headerclasses from './styles/Header.module.css';

import { Footer } from './components/Footer'

import { HomePage } from './pages/HomePage'
import { GlueckwuenschePage } from './pages/GlueckwuenschePage';

function App() {
  const isMobile = useMediaQuery(`(max-width: 900px)`);
  return (
    <>
      <MantineProvider forceColorScheme="dark">
        <AppShell
          header={{ height: 100 }}
          padding="md"
          footer={{ height: 40 }}
        >
          <AppShell.Header>
            <header className={headerclasses.header}>
              <Container size="md" className={headerclasses.inner}>
                <img
                  src={NarilahLogo}
                  alt="Narilah Logo"
                  className={headerclasses.logo}
                  onClick={() => window.location.href = "/"}
                />
                {!isMobile &&
                <Group ml="xl" gap={0}>
                  <UnstyledButton
                    key="glueckwuensche"
                    component='a'
                    href="/glueckwuensche"
                    rel="noopener noreferrer"
                    className={headerclasses.link}
                    size="lg"
                  >
                    Glückwünsche
                  </UnstyledButton>
                </Group>
                }
              </Container>
            </header>
          </AppShell.Header>
          <AppShell.Main>
            <BrowserRouter>
              <Routes>
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="/" Component={HomePage} />
                <Route path="/glueckwuensche" Component={GlueckwuenschePage} />
              </Routes>
            </BrowserRouter>
          </AppShell.Main>
          <AppShell.Footer>
            <Footer />
          </AppShell.Footer>
        </AppShell>
      </MantineProvider>
    </>
  )
}

export default App
