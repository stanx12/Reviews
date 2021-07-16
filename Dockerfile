FROM ruby:3.0.1-alpine
ENV APP_PATH /app
ENV BUNDLE_PATH /gems

RUN apk -U add --no-cache \
  build-base \
  git \
  postgresql-dev \
  postgresql-client \
  libxml2-dev \
  libxslt-dev \
  nodejs \
  yarn \
  imagemagick \
  tzdata \
  less \
  && rm -rf /var/cache/apk/*

WORKDIR ${APP_PATH}
COPY . ${APP_PATH}
COPY ./dev-docker-entrypoint.sh /usr/bin/dev-entrypoint.sh

RUN chmod +x /usr/bin/dev-entrypoint.sh
RUN rm -f ${APP_PATH}/tmp/pids/server.pid
RUN yarn install
RUN bundle install

ENTRYPOINT [ "dev-entrypoint.sh" ]
CMD [ "bin/rails", "s", "-b", "0.0.0.0" ]

EXPOSE 3000 