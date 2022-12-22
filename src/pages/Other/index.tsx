import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';

const Other: React.FC = () => {

  const name = "gdfhgfd";

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonText>{name}</IonText>
      </IonContent>
    </IonPage>
  );
};

export default Other;
