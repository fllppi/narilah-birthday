import { Container, Text } from '@mantine/core';

import classes from '../styles/Footer.module.css';

export function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div className={classes.footer}>
            <Container className={classes.inner}>
                <Text>
                    &copy; {currentYear}
                    <Text component="a" href="https://flippi.cloud" target="_blank" rel="noopener noreferrer" ml="6px" style={{ textDecoration: 'underline' }}>
                        Flippi
                    </Text>
                </Text>
            </Container>
        </div>
    );
}