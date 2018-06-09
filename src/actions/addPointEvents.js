export const addPointEventZ = (pointEvent) => {
    console.log('clicky REDUX',pointEvent.event);
    return {
        type: "ADD_POINT_EVENT",
        payload: pointEvent
    }
}

