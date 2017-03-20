import {PopartHeaderComponent} from './components/popartheader/popartheader.js';
import {ScrollerComponent} from './components/scroller/scroller.js';

import * as domInit from './components/dominit/dominit.js';

(function() {

  domInit.register('PopartHeaderComponent', PopartHeaderComponent);
  domInit.register('ScrollerComponent', ScrollerComponent);

  domInit.init();

})();
