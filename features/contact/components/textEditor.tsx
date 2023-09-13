/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react';

type Props = {
  height?: number;
  onChange?: (event: any) => void;
  onBlur?: (event: any) => void;
  value?: any;
};

const TextEditor = ({ height, onChange, value, ...props }: Props) => {
  const editorRef = useRef<{
    CKEditor: typeof CKEditor;
    Editor: typeof Editor;
  }>();
  const [editorLoaded, setEditorLoaded] = useState(false);
  const { CKEditor, Editor } = editorRef.current || {};

  const config = {
    toolbar: [],
  };

  function handleChange(event, editor) {
    const data = editor.getData();
    if (onChange) onChange(data);
  }

  useEffect(() => {
    editorRef.current = {
      CKEditor: require('@ckeditor/ckeditor5-react').CKEditor,
      Editor: require('@ckeditor/ckeditor5-build-classic'),
    };
    setEditorLoaded(true);
  }, []);

  return (
    <div>
      {editorLoaded ? (
        <CKEditor
          className="wrap-ckeditor mt-3"
          editor={Editor}
          config={config}
          data={value}
          onChange={handleChange}
          {...props}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default TextEditor;
