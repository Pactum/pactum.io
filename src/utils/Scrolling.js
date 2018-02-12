import React from 'react'; // eslint-disable-next-line
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from 'react-scroll';
var createReactClass = require('create-react-class');

export var ToTheTop = createReactClass({
    scrollToTop: function() {
      scroll.scrollToTop();
    },
    render: function() {
      return (
        <div>
          <a onClick={this.scrollToTop}>To the top!</a>
          <br />
        </div>
      );
    }
  }),
  ToTheBottom = createReactClass({
    scrollToBottom: function() {
      scroll.scrollToBottom();
    },
    render: function() {
      return (
        <div>
          <a onClick={this.scrollToBottom}>To the top!</a>
          <br />
        </div>
      );
    }
  }),
  SmoothScroll = createReactClass({
    componentDidMount: function() {
      Events.scrollEvent.register('begin', function(to, element) {
        console.log('begin', arguments);
      });

      Events.scrollEvent.register('end', function(to, element) {
        console.log('end', arguments);
      });

      scrollSpy.update();
    },
    componentWillUnmount: function() {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    },
    handleSetActive: function(to) {
      console.log(to);
    },
    render: function() {
      return <div />;
    }
  });
