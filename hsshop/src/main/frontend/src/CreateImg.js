import React from 'react';

function CreateImg(props) {
    
    return (
    <>
    <img
       
          width="45"
          height="45"
          src={require('./images/'+props.id+'.png')}
       
        />
    </>
    );
  }

  export default CreateImg

  