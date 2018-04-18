import * as firebase from 'firebase';
// import * as admin from 'firebase-admin';

// admin.initializeApp({
//     credential: admin.credential.cert({
//       projectId: "myproject-7ed24",
//       clientEmail: "firebase-adminsdk-8y97d@myproject-7ed24.iam.gserviceaccount.com",
//       privateKey:  "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC2Ml7W/EK/IoFX\nldlqvz6FHJO9J2thgTl90d5XDVQjw12PfmWUYXqeg1Uftr8QCJR4fokSjQhOC9cT\n5zYGbbSofmym0SHBso5Ug2p9CaRgF0DhnmLKrFtx/fZqoFagkLxFWUjc2dgrcguk\niW/jibEK2XyVBE3NuofF95nKTzhkHdjMjJOdr88R0TaCYReiExFHDs0wM4rrftK0\n8Ancxh0qFb61Ct3ORZtkpdg4q93EYcOqYpQF/obdhwSzs412naevRkXG8dztdimW\nn6tsPmwcn5ceZMy3fzdpebci6Y2x/lPcIPcUHWjp0TvKFg0cl25Zy5VGX+F/zhqb\na/CaKr/bAgMBAAECggEACqpM1kWIBrZCCgV8klIa78x/cs18QgXq0/cADpUk0r8c\nmp9p2ii79nbLpIKcZpeJ/A+0KGuBtp0yJuPG9tNfMD8jpGmOPKTIziEEj8iLtbrx\nZ65PgXuwvViCHzW+5xaciWwI5tyzBGq1ocO7J/+nEcfaEhhhZuSUuWhIDrQFIgm/\norCXn3iCKmlpgiIZcJw2b6glsQH561htoNkJ3SI/vUEUCkyIp26akH2GmjpGmSNU\ndE7iaFOtqCYAh/4NyVeBfd6T/TIJdrB1jiVdkSa38b7/LF02YZKlRwzpE8fCt5te\nvKIAohq4VT0bmiQgs50rGjkEKM54VtKxknbrHJBMaQKBgQD9AOygPpQAQtBZ5JD9\nIbTg9HksrOds6YSUOFdSFdPytY8sfKPsIjfBEyTBj6SntIPue73NbWUAjtwuNgLz\ngtF1BmRgKQi7riMTc9RGijs23CoiSVJiqAJm46L39x59yTRP74O3tPAT5NK8R6Iz\n/sNnGqfhWkOYlf4lvF4iCvIN9QKBgQC4WsS+I4J2pA6ixPFuM2JeEFlYokhL1H0a\nqAQKIheWevdZHlEU89a71qt6dfzQF7N2wrfQGimB9YnOMcz0TRXsgELdmiCmajzC\njJFE0Vr5bixNkh2Y9sunxVTWH+0PuqZ96D/rIPBEUUKByLclI8DwqmlpG2zAfzJ9\nrib+FXSkjwKBgQC88WbFmVZQB5WvvFlnITgC07B2472FAbPIOXdEzxZU6LA+yepl\nW3yFzTUi9JJDyDTK8lBhzPOkAgx+2klD8AtauOZXRe3Gs5pwWY1LDMqCAtPYfSdw\nlAYPLqszQbLcv1k45SdaF18/jCCxCVIiQH1PT4HWcuGOX13Icq9d/wybzQKBgHPs\nT66oMY9c1f8wDAiZsw8nBKehVAiq0wgCAphEm8R6CjM1xxJ/ydVPxYA51QEdBjJ1\nepQW/2bC+SZ5VkGAf3q5pFIoasN6Jj7HmUlGxAf4aU9Vw9q9xY33ncMPTEgJvEuL\n0TWO/sZWupVVmyR1eQtcfPAk2Juq4Br7eXVoFHKtAoGBAONIQ4QP5ifPrZrvfnn8\nHjt03g72Ve0/UvK+Y4rgfQbyL3Yl7urKT1FokZLe2gLEDdIRd+dE02qPrnv5pq+S\nzBetbOgFTTfgovuE5wCIw1a4HSCwv9Y/yNOrtj7yNdgE/qVSRKkcPUQd+w3uEk46\nnjVEa4GWu7ifsVdCorJNLHw1\n-----END PRIVATE KEY-----\n",
//     }),
//     databaseURL: "https://myproject-7ed24.firebaseio.com"
//   });

  var config = {
    apiKey: "AIzaSyCMcQ0SXIaUNsXbvSzwABEepwXSHIvAFo0",
    authDomain: "myproject-7ed24.firebaseapp.com",
    databaseURL: "https://myproject-7ed24.firebaseio.com",
    projectId: "myproject-7ed24",
    storageBucket: "myproject-7ed24.appspot.com",
    messagingSenderId: "667043118631"
  };
  firebase.initializeApp(config);
  
  function admin(admin) {

    const db = firebase.database()
    var emails =['aku378@sapient.com','araushan@sapient.com','rkumar202@sapient.com',
                 'preddy132@sapient.com','sshree3@sapient.com'
                ];

    function passwordGenerator(length, chars){
        let mask = '';
        if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
        if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (chars.indexOf('#') > -1) mask += '0123456789';
        if (chars.indexOf('!') > -1) mask += '@*';
        let result = '';
        for (var i = length; i > 0; --i) result += mask[Math.floor(Math.random() * mask.length)];
        return result;
    }
    // function uidGenerator(){

    //     let id = Math.floor(Math.random() * 10000+1)
    //         return id;
    // }
    // function createUser(mail){
        
        // let password = uidGenerator()
        for(let i=0; i< emails.length ; i++){
        var password=  passwordGenerator(8, 'aA#!')
        console.log(password)
        firebase.auth().createUserWithEmailAndPassword(emails[i],password)
        .then(function(user){
            db.ref(`users/${user.uid}`).set({name: '', email:user.email, uid: user.uid,}); // I added user
            console.log(user)
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            console.log(errorCode, errorMessage)
          });
        }
      
    // emails.forEach(createUser(emails[]))
      
  }admin();

 





      