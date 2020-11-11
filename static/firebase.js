var firebaseConfig = {
    apiKey: 'yourAPI',
    authDomain: 'yourAuthDomain',
    databaseURL: 'yourDatabaseURL',
    projectId: 'yourProjectId',
    storageBucket: 'yourStorageBucket',
    messagingSenderId: 'yourMessagingSenderId',
    appId: 'yourAppId',
    measurementId: 'yourMeasurementId'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();