import { Button, Container, Group, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import classes from '../styles/Hero.module.css';
import nariliebe from '../assets/img/nariliebe.png';

export function Hero() {
    const isMobile = useMediaQuery(`(max-width: 900px)`);
    return (
        <>
            <img
                src='https://static-cdn.jtvnw.net/jtv_user_pictures/b1650a2b-6126-4ab9-8991-39aab4c554a0-profile_banner-480.png'
                alt="Background"
                className={classes.background}
            />
            {isMobile &&
                <Container size="md" className={classes.inner}>
                    <Container style={{ display: "flex", flexDirection: "column", alignItems: "center" }} size="sm">
                        <img src={nariliebe} alt="Narilah" className={classes.picture} style={{ marginBottom: 30, width: "20vh" }} />
                        <Container size="sm" className={classes.about + " " + classes.mobile}>
                            <Title order={1} className={classes.mobileTitle}>
                                Hallo Nine,
                            </Title>
                            <Title order={2} className={classes.mobileSubtitle}>
                                Wir wünschen dir alles Gute zum Geburtstag!
                            </Title>
                            <Button
                                component="a"
                                href="/glueckwuensche"
                                variant="filled"
                                color="pink"
                                className={classes.button}
                                size='lg'
                            >
                                zu den Glückwünschen
                            </Button>
                        </Container>
                    </Container>
                </Container>
            }
            {!isMobile &&
                <Container size="" className={classes.inner}>
                    <Group gap={100}>
                        <img src={nariliebe} alt="Narilah" className={classes.picture} />
                        <Container size="md" className={classes.about}>
                            <Title order={1} className={classes.title}>
                                Hallo Nine,
                            </Title>
                            <Title order={1} className={classes.subtitle}>
                                Wir wünschen dir alles Gute zum Geburtstag!
                            </Title>
                            <Button
                                component="a"
                                href="/glueckwuensche"
                                variant="filled"
                                color="pink"
                                className={classes.button}
                                size='lg'
                            >
                                zu den Glückwünschen
                            </Button>
                        </Container>
                    </Group>
                </Container>
            }
        </>
    );
}