import axios from 'axios';
import { getUsers, userDelete, resetError, setLoading, setError, orderDelete, setDeliveredFlag, getOrders} from '../slices/admin';


export const getAllUsers = () => async (dispatch, getState) => {
    const {
        user: { userInfo },
    } = getState();

    try {
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
                'Content-Type': 'application/json',
            },
        };
        const { data } = await axios.get('api/users', config);
        dispatch(getUsers(data));
    
    } catch (error) {
        dispatch(
           setError(
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message
                ? error.message
                : 'Users could not be fetched.'
            )   
        ); 
    }
};

export const deleteUser = (id) => async (dispatch, getState) => {
    const {
        user: { userInfo },
    } = getState();

    try {
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
                'Content-Type': 'application/json',
            },
        };
        const { data } = await axios.delete(`api/users/${id}`, config);
        dispatch(userDelete(data));
    
    } catch (error) {
        dispatch(
           setError(
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message
                ? error.message
                : 'Users could not be fetched.'
            )   
        ); 
    }
};

export const getAllOrders = () => async (dispatch, getState) => {
    dispatch(setLoading(true));
    const {
        user: { userInfo },
    } = getState();

    try {
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
                'Content-Type': 'application/json',
            },
        };
        const { data } = await axios.get('api/orders', config);
        dispatch(getOrders(data));
    
    } catch (error) {
        dispatch(
           setError(
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message
                ? error.message
                : 'Order could not be fetched.'
            )   
        ); 
    }
};

export const setDelivered = (id) => async (dispatch, getState) => {
    dispatch(setLoading(true));
    const {
        user: { userInfo },
    } = getState();

    try {
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
                'Content-Type': 'application/json',
            },
        };
        const { data } = await axios.put(`api/orders/${id}`, {}, config);
        dispatch(setDeliveredFlag());
    
    } catch (error) {
        dispatch(
           setError(
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message
                ? error.message
                : 'Order not delivered yet.'
            )   
        ); 
    }
};

export const deleteOrder = (id) => async (dispatch, getState) => {
    const {
        user: { userInfo },
    } = getState();

    try {
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
                'Content-Type': 'application/json',
            },
        };
        const { data } = await axios.delete(`api/orders/${id}`, config);
        dispatch(orderDelete(data));
    
    } catch (error) {
        dispatch(
           setError(
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message
                ? error.message
                : 'Order could not be deleted.'
            )   
        ); 
    }
};



export const resetErrorAndRemoval = () => async (dispatch) => {
    dispatch(resetError());
}