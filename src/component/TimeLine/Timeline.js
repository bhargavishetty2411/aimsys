// import React, { Component } from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

// export default class Timeline extends Component {
//     static navigationOptions = {
//         title: 'Timeline',
//         headerStyle: {
//             backgroundColor: '#355870',
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//             fontWeight: 'bold',
//         },
//     };

//     calnav(navpar) {
//         if (navpar === 'DailyUsagePeopleTab') {
//             this.props.navigation.navigate('DailyUsagePeopleTab');
//         } else if (navpar === 'DailyUsageStockTab') {
//             this.props.navigation.navigate('DailyUsageStockTab');
//         } else if (navpar === 'DailyUsageRequestTab') {
//             this.props.navigation.navigate('DailyUsageRequestTab');
//         } else if (navpar === 'Attendance') {
//             this.props.navigation.navigate('Attendance');
//         } else if (navpar === 'DailyUsageRequestTab1') {
//             this.props.navigation.navigate('DailyUsageRequestTab1');
//         }

//         console.log(navpar);
//     }

//     render() {
//         return (
//             <View style={styles.container}>
//                 <View style={styles.bottom}>
//                     <View style={styles.bottomitem}>
//                         <TouchableOpacity
//                             style={styles.bottomitemInner}
//                             onPress={this.calnav.bind('DailyUsagePeopleTab')}
//                         >
//                             <View>
//                                 <Image style={styles.icon} source={require('../../images/tim_upeople.png')} />
//                             </View>
//                         </TouchableOpacity>
//                     </View>
//                     <View style={styles.bottomitem}>
//                         <TouchableOpacity
//                             style={styles.bottomitemInner}
//                             onPress={this.calnav.bind('DailyUsageStockTab')}
//                         >
//                             <View>
//                                 <Image style={styles.icon} source={require('../../images/tim_foodstock.png')} />
//                             </View>
//                         </TouchableOpacity>
//                     </View>
//                     <View style={styles.bottomitem}>
//                         <TouchableOpacity
//                             style={styles.bottomitemInner}
//                             onPress={this.calnav.bind('Attendance')}
//                         >
//                             <View>
//                                 <Image style={styles.icon} source={require('../../images/tim_Attendance.png')} />
//                             </View>
//                         </TouchableOpacity>
//                     </View>
//                     <View style={styles.bottomitem}>
//                         <TouchableOpacity
//                             style={styles.bottomitemInner}
//                             onPress={this.calnav.bind('DailyUsageRequestTab')}
//                         >
//                             <View>
//                                 <Image style={styles.icon} source={require('../../images/tim_request.png')} />
//                             </View>
//                         </TouchableOpacity>
//                     </View>

//                     <View style={styles.bottomitem}>
//                         <TouchableOpacity
//                             style={styles.bottomitemInner}
//                             onPress={this.calnav.bind('DailyUsageRequestTab1')}
//                         >
//                             <View>
//                                 <Image style={styles.icon} source={require('../../images/tim_request.png')} />
//                             </View>
//                         </TouchableOpacity>
//                     </View>

//                 </View>
//             </View>

//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     bottom: {
//         height: '55%',
//         backgroundColor: '#fff',
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//         padding: 3,
//     },
//     bottomitem: {
//         width: '50%',
//         height: '50%',
//         padding: 8
//         ,
//     },
//     bottomitemInner: {
//         flex: 1,
//         backgroundColor: '#275DAD',
//         alignItems: 'center',
//         justifyContent: 'center',

//     },
//     bottomitemInnerContent: {
//         fontSize: 18,
//         color: '#fff',
//         textAlign: 'center',
//         padding: 5,
//     },

//     menuBox: {
//         backgroundColor: '#275DAD',
//         width: 100,
//         height: 100,
//         alignItems: 'center',
//         justifyContent: 'center',
//         margin: 12
//     },
//     icon: {
//         width: 200,
//         height: 200,
//     },
//     info: {
//         fontSize: 22,
//         color: '#696969',
//     },

// });

import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default class Timeline extends Component {
    static navigationOptions = {
        title: 'Timeline',
        headerStyle: {
            backgroundColor: '#355870',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.bottom}>
                    <View style={styles.bottomitem}>
                        <TouchableOpacity 
                        style={styles.bottomitemInner}  
                        onPress={() => this.props.navigation.navigate('DailyUsagePeopleTab')}>
                            <View>
                                <Image style={styles.icon} source={require('../../images/tim_upeople.png')} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bottomitem}>
                        <TouchableOpacity 
                        style={styles.bottomitemInner} 
                        onPress={() => this.props.navigation.navigate('DailyUsageStockTab')}  >
                            <View>
                                <Image style={styles.icon} source={require('../../images/tim_foodstock.png')} />
                            </View>
                        </TouchableOpacity>
                    </View>



                    <View style={styles.bottomitem}>
                        <TouchableOpacity 
                        style={styles.bottomitemInner} 
                        onPress={() => this.props.navigation.navigate('Attendance')} 
                        >
                            <View>
                                <Image style={styles.icon} source={require('../../images/tim_Attendance.png')} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bottomitem}>
                        <TouchableOpacity 
                        style={styles.bottomitemInner} 
                        onPress={() => this.props.navigation.navigate('DailyUsageRequestTab')} 
                        >
                            <View>
                                <Image style={styles.icon} source={require('../../images/tim_request.png')} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/* <View style={styles.bottomitem}>
                        <TouchableOpacity 
                        style={styles.bottomitemInner}  
                        onPress={() => this.props.navigation.navigate('MedicineLog')} >
                            <View>
                                <Image style={styles.icon} source={require('../../images/demo_searchpeople.png')} />
                            </View>
                        </TouchableOpacity>
                    </View> */}


                </View>
                </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bottom: {
        height: '55%',
        backgroundColor: '#fff',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 3,
    },
    bottomitem: {
        width: '50%',
        height: '50%',
        padding: 8
        ,
    },
    bottomitemInner: {
        flex: 1,
        backgroundColor: '#275DAD',
        alignItems: 'center',
        justifyContent: 'center',

    },
    bottomitemInnerContent: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        padding: 5,
    },

    menuBox: {
        backgroundColor: '#275DAD',
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 12
    },
    icon: {
        width: 200,
        height: 200,
    },
    info: {
        fontSize: 22,
        color: '#696969',
    },
    
});
