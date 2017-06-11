/**
 * Created by cyc on 17/6/11.
 */


import Templates from '../share/Templates';
import * as header from './header.pug';
import * as headerStyle from './header.scss';

import * as Avatar from '../../static/images/Avatar.jpg';

export default class MainSctComponent {
  constructor() {
    this.context = document.querySelector('header');
  }

  load() {
    let
      eContext = this.context
    ;

    return new Promise(resolve => {

      new Templates(header, eContext, {
        headerStyle,
        Avatar
      }).load();

      setTimeout(() => {
        resolve();
      }, 0);
    });

  };
}