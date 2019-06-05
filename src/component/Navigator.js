import firebase from 'firebase';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  createSwitchNavigator, createDrawerNavigator, createStackNavigator, createAppContainer,
  DrawerItems
} from 'react-navigation';
import { Container, Header, Body, Text, List, ListItem } from 'native-base';
import { Image, TouchableOpacity } from 'react-native';
import Login from './Login';
import Workerdashboard from './Workerdashboard';
import AuthLoading from './AuthLoading';
import BuildingPicture from './infrastructure/BuildingPicture';
import InfrastructureDash from './infrastructure/InfrastrureDash';
import BuildingStatus from './infrastructure/BulidingStatus';


//Timeline 
import Timeline from './TimeLine/Timeline';
import BuildingStatusUpdate from './infrastructure/BuildingStatusUpdate';
import Facility from './infrastructure/Facility';
import FacilityUpdate from './infrastructure/FacilityUpdate';
import BuildingPictureUpdate from './infrastructure/BuildingPictureUpdate';
import MedicineLog from './TimeLine/MedicineLog';
import DailyUsageStock from './TimeLine/DailyUsageStock';
import DailyUsagePeople from './TimeLine/DailyUsagePeople';
import ResultMessage from './TimeLine/ResultMessage';
import DailyUsagePeopleTab from './TimeLine/DailyUsagePeopleTab';
import DailyUsagePeopleSearch from './TimeLine/DailyUsagePeopleSearch';
import DailyUsagePeopleListItem from './TimeLine/DailyUsagePeopleListItem';
import DailyUsagePeopleView from './TimeLine/DailyUsagePeopleView';
import DailyUsagePeopleViewOption from './TimeLine/DailyUsagePeopleViewOption';
import DailyUsageStockTab from './TimeLine/DailyUsageStockTab';
import DailyUsageStockSearch from './TimeLine/DailyUsageStockSearch';
import DailyUsageStockListItem from './TimeLine/DailyUsageStockListItem';
import DailyUsageStockView from './TimeLine/DailyUsageStockView';
import DailyUsageStockViewOption from './TimeLine/DailyUsageStockViewOption';
import { MaternalDash } from './Maternal/';
import ChildNutrition from './Maternal/ChildNutrition';
import NutritionTab from './Maternal/NutritionTab';
import NutritionSearch from './Maternal/NutritionSearch';
import NutritionEditForm from './Maternal/NutritionEditForm';
import ListNutrition from './Maternal/ListNutrition';
import ChildTab from './Maternal/ChildTab';
import ChildRegistration from './Maternal/ChildRegistration';
import ChildRegistrationForm from './Maternal/ChildRegistrationForm';
import ChildSearch from './Maternal/ChildSearch';
import FoodNutri from './Maternal/FoodNutri';
import ChildEditForm from './Maternal/ChildEditForm';
import ChildView from './Maternal/ChildView';
import ListChild from './Maternal/ListChild';
import InjectionRecords from './Maternal/InjectionRecords';
import InjectionSearch from './Maternal/InjectionSearch';
import InjectionEditForm from './Maternal/InjectionEditForm';
import ListInjection from './Maternal/ListInjection';
import InjectionTab from './Maternal/InjectionTab';
import NutritionView from './Maternal/NutritionView';
import InjectionView from './Maternal/InjectionView';
import { Children, DemographyDash } from './Demography/';
import HouseHoldListItem from './Demography/HouseHoldListItem';
import Householdtab from './Demography/Householdtab';
import HouseHoldEdit from './Demography/HouseHoldEdit';
import HouseholdView from './Demography/HouseholdView';
import PregnancyTab from './Demography/PregnancyTab';
import PregnancyEdit from './Demography/PregnancyEdit';
import PregnancyView from './Demography/PregnancyView';
import HouseHold from './Demography/HouseHold';
import HouseHoldMemberName from './Demography/HouseHoldMemberName';
import InjectionNotification from './Maternal/InjectionNotification';
import NotificationView from './Maternal/NotificationView';
import Pregnancy from './Demography/Pregnancy';
import DemographicReport from './Demography/DemographicReport';
import AnganwadiLocation from './infrastructure/AnganwadiLocation';
import loc from './infrastructure/loc';
import AnganwadiLocationUpdate from './infrastructure/AnganwadiLocationUpdate';

