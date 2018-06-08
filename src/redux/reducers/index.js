import {combineReducers} from 'redux';
import PointEventsReducer from './reducer-pointEvents';
import TotalPointsReducer from './reducer-totalPoints';

const allReducers = combineReducers ({
    PointEvents: PointEventsReducer
})