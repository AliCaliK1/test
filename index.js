<style>#editor {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}</style>

<div id="editor">class Main {
  public static void main(String[] args) {
    System.out.println("Hello world!");
  }
}</div>

<script src="http://ajaxorg.github.io/ace-builds/src-min/ace.js"></script>
<script src="http://ajaxorg.github.io/ace-builds/src-min/ext-language_tools.js"></script>

<script>require("ace/ext/language_tools");
	editor = ace.edit("editor");
  editor.setTheme("ace/theme/dracula");
  editor.session.setMode("ace/mode/java");
  editor.setOptions({
    enableLiveAutocompletion: true
  });

  const ws = new WebSocket('ws://http://ec2-54-176-173-178.us-west-1.compute.amazonaws.com:8081');
  ws.onopen = function() {
    editor.setValue('');
    editor.getSession().on('change', function() {
      socket.send(editor.getSession.getValue());
    });
  };
  ws.onmessage = function(msg) {
    editor.setValue(msg);
  };</script>
