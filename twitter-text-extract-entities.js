var twitterText = require('twitter-text');

module.exports = function(RED) {
  function TwitterTextExtractEntities(n) {
    RED.nodes.createNode(this, n);
    var node = this;

    this.on('input', function(msg) {
      msg.payload = twitterText.extractEntitiesWithIndices(msg.payload);
      node.send(msg);
    });
  }
  RED.nodes.registerType('twitter-text-extract-entities', TwitterTextExtractEntities);
};