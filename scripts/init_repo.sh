#!/usr/bin/env bash
set -euo pipefail

# Usage: ./scripts/init_repo.sh [repo-name] [public|private]
REPO_NAME=${1:-$(basename "$PWD")}
VISIBILITY=${2:-public}

if [ ! -d .git ]; then
  git init
  git add .
  git commit -m "Initial commit"
  git branch -M main || true
else
  echo "Git already initialized"
fi

if command -v gh >/dev/null 2>&1; then
  echo "Creating GitHub repo '$REPO_NAME' (visibility: $VISIBILITY) using gh CLI..."
  gh repo create "$REPO_NAME" --$VISIBILITY --source=. --remote=origin --push
  echo "Pushed to origin/main"
else
  echo "gh CLI not found. Create a repo on GitHub, then run these commands:" >&2
  echo "  git remote add origin git@github.com:<your-username>/$REPO_NAME.git" >&2
  echo "  git push -u origin main" >&2
fi
