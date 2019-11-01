import React from 'react';
import Container from '../components/Container';
import ContainerSeparator, { ContainerSeparatorSize } from '../components/ContainerSeparator';
import List from '../components/List';
import SocialMediaIcons from '../components/SocialMediaIcons';
import Text from '../components/Text';
import Title from '../components/Title';

export default function Homepage() {
    return (
        <Container>
            <>
                <Container>
                    <>
                        <Title>{'Test'}</Title>
                        <ContainerSeparator />
                        <Text>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit' +
                            'sed do eiusmod tempor incididunt ut labore et dolore magna' +
                            'aliqua. Ut enim ad minim veniam, quis nostrud exercitation'}</Text>
                        <ContainerSeparator size={ContainerSeparatorSize.Small} />
                        <SocialMediaIcons />
                        <ContainerSeparator size={ContainerSeparatorSize.Medium} />

                        <Title>{'Things in progress'}</Title>
                        <ContainerSeparator />
                        <List items={['Intern at ZBRA Solutions since March, 2018',
                                      'Bachelors degree in Computer Science at Universidade Anhembi Morumbi since January, 2016 and until December, 2019',
                                      'Learning Piano as a hobby and a passion since 2017',
                                      'Trying to keep a Minimalist Lifestyle',
                                      'Developing this simple portfolio']}/>

                        <Title>{'Future projects'}</Title>
                        <ContainerSeparator />
                        <List items={['Develop a site for an NGO',
                                      'Do the challenge of #100DaysOfCode',
                                      'Improve my english skills',
                                      'Workout daily',
                                      'Read Pragmatic Programmer, by Andrew Hunt and David Thomas',
                                      'Read Effective Java, by Joshua Bloch',
                                      'Read Design Patterns, by Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides',
                                      'Read Introduction to Algorithms, by Thomas H. Cormen and Charles E. Leiserson',
                                      'Read Structure and Interpretation of Computer Programs, by Gerald Jay Sussman and Hal Abelson',
                                      'Read A Vida Imortal de Henrietta Lacks',
                                      'Read Sapiens']}/>

                        <Title>{'Concluded'}</Title>
                        <ContainerSeparator />
                        <List items={['Read Clean Code, by Robert Martin',
                                      'Web Interface course at University of São Paulo']}/>
                    </>
                </Container>
            </>
        </Container>
    );
}
