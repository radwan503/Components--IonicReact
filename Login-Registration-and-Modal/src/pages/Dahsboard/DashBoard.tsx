import { IonButton, IonContent, IonItem, IonPage, IonText } from "@ionic/react";
import React, { useState } from "react";
import ForgetModal from "../../components/ForgetModal/ForgetModal";

const DashBoard: React.FC = () => {
  const [myModal, setMyModal] = useState({ isOpen: false });
  const [modalResp, setModalResp] = useState(null);
  const [myUser, setMyUser] = useState({ name: "anik" });

  const onModalClose = (response: any) => {
    setMyModal({ isOpen: false });
    setModalResp(response);
    // if (!response.cancalled) {
    //   setMyUser({ name: response.data.name });
    // }
  };

  return (
    <IonPage>
      <IonText className="ion-text-center">
        <h1>Welcome To Dashbord</h1>
        <p color="success">You Have Logging successfully</p>
      </IonText>
      <IonContent className="ion-text-center">
        <IonButton className="primary" routerLink="/">
          Logout
        </IonButton>
        <ForgetModal
          isOpen={myModal.isOpen}
          initialData={{ ...myUser }}
          onClose={onModalClose}
        ></ForgetModal>
        <div>
          <h2>Data form modal</h2>
          <IonItem>{myUser.name}</IonItem>
          <div>{modalResp && JSON.stringify(modalResp, null, 2)}</div>
        </div>
        <IonButton onClick={() => setMyModal({ isOpen: true })}>
          Show Modal
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default DashBoard;
