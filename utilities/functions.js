import { closePaymentModal } from "flutterwave-react-v3";
import {
  addDoc,
  doc,
  updateDoc,
  where,
  getDownloadURL,
  ref,
  uploadString,
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  db,
  storage,
} from "../firebase";

const getOrderedProps = async (field, order, max) => {
  const array = [];
  const snapshot = await getDocs(
    query(collection(db, `${field}`), orderBy(`${order}`, "desc"), limit(max))
  );
  snapshot.forEach((doc) => {
    array.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  console.log("Ordered Props => ", array);
  return array;
};

const getPropData = async (field, path) => {
  const array = [];
  console.log(path);
  const matchingDocs = await getDocs(
    query(collection(db, `${field}`), where("path", "==", `${path}`))
  );
  matchingDocs.forEach((doc) => array.push({ ...doc.data() }));
  console.log("Prop Data => ", array);
  return array;
};

const postTo = async (field, object, imageString) => {
  // Check if there already exists a doc with that name
  const matchingDoc = await getDocs(
    query(collection(db, `${field}`), where("path", "==", `${object.path}`))
  );
  if (matchingDoc.length > 0) {
    return alert(`Already an event with the title ${object.title}`);
  } else {
    const docRef = await addDoc(collection(db, `${field}`), object);

    console.log("====================================");
    console.log("New doc added with ID", docRef.id);
    console.log("====================================");

    const imageRef = ref(storage, `${field}/${docRef.id}/image`);

    await uploadString(imageRef, imageString, "data_url").then(async () => {
      const downloadUrl = await getDownloadURL(imageRef);
      await updateDoc(doc(db, `${field}`, docRef.id), {
        image: downloadUrl,
      });
    });
  }
};

const getPaths = async (field) => {
  const array = [];
  const snapshot = await getDocs(collection(db, `${field}`));
  switch (field) {
    case "cinema":
      snapshot.forEach((doc) => {
        const path = doc.data()?.path;
        array.push({ params: { cinemaId: `${path}` } });
      });
      break;
    case "sports":
      snapshot.forEach((doc) => {
        const path = doc.data()?.path;
        array.push({ params: { sportId: `${path}` } });
      });
      break;
    case "events":
      snapshot.forEach((doc) => {
        const path = doc.data()?.path;
        array.push({ params: { eventId: `${path}` } });
      });
      break;
    case "webevents":
      snapshot.forEach((doc) => {
        const path = doc.data()?.path;
        array.push({ params: { webId: `${path}` } });
      });
      break;
  }
  return array;
};

const getProps = async (field, exception, max) => {
  const array = [];
  const docsRef = await getDocs(
    query(
      collection(db, `${field}`),
      where("path", "!=", `${exception}`),
      limit(max)
    )
  );
  docsRef.forEach((doc) => {
    array.push({ id: doc.id, ...doc.data() });
  });
  console.log("Array of Props => ", array);
  return array;
};

const getFlutterwaveConfig = (username, email, eventTitle, price) => ({
  public_key: process.env.NEXT_PUBLIC_FLUTTERWAVE_KEY,
  tx_ref: `txp_ ${Math.floor(Math.random() * 1000000000000 + username.length)}`,
  amount: price,
  currency: "ZMW",
  payment_options: "mobilemoneyzambia, ussd, card",
  customer: {
    name: username,
    email: email,
  },
  customizations: {
    title: "Ticket Express Payments",
    description: `Payment for ${eventTitle}`,
  },
  callback: (data) => {
    // After Transaction send data to Server for Verification
    console.log(data);
    closePaymentModal;
    // const vname = data.customer.name;
    // const vemail = data.customer.email;
    // const vphone = data.customer.phonenumber;
    // const tx_id = data.transaction_id;

    // if (tx_id !== "null") {
    //   axios({
    //     method: "post",
    //     url: "/save",
    //     data: {
    //       fname: fname,
    //       username: vname,
    //       email: vemail,
    //       phone: vphone,
    //       reference: tx_id,
    //     },
    //   })
    //     .then(console.log("Data Sent to server"))
    //     .catch((err) => console.error(err));
    // }
  },
});

export {
  getOrderedProps,
  getPropData,
  postTo,
  getPaths,
  getProps,
  getFlutterwaveConfig,
};
