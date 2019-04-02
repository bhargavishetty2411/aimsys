import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import BStatusReducer from './BStatusReducer';
import ChildReducer from './ChildReducer';
import ChildFetchReducer from './ChildFetchReducer';
import NutritionReducer from './NutritionReducer';
import NutritionFetchReducer from './NutritionFetchReducer';
import InjectionReducer from './InjectionReducer';
import InjectionFetchReducer from './InjectionFetchReducer';
import NotificationReducer from './NotificationReducer';
import AttendanceReducer from './AttendanceReducer';
import AttendanceFetchReducer from './AttendanceFetchReducer';

export default combineReducers({
    auth: AuthReducer,
    bstatus: BStatusReducer,
    child: ChildReducer,
    childF: ChildFetchReducer,
    nutrition: NutritionReducer,
    nutritionF: NutritionFetchReducer,
    injection: InjectionReducer,
    injectionF: InjectionFetchReducer,
    notify: NotificationReducer,
    attendance: AttendanceReducer,
    attendanceF: AttendanceFetchReducer
});
