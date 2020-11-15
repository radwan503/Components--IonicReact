import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonText,
} from "@ionic/react";
import React from "react";

const ForgetPassword: React.FC = () => {
  return (
    <IonPage id="forget-password-page">
      <IonContent class="background">
        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <IonCol size-sm="12" size-md="4" size-lg="4">
              <div className="forget-form login-form">
                <IonRow className="ion-text-center">
                  <IonCol className="login-logo">
                    <IonText>
                      <h2>Forgot Password</h2>
                      <p>
                        Enter your e-mail address below to reset your password.
                      </p>
                    </IonText>
                  </IonCol>
                </IonRow>

                <form>
                  <IonList>
                    <IonItem>
                      <IonLabel position="stacked" color="dark">
                        Email
                      </IonLabel>
                      <IonInput
                        name="email"
                        type="email"
                        spellCheck={false}
                        autocapitalize="off"
                        required
                      ></IonInput>
                    </IonItem>
                  </IonList>
                  <IonRow className="ion-justify-content-center">
                    <IonCol className="ion-margin-top">
                      <IonButton
                        href="/dashboard"
                        color="danger"
                        className="ion-button-class"
                        shape="round"
                        fill="solid"
                        size="large"
                        expand="block"
                        type="submit"
                      >
                        Submit
                      </IonButton>
                    </IonCol>
                  </IonRow>
                </form>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default ForgetPassword;
