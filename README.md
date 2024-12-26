# YouthNotion

Welcome to the YouthNotion Website Repository! This document will guide you through everything you need to know, from setting up your environment to understanding the project's structure and how to contribute. You don't need any prior knowledge of JavaScript or web development as long as you have a brain.

## Features
- **Responsive Design**: Adapts to different screen sizes.
- **Interactive Elements**: Engages users with dynamic content.
- **Easy Navigation**: Simplifies user experience.
- **Customizable Sections**: Tailor the content as needed.
- **SEO Friendly**: Optimized for search engines.

## What You Need
Before starting, ensure you have the following:
- **Common Sense**: Should be pretty fucking obvious at this point.
- **A Computer**: Windows, macOS, or Linux.
- **Internet Connection**: To download necessary files.
- **Basic Text Editor**: Notepad, TextEdit, or any code editor (VS Code recommended).
- **Web Browser**: Chrome, Firefox, Safari, etc.

## Setting Up Your Environment
### 1. Install Node.js and npm
Node.js is a runtime environment for JavaScript, and npm is a package manager for Node.js. Both are required to run and manage the project.

#### For Windows:
1. Visit the [Node.js website](https://nodejs.org/).
2. Download the Windows installer.
3. Follow the installation instructions.
4. Go fuck yourself if you can't follow such simple steps.

#### For macOS:
![alt text](https://media.tenor.com/XcwA0JTGCcAAAAAe/why-are-you-gae-meme.png)

#### For Linux:
1. You are smart enough, simply follow the instructions on the [Node.js download page](https://nodejs.org/en/download/package-manager/).

### 2. Verify Installation
Open your terminal (Command Prompt on Windows, Terminal on macOS/Linux) and type:
```bash
node -v
npm -v
```
You should see the versions of Node.js and npm installed.

## Project Structure
Understanding the project structure is crucial. Here's an overview:

```
landing-site
├── src
│   ├── assets       # Images, fonts, etc.
│   ├── components   # Reusable components (e.g., buttons, headers)
│   ├── pages        # Different pages of the site
│   ├── services     # API calls and data handling
│   ├── styles       # CSS files
│   └── utils        # Utility functions
├── public
│   ├── index.html   # Main HTML file
│   └── favicon.ico  # Site icon
├── .gitignore       # Files to ignore in version control
├── package.json     # Project dependencies and scripts
├── README.md        # Project documentation
└── webpack.config.js # Configuration for bundling the project
```

## Installation
### 1. Clone the Repository
To get a copy of the project, you'll need to "clone" the repository. Open your terminal and type:
```bash
git clone https://github.com/youthnotion/landing-site.git
```

### 2. Navigate to the Project Directory
Change your directory to the project's folder:
```bash
cd landing-site
```

### 3. Install Dependencies
Install the required packages using npm:
```bash
npm install
```

## Running the Project
### Start the Development Server
Run the following command to start the server:
```bash
npm start
```
This will open the project in your default web browser at `http://localhost:3000`.

### Building for Production
To create a production-ready version of the project, run:
```bash
npm run build
```
The `build` folder will contain all the necessary files to deploy the site.

## Making Changes
### Editing Components
1. Open your text editor and navigate to the `src/components` directory.
2. Open the component file you wish to edit.
3. Make your changes and save the file.
4. Your changes will automatically reflect in the browser.

### Adding New Components
1. Create a new file in the `src/components` directory.
2. Define your component using the following template:
   ```javascript
   import React from 'react';

   const MyComponent = () => {
     return (
       <div>
         {/* Your component content */}
       </div>
     );
   };

   export default MyComponent;
   ```
3. Use your new component in any page by importing it:
   ```javascript
   import MyComponent from './components/MyComponent';
   ```

## Contributing
### Guidelines
1. **Fork the Repository**: Create a copy of the project on your GitHub account.
2. **Create a Branch**: Name your branch clearly (e.g., `feature-new-component`).
   ```bash
   git checkout -b feature-new-component
   ```
3. **Commit Your Changes**: Describe your changes clearly.
   ```bash
   git commit -m 'Add new component'
   ```
4. **Push to Your Branch**:
   ```bash
   git push origin feature-new-component
   ```
5. **Open a Pull Request**: Submit your changes for review.

## Troubleshooting
### Common Issues
- **Installation Errors**: Ensure Node.js and npm are correctly installed.
- **Server Not Starting**: Check for errors in the terminal and resolve any missing dependencies.
- **Changes Not Reflecting**: Make sure you save your files and refresh the browser.
