import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Container, Content, ListItem, DatePicker, Icon, InputGroup, Button, CheckBox, List, Body, Card, Form, Input, Label } from 'native-base';

export default class ResultMessage extends Component {
    static navigationOptions = {
        title: 'Timeline',
        headerStyle: {
            backgroundColor: '#355870',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerLeft: null
    };

    render() {
        const { navigation } = this.props;
        const Param = navigation.getParam('paramName');
        console.log("rESULT MESSAGE" );
        console.log(navigation.getParam('paramName'));
        return (
            <Container style={styles.back} >
                <Content padder>
                    <Text>{"\n"}</Text>        
                         <View>
                                      <Text style={styles.successfield}>Data recorded sucesssfully!</Text>
                            <Text>{"\n"}</Text>
                            <View>
                                <Button style={styles.btn} block dark onPress={() => this.props.navigation.navigate('Timeline')}>
                                    <Text>Go Back</Text>
                                </Button></View>
                            <Text>{"\n"}</Text>
                        </View>
                        
                    

                </Content>
            </Container>














            // <View style={styles.container}>

            //     <View style={styles.bottom}>

            //         <View style={styles.bottomitem}>
            //             <TouchableOpacity style={styles.bottomitemInner}
            //             onPress={() => this.props.navigation.navigate('DailyUsagePeople')}
            //             >
            //                 <View style={styles.bottomitemInner}>
            //                     <Text style={styles.bottomitemInnerContent}>DailyUsagePeople</Text>
            //                     <Text style={styles.bottomitemInnerContent}>{ Param}</Text>
            //                 </View>
            //             </TouchableOpacity>
            //         </View>


            //   </View>
            // </View>
        );
    }
}

const styles = StyleSheet.create({

    btn: {
        backgroundColor: '#f7c744',
        opacity: 1,
        borderWidth: 1,
        borderColor: 'white',
        textAlign: 'center',
        margin: 10,
    },
    successfield: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 20,

    },
    back: {
        borderWidth: 1,
        borderColor: '#f7c744',
        flex: 1,
        alignItems: 'center'
        //backgroundColor:'#203546',
    },

    cardtitle: {
        textAlign: "center",
        borderWidth: 1,
        borderColor: '#f7c744',
        paddingTop: 10,
        paddingBottom: 10,
        //backgroundColor:'#203546',
    },
    dateblockalign: {
        textAlign: 'center',
        justifyContent: 'center',

    }
});