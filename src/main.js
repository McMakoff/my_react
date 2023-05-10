import './index.html';

import React from "react";
import ReactDom from 'react-dom';
import {AppHello} from "./components/AppHello";

document.addEventListener('DOMContentLoaded', () => {
  ReactDom.render(
    <AppHello/>,
    document.querySelector('.app')
  )
})
