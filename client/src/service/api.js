import axios from 'axios';

const URL = 'http://localhost:8000';
export const addUser = async(data) => {
    try{
        return await axios.post(`${URL}/addUser`,data)
    } catch (error){
        console.log('Error while calling add user api', error);
    }
}

// Get all users
export const getUsers = async () => {
    try {
        const response = await axios.get(`${URL}/getUsers`);
        return response.data;
    } catch (error) {
        console.error('Error while fetching users:', error);
        throw error;
    }
};

// Update user
export const updateUser = async (userId, user) => {
    try {
        const response = await axios.put(`${URL}/updateUser/${userId}`, user);
        return response.data;
    } catch (error) {
        console.error(`Error while deleting user with ID ${userId}:`, error);
        throw error;
    }
};

// Delete user
export const deleteUser = async (userId) => {
    try {
        const response = await axios.delete(`${URL}/deleteUser/${userId}`);
        return response.data;
    } catch (error) {
        console.error(`Error while deleting user with ID ${userId}:`, error);
        throw error;
    }
};

// Get user
export const getUserById = async (userId) => {
    try {
        const response = await axios.get(`${URL}/getUser/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error while getting user:', error);
        throw error;
    }
};