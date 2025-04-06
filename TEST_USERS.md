# Test User Accounts

This document provides information about the test user accounts available for development and testing purposes.

## Available Test Accounts

### Regular User

- **Email**: test@gmail.com
- **Password**: test
- **Role**: Regular User
- **ID**: 3

### Seller

- **Email**: test@gmail.com
- **Password**: test
- **Role**: Seller
- **ID**: 4

## How to Use

1. Navigate to the login page
2. Enter the email `test@gmail.com` and password `test`
3. The system will authenticate and redirect you based on the role:
   - Regular users will be redirected to the products page
   - Sellers will be redirected to the seller dashboard

## Implementation Details

These test accounts are implemented in the mock data system:

- User data is stored in `src/lib/mockData/users.ts`
- Authentication logic is handled by `src/lib/utils/authUtils.ts`
- Login functionality is implemented in `src/app/(auth)/login/page.tsx`

## Notes

- Both test accounts use the same email address but have different roles
- The authentication system will identify the appropriate role based on the credentials
- For testing seller-specific features, use the seller test account
- For testing regular user features, use the regular user test account