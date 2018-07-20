// 모든 모듈들을 불러와서 합치는 작업이 이뤄짐
import { combineReducers } from 'redux';
import counter from './counter';
import configure from './configure';

export default configure();

export default combineReducer({
    counter
});