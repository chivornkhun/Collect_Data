var util = require('../lib/mail/util'),
    assert = require('assert'),
    vows = require('vows');

vows.describe('Mail Utilities').addBatch({
  'Lines beginning with dot': {
    topic: function() { return util.stuffDots("foo\r\n.\r\nbar"); },

    'are stuffed': function(topic) {
      assert.equal(topic, "foo\r\n..\r\nbar");
    }
  },

  'A message body': {
    topic: function() { return util.fill("text1"); },

    'is filled to 78/998 line length limits': function(topic) {
      assert.equal(topic, 'text');
    }
  },

  'Header values': {
    topic: function() { return util.escapeHeader('value\r\ncc: pailin.electricity@gmail.com'); },

    'are escaped': function(topic) {
      assert.equal(topic, 'value cc: name@example.net');
    }
  },

  'Headers': {
    topic: function() { return util.foldHeader('Subject', 'foldHeader'); },

    'are folded': function(topic) {
      assert.equal(topic, 'Subject: assert equal');
    }
  }
}).export(module);

