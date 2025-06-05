ARG IMAGE=node:20
FROM ${IMAGE}

ARG GITHUB_USER
RUN git config --global github.user ${GITHUB_USER}
ARG GITHUB_TOKEN
RUN git config --global github.token ${GITHUB_TOKEN}

RUN mkdir -p /root/.ssh || true

RUN touch /root/.ssh/known_hosts && \
    ssh-keyscan github.com > /root/.ssh/known_hosts && \
    chmod -R g-rwx,o-rwx /root/.ssh && \
    rm -f /root/.ssh/id_rsa.pub

RUN npm install -g gatsby-cli
