/* 
 * Simple editor component that takes placeholder text as a prop 
 */
class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorHtml: '', theme: 'snow' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(html) {
    this.setState({ editorHtml: html });
  }

  handleThemeChange(newTheme) {
    if (newTheme === "core") newTheme = null;
    this.setState({ theme: newTheme });
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
        React.createElement(ReactQuill, {
          theme: this.state.theme,
          onChange: this.handleChange,
          value: this.state.editorHtml,
          modules: Editor.modules,
          formats: Editor.formats,
          bounds: '.app',
          placeholder: this.props.placeholder
        }), /*#__PURE__*/
      ));
  }
}


/* 
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
Editor.modules = {
  toolbar: [
    [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' },
    { 'indent': '-1' }, { 'indent': '+1' }],
    ['link', 'image', 'video'],
    ['clean']],

  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false
  }
};


/* 
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
Editor.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'];


/* 
 * PropType validation
 */
Editor.propTypes = {
  placeholder: React.PropTypes.string
};


/* 
 * Render component on page
 */
ReactDOM.render( /*#__PURE__*/
  React.createElement(Editor, { placeholder: 'Write something...' }),
  document.querySelector('.app'));