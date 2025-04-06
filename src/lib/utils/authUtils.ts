import { users, User } from '../mockData/users';

export interface AuthResult {
  success: boolean;
  user?: User;
  error?: string;
}

/**
 * Authenticates a user based on email and password
 * @param email User email
 * @param password User password
 * @returns AuthResult with success status and user data if successful
 */
export const authenticateUser = (email: string, password: string): AuthResult => {
  // Find user with matching email and password
  const user = users.find(u => u.email === email && u.password === password);
  
  if (!user) {
    return {
      success: false,
      error: 'Invalid email or password'
    };
  }
  
  return {
    success: true,
    user
  };
};

/**
 * Gets the appropriate redirect path based on user role
 * @param user User object
 * @returns Redirect path
 */
export const getRedirectPath = (user: User): string => {
  if (user.isSeller) {
    return '/seller/dashboard';
  }
  return '/products';
};