FROM ubuntu:16.04

# COPY . /app

# WORKDIR /app

RUN apt-get update
RUN apt-get install python-pip --assume-yes --quiet
RUN apt-get install git-core --assume-yes --quiet

RUN apt-get install curl
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -

RUN apt-get install -y nodejs --assume-yes --quiet

RUN git clone https://github.com/RyabovNick/whatsappAPI

WORKDIR /whatsappAPI

RUN pip install -r requirements.txt --quiet
# RUN ln -s /usr/bin/nodejs /usr/bin/node

RUN npm install

EXPOSE 2018 2019 2020 2021

CMD ["npm", "start"]