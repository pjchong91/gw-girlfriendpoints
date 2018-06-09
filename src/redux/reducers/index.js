import {combineReducers} from 'redux';
import PointEventsReducer from './reducer-pointEvents';
import TotalPointsReducer from './reducer-totalPoints';
import ActiveEventReducer from './reducer-activeEvent';
import Users from './reducer-users';
import LoginUserReducer from './reducer-loginUser';

const allReducers = combineReducers ({
    PointEvents: PointEventsReducer,
    activeEvent: ActiveEventReducer,
    TotalPoints: TotalPointsReducer,
    users: Users,
    LoginUser: LoginUserReducer
})

export default allReducers;