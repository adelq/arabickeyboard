var m = require('mithril');

var TABLE = {
  "2": "ء",
  "3": "ع",
  "7": "ح"
}

var translate = function(input) {
  var output = "";
  for (var i = 0, len = input.length; i < len; i++) {
    if (input[i] in TABLE) {
      output += TABLE[input[i]];
    } else {
      output += input[i];
    }
  }
  return output;
}

var root = document.body;

var state = {
  text: "Write in 3araby and see the result immediately below",
  update: function(value) {
    state.text = value;
  }
}

var Editor = {
  view: function() {
    return [
      m("textarea.input", {
        oninput: m.withAttr("value", state.update),
        value: state.text
      }),
      m(".preview", translate(state.text))
    ]
  }
}

m.mount(document.getElementById("editor"), Editor)
