This project is about creating an Authentication API using Node.js, MySQL,and Postman.
It covers Signup, Login, Logout (with token revocation), and a protected Profile endpoint.

Applications to Install

1. Node.js – https://nodejs.org/en/download
2. Postman – https://www.postman.com/downloads/
3. XAMPP (Apache & MySQL) – https://www.apachefriends.org/download.html
4. VS Code – https://code.visualstudio.com/download
5. Git Bash – https://git-scm.com/downloads

#Steps for Setup
  Open XAMPP and start Apache and MySQL.
  Go to phpMyAdmin and create a database named lab_auth.
  Make two tables:
  users: id, name, email, password, created_at
  revoked_tokens: id, jti, expires_at
  Update the .env file with the correct MySQL credentials (DB_USER, DB_PASS, etc.).
  In your project folder, run npm install to install dependencies.
  Start the server with npm run dev

Check the API by opening http://localhost:3000/api/health
 – it should return ok.

API Endpoints (use Postman {{baseUrl}})

Authentication

  POST {{baseUrl}}/api/auth/signup – Register a new user  
  POST {{baseUrl}}/api/auth/login – Login user (returns JWT token)
  POST {{baseUrl}}/api/auth/logout – Logout user and revoke token
  GET {{baseUrl}}/api/profile – Get user profile (requires Authorization: Bearer token)

Health Check

GET {{baseUrl}}/api/health – Verify API is running

Short Notes

This project helped me understand how user authentication works on the backend.
I initially had an issue because my routes/authRoutes file was empty. After checking the methodology section (step 3) and adding the route contents, everything worked fine through the final part of the activity.
I also learned how JWTs are signed, verified, and set to expire, and why password hashing with bcrypt is important for security.
