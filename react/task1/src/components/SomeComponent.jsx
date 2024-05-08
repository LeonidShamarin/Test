import React, { useState } from 'react';
import MyModal from './MyModal'; 
function SomeComponent() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <MyModal open={open} disableGlobalScroll={true}>
        <div>
          <h1>Some content</h1>
          <button onClick={() => setOpen(false)}>Close</button>
        </div>
      </MyModal>
    </>
  );
}

export default SomeComponent;