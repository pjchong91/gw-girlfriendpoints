import {combineReducers} from 'redux';
import PointEventsReducer from './reducer-pointEvents';
import TotalPointsReducer from './reducer-totalPoints';
import ActiveEventReducer from './reducer-activeEvent';
import Users from './reducer-users';

const allReducers = combineReducers ({
    PointEvents: PointEventsReducer,
    activeEvent: ActiveEventReducer,
    users: Users
})

export default allReducers;