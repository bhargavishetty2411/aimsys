import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import BStatusFormReducer from './BStatusFormReducer';
import BStatusReducer from './BStatusReducer';
import FacilityFormReducer from './FacilityFormReducer';
import FacilityReducer from './FacilityReducer';
import BPictureFormReducer from './BPictureFormReducer';
import BPictureReducer from './BPictureReducer';
import DailyUsagePeopleReducer from './DailyUsagePeopleReducer';
import DailyUsageStockReducer from './DailyUsageStockReducer';
import DailyUsagePeopleFetchReducer from './DailyUsagePeopleFetchReducer';
import DailyUsageStockFetchReducer from './DailyUsageStockFetchReducer';
import ChildReducer from './ChildReducer';
import ChildFetchReducer from './ChildFetchReducer';
import NutritionReducer from './NutritionReducer';
import NutritionFetchReducer from './NutritionFetchReducer';
import InjectionReducer from './InjectionReducer';
import InjectionFetchReducer from './InjectionFetchReducer';
import HouseholdReducer from './HouseholdReducer';
import HouseholdFetchReducer from './HouseholdFetchReducer';
import PregnancyReducer from './PregnancyReducer';
import PregnancyFormReducer from './PregnancyFormReducer';
import HouseHoldNameFetchReducer from './HouseHoldNameFetchReducer';
import NotificationReducer from './NotificationReducer';
import HouseHoldFetchAll from './HouseHoldFetchAll';
import LocationFormReducer from './LocationFormReducer';
import LocationReduer from './LocationReduer';
import AttendanceReducer from './AttendanceReducer';
import AttendanceFetchReducer from './AttendanceFetchReducer';
import ImageUploadFormReducer from './ImageUploadFormReducer';
import ImageUploadFetchReducer from './ImageUploadFetchReducer';

export default combineReducers({
    auth: AuthReducer,
    bfstatus: BStatusFormReducer,
    bstatus: BStatusReducer,
    facilityform: FacilityFormReducer,
    facility: FacilityReducer,
    BPictureForm: BPictureFormReducer,
    BPic: BPictureReducer,
    DailyUsagePeopleKey: DailyUsagePeopleReducer,
    DailyUsageStockKey: DailyUsageStockReducer,
    DailyUsagePeopleFetchKey: DailyUsagePeopleFetchReducer,
    DailyUsageStockFetchKey: DailyUsageStockFetchReducer,
    child: ChildReducer,
    childF: ChildFetchReducer,
    nutrition: NutritionReducer,
    nutritionF: NutritionFetchReducer,
    injection: InjectionReducer,
    injectionF: InjectionFetchReducer,
    HouseHoldForm: HouseholdReducer,
    HouseHold: HouseholdFetchReducer,
    HouseHoldName: HouseHoldNameFetchReducer,
    PregnancyForm: PregnancyFormReducer,
    PregnancyFetch: PregnancyReducer,
    notify: NotificationReducer,
    Fetchall: HouseHoldFetchAll,
    Location: LocationFormReducer,
    LocationFetch: LocationReduer,
    attendance: AttendanceReducer,
    attendanceF: AttendanceFetchReducer,
    imageUpload: ImageUploadFormReducer,
    imageFetch: ImageUploadFetchReducer
});
