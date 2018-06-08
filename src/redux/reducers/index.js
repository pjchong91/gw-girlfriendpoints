import {combineReducers} from 'redux';
import PointEventsReducer from './reducer-pointEvents';
import TotalPointsReducer from './reducer-totalPoints';
import ActiveEventReducer from './reducer-activeEvent';

const allReducers = combineReducers ({
    PointEvents: PointEventsReducer,
    activeEvent: ActiveEventReducer
})

export default allReducers;