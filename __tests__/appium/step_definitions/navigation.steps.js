import { When } from 'cucumber';
import { goBackFromHeader, selectScreenFromTabBar } from '../screen-objects/navigation';

When(
  /I select (Home|Webview|Chats) from the tabbar/,
  (screen) => {
    selectScreenFromTabBar(screen);
  },
);

When(
  /I click on the go back arrow in the header/,
  () => {
    goBackFromHeader();
  },
);
