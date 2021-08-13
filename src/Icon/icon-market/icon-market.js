import React, { Component } from "react";
import copy2Clipboard from "copy-to-clipboard";

import Icon from "../Icon";

import "./icon-market.css";

let types = [];

const requireAll = (requireContext) => {
  types = requireContext.keys().map((name) => {
    return name.match(/\/([\w.\-$]+)\.svg$/)[1];
  });
};
/* 改变查询的目录，来查看不同目录的icon */
const svgIcons = require.context("../svg", true, /\.svg$/);
requireAll(svgIcons);

export default class IconMarket extends Component {
  onCopy = (type) => {
    copy2Clipboard(`<Icon type="${type}" />`);

    alert("已复制到剪切板");
  };

  render() {
    return (
      <>
        <div style={{ color: "#999" }}>提示：icon按首字母排序</div>
        <div className="IconMarket">
          {types.map((type) => (
            <div
              key={type}
              className="IconMarket__item"
              onClick={() => this.onCopy(type)}
            >
              <Icon type={type} />
              <div className="desc">{type}</div>
            </div>
          ))}
        </div>
      </>
    );
  }
}
