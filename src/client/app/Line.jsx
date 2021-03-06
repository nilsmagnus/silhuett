import React from 'react';
import Word from './Word.jsx'

export default class Line extends React.Component {

    render() {
        const displaySilhouettes = this.props.showBoxes;
        var scale = this.props.scale;


        var words = this.props.line.split(/\s/).map(function (word, i) {
              return (
                  <span key={i}>
                      <Word word={word} key={i} boxes={displaySilhouettes} scale={scale}/>
                      <span className="nonLetter" />
                  </span>
              );
        });
        return (<div className="line">  {words} </div>  );

    }
}
