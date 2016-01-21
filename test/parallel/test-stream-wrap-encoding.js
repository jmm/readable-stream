'use strict';
var common = require('../common');
var assert = require('assert');

var StreamWrap = require('../../lib/_stream_wrap');
var Duplex = require('../../').Duplex;

var stream = new Duplex({
  read: function() {
  },
  write: function() {
  }
});

stream.setEncoding('ascii');

var wrap = new StreamWrap(stream);

wrap.on('error', common.mustCall(function(err) {
  assert(/StringDecoder/.test(err.message));
}));

stream.push('ohai');
