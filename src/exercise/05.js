// Styling
// http://localhost:3000/isolated/exercise/05.js

import { blue } from 'chalk'
import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor, fontStyle) for the color and the font style
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`

const Box = ({size, children, color, className = '', style, ...otherProps}) => {
  const boxSize = 'box--' + size;
  const customStyle = {backgroundColor: color, fontStyle: 'italic', ...style};
  return (
    <div className={`box ${boxSize} ${className}`} style={customStyle}>
      {children}
    </div>
  );
}


function App() {
  return (
    <div>
      <Box size='small' color='lightblue'>
        small lightblue box
      </Box>
      <Box size='medium' color='pink'>
        medium pink box
      </Box>
      <Box size='large' color='orange' style={{fontWeight: 700}}>
        large orange box
      </Box>
    </div>
  )
}

export default App
