import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';

const Timetable: React.FC = () => {

  const name = "Timetable";

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonText>{name}</IonText>
      </IonContent>
    </IonPage>
  );
};

export default Timetable;
