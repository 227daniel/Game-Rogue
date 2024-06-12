import 'react-quill/dist/quill.core.css';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';

import './quill.css';

import dynamic from 'next/dynamic';

const ReactQuill = dynamic(() => import('react-quill'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});
type RichTextInputProps = {
  content: string;
  handleContentChange: (content: string) => void;
  sx?: object;
  className: string;
  placeholder: string;
};
export default function RichTextInput({
  content,
  sx,
  className,
  placeholder,
  handleContentChange,
}: RichTextInputProps): JSX.Element {
  return (
    <>
      {ReactQuill && (
        <ReactQuill
          theme="snow"
          value={content}
          placeholder={placeholder ? placeholder : ''}
          onChange={handleContentChange}
          className={className || ''}
          modules={{
            toolbar: [
              [{ header: [1, 2, false] }],
              ['bold', 'italic', 'underline', 'strike', 'blockquote'],
              [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
              ['link', 'image'],
              ['clean'],
            ],
          }}
          formats={[
            'header',
            'bold',
            'italic',
            'underline',
            'strike',
            'blockquote',
            'list',
            'bullet',
            'indent',
            'link',
            'image',
          ]}
          style={{ position: 'relative', color: 'white', ...sx }}
        />
      )}
    </>
  );
}
