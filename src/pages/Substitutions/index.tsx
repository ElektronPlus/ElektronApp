import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';

const Substitutions: React.FC = () => {

  const name = "Substitutions";

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonText>{name}</IonText>
      </IonContent>
    </IonPage>
  );
};

export default Substitutions;