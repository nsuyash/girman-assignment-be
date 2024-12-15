# [Girman Technologies User Data Management](https://girman-tech-be.vercel.app/)

**Node.js Express API with MongoDB Integration**

This project is a simple Node.js Express server that interacts with a MongoDB database to manage user data.

## Features

Express server for handling HTTP requests.\
MongoDB for data storage.\
CORS for enabling cross-origin requests.

CRUD operations for user data:

- ### `GET /users` - Retrieve all users.

- ### `POST /users` - Add multiple users.

- ### `POST /user` - Add a single user.

## Error Handling

The API responds with appropriate error messages and status codes:

- **404 Not Found** for missing resources.
- **500 Internal Server** Error for server issues.

## Acknowledgments

    MongoDB for the database.
    Express.js for the web framework.

## Instructions for Data Storage at MongoDB

- MongoDB Setup:

  - Ensure you have a MongoDB server running locally or accessible remotely.
  - The server’s URI should be configured in db/db.connect.js.

        const mongoose = require('mongoose');

        const connectDB = async () => {
          try {
            await mongoose.connect(process.env.MONGO_URI, {
              useNewUrlParser: true,
              useUnifiedTopology: true,
            });
            console.log('MongoDB connected successfully');
          } catch (error) {
            console.error('MongoDB connection error:', error);
            process.exit(1);
          }
        };
        module.exports = connectDB;

- Adding Data:

  - Use the provided API endpoints (/users for multiple entries, /user for a single entry) to send data to the MongoDB database.
  - Make sure to structure your requests correctly to include all necessary fields as per your user model schema.

  **Example request body**

      {
      "first_name": string,
      "last_name": string,
      "profileUrl": string,
      "city": string,
      "contact_number": string
      }

## Contact

    For any inquiries or issues, please contact Suyash Nandurkar at suyashnandurkar53@gmail.com.
    Contact at +91-9834143191
