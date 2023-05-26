var _html = document.getElementById('html-editor');
var _css = document.getElementById('css-editor');
var _js = document.getElementById('js-editor');
var preview_panel = document.getElementById('preview-panel').contentWindow.document;
var _compile = document.getElementById('execute_code');

_compile.addEventListener('click', function(){
    preview_panel.open();
    preview_panel.writeln(`<style>${_css.value}</style>`);
    preview_panel.writeln(`${_html.value}`);
    preview_panel.writeln(`<script>${_js.value}</script>`);
    preview_panel.close();
});
