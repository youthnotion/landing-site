# YouthNotion Landing Site

Welcome to the YouthNotion landing site repository! This guide is written so that anyone—even with zero web development experience—can set up, run, and make changes to the project.

---

## 🖥️ Easiest Setup (Recommended for Beginners)

### 1. Install Required Software

#### Windows
- **GitHub Desktop**: [Download here](https://desktop.github.com/)
- **Visual Studio Code (VS Code)**: [Download here](https://code.visualstudio.com/)
- **Node.js**: [Download here](https://nodejs.org/) (choose the LTS version)

#### Linux
- **GitHub Desktop**: [Install instructions](https://github.com/shiftkey/desktop#linux)
  - **Debian/Ubuntu**:
    ```bash
    sudo apt update && sudo apt install gdebi-core
    wget https://github.com/shiftkey/desktop/releases/download/release-3.3.15-linux1/GitHubDesktop-linux-3.3.15-linux1.deb
    sudo gdebi GitHubDesktop-linux-3.3.15-linux1.deb
    ```
  - **Fedora/RHEL**:
    ```bash
    wget https://github.com/shiftkey/desktop/releases/download/release-3.3.15-linux1/GitHubDesktop-linux-3.3.15-linux1.rpm
    sudo dnf install GitHubDesktop-linux-3.3.15-linux1.rpm
    ```
  - **Arch Linux**:
    ```bash
    yay -S github-desktop-bin
    # or use your favorite AUR helper
    ```
- **Visual Studio Code (VS Code)**: [Download here](https://code.visualstudio.com/Download)
  - Or install via terminal:
    - **Debian/Ubuntu**:
      ```bash
      sudo apt update && sudo apt install wget gpg
      wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
      sudo install -o root -g root -m 644 packages.microsoft.gpg /usr/share/keyrings/
      sudo sh -c 'echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/vscode stable main" > /etc/apt/sources.list.d/vscode.list'
      sudo apt update && sudo apt install code
      ```
    - **Fedora/RHEL**:
      ```bash
      sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
      sudo sh -c 'echo -e "[code]\nname=Visual Studio Code\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\nenabled=1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" > /etc/yum.repos.d/vscode.repo'
      sudo dnf check-update
      sudo dnf install code
      ```
    - **Arch Linux**:
      ```bash
      sudo pacman -S code
      # or for OSS version: sudo pacman -S code-oss
      ```
- **Node.js**: [Download here](https://nodejs.org/) (choose the LTS version)
  - Or install via terminal:
    - **Debian/Ubuntu**:
      ```bash
      sudo apt update && sudo apt install nodejs npm
      ```
    - **Fedora/RHEL**:
      ```bash
      sudo dnf install nodejs npm
      ```
    - **Arch Linux**:
      ```bash
      sudo pacman -S nodejs npm
      ```

#### macOS
- **GitHub Desktop**: [Download here](https://desktop.github.com/)
- **Visual Studio Code (VS Code)**: [Download here](https://code.visualstudio.com/)
- **Node.js**: [Download here](https://nodejs.org/) (choose the LTS version)

---

## 2. Get the Code with GitHub Desktop
1. Open GitHub Desktop.
2. Click **File > Clone repository**.
3. Paste this URL: `https://github.com/youthnotion/landing-site.git`
4. Choose a folder (e.g., your Documents folder) and click **Clone**.

## 3. Open the Project in VS Code
1. In GitHub Desktop, click **Repository > Open in Visual Studio Code** (or open VS Code and use **File > Open Folder...** to select the project folder).

## 4. Install Project Dependencies
1. Open the built-in terminal in VS Code (**Terminal > New Terminal**).
2. In the terminal, type:
   ```bash
   npm install
   ```
   (Wait for it to finish. This installs everything the project needs.)

## 5. Set Up Environment Variables
1. In VS Code, find the file called `.env.example` in the project folder.
2. Right-click and select **Copy**. Paste and rename the copy to `.env.local`.
3. Open `.env.local` and fill in any required values (ask a team member if unsure).

## 6. Start the Website
1. In the VS Code terminal, type:
   ```bash
   npm run dev
   ```
2. Open your web browser and go to [http://localhost:3000](http://localhost:3000)

---

## 🛠️ Making Changes
1. Edit files in VS Code. For example, to change team members, open `src/components/Team/index.tsx` and edit the list.
2. Save your changes (**File > Save** or `Ctrl+S`).
3. See your changes live by refreshing your browser.

---

## 🚀 Pushing Your Changes to GitHub
1. In GitHub Desktop, you’ll see your changes listed.
2. Write a summary in the **Summary** box (e.g., "Update team section").
3. Click **Commit to main**.
4. Click **Push origin** to upload your changes to GitHub.

---

## 💡 Troubleshooting
- If you get errors, make sure you followed all steps above.
- If `npm install` or `npm run dev` fails, try closing and reopening VS Code, or ask a team member for help.

---

## 📚 More Info
- For advanced features, see the rest of this README below.
- Still stuck? Open an issue on GitHub or ask a team member!

---

# (Advanced) Manual Setup, Project Structure, and Contribution Guidelines

## 🚀 Quick Start (For Total Beginners)

### 1. Install Node.js
- Go to [https://nodejs.org/](https://nodejs.org/)
- Download and install the LTS version (just click and follow the installer)

### 2. Download This Project
- Click the green **Code** button on GitHub
- Click **Download ZIP**
- Unzip the file on your computer
- Open the folder called `landing-site`

### 3. Open a Terminal
- On Windows: Press `Windows + R`, type `cmd`, press Enter
- On Mac: Open **Terminal** from Applications > Utilities
- On Linux: Open your terminal app
- Use `cd` to go to the `landing-site` folder (e.g. `cd Downloads/landing-site`)

### 4. Install Everything Needed
Type this and press Enter:
```bash
npm install
```
Wait until it finishes (it can take a few minutes).

### 5. Set Up Environment Variables
- Find the file called `.env.example` in the folder
- Make a copy and rename it to `.env.local`
- Open `.env.local` with Notepad or any text editor
- If you don't know what to put, just leave the values as they are (ask a team member if you need real keys)

### 6. Start the Website
Type this and press Enter:
```bash
npm run dev
```
- Wait until you see a message like `Local: http://localhost:3000`
- Open your web browser and go to [http://localhost:3000](http://localhost:3000)

---

## 🛠️ How to Make Changes

### Change Team Members, Text, or Images
- Open the `src/components/Team/index.tsx` file in a text editor
- Find the list of people (look for `name`, `designation`, etc.)
- Change the names, roles, or image file names as needed
- Save the file
- Refresh your browser to see the changes

### Change Other Content
- Most text/images are in the `src/components` or `public/images` folders
- Edit the files, save, and refresh the browser

---

## 💡 Common Problems
- **npm not found**: You didn't install Node.js. Go back to step 1.
- **Port already in use**: Close other apps using port 3000, or restart your computer.
- **Website not updating**: Save your file and refresh the browser.
- **Other errors**: Copy the error and ask a team member or search Google.

---

## 📝 How to Save Your Changes to GitHub
1. Open a terminal in the `landing-site` folder
2. Type:
   ```bash
   git add .
   git commit -m "Describe your change"
   git push
   ```
3. Go to GitHub and open a Pull Request if needed

---

## Need Help?
- Ask a team member
- Google the error message
- Or open an issue on GitHub

---

**You do NOT need to know coding. Just follow the steps above.**
