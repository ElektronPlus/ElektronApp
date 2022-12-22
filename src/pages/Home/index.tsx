import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';

const Home: React.FC = () => {

  const name = "Home";

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonText>{name}</IonText>
      </IonContent>
    </IonPage>
  );
};

export default Home;
