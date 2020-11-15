import React from "react";
import { IonLabel, IonSegment, IonSegmentButton } from "@ionic/react";

const InputControls: React.FC<{
  selectedValue: "mkg" | "ftlbs" | "flow";

  onSelectedValue: (value: "mkg" | "ftlbs" | "flow") => void;
}> = (props) => {
  const inputChangeHandler = (event: CustomEvent) => {
    props.onSelectedValue(event.detail.value);
  };

  return (
    <IonSegment
      value={props.selectedValue}
      onIonChange={inputChangeHandler}
      scrollable
    >
      <IonSegmentButton value="mkg">
        <IonLabel>m/kg</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton value="ftlbs">
        <IonLabel>ft/lbs</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton value="flow">
        <IonLabel>flow</IonLabel>
      </IonSegmentButton>
    </IonSegment>
  );
};

export default InputControls;
