import {ShrinkHeaderComponent} from './components/shrinkheader/shrinkheader.js';
import {ScrollerComponent} from './components/scroller/scroller.js';

import * as domInit from './components/dominit/dominit.js';

(function() {

  domInit.register('ShrinkHeaderComponent', ShrinkHeaderComponent);
  domInit.register('ScrollerComponent', ScrollerComponent);

  domInit.init();

})();
