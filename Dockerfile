FROM node:18

ENV http_proxy=http://172.0.0.1:3128
ENV https_proxy=http://172.0.0.1:3128
ENV no_proxy=localhost,127.0.0.1,172.*

ARG DATABASE_URL={DATABASE_URL}
ENV DATABASE_URL={DATABASE_URL}

WORKDIR /app

COPY . .

RUN npm install
RUN npm run db:push

RUN unset http_proxy
RUN unset https_proxy

EXPOSE 4000

CMD ["npm", "run","start", "&&", "unset http_proxy", "&&", "unset https_proxy", "&&", "unset no_proxy"]
