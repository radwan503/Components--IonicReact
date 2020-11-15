import React, { useRef, useState } from "react";
import {
  IonAlert,
  IonApp,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { pin } from "ionicons/icons";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

import InputControls from "./components/InputControls";
import SegmentTab from "./components/SegmentTab";

const App: React.FC = () => {
  const [calcUnits, setCalcUnits] = useState<"mkg" | "ftlbs" | "flow">("mkg");

  const selectCalcUnitHandler = (selectedValue: "mkg" | "ftlbs" | "flow") => {
    setCalcUnits(selectedValue);
  };

  return (
    <React.Fragment>
      <IonApp>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>BMI Calculator</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonGrid>
            <IonRow>
              <IonCol>
                <InputControls
                  selectedValue={calcUnits}
                  onSelectedValue={selectCalcUnitHandler}
                ></InputControls>
              </IonCol>
            </IonRow>
            {(() => {
              if (calcUnits === "mkg") {
                return (
                  <div>
                    <IonRow>
                      <IonCol>
                        <IonItem>
                          <IonLabel position="floating">Your Height</IonLabel>
                          <IonInput type="number"></IonInput>
                        </IonItem>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol>
                        <IonItem>
                          <IonLabel position="floating">Your Weight</IonLabel>
                          <IonInput type="number"></IonInput>
                        </IonItem>
                      </IonCol>
                    </IonRow>
                  </div>
                );
              } else if (calcUnits === "ftlbs") {
                return <SegmentTab></SegmentTab>;
              } else if (calcUnits === "flow") {
                return <h1>Flows</h1>;
              }
            })()}
          </IonGrid>
        </IonContent>
      </IonApp>
    </React.Fragment>
  );
};

export default App;
