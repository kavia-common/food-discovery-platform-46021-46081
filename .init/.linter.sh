#!/bin/bash
cd /home/kavia/workspace/code-generation/food-discovery-platform-46021-46081/food_app_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

