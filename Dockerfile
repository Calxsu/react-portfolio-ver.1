FROM node:20-slim

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install -g npm@9 && npm install && \
  if [ "$(uname -m)" = "x86_64" ]; then \
    npm install @rollup/rollup-linux-x64-gnu@4.60.4; \
  elif [ "$(uname -m)" = "aarch64" ]; then \
    npm install @rollup/rollup-linux-arm64-gnu@4.60.4; \
  fi

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173"]
