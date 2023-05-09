import { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';
import {AiFillHtml5} from 'react-icons/ai';
import {IoLogoCss3} from 'react-icons/io';
import {SiSass, SiStyledcomponents, SiTypescript, SiNextdotjs, SiQgis, SiAffinity,
    SiGit, SiBootstrap, SiWebpack, SiLeaflet, SiRedux, SiGatsby, SiElectron, SiLaravel, SiPython,
        SiTestinglibrary, SiCypress, SiExpress, SiNestjs, SiDjango} from 'react-icons/si';
import {MdDraw} from 'react-icons/md';
import {ImSvg} from 'react-icons/im';

const AboutTree:NextPage = () => {
  return (
    <TreeStyles>
        <div className="tf-tree">
          <ul>
            <li>
              <span className="tf-nc" style={{ display: 'flex'}}>
                <div title="Starting with SVG language"><ImSvg /></div>
              </span>
              <ul>
                <li>
                  <span className="tf-nc">2</span>
                  <ul>
                    <li><span className="tf-nc">4</span></li>
                    <li>
                      <span className="tf-nc">5</span>
                      <ul>
                        <li><span className="tf-nc">9</span></li>
                        <li><span className="tf-nc">10</span></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="tf-nc">2</span>
                  <ul>
                    <li><span className="tf-nc">7</span></li>
                    <li><span className="tf-nc">8</span></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
    </TreeStyles>
  )
}

const TreeStyles = styled.div`
color: white;
font-family: 'Arimo';
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 10rem 0rem 0rem 0rem;
.tf-tree{font-size: 3.5rem;overflow:auto}
.tf-tree *{box-sizing:border-box;margin:0;padding:0}
.tf-tree ul{display:inline-flex}
.tf-tree li{align-items:center;display:flex;flex-direction:column;flex-wrap:wrap;padding:0 1em;position:relative}
.tf-tree li ul{margin:2em 0}
.tf-tree li li:before{border-top:.0625em solid white;content:"";display:block;height:.0625em;left:-.03125em;position:absolute;top:-1.03125em;width:100%}
.tf-tree li li:first-child:before{left:calc(50% - .03125em);max-width:calc(50% + .0625em)}
.tf-tree li li:last-child:before{left:auto;max-width:calc(50% + .0625em);right:calc(50% - .03125em)}
.tf-tree li li:only-child:before{display:none}
.tf-tree li li:only-child>.tf-nc:before,.tf-tree li li:only-child>.tf-node-content:before{height:1.0625em;top:-1.0625em}
.tf-tree .tf-nc,.tf-tree .tf-node-content{border:.0625em solid rgba(0,0,0,.5);display:inline-block;padding:0em 0em;position:relative}
.tf-tree .tf-nc:before,.tf-tree .tf-node-content:before{top:-1.03125em}
.tf-tree .tf-nc:after,.tf-tree .tf-nc:before,.tf-tree .tf-node-content:after,.tf-tree .tf-node-content:before{border-left:.0625em solid white;content:"";display:block;height:1em;left:calc(50% - .03125em);position:absolute;width:.0625em}
.tf-tree .tf-nc:after,.tf-tree .tf-node-content:after{top:calc(100% + .03125em)}
.tf-tree .tf-nc:only-child:after,.tf-tree .tf-node-content:only-child:after,.tf-tree>ul>li>.tf-nc:before,.tf-tree>ul>li>.tf-node-content:before{display:none}
.tf-tree.tf-gap-sm li{padding:0 .6em}
.tf-tree.tf-gap-sm li>.tf-nc:before,.tf-tree.tf-gap-sm li>.tf-node-content:before{height:.6em;top:-.6em}
.tf-tree.tf-gap-sm li>.tf-nc:after,.tf-tree.tf-gap-sm li>.tf-node-content:after{height:.6em}
.tf-tree.tf-gap-sm li ul{margin:1.2em 0}.tf-tree.tf-gap-sm li li:before{top:-.63125em}
.tf-tree.tf-gap-sm li li:only-child>.tf-nc:before,.tf-tree.tf-gap-sm li li:only-child>.tf-node-content:before{height:.6625em;top:-.6625em}
.tf-tree.tf-gap-lg li{padding:0 1.5em}
.tf-tree.tf-gap-lg li>.tf-nc:before,.tf-tree.tf-gap-lg li>.tf-node-content:before{height:1.5em;top:-1.5em}
.tf-tree.tf-gap-lg li>.tf-nc:after,.tf-tree.tf-gap-lg li>.tf-node-content:after{height:1.5em}
.tf-tree.tf-gap-lg li ul{margin:3em 0}.tf-tree.tf-gap-lg li li:before{top:-1.53125em}
.tf-tree.tf-gap-lg li li:only-child>.tf-nc:before,.tf-tree.tf-gap-lg li li:only-child>.tf-node-content:before{height:1.5625em;top:-1.5625em}
.tf-tree li.tf-dotted-children .tf-nc:after,.tf-tree li.tf-dotted-children .tf-nc:before,.tf-tree li.tf-dotted-children .tf-node-content:after,.tf-tree li.tf-dotted-children .tf-node-content:before{border-left-style:dotted}
.tf-tree li.tf-dotted-children li:before{border-top-style:dotted}
.tf-tree li.tf-dotted-children>.tf-nc:before,.tf-tree li.tf-dotted-children>.tf-node-content:before{border-left-style:solid}
.tf-tree li.tf-dashed-children .tf-nc:after,.tf-tree li.tf-dashed-children .tf-nc:before,.tf-tree li.tf-dashed-children .tf-node-content:after,.tf-tree li.tf-dashed-children .tf-node-content:before{border-left-style:dashed}
.tf-tree li.tf-dashed-children li:before{border-top-style:dashed}
.tf-tree li.tf-dashed-children>.tf-nc:before,.tf-tree li.tf-dashed-children>.tf-node-content:before{border-left-style:solid}




`;

export default AboutTree