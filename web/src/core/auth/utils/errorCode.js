const errorStatusCodes = [400, 401, 403, 404, 409, 500];

/**
 * When encounter in any situation
 * @error error message
 * @returns  - return error text
 */
export function returnError(error) {
    let returnText = "";

    if (error.response && errorStatusCodes.includes(error.response.status)) {
        returnText = `ERROR ${error.response.status}: ${error.response.data}, ${error.response.message}, ${error} `;
    } else 
       returnText = `An unexpected error occurred. Please try again later. ${error}`

    return returnText;
}

