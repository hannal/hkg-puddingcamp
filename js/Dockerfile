ARG VARIANT="20-bullseye"

FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

WORKDIR /app

COPY --chown=node:node ./boilerplate /app/workspace

WORKDIR /app/workspace

RUN su node -c "npm install -g pnpm"
RUN pnpm install

WORKDIR /app/workspace/src