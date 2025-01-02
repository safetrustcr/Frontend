# 🌟 Contributing Guide | SafeTrust

We’re excited you’re interested in contributing! Please follow these steps to ensure a smooth and efficient collaboration process.

---

## 1️⃣ Fork the Repository

1. **Create a GitHub account** if you don’t already have one.
2. Navigate to the repository’s GitHub page.
3. Click the **Fork** button in the top-right corner to create a copy of the repository under your account.

---

## 2️⃣ Clone the Fork

1. Clone the forked repository to your local machine by running the following command:

   ```bash
   git clone https://github.com/YOUR_USERNAME/REPOSITORY_NAME.git
   ```

2. Replace `YOUR_USERNAME` and `REPOSITORY_NAME` with your GitHub username and the repository name.

---

## 3️⃣ Create a New Branch

1. **Follow branch naming conventions** outlined in the [Git Guidelines](/GIT_GUIDELINE.md).
2. Create a branch name based on the type of change (e.g., `feat/name-related-issue`, `fix/name-related-issue`).

   ```bash
   git checkout -b branch-name
   ```

   > Example: `feat/update-readme` or `fix/login-bug`.

---

## 4️⃣ Make Changes and Write Atomic Commits

1. Make changes in your local repository.
2. Follow **atomic commit principles**:

   - Each commit should address a single, logical change.
   - Avoid bundling unrelated changes in a single commit.
   - Write clear and descriptive commit messages using the format:

   ```bash
   git add .
   git commit -m "type(scope): description"
   ```

   > Examples:

   - `feat(authentication): add support for OAuth login`
   - `fix(api): resolve 404 error in user endpoint`
   - `docs(readme): update contribution guidelines`

---

## 5️⃣ Run the Project Locally

1. Ensure the project runs correctly after making your changes.
2. Follow the project-specific setup instructions to test your changes locally.

---

## 6️⃣ Push Your Changes

1. Push your changes to your forked repository:

   ```bash
   git push origin your-branch-name
   ```

2. ⚠️ **Note:** This repository uses Husky for pre-push hooks. Husky will automatically run `npm run format` and `npm run lint` before allowing the push.

   - If you encounter errors, fix any formatting or linting issues before retrying the push.

---

## 7️⃣ Create a Pull Request (PR)

1. Navigate to your forked repository on GitHub.
2. Click **New Pull Request** and select your branch to merge into the `main` of the original repository.
3. Use the **Pull Request Template** provided and fill it out properly.

⚠️ **Important:** Pull requests without the proper template or missing required details may be rejected.

---

## 💡 Additional Notes

- Follow the [Git Guidelines](https://github.com/Tico4Chain-Coders/POC-Trustless-Work/blob/main/GIT_GUIDELINE.md) for branch naming, commit messages, and overall contribution standards.
- Make sure your code adheres to the repository’s coding standards.
- Respect the project maintainers' feedback and requested changes.

Thank you for contributing! 🚀✨
