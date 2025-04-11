import { User, users } from '@/lib/mockData/users';

// Auth utilities for mock authentication

/**
 * Authenticate a user with email and password
 * @param email User email
 * @param password User password
 * @returns User object if authenticated, null otherwise
 */
export const authenticateUser = (email: string, password: string): User | null => {
  const user = users.find(u => u.email === email && u.password === password);
  return user || null;
};

/**
 * Save user to local storage
 * @param user User object to save
 */
export const saveUserToStorage = (user: User): void => {
  // Remove password before saving to storage for security
  const { password, ...secureUser } = user;
  localStorage.setItem('currentUser', JSON.stringify(secureUser));
};

/**
 * Get current user from local storage
 * @returns User object if found, null otherwise
 */
export const getCurrentUser = (): Partial<User> | null => {
  if (typeof window === 'undefined') return null;
  
  const userJson = localStorage.getItem('currentUser');
  if (!userJson) return null;
  
  try {
    return JSON.parse(userJson);
  } catch (error) {
    console.error('Error parsing user from storage:', error);
    return null;
  }
};

/**
 * Check if user is authenticated
 * @returns true if user is authenticated, false otherwise
 */
export const isAuthenticated = (): boolean => {
  return getCurrentUser() !== null;
};

/**
 * Logout current user
 */
export const logoutUser = (): void => {
  localStorage.removeItem('currentUser');
};