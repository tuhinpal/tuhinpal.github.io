import React from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Index from './screens/Index';
import Works from './screens/Works';
import SingleBlog from './screens/SingleBlog';
import Blog from './screens/Blog';
import Contact from './screens/Contact';
import Skillsets from './screens/Skillsets';
import NotFound from './screens/404'
import { TimelineMax, Power2, gsap } from 'gsap';
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
gsap.registerPlugin(CSSRulePlugin);

export default class App extends React.Component {
  state = {
    mmenu: '',
    eyeblink: new TimelineMax()
  }
  mmenuF = this.mmenuF.bind(this)

  mmenuF() {
    if (this.state.mmenu === '') {
      this.setState({ mmenu: 'mmenu' })
    } else {
      this.setState({ mmenu: 'fadeout' })
      var fadeout = setInterval(() => {
        this.setState({ mmenu: '' })
        clearInterval(fadeout)
      }, 500);
    }
  }
  componentDidMount() { // GSAP Animation
    this.state.eyeblink.to(CSSRulePlugin.getRule('body:before'), 0.2, {
      cssRule: {
        top: '50%'
      },
      ease: Power2.easeOut
    }, '0', 'close')
      .to(CSSRulePlugin.getRule('body:after'), 0.2, {
        cssRule: {
          bottom: '50%'
        },
        ease: Power2.easeOut
      }, '0', 'close')
      .to(CSSRulePlugin.getRule('body:before'), 0.2, {
        cssRule: {
          top: '0%'
        },
        ease: Power2.easeOut
      }, '+=1', 'open')
      .to(CSSRulePlugin.getRule('body:after'), 0.2, {
        cssRule: {
          bottom: '0%'
        },
        ease: Power2.easeOut
      }, '-=0.2', 'open')
  }

  render() {
    return (
      <Router>
        <div>
          <div className="header">
            <Link className="title" to="../../"><span className="gerua">Tu</span>h<span className="sobuj">in</span>.</Link>
            <div className="nav">
              <Link to='../../works' className="item">Works</Link>
              <Link to='../../skillsets' className="item">Skillsets</Link>
              <Link to='../../blog' className="item">Blog</Link>
              <Link to='../../contact' className="item">Contact</Link>
            </div>
          </div>
          <div>
            <i onClick={this.mmenuF} className="fa fa-compass float fa-2x"></i>
            <div className={this.state.mmenu}>
              <div className="close"><i onClick={this.mmenuF} className="fa fa-window-close fa-2x"></i></div>
              <div className="items">
                <div className="mitem">
                  <Link to='../../' onClick={this.mmenuF} className="ms">Home</Link>
                  <Link to='../../works' onClick={this.mmenuF} className="ms">Works</Link>
                  <Link to='../../skillsets' onClick={this.mmenuF} className="ms">Skillsets</Link>
                  <Link to='../../blog' onClick={this.mmenuF} className="ms">Blog</Link>
                  <Link to='../../contact' onClick={this.mmenuF} className="ms">Contact</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Switch>
          <Route path="/" component={Index} exact></Route>
          <Route path="/skillsets" component={Skillsets} exact></Route>
          <Route path="/works" component={Works} exact></Route>
          <Route path="/blog" component={Blog} exact></Route>
          <Route path="/contact" component={Contact} exact></Route>
          <Route path="/blog/:name" component={SingleBlog} exact></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Router>
    );
  }
}
