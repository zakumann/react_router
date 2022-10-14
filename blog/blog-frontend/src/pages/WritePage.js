import React from 'react';
import TagBox from '../components/write/TagBox';
import WriteActionButton from '../components/write/WriteActionButtons';
import Responsive from '../components/common/Responsive';
import EditorContainer from '../containers/write/EditorContainer';

const WritePage = () => {
  return (
    <Responsive>
      <EditorContainer />
      <TagBox />
      <WriteActionButton />
    </Responsive>
  );
};

export default WritePage;
