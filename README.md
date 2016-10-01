# node-red-contrib-twitter-text

[Node-red](http://nodered.org) nodes for parsing urls, hashtags, usernames, etc. using the [twitter-text](https://github.com/twitter/twitter-text/blob/master/js) library

## Installing

Run this command in your local node-red directory:

```
npm install node-red-contrib-twitter-text
```

## Usage

Takes the input text from `msg.payload`, extracts the entities to an array, and sets it to `msg.payload`.

If you need other twitter-text functionality feel free to reach out and ask (PRs also welcome of course).

## Licence

MIT
