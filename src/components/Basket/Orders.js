import React, { useEffect, useState } from "react";

import { useStateValue } from "../../store/StateProvider";
import classes from "./Orders.module.css";

import { db } from "../../firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
// import { ref } from 'firebase/storage';
import Order from "./Order";

export default function Orders() {
  const [{ user }] = useStateValue();

  const [orders, setOrders] = useState();

  useEffect(() => {
    if (user) {
      //This is for firebase v8 web sdk
      /* db.collection('users')
      .doc(user?.uid)
      .collection('orders')
      .orderBy('created', 'desc')
      .onSnapshot((snapshot) => (
        setOrders(snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        })))
      ))*/

      //This is for firebase v9 web sdk
      // const ref = doc(db, "users", user?.uid, "orders"); 
      const ref = collection(db, "users", user?.uid, "orders");

      const orderedList = query(ref, orderBy('created', 'desc'));
      onSnapshot(orderedList, (snapshot) => {
        // console.log('This is the snapshot >>>', snapshot)
        setOrders(snapshot?.docs?.map((doc) => ({
          id: doc?.id,
          data: doc?.data(),
        })))
      });

    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className={classes.orders}>
      <h1>Your Orders</h1>

      <div className={classes.orders__order}>
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}
