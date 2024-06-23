# EzyCourse

## Build status

[![Production](https://github.com/AppifyLab/courseporium-next/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/AppifyLab/courseporium-next/actions/workflows/ci.yml)


## Contributing Guidelines
- Install [Git](https://git-scm.com/downloads)
- Clone the repository using the following command (You need to have access to the repository, please contact us if you don't have access)
  - `git clone git@github.com:AppifyLab/courseporium-next.git`

### Setup local environment 
- Choose any code editor of your choice, we recommend [VS Code](https://code.visualstudio.com/download) 
- If you use vs code please install this extensions
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - This will help you to follow the code style guide
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - This will help you to format your code
  - [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag) - This will help you to rename the tag automatically (This is optional)

- Install [Node.js](https://nodejs.org/en/download/) and [pnpm](https://pnpm.io/installation) Use latest version of Node.js and pnpm
  - Minimum Node.js version: 20 or above
  - Minimum pnpm version: 8 or above
- Install dependencies
  - `pnpm install`
- Setup [Backend]() locally and run it.
- Run the following command to start the development server
  - `pnpm dev`
- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Adding new features or fixing bugs
- Make sure you are on the `main` branch
  - `git checkout main`
- Pull the latest changes from the remote `main` branch
  - `git pull origin main`

> [!CAUTION]
> Never make changes to the `main` branch directly, always create a new branch and make changes to that branch. If you make changes to the `main` branch directly, you will earn a free trip to the moon.


- Create a new branch from `main` branch if you are adding a new feature
  - `git checkout -b feature/<module-name>/<feature-name>`
  - `<module-name>` - Name of the module you are working on(It's optional if you are working on a common feature)
  - Example: `git checkout -b feature/course/multi-lesson` or `git checkout -b feature/logger`

- Create a new branch from `main` branch if you are fixing a bug/issue 
  - `git checkout -b issue/<module-name>/<bug-name>`
  - `<module-name>` - Name of the module you are working on(It's optional if you are working on a common bug)
  - Example: `git checkout -b issue/course/lesson-not-loading` or `git checkout -b bugfix/logger`

- Or if you are fixing a hotfix then create a new branch from `main` branch
  - `git checkout -b hotfix/<module-name>/<bug-name>`
  - `<module-name>` - Name of the module you are working on(It's optional if you are working on a common bug)
  - Example: `git checkout -b hotfix/course/lesson-not-loading` or `git checkout -b hotfix/logger`

- Make changes to the code
  - Please try to add meaningful commit messages and follow the [conventional commit](https://www.conventionalcommits.org/) format if possible 
  - Push the changes to the remote branch using the following command
    - `git push -u origin <branch-name>` - for the first time only
    - `git push` - after the first time

### Create a pull request to the `main` or `staging` branch
- If you are adding a new feature or fixing a major bug that can lead to breaking changes then create a pull request to the `staging` branch 
- If you are fixing a bug or hotfix, that doesn't lead to breaking changes then create a pull request to the `main` branch 

### Review and merge
- After creating a pull request, please assign a reviewer to review your code
- If the reviewer approves your code, then you can merge the pull request to the `main` or `staging` branch
- If the reviewer requests changes, then you need to make the changes and push the changes to the same branch
- After merging the pull request, please **delete the branch(Only after merging into main branch)(this is mandatory)** from the remote repository as well as from your local machine, do not delete the branch if you merged the pull request to the `staging` branch
  - `git push origin --delete <branch-name>`
  - `git branch -d <branch-name>`


## Resetting staging branch
> [!CAUTION]
> Before running the following commands, please commit your local changes and push them to the remote repository.

To reset the staging only in local machine, run the following command:

```bash
pnpm reset-staging
```

To reset the staging in local machine and remote repository, run the following command:

```bash
pnpm reset-staging:with-remote
```

> [!WARNING]
> if someone runs the script from Windows, Linux, or macOS, it should work as expected. The script itself is written in Bash, which is a common shell scripting language found on Unix-based systems like Linux and macOS.

> However, running the script on Windows might require a Bash environment. On recent versions of Windows 10, you can use the Windows Subsystem for Linux (WSL) to run Bash scripts. Alternatively, you can use Git Bash, which provides a Bash-like shell environment on Windows.

> In either case, as long as the user has a Bash environment set up, they should be able to execute the script without any issues.


