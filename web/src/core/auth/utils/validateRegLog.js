/**
 * The Common Function when User do the register or login
 */

/**
 * Check registration fields
 * @param {form}  - input form data
 * @returns  - error message or success message
 */
export function validateFormData(data) {
  if (!data.username || data.username.trim() === '') 
    return { valid: false, message: 'Username is required.' };

  if (data.username.length > 15 || data.username.length < 5) 
    return { valid: false, message: 'Username number must greater than 5 and lower than 15 digits.' };

  if (!data.email || data.email.trim() === '')
    return { valid: false, message: 'Email is required.' };

  if (data.email.length > 80) 
    return { valid: false, message: 'Email number must lower than 80 digits. Choose another one.' };

  if (!data.password || data.password.trim() === '')
    return { valid: false, message: 'Password is required.' };

  if (!data.confirmPassword || data.confirmPassword.trim() === '') 
    return { valid: false, message: 'Confirm password is required.' };

  if (data.password !== data.confirmPassword)
    return { valid: false, message: 'Passwords do not match.' };

  const result = validatePassword(data.password)
  if(!result.valid)
    return { valid: result.valid, message: result.message}

  return { valid: true, message: 'Validation successful.' }; // return true if all pass
}

/* Test parameter
const password1 = 'Test@123';
const password2 = 'test1234';
console.log(validatePassword(password1)); // { valid: true, message: 'Password is valid.' }
console.log(validatePassword(password2)); // { valid: false, message: 'Password must be at least 8 characters long and include uppercase, lowercase, a number, and a special character.' }
*/
/**
 * 1. At least 8～15 characters 
 * 2. At least a uppercase, a lowercase, a number, and a special character.
 * @param {form}  - input password
 * @returns  - error message or success message
 */
function validatePassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,15}$/;

    if (!passwordRegex.test(password)) {
        return {
            valid: false,
            message: 'Password must be at least 8～15 characters and include uppercase, lowercase, a number, and a special character.',
        };
    }

    return {
        valid: true,
        message: 'Password is valid.',
    };
}

// Validate Email
// Not Start Yet
