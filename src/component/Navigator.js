import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './Login';
import Workerdashboard from './Workerdashboard';
import AuthLoading from './AuthLoading';
import {
  BuildingPicture,
  InfrastructureDash, Facility
} from './infrastructure/';
import BuildingStatus from './infrastructure/BulidingStatus';
import Timeline from './TimeLine/Timeline';
import HealthSupplies from './TimeLine/HealthSupplies';
import FoodSupplies from './TimeLine/FoodSupplies';

import {
  MaternalDash
} from './Maternal/';
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
import InjectionNotification from './Maternal/InjectionNotification';
import NotificationView from './Maternal/NotificationView';

import AttendanceTab from './TimeLine/AttendanceTab';
import AttendanceRegistration from './TimeLine/AttendanceRegistration';
import AttendanceRegistrationForm from './TimeLine/AttendanceRegistrationForm';
import ListAttendance from './TimeLine/ListAttendance';
import AttendanceEditForm from './TimeLine/AttendanceEditForm';
import AttendanceView from './TimeLine/AttendanceView';
import Attendance from './TimeLine/Attendance';

import {
  Children, DemographyDash,
  HouseHold, Pregnancy
} from './Demography/';
import Splash from './Splash';
import { List } from 'native-base';

const RootStack = createStackNavigator({
  AuthLoading: {
    screen: AuthLoading
  },
  Splash: {
    screen: Splash
  },
  Login: {
    screen: Login,
  },
  Dashboard: {
    screen: Workerdashboard,
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
  Timeline: {
    screen: Timeline
  },
  Health: {
    screen: HealthSupplies
  },
  Food: {
    screen: FoodSupplies
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
  }
},
  {
    initialRouteName: 'AuthLoading',
  }

);

const Navigator = createAppContainer(RootStack);

export default Navigator;
