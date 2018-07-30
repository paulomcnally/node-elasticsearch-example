
# Server

    $ docker pull docker.elastic.co/elasticsearch/elasticsearch:6.3.2
    $ docker-compose up

Use `-d` to run on daemon.

# Dependencies

  $ yarn install

## Create index

    $ node create_index.js

## Create documents

    $ node create_document.js


## Search document

    $ node search.js nicaragua
    $ node search.js paulo
    $ node search.js jose
