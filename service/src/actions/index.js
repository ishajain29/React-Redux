export const createServiceTime = (entry) => {
    return {
        type: 'SERVICE_CREATED',
        payload: entry
    }
};

export const deleteServiceTime = (entry) => {
    return {
        type: 'SERVICE_DELETE',
        payload: entry
    }
};
