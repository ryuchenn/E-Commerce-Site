import API from "../../../API/backend";

/**
 * Check the user have the privliege to access the endpoint
 * @param {string} endpoint - API endpoint. like '/account'
 * @returns  - return data
 */
export const UserAuthCheck = async (endpoint) => {
    try {        
        const token = localStorage.getItem('token');
        const response = await API.get(`${process.env.REACT_APP_Auth_API_Prefix}${endpoint}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        
        // Deal with the response not 2xx 
        if(response.status == 200 || response.status == 201){
        return response.data;

        }else{
            const errorData = await response;
            throw new Error(errorData.message || 'Error fetching data');
        }
    } catch (error) {
        console.error('API GET Error:', error);
        throw error;
    }
};