import AttendanceTab from './TimeLine/AttendanceTab';
import AttendanceRegistration from './TimeLine/AttendanceRegistration';
import AttendanceRegistrationForm from './TimeLine/AttendanceRegistrationForm';
import ListAttendance from './TimeLine/ListAttendance';
import AttendanceEditForm from './TimeLine/AttendanceEditForm';
import AttendanceView from './TimeLine/AttendanceView';
import Attendance from './TimeLine/Attendance';

import DailyUsageRequest from './TimeLine/DailyUsageRequest';
import DailyUsageRequestTab from './TimeLine/DailyUsageRequestTab';
import DailyUsageRequestTab1 from './TimeLine/UploadImageTab';
import DailyUsageRequestSearch from './TimeLine/DailyUsageRequestSearch';
import DailyUsageRequestListItem from './TimeLine/DailyUsageRequestListItem';
import DailyUsageRequestView from './TimeLine/DailyUsageRequestView';
import DailyUsageRequestViewOption from './TimeLine/DailyUsageRequestViewOption';

import HouseHoldNumberEdit from './Demography/HouseHoldNumberEdit';
import HouseView from './Demography/HouseView';
import ImageView from './TimeLine/ImageView';
import ImageSearch from './TimeLine/ImageSearch';

const CustomDrawerContentComponent = (props) => (
  <Container>
    <Header style={{ height: 200 }}>
      <Body>
        <Image
          style={{ width: 150, height: 150, marginLeft: 45 }}
          source={require('../images/logo.png')}
        />
      </Body>
    </Header>
    <DrawerItems {...props} />
    <List>
      <ListItem>
        <TouchableOpacity
          onPress={() => {
            firebase.auth().signOut().then(() =>
              props.navigation.navigate('Login'));
          }
          }
        >
          <Icon
            style={{ paddingLeft: 90 }}
            name="md-log-out"
            size={35}
            color="red"
          />
          <Text style={{ paddingLeft: 80 }}>Logout</Text>
        </TouchableOpacity>
      </ListItem>
    </List>
  </Container >
);


const RootStack = createStackNavigator({
  Home: {
    screen: Workerdashboard,
    navigationOptions: ({ navigation }) => ({
      headerLeft:
        <Icon
          style={{ paddingLeft: 10 }}
          name="md-menu"
          onPress={() => navigation.openDrawer()}
          size={32}
          color="white"
        />
    })
  },
  infrastructure: {
    screen: InfrastructureDash
  },
  Facility: {
    screen: Facility
  },
  buildingPicture: {
    screen: BuildingPicture
  },
  buildingStatus: {
    screen: BuildingStatus
  },
  FacilityUpdate: {
    screen: FacilityUpdate
  },
  BuildingStatusUpdate: {
    screen: BuildingStatusUpdate
  },
  BuildingPictureUpdate: {
    screen: BuildingPictureUpdate
  },
  Timeline: {
    screen: Timeline
  },
  ResultMessage: {
    screen: ResultMessage
  },
  DailyUsageStock: {
    screen: DailyUsageStock
  },
  DailyUsagePeople: {
    screen: DailyUsagePeople
  },
  MedicineLog: {
    screen: MedicineLog
  },
  DailyUsagePeopleSearch: {
    screen: DailyUsagePeopleSearch
  },
  DailyUsagePeopleTab: {
    screen: DailyUsagePeopleTab
  },
  DailyUsagePeopleListItem: {
    screen: DailyUsagePeopleListItem
  },
  DailyUsagePeopleView: {
    screen: DailyUsagePeopleView
  },
  DailyUsagePeopleViewOption: {
    screen: DailyUsagePeopleViewOption
  },
  DailyUsageStockSearch: {
    screen: DailyUsageStockSearch
  },
  DailyUsageStockTab: {
    screen: DailyUsageStockTab
  },
  DailyUsageStockListItem: {
    screen: DailyUsageStockListItem
  },
  DailyUsageStockView: {
    screen: DailyUsageStockView
  },
  DailyUsageStockViewOption: {
    screen: DailyUsageStockViewOption
  },
  ChildNutrition: {
    screen: ChildNutrition
  },
  NutritionTab: {
    screen: NutritionTab
  },
  NutritionEditForm: {
    screen: NutritionEditForm
  },
  ListNutrition: {
    screen: ListNutrition
  },
  NutritionSearch: {
    screen: NutritionSearch
  },
  NutritionView: {
    screen: NutritionView
  },
  FoodNutri: {
    screen: FoodNutri
  },
  ChildRegistrationForm: {
    screen: ChildRegistrationForm
  },
  ChildRegistration: {
    screen: ChildRegistration
  },
  ChildSearch: {
    screen: ChildSearch
  },
  ChildTab: {
    screen: ChildTab
  },
  ChildEditForm: {
    screen: ChildEditForm
  },
  ListChild: {
    screen: ListChild
  },
  ChildView: {
    screen: ChildView
  },
  InjectionRecords: {
    screen: InjectionRecords
  },
  MaternalDash: {
    screen: MaternalDash
  },
  InjectionSearch: {
    screen: InjectionSearch
  },
  InjectionEditForm: {
    screen: InjectionEditForm
  },
  ListInjection: {
    screen: ListInjection
  },
  InjectionView: {
    screen: InjectionView
  },
  InjectionTab: {
    screen: InjectionTab
  },
  Children: {
    screen: Children
  },
  DemographyDash: {
    screen: DemographyDash
  },

  DemographicReport: {
    screen: DemographicReport
  },
  Householdtab: {
    screen: Householdtab
  },
  AttendanceTab: {
    screen: AttendanceTab
  },
  AttendanceRegistration: {
    screen: AttendanceRegistration
  },
  AttendanceRegistrationForm: {
    screen: AttendanceRegistrationForm
  },
  ListAttendance: {
    screen: ListAttendance
  },
  AttendanceEditForm: {
    screen: AttendanceEditForm
  },
  AttendanceView: {
    screen: AttendanceView
  },
  HouseHold: {
    screen: HouseHold
  },
  HouseHoldNumberEdit:
  {
    screen: HouseHoldNumberEdit
  },
  HouseView: {
    screen: HouseView
  },
  HouseHoldMemberName: {
    screen: HouseHoldMemberName
  },
  HouseHoldListItem:
  {
    screen: HouseHoldListItem
  },
  HouseHoldEdit: {
    screen: HouseHoldEdit
  },
  HouseholdView: {
    screen: HouseholdView
  },
  PregnancyTab:
  {
    screen: PregnancyTab
  },
  PregnancyEdit:
  {
    screen: PregnancyEdit
  },
  PregnancyView:
  {
    screen: PregnancyView
  },
  Pregnancy: {
    screen: Pregnancy
  },
  InjectionNotification: {
    screen: InjectionNotification
  },
  NotificationView: {
    screen: NotificationView
  },
  Attendance: {
    screen: Attendance
  },
  AnganwadiLocation: {
    screen: AnganwadiLocation
  },
  loc: {
    screen: loc
  },
  AnganwadiLocationUpdate: {
    screen: AnganwadiLocationUpdate
  },
  DailyUsageRequest: {
    screen: DailyUsageRequest
  },
  DailyUsageRequestSearch: {
    screen: DailyUsageRequestSearch
  },
  DailyUsageRequestTab: {
    screen: DailyUsageRequestTab
  },
  DailyUsageRequestTab1: {
    screen: DailyUsageRequestTab1
  },
  DailyUsageRequestListItem: {
    screen: DailyUsageRequestListItem
  },
  DailyUsageRequestView: {
    screen: DailyUsageRequestView
  },
  DailyUsageRequestViewOption: {
    screen: DailyUsageRequestViewOption
  },
  ImageView: {
    screen: ImageView
  },
  ImageSearch: {
    screen: ImageSearch
  },
}, {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#203546',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
);

const DrawerNavigation = createDrawerNavigator({
  Home: {
    screen: RootStack,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: (
        <Icon name='md-home' size={32} style={{ color: 'green' }} />
      ),
    }
  },
  // ChangePassword: {
  //   screen: ChangePassword,
  //   navigationOptions: ({ navigation }) => ({
  //     drawerLabel: 'Change Password',
  //     headerLeft:
  //       <Icon
  //         style={{ paddingLeft: 10 }}
  //         name="md-menu"
  //         onPress={() => navigation.openDrawer()}
  //         size={32}
  //         color="white"
  //       />,
  //     drawerIcon: (
  //       <Icon name='md-key' size={32} style={{ color: 'green' }} />
  //     )
  //   })
  // }
}, {
    initialRouteName: 'Home',
    contentComponent: CustomDrawerContentComponent,
  });

const SwitchNavigator = createSwitchNavigator({
  AuthLoading: {
    screen: AuthLoading
  },
  Login: {
    screen: Login,
  },
  Home: {
    screen: DrawerNavigation
  },
},
  {
    initialRouteName: 'AuthLoading',
  });

const Navigator = createAppContainer(SwitchNavigator);

export default Navigator;
