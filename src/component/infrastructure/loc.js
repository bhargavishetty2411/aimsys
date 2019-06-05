/* eslint-disable no-undef */
import React from 'react';
import firebase from 'firebase';
import { StyleSheet, Text, Alert } from 'react-native';
import { Button, Container, Content, Card, CardItem, Input, } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

export default class loc extends React.Component {
    constructor() {
        super();
        this.state = {
            ready: false,
            where: { lat: null, lng: null },
            error: null,
            AWCode: null,
            AWArea: null
        };
    }

    checkPer() {
        let geoOptions = {
            enableHighAccuracy: false,
            timeOut: 50000,
            maximumAge: 3600000
        };
        this.setState({ ready: false, error: null });
        navigator.geolocation.getCurrentPosition(this.geoSuccess,
            this.geoFailure,
            geoOptions);
    }
    geoSuccess = (position) => {
        console.log(position.coords.latitude);

        this.setState({
            ready: true,
            where: { lat: position.coords.latitude, lng: position.coords.longitude }
        });
    }
    geoFailure = (err) => {
        this.setState({ error: err.message });
    }

    insert() {
        const { AWArea, AWCode } = this.state;
        const database = firebase.database();
        const latitude = this.state.where.lat;
        const longitude = this.state.where.lng;
        const Location = { latitude, longitude };
        const db = database.ref('anganwadicluster');
        const key = db.push().getKey();
        database.ref(`anganwadicluster/${key}/anganwadicenterdata`).set({ AWArea, AWCode, Location })
            .then(() => {
                Alert.alert(
                    'Successfull...!',
                    'Record Inserted Successfully...',
                    [
                        { text: 'OK', onPress: () => console.log('OK Pressed') },
                    ],
                    { cancelable: true }
                );
            })
            .catch((error) => {
                console.log(error);
            });
    }


    render() {
        return (
            <Container>
                <ScrollView>
                    <Content>
                        <Card>
                            <CardItem>
                                {!this.state.ready && (
                                    <Text style={styles.big}>Using Geolocation in React Native.</Text>
                                )}
                                {this.state.error && (
                                    <Text style={styles.big}>{this.state.error}</Text>
                                )}
                                {this.state.ready && (
                                    <Text style={styles.big}>{
                                        `Latitude: ${this.state.where.lat}
                                         Longitude: ${this.state.where.lng}`
                                    }</Text>
                                )}
                            </CardItem>
                            <CardItem>
                                <Input
                                    style={{ width: 100, borderBottomColor: 'skyblue' }}
                                    placeholder='Enter Anganwadi Area'
                                    value={this.state.AWArea}
                                    onChangeText={AWArea => this.setState({ AWArea })}
                                />
                            </CardItem>
                            <CardItem>
                                <Input
                                    style={{ width: 100 }}
                                    placeholder='Enter Anganwadi Code'
                                    value={this.state.AWCode}
                                    onChangeText={AWCode => this.setState({ AWCode })}
                                />
                            </CardItem>
                            <CardItem>
                                <Button onPress={this.checkPer.bind(this)}>
                                    <Text>
                                        Select Location
                                    </Text>
                                </Button>
                            </CardItem>
                            <CardItem>
                                <Button onPress={this.insert.bind(this)}>
                                    <Text>
                                        Add
                                    </Text>
                                </Button>
                            </CardItem>
                        </Card>
                    </Content>
                </ScrollView>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    big: {
        fontSize: 28
    }
});
