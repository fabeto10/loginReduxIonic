import { IonCol, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { personCircle } from 'ionicons/icons';
import React, { useState } from 'react';




export const Login = () => {

    const [email, setEmail] = useState<HTMLTextAreaElement | string>("");
    const [ password, setPassword] = useState<HTMLTextAreaElement | string>("");

    return(
        <>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        Login
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonRow>
                <IonCol>
                    <IonIcon
                        style={{ fontSize: "70px", color: "#0040ff" }}
                        icon={personCircle}
                    />
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <IonItem>
                        <IonLabel position="floating"> Email</IonLabel>
                        <IonInput
                            type="email"
                            value={email as string}
                            onIonChange={(e: Event) => setEmail((e.target as HTMLTextAreaElement).value)}
                        >
                        </IonInput>
                    </IonItem>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <IonItem>
                        <IonLabel position="floating"> Password</IonLabel>
                        <IonInput
                            type="password"
                            value={password as string}
                            onIonChange={(e: Event) => setPassword((e.target as HTMLTextAreaElement).value)}
                        >
                        </IonInput>
                    </IonItem>
                </IonCol>
            </IonRow>
        </>
    );
}