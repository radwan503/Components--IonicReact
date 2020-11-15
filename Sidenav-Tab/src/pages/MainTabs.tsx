import React from "react";
import {
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from "@ionic/react";
import { Route, Redirect } from "react-router";
import { calendar, location, informationCircle, people } from "ionicons/icons";
import OutBox from "./OutBox";
import Inbox from "./Inbox";

interface MainTabsProps {}

const MainTabs: React.FC<MainTabsProps> = () => {
  return (
    //if you want tab

    // <IonTabs>
    //   <IonRouterOutlet>
    //     {/*
    //       Using the render method prop cuts down the number of renders your components will have due to route changes.
    //       Use the component prop when your component depends on the RouterComponentProps passed in automatically.
    //     */}
    //     <Route path="/page/inbox" component={Inbox} exact={true} />
    //     <Route path="/page/outbox" component={OutBox} exact={true} />
    //   </IonRouterOutlet>
    //   <IonTabBar slot="bottom">
    //     <IonTabButton tab="inbox" href="/page/inbox">
    //       <IonIcon icon={calendar} />
    //       <IonLabel>Schedule</IonLabel>
    //     </IonTabButton>
    //     <IonTabButton tab="outbox" href="/page/outbox">
    //       <IonIcon icon={people} />
    //       <IonLabel>Speakers</IonLabel>
    //     </IonTabButton>
    //   </IonTabBar>
    // </IonTabs>

    //if want without tab

    <div>
      <IonRouterOutlet>
        <Route path="/page/inbox" component={Inbox} exact={true} />
        <Route path="/page/outbox" component={OutBox} exact={true} />
      </IonRouterOutlet>
    </div>
  );
};

export default MainTabs;
