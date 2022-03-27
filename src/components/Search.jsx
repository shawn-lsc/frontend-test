import React from "react";
import "../style/search.scss";
import { Input } from "antd";
import "font-awesome/css/font-awesome.min.css";

export default function Search() {
  return (
    <div className="search">
      <Input placeholder="&#xF002; 搜尋" />
    </div>
  );
}
