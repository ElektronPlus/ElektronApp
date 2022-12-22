import { IonApp, IonHeader, IonIcon, IonLabel, IonRouterOutlet, IonSplitPane, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Home from './pages/Home';
import Timetable from './pages/Timetable';
import Settings from './pages/Other';
import Substitutions from './pages/Substitutions';

import { useTranslation } from 'react-i18next';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { calendarOutline, clipboardOutline, ellipsisHorizontalOutline, homeOutline, settingsOutline } from 'ionicons/icons';


setupIonicReact();

const App: React.FC = () => {
  const { t } = useTranslation();
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/timetable">
              <Timetable />
            </Route>
            <Route exact path="/other">
              <Settings />
            </Route>
            <Route exact path="/substitutions">
              <Substitutions />
            </Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/home">
              <IonIcon icon={homeOutline} />
              <IonLabel>{t('home')}</IonLabel>
            </IonTabButton>
            <IonTabButton tab="timetable" href="/timetable">
              <IonIcon icon={calendarOutline} />
              <IonLabel>{t('timetable')}</IonLabel>
            </IonTabButton>
            <IonTabButton tab="substitutions" href="/substitutions">
              <IonIcon icon={clipboardOutline} />
              <IonLabel>{t('substitutions')}</IonLabel>
            </IonTabButton>
            <IonTabButton tab="other" href="/other">
              <IonIcon icon={ellipsisHorizontalOutline} />
              <IonLabel>{t('other')}</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
