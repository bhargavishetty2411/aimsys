
import _ from 'lodash';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Text, Card, Form } from 'native-base';

class NotificationView extends Component {

    static navigationOptions = {
        title: 'Immunization details',
        headerStyle: {
            backgroundColor: '#355870',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
    constructor(props) {
        super(props);
        this.state = {
            show: '',
        }
    }

    render() {
        console.log('HNumber');
        console.log(this.props.navigation.state.params);
        const { HNumber, CName, CMotherId, option, DPickdob, DPickregdate, polio, heap1, bcg, dpt1, Hepa1, opv1, dpt2, Hepa2, opv2, dpt3, Hepa3, opv3, Dadara1, Nutri1, Dptbooster, Dadara2 } = this.props.navigation.state.params.child;
        // eslint-disable-next-line no-undef
        handleOnPress = () => this.setState({ 'show': 1 });
        return (
            <Container style={styles.back} >
                <Content padder>
                    <Form>
                        <Card>
                            <Text>{'\n'}</Text>
                            <Text style={styles.contentview}>Household Number :{'\t'}{HNumber} </Text>

                            <Text style={styles.contentview}>Child Name :{'\t'}{CName} </Text>

                            <Text style={styles.contentview} >Child Mothername :{'\t'}{CMotherId} </Text>

                            <Text style={styles.contentview} >Gender :{'\t'}{option} </Text>

                            <Text style={styles.contentview}>Date of Birth:{'\t'}{DPickdob} </Text>

                            <Text style={styles.contentview}>Registered Date :{'\t'}{DPickregdate} </Text>
                            {
                                polio === 'yes' ?
                                    <Text style={styles.contentview}>Polio Injection is Due</Text> : null
                            }

                            {
                                heap1 === 'yes' ?
                                    <Text style={styles.contentview}>Hepatities Injection is Due</Text> : null
                            }

                            {
                                bcg === 'yes' ?
                                    <Text style={styles.contentview}>BCG Injection is Due</Text> : null
                            }
                            {
                                dpt1 === 'yes' ?
                                    <Text style={styles.contentview}>DPT1 Injection is Due</Text> : null
                            }
                            {
                                Hepa1 === 'yes' ?
                                    <Text style={styles.contentview}>Hepatities1 Injection is Due</Text> : null
                            }
                            {
                                opv1 === 'yes' ?
                                    <Text style={styles.contentview}>OPV1 Injection is Due</Text> : null
                            }
                            {
                                dpt2 === 'yes' ?
                                    <Text style={styles.contentview}>DPT2 Injection is Due</Text> : null
                            }
                            {
                                Hepa2 === 'yes' ?
                                    <Text style={styles.contentview}>Hepatities2 Injection is Due</Text> : null
                            }
                            {
                                opv2 === 'yes' ?
                                    <Text style={styles.contentview}>OPV2 Injection is Due</Text> : null
                            }
                            {
                                dpt3 === 'yes' ?
                                    <Text style={styles.contentview}>DPT3 Injection is Due</Text> : null
                            }
                            {
                                Hepa3 === 'yes' ?
                                    <Text style={styles.contentview}>Hepatities3 Injection is Due</Text> : null
                            }
                            {
                                opv3 === 'yes' ?
                                    <Text style={styles.contentview}>OPV3 Injection is Due</Text> : null
                            }
                            {
                                opv3 === 'yes' ?
                                    <Text style={styles.contentview}>OPV3 Injection is Due</Text> : null
                            }
                            {
                                Dadara1 === 'yes' ?
                                    <Text style={styles.contentview}>Dadara1 Injection is Due</Text> : null
                            }
                            {
                                Nutri1 === 'yes' ?
                                    <Text style={styles.contentview}>Nutrition1 Injection is Due</Text> : null
                            }
                            {
                                Dptbooster === 'yes' ?
                                    <Text style={styles.contentview}>Dptbooster Injection is Due</Text> : null
                            }
                             {
                                Dadara2 === 'yes' ?
                                    <Text style={styles.contentview}>Dadara2 Injection is Due</Text> : null
                            }


                            <Text>{'\n'}</Text>

                        </Card>
                        <Text>{'\n'}</Text>
                        <Text>{'\n'}</Text>
                        <Text>{'\n'}</Text>
                    </Form>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    // main block container

    contentview: {
        marginLeft: 10,
    },
    develop: {
        backgroundColor: '#FFFF33',
    },
    cardtitle: {
        textAlign: 'left',
        marginLeft: 10,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 10,
    },

});

export default NotificationView;
