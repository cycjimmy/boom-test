/**
 * Created by cyc on 17/6/11.
 */

import Templates from '../share/Templates';
import * as main from './main.pug';
import * as mainStyle from './main.scss';

export default class MainSctComponent {
  constructor() {
    this.context = document.querySelector('main');
  }

  load() {
    let
      eContext = this.context
    ;

    return new Promise(resolve => {

      new Templates(main, eContext, {
        mainStyle,
      }).load();

      setTimeout(() => {
        resolve();
      }, 0);
    });

  };
}