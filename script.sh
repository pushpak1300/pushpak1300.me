#!/bin/bash

echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"

if [[ "$VERCEL_GIT_COMMIT_REF" == "gh-pages" ]] ; then
    # Don't build
    echo "🛑 - Build cancelled on branch gh-pages"
    exit 0;
else
    # Proceed with the build
    echo "✅ - Build can proceed on any branch"
    exit 1;
fi
