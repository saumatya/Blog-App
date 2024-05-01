# Blog App

This is a simple blog application built using Node.js, Express, and MongoDB. It allows users to create, read, update, and delete articles.

## Installation

To run this application locally, follow these steps:

1. Clone this repository:

   ```bash
   git clone https://github.com/saumatya/Blog-App.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Blog-App
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up MongoDB:
   
   - Make sure you have MongoDB installed and running locally, or you can use a cloud-based MongoDB service.
   - Create a `.env` file in the root directory of the project.
   - Add your MongoDB connection URI to the `.env` file:
   
     ```
     MONGODB_URI=your_mongodb_connection_uri
     ```
     
   Replace `your_mongodb_connection_uri` with your actual MongoDB connection URI.

5. Start the server:

   ```bash
   npm start
   ```

6. Open your web browser and visit `http://localhost:PORT` to see the app in action.

## Usage

- Users can view all articles on the homepage.
- Users can click on individual articles to view the full content.
- Users can create new articles by clicking on the "New Article" button.
- Users can edit or delete existing articles.

## Dependencies

- [Express](https://www.npmjs.com/package/express) - Fast, unopinionated, minimalist web framework for Node.js.
- [Mongoose](https://www.npmjs.com/package/mongoose) - MongoDB object modeling tool designed to work in an asynchronous environment.
- [EJS](https://www.npmjs.com/package/ejs) - Embedded JavaScript templates for building dynamic web applications.
- [dotenv](https://www.npmjs.com/package/dotenv) - Loads environment variables from a `.env` file into `process.env`.
- [method-override](https://www.npmjs.com/package/method-override) - Middleware for overriding HTTP methods.

## Contributing

Contributions are welcome! Please feel free to submit pull requests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
