export default function (state = {serviceTimes:[], currentId:0}, action) {
    switch (action.type) {
        case 'SERVICE_CREATED': {
            let newId = state.currentId + 1;
            let newEntry = {
                "id": newId,
                "start_weekday": action.payload.startDay,
                "start_time": action.payload.startTime,
                "end_time": action.payload.endTime,
                "end_weekday": action.payload.endDay,
                "spans_week": false
            };
            return Object.assign({}, state, {serviceTimes: state.serviceTimes.concat(newEntry)}, {currentId: newId});
            break;
        }
        case 'SERVICE_DELETE': {
            return Object.assign({}, state, {serviceTimes: state.serviceTimes.filter((serviceEntry) => serviceEntry.id !== action.payload)});
            break;
        }
        default:
            break;
    }
    return state;
}
