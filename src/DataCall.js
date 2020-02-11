import React from 'react';
import firebase from 'firebase';
import { Button } from '@material-ui/core';

var arrmap = {}
export default function DataCall()
{
    const db = firebase.firestore();
    var docRef = db.collection("Challenge").doc("Grid");
    var challenge1 = [];
    var challenge2 = [];
docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
        arrmap =  doc.data();

    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});
console.log(arrmap);
    // for(let key in arrmap){
    //     challenge1 =  arrmap[key];
    // }
  challenge1 = (arrmap[Object.keys(arrmap)[0]])
  challenge2 = (arrmap[Object.keys(arrmap)[1]])
    console.log([challenge1,challenge2])
    return [challenge1,challenge2];
}