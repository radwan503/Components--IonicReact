import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonModal,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";

const ForgetModal: React.FC<{
  initialData: any;
  isOpen: boolean;
  onClose: Function;
}> = ({ initialData, isOpen, onClose }) => {
  const [dateName, setDateName] = useState<string | null | undefined>(
    initialData.name
  );
  return (
    <IonModal isOpen={isOpen}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Modal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel>Field One</IonLabel>
          <IonInput
            value={dateName}
            onIonChange={(e) => setDateName(e.detail.value)}
          ></IonInput>
        </IonItem>

        <IonButton
          onClick={() => {
            onClose({ cancelled: false, data: { name: dateName } });
            setDateName(null);
          }}
        >
          Close Modal
        </IonButton>
        <IonButton
          color="danger"
          onClick={() => {
            onClose({ cancelled: true, data: null });
            setDateName(null);
          }}
        >
          Close
        </IonButton>
      </IonContent>
    </IonModal>
  );
};

export default ForgetModal;
