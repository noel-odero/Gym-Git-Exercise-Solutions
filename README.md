# Gym Git Exercise Solutions

## Bundle 1

### Exercise 1

Below are the terminal commands I used to complete the exercise:

#### Step 1: Create a project folder and initialize Git
```bash
mkdir gym-git-exercise
cd gym-git-exercise
git init
```

#### Step 2: Make changes to the project
```bash
echo "git exercises" > README.md

```

#### Step 3: Rename the branch from `master` to `main` (or vice versa and back)
```bash
git branch -m master main
git branch -m main master
git branch -m master main
```

#### Step 4: Stage changes and commit them
```bash
git add .
git commit -m "Initial commit"
```

#### Step 5: Create a GitHub repository and connect it to the project
```bash
git remote add origin github-link
git push -u origin main
```

#### Step 6: Create a new branch `dev`
```bash
git checkout -b dev
```

#### Step 7: From `dev`, create another branch `test`
```bash
git checkout -b test
```

#### Step 8: Go back to the `dev` branch and delete the `test` branch
```bash
git checkout dev / git switch dev
git branch -d test
```

