import { defineStore } from 'pinia';
import { auth,db,Storage } from "src/boot/firebase"
import { createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  updateEmail,
  updatePassword,
  updateProfile,
  sendEmailVerification,
  signOut
 } from "firebase/auth"
 import { ref,  uploadBytes, uploadBytesResumable, getDownloadURL } from "firebase/storage";
 import { collection, query, arrayUnion, arrayRemove, onSnapshot, where, doc, addDoc, setDoc, getDocs, getDoc, updateDoc, deleteDoc, increment } from "firebase/firestore";

import { Notify, LocalStorage, } from 'quasar'
import PaystackPop from '@paystack/inline-js';
import emailjs from '@emailjs/browser';
import { reactive } from 'vue';
import { date } from 'quasar'
import axios from "axios";


export const useCounterStore = defineStore('counter', {
  state: () => ({
    user: reactive({}),
    username: LocalStorage.getItem('username'),
    userId: ref(null),
    // useRef: doc(db, "users", this.userId),
    isLoggedIn: LocalStorage.getItem('isLoggedIn')| null,
    upDateProfilePrompt: ref(false),
    defaultPic:'https://cdn.quasar.dev/img/boy-avatar.png',
    counter: 0,
    panel: 'profile',
    profile: 'profile',
    orders:'orders',
    settings:'settings',
    Address:'Address',
    favourites:'favourites',
    leftDrawerOpen: false,
    hide1: false,
    hide2: false,
    hide3: false,
    showReviewBox: ref(false),
    showTrackBox: ref(false),
    showAgeConfirmBox: ref(false),
    ShowChangePass: false,
    ShowNotification: false,
    Showsetup: true,
    ShowLoading: false,
    products: ref([]),
    chasers: ref([]),
    adminorders: ref([]),
    allUsers: ref([]),
    favourites: ref([]),
    recentlyViewed: ref([]),
    cartProducts: ref([]),
    coupons: ref([]),
    filter: [],
    cat1: null,
    cat2: null,
    cat3: null,
    results: null,
    singleItem: ref([]),
    checkout: reactive({}),
    orderTrack: reactive({}),
    ProductForReviews: reactive({}),
    shippingRate: ref(1450),
    cartTotal: ref(0),
    componentKey: ref(1),
    loadSignUpBtn: false,
  }),
  getters: {
    toTalPayment: (state) => state.cartTotal + state.shippingRate,
    fetchValue: () =>{
      // const fetchValue = () => {
        // if (cartProducts.value) {
          const items = LocalStorage.getItem("cartItems") || []
          let priceArray = [];
          items.forEach((item) => {
            let cost = item.price * item.quantity;
            priceArray.push(cost);
          });
          // arr.reduce(function (a, b) {
          //   return a + b;
          // });
          return priceArray.reduce(function (a, b) {
            return a + b;
          }, 0);
          // return Store.cartProducts.value.length > 0 ? true : false;
        // }
      // };
    },
  },
  actions: {
    notifyUser(avatar, message) {
      Notify.create({
        message: message,
        avatar: avatar,
        color: 'primary',
        textColor: 'secondary'

      })
    },
    addTorecently(name, price, category, image, tag, id, favouriters) {
      let recents = LocalStorage.getItem("recentItems") || [];
      const favourites = [...favouriters];
      if (recents.length < 20) {
        recents.push({
          name,
          price,
          category,
          image,
          tag,
          id,
          favourites,
        });
        LocalStorage.set("recentItems", recents);

      } else {
        recents.splice(0, 1);
        recents.push({
          name,
          price,
          category,
          image,
          tag,
          id,
          favourites,
        });
        LocalStorage.set("recentItems", recents);
      }
    },
    async refreshUser(){
      let user = LocalStorage.getItem('userDetails')
      LocalStorage.remove('userDetails');
      const docRef = doc(db, "users", user.id);
      const docSnap = await getDoc(docRef);
      LocalStorage.set('userDetails', docSnap.data());
    },
    async queryUser(userId) {

      const docRef = doc(db, "users", userId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()){

        LocalStorage.set('userDetails', docSnap.data());
          LocalStorage.set('isLoggedIn', true);
          LocalStorage.set('userId', userId);
          Object.assign(this.user, docSnap.data());
          // Object.assign(this.userId, doc.id);

          if(this.router.options.history.state.back === '/cart'){
            this.router.push('/cart')
            this.loadSignUpBtn = false;
            this.notifyUser(this.defaultPic, 'Welcome back')
          }else{

            this.router.push('/categories/general');
            this.loadSignUpBtn = false;
            this.notifyUser(this.defaultPic, 'Welcome back')
          }

          // console.log(this.router.options.history.state.back)


      }else{
        this.router.push('/signup');
        this.loadSignUpBtn = false;
      }



    },
    handleAuthState() {

      onAuthStateChanged(auth, (user) => {
        if (user) {
          // this.isLoggedIn = true;
          this.queryUser(user.uid);
        }
      });
    },
    loginUser(payload) {
      this.loadSignUpBtn = true;
      signInWithEmailAndPassword(auth, payload.email, payload.password)
      .then((response)=>{
        LocalStorage.set('isLoggedIn', true);
        // this.router.push({ name: 'user', params: { username: 'eduardo' } })
        LocalStorage.set('username', response.user.displayName);
        // this.router.push('/categories/general');
        this.handleAuthState()
      })
      .catch((err) => {
        this.loadSignUpBtn = false;
        Notify.create({
          message: 'Connection Error',
          icon: 'announcement',
          color: 'secondary'
        })
      })
    },
    registerUser(payload) {
      this.loadSignUpBtn = true;
      createUserWithEmailAndPassword(auth, payload.email, payload.password)
      .then(async(userCredential)=>{
        // sendEmailVerification(auth.currentUser)
        await setDoc(doc(db, "users", userCredential.user.uid), {
          name: payload.name,
          lastName:'',
          id: userCredential.user.uid,
          email: userCredential.user.email,
          profilePic:'',
          phoneNumber:'',
          status: 'user',
          cart:[],
          orderHistory:[],
          recentlyViewed:[],
          addresses:[],
          setup:{
            getOrderConfirm: true,
            getOrderDelivered: true,
            getUpdates: true
          }
        });
        this.loginUser(payload)
          // this.router.push('/categories/general');
          // this.upDateProfilePrompt = true;
        // this.loadSignUpBtn = false;
          // this.notifyUser(this.defaultPic, 'Welcome to Teepsee');



      })
      .catch((err) => {
        console.log(err);
        this.loadSignUpBtn = false;
        Notify.create({
          message: 'Connection Error',
          icon: 'announcement',
          color: 'secondary'
        })
      })
    },

    googleSigin() {
      let provider = new GoogleAuthProvider();

      this.loadSignUpBtn = true;
      signInWithPopup(auth, provider)
       .then(async(userCredential) => {
          const docRef = doc(db, "users", userCredential.user.uid);
          const docSnap = await getDoc(docRef);

         if (docSnap.exists()){

          this.router.push('/login');

        }else{

          await setDoc(doc(db, "users", userCredential.user.uid), {
            name: userCredential.user.displayName,
            lastName:'',
            id: userCredential.user.uid,
            email: userCredential.user.email,
            profilePic: userCredential.user.photoURL,
            phoneNumber: userCredential.user.phoneNumber | null,
            status: 'user',
            cart:[],
            orderHistory:[],
            recentlyViewed:[],
            addresses:[],
            setup:{
              getOrderConfirm: true,
              getOrderDelivered: true,
              getUpdates: true
            }
          });

          this.router.push('/categories/general');
          this.handleAuthState();
          // this.upDateProfilePrompt = true;
          this.loadSignUpBtn = false;
          // LocalStorage.set('username', userCredential.user.displayName);
          // this.notifyUser(userCredential.user.photoURL, `Welcome to Teepsee ${userCredential.user.displayName}`);



        }




        }).catch((error) => {
          // Handle Errors here.
          console.log(error);
          const errorMessage = error.message;
          Notify.create({
          message: 'Connection Error',
          icon: 'announcement',
          color: 'secondary'
        })

       });
    },
    googleLogin() {
      let provider = new GoogleAuthProvider();
      this.loadSignUpBtn = true;
      signInWithPopup(auth, provider)
       .then((userCredential) => {
         this.handleAuthState();

        //  this.notifyUser(userCredential.user.photoURL, `Welcome back ${userCredential.user.displayName}`)
        //  LocalStorage.set('username', userCredential.user.displayName);
          // this.loadSignUpBtn = false;
        }).catch((error) => {
          // Handle Errors here.
          console.log(error);
          const errorMessage = error.message;
          Notify.create({
          message: 'Connection Error',
          icon: 'announcement',
          color: 'secondary'
        })

       });
    },

    logOut() {
      signOut(auth).then(() => {
        // Sign-out successful.
        LocalStorage.remove('isLoggedIn');
        LocalStorage.remove('userDetails');
        LocalStorage.remove('userId');
        this.router.push('/login');
      }).catch((error) => {
        // An error happened.
      });
    },
    uploadImage(file) {
      if (file) {
        const metadata = {
          contentType: 'image/jpeg'
        };
        this.ShowLoading = true;
        // Upload file and metadata to the object 'images/mountains.jpg'
        const storageRef = ref(Storage, 'images/' + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file, metadata).then(()=>{
          getDownloadURL(storageRef).then((downloadURL) => {
               const docToupdate = doc(db, "users", this.userId);
               updateProfile(auth.currentUser, {
                photoURL: downloadURL
              })
                updateDoc(docToupdate, { profilePic: downloadURL  }).then(() => {
                  this.ShowLoading = false;
              });
            });
        })
      }



    },
    fetchChasers(){

      const colRef = collection(db, "products");
      const chaseRef = query(colRef, where("chaser", "==", true))

      onSnapshot(chaseRef, (data) => {
        let group = data.docs.map((item) => {
          return item.data();
        });
        this.chasers.value = [...group];
        // if (this.products.value.length > 0) {
        //   this.ShowLoading = false;
        // }
      });
    },
    Fetchproducts (category) {
      this.ShowLoading = true;
      if (category === 'general') {

      const colRef = collection(db, "products");
      onSnapshot(colRef, (data) => {
        let group = data.docs.map((item) => {
          return item.data();
        });
        this.products.value = [...group];
        if (this.products.value.length > 0) {
          this.ShowLoading = false;
        }
      });
      }else{
        const productQuery = query(
          collection(db, "products"),
          where("category", "==", `${category}`)
        );
        onSnapshot(productQuery, (data) => {
          let group = data.docs.map((item) => {
            return item.data();
          });
          this.products.value = [...group];
          if (this.products.value.length > 0) {
            this.ShowLoading = false;
          }
        });

      }

    },
    FetchAdminOrders () {
      this.ShowLoading = true;
      // if (category === 'general') {

      let colRef = collection(db, "orders");
      onSnapshot(colRef, (data) => {
        let group = data.docs.map((item) => {
          return item.data();
        });
        this.adminorders.value = [...group];
        if (this.adminorders.value.length > 0) {
          this.ShowLoading = false;
        }
      })

    },
    FetchAdminUsers () {
      this.ShowLoading = true;
      // if (category === 'general') {

      let colRef = collection(db, "users");
      onSnapshot(colRef, (data) => {
        let group = data.docs.map((item) => {
          return item.data();
        });
        this.allUsers.value = [...group];
        if (this.allUsers.value.length > 0) {
          this.ShowLoading = false;
        }
      })

    },
    categoryQuery(category){

        this.ShowLoading = true;
        const productQuery = query(
        collection(db, "products"),
        where('category', 'in', [`${category.brandy}`, `${category.wine}`,
        `${category.cognac}` , `${category.whiskey}` ,
         `${category.vodka}` , `${category.tequila}` ,
          `${category.gin}` , `${category.champagne}` , `${category.herb}`]));

        onSnapshot(productQuery, (data) => {
        let group = data.docs.map((item) => {
          return item.data();
        });
        this.products.value = [...group];
        // if (this.products.value.length > 0) {
          this.ShowLoading = false;
        // }
      });

    },
    // brandQuery(brand){
    //   if (brand.Hennessey === 'nil' && brand.Vodka === 'nil' && brand.Azul === 'nil' ) {
    //     this.Fetchproducts('general');
    //   }else{
    //     this.ShowLoading = true;
    //     const productQuery = query(
    //     collection(db, "products"),
    //     where('brand', 'in', [`${brand.Hennessey}`, `${brand.Vodka}`, `${brand.Azul}`]));

    //     onSnapshot(productQuery, (data) => {
    //     let group = data.docs.map((item) => {
    //       return item.data();
    //     });
    //     this.products.value = [...group];
    //     if (this.products.value.length > 0) {
    //       this.ShowLoading = false;
    //     }
    //   });
    //   }

    // },
    priceQuery(min, max){
      this.ShowLoading = true;
      const queryPrice = query(collection(db, "products"), where("price", ">=", `${min}`), where("price", "<=", `${max}`));

      onSnapshot(queryPrice, (data) => {
        let group = data.docs.map((item) => {
          return item.data();
        });
        this.products.value = [...group];
        if (this.products.value.length > 0) {
          this.ShowLoading = false;
        }else{
          this.notifyUser(this.user.profilePic, "No product Found");
          this.ShowLoading = false;
        }
      });
    },
    fetchFavourites(){
      this.ShowLoading = true;
      const queryProduct = query(collection(db, "products"), where("favouriters", "array-contains", this.userId));

      onSnapshot(queryProduct, (data) => {
        let group = data.docs.map((item) => {
          return item.data();
        });
        this.favourites.value = [...group];
        if (this.favourites.value.length > 0) {
          this.ShowLoading = false;
        }
      });
    },
    fetchAdmins(){
        if (this.user.status !== "admin") {
          this.router.push("/");
        } else {
          console.log("checked Admin");
          Fetchproducts("general");
        }
    },
      // this.ShowLoading = true;
      // const adminsQuery = query(collection(db, "admins"));

      // onSnapshot(adminsQuery, (data) => {
      //   let group = data.docs.map((item) => {
      //     return item.data();
      //   });
      //   // this.favourites.value = [...group];
      //   console.log(group);
      //   if (group.length > 0) {
      //     this.ShowLoading = false;
      //   }
      // });
    // },
    updateData(payload,userId) {
      const docToUpdate = doc(db, "users", userId);
      this.ShowLoading = true;
       updateEmail(auth.currentUser, payload.email).then(()=>{
        updateProfile(auth.currentUser, {
          displayName: `${payload.name} ${payload.lastName}`,
          phoneNumber: payload.phoneNumber
        })

         updateDoc(docToUpdate, {
          name: payload.name,
          lastName: payload.lastName,
          email: payload.email,
          phoneNumber: payload.phoneNumber,
        }).then(()=>{
          this.handleAuthState();
          this.notifyUser(this.defaultPic, `Profile Updated`);

          this.ShowLoading = false;
        })
       }).catch(()=>{
        this.notifyUser(this.defaultPic,'Required to signin again')
        this.ShowLoading = false;
        this.logOut();

       })

    },
    changePassWord(payload) {
      this.ShowLoading = true;
      const user = auth.currentUser;
      updatePassword(user, payload.newPassword).then(() => {
        this.notifyUser(this.defaultPic,'Password Updated Successfully')
        this.ShowLoading = false;
      }).catch(()=>{
        this.notifyUser(this.defaultPic,'Required to signin again');
        this.logOut();
        this.ShowLoading = false;
      })
    },

    updateSetup(setup) {
      const docToUpdate = doc(db, "users", this.userId);
    //  if (this.user.getOrderConfirm === true) {
     updateDoc(docToUpdate, {
        setup
      }).then(() => {
       this.notifyUser(this.user.profilePic, "Settings Updated");
      });
    },


    updateAddress(address) {
      let user = LocalStorage.getItem('userDetails')

      const docToUpdate = doc(db, "users", user.id);
      updateDoc(docToUpdate, {
        addresses: arrayUnion(address)
      }).then(()=>{
        this.notifyUser(user.profilePic, " New Address Added");
        this.refreshUser();
      })
    },

    uploadProduct(payload) {

      if (payload) {

        for (i=0; i<payload.length; i++) {
          alert(payload[i])
        }
        // payload.forEach((file)=>{

          // console.log(file.length);
          // const metadata = {
          //   contentType: 'image/jpeg'
          // };

          // const storageRef = ref(Storage, 'images/' + file.name);
          // const uploadTask = uploadBytesResumable(storageRef, file, metadata).then(()=>{
          //   const imageUrls = {};
          //   getDownloadURL(storageRef).then((downloadURL)=>{
          //     console.log('File available at', downloadURL);
          //     Object.assign(imageUrls, downloadURL);

          //     let colRef= collection(db, 'products',);
          //     addDoc(colRef, {
          //       addresses: arrayUnion(downloadURL)
          //     })

          //   })

          // })

        // })
        // console.log(imageUrls);
      }
    },
    addImage(file, id) {
      if (file) {
        this.ShowLoading = true;
        const metadata = {
          contentType: "image/jpeg",
        };
        let docToUpdate = doc(db, "products", id);
        const storageRef = ref(Storage, "images/" + file.name);
        uploadBytesResumable(storageRef, file, metadata).then(() => {
          getDownloadURL(storageRef).then((downloadURL) => {
            // const docToUpdate = doc(db, "users", this.userId);
            updateDoc(docToUpdate, {
              images: arrayUnion(downloadURL),
            }).then(() => {
              this.ShowLoading = false;
              this.notifyUser(this.user.profilePic, "image Uploaded");
            });
          });
        });
      } else {
        this.notifyUser(this.user.profilePic, "No image to upload");
      }
    },

    deleteProduct (id) {
      this.ShowLoading = true;
      deleteDoc(doc(db, "products", id)).then(() => {
       this.notifyUser(this.user.profilePic, "Product deleted Successfully");
       this.ShowLoading = false;
      });
     },
    FetchUser() {
      if (this.user === null) {
        this.namePrompt = true;
      }
    },
    addToFavourites(productId) {
      const productToUpdate = doc(db, "products", productId);
      updateDoc(productToUpdate, {
        favouriters: arrayUnion(this.userId)
      }).then(()=>{
        this.notifyUser(this.user.profilePic, " added to favourites");
      })
    },
    removeFavourites(productId) {
      const productToUpdate = doc(db, "products", productId);
      updateDoc(productToUpdate, {
        favouriters: arrayRemove(this.userId)
      }).then(()=>{
        this.notifyUser(this.user.profilePic, " removed from favourites");
      })
    },
    addCoupon(payload) {
      if(payload.name && payload.code && payload.discount){
        let colRef= collection(db, 'coupons');
        addDoc(colRef, {
          name:payload.name,
          code:payload.code,
          discount: `${payload.discount}%`,
          users:[]
        }).then(() =>{
          this.notifyUser(this.defaultPic, 'Coupon Added');
        })
      }else{
        this.notifyUser(this.defaultPic, 'Enter coupon details');
      }

    },
    fetchCoupons() {
      const colRef = collection(db, "coupons");
      onSnapshot(colRef, (data) => {
        let group = data.docs.map((item) => {
          return item.data();
        });
        this.coupons.value = [...group];
        // if (this.products.value.length > 0) {

        // }
      });

    },
    initDiscount(code, id){
      const num = parseFloat(code) / 100
      let percentNumber = this.cartTotal * num
      this.cartTotal = this.cartTotal - percentNumber

        let docToUpdate = doc(db, "coupons", id);
        updateDoc(docToUpdate, {
        users: arrayUnion(this.user.email),
        })
        this.notifyUser(this.user.profilePic, "Discount Added");

        this.ShowLoading = false;



    },
    getCoupon(discountCode){
      this.ShowLoading = true;
      const coupons = [];
      const ids = [];
      const querycoupon = query(collection(db, "coupons"), where("code", "==", discountCode));
      getDocs(querycoupon).then((querySnapshot)=>{
        querySnapshot.forEach((doc) => {
          ids.push(doc.id);
          coupons.push(doc.data());
        });

          let coupon = coupons[0]
          const id = ids[0]
        if (coupon) {

          this.ShowLoading = false;
          let users = coupon.users
          if(users.includes(this.user.email)){
            this.notifyUser(this.user.profilePic, "Already Used")
          }else{
            this.initDiscount(coupon.discount, id);
          }
        }else{
          this.notifyUser(this.user.profilePic, "invalid Coupon");
          this.ShowLoading = false;
        }
      });

    },
    sendMail(id) {
      let templateParams = {
        to_name: this.username,
        send_to: this.user.email,
        order_id: `order Id: ${id}`,
        order_total: `order Total: ${this.cartTotal}`,
        reply_to: "admin@getteepsee.com",
      };

      emailjs.send('service_ql80yi9', 'template_j007nsc', templateParams,'fmWXR51OFH0YMqwEK')
      .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
      })

    },
    async createOrder(id){
      let user = LocalStorage.getItem('userDetails')
      const timeStamp = Date.now()
      const formattedString = date.formatDate(timeStamp, 'YYYY, MMM DD HH:mm A')
        await addDoc(collection(db, "orders"), {
        orderId: id,
        amount: this.toTalPayment,
        items: LocalStorage.getItem("cartItems"),
        status: 'Pending',
        time: formattedString,
        customer: this.user.email,
        address: this.checkout.address,
        landmark: this.checkout.landmark,
        phoneNumber: this.checkout.phoneNumber,
        optionalNote: this.checkout.optionalNote,
      });
      this.sendMail(id);
      LocalStorage.remove('cartItems');
      LocalStorage.remove('singleItems');
      this.notifyUser(user.profilePic, "Order Successful");
    },
    // async createOrder2(id){
    //   const timeStamp = Date.now()
    //   const formattedString = date.formatDate(timeStamp, 'YYYY, MMM DD HH:mm A')
    //     await addDoc(collection(db, "orders"), {
    //     orderId: id,
    //     amount: this.toTalPayment,
    //     items: this.singleItem,
    //     status: 'Pending',
    //     time: formattedString,
    //     customer: this.checkout.name,
    //     address: this.checkout.address,
    //     landmark: this.checkout.landmark,
    //     phoneNumber: this.checkout.phoneNumber,
    //     optionalNote: this.checkout.optionalNote,
    //   });
    //   this.sendMail(id);
    //   LocalStorage.remove('cartItems');
    //   this.notifyUser(this.user.profilePic, "Order Successful");
    //   console.log('finally done');
    // },
    processPayment() {
      let user = LocalStorage.getItem('userDetails')
      let loggedIn = LocalStorage.getItem('isLoggedIn')

      if (loggedIn) {
        const paystack = new PaystackPop();

         paystack.newTransaction({

        key: 'pk_test_c20ec726668c0d52feabe4401e5016dc25fb6c70',
        email: user.email,
        amount: this.toTalPayment * 100,

        onSuccess: (transaction) => {
        // Payment complete! Reference: transaction.reference
         this.createOrder(transaction.reference);

        },
        onCancel: () => {
        // user closed popup
        this.notifyUser(user.profilePic, "Order Cancelled");
        LocalStorage.remove('singleItems');

        }
      });

     }else{
      this.router.push('/login');
    }

    },
    // buyNow() {
    //   if (this.isLoggedIn) {
    //     const paystack = new PaystackPop();

    //   paystack.newTransaction({

    //     key: 'pk_test_21a3b29fdc63fa8541342771a8bd098ab2c2c13a',
    //     email: this.user.email,
    //     amount: this.toTalPayment * 100,

    //     onSuccess: (transaction) => {
    //     // Payment complete! Reference: transaction.reference
    //      console.log(transaction.reference)
    //      this.createOrder2(transaction.reference);
    //     //  this.sendMail(transaction.reference);
    //     },
    //     onCancel: () => {
    //     // user closed popup
    //     this.notifyUser(this.user.profilePic, "Order Cancelled");

    //    }
    //  });
    // }

    // },
    updateOrderStatus(newStatus, Id) {
      this.ShowLoading = true;
      const timeStamp = Date.now()
      const formattedString = date.formatDate(timeStamp, 'YYYY, MMM DD HH:mm A')
      const queryOrder = query(collection(db, "orders"), where("orderId", "==", `${Id}`));
      let ids = [];
      getDocs(queryOrder).then((querySnapshot)=>{
        querySnapshot.forEach((doc) => {
          ids.push(doc.id);

        });

        let id = ids[0]
          const docToUpdate = doc(db, "orders", id)
          updateDoc(docToUpdate, {
            status: newStatus,
            changedTime: formattedString
          }).then(()=>{
            this.ShowLoading = false;
          })
      })
    },
    trackOrder(id) {
      const queryOrder = query(collection(db, "orders"), where("orderId", "==", id));
      getDocs(queryOrder).then((querySnapshot)=>{
        querySnapshot.forEach((doc) => {
          Object.assign(this.orderTrack, doc.data());
        });
      })

      if (this.orderTrack) {
        this.showTrackBox = true
      }
    },
     async sendToreview(items, username, orderId) {
      await addDoc(collection(db, "reviewLobby"), {
        orderId: orderId,
        items: items,
        customer: username,
      });
    },
    async getProductForReviews() {
      let queryresults = []
      const reviewQuery = query(collection(db, "reviewLobby"), where("customer", "==", this.username));
      const querySnapshot = await getDocs(reviewQuery);
      // const firstdoc = querySnapshot[0]
      querySnapshot.forEach((doc) => {
        queryresults.push(doc.data())
      });
      Object.assign(this.ProductForReviews, queryresults[0]);
      if (this.ProductForReviews.items) {
        this.showReviewBox = true
      }

    },
    async uploadReviews(id, comment, ratingNum) {
      const reviewRef = doc(db, "products", `${id}`);
      const timeStamp = Date.now()
      const formattedString = date.formatDate(timeStamp, 'YYYY, MMM DD HH:mm A')
      await updateDoc(reviewRef, {
        reviews: arrayUnion({
           rating: ratingNum,
           comment: comment,
           date: formattedString,
           name: this.username})
      });
      // total ratings
      await updateDoc(reviewRef, {
        rating: increment(1)
      });

      // indidvidual ratings
      if (ratingNum == 1) {
        await updateDoc(reviewRef, {
          // ratings: arrayUnion({one: increment(1)})
          "ratings.one": increment(1)
        });
      } else if (ratingNum == 2) {
        await updateDoc(reviewRef, {
          // ratings: arrayUnion({two: increment(1)})
          "ratings.two": increment(1)
        });
      } else {
        if (ratingNum == 3) {
          await updateDoc(reviewRef, {
            // ratings: arrayUnion({three: increment(1)})
            "ratings.three": increment(1)
          });
        } else if (ratingNum == 4) {
          await updateDoc(reviewRef, {
            // ratings: arrayUnion({four: increment(1)})
            "ratings.four": increment(1)
          });
        } else {
          await updateDoc(reviewRef, {
            // ratings: arrayUnion({five: increment(1)})
            "ratings.five": increment(1)
          });
        }
      }

      let reviewQuery = query(collection(db, "reviewLobby"), where("orderId", "==", this.ProductForReviews.orderId));
      const querySnapshot = await getDocs(reviewQuery);
      querySnapshot.forEach(async(document) => {
        await deleteDoc(doc(db, "reviewLobby", document.id));
        });
    },
    increment() {
      this.counter++;
    },
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
    toggleAccPanel1() {
      this.panel = this.profile
      this.leftDrawerOpen = false;
    },
    toggleAccPanel2() {
      this.panel = this.orders
      this.leftDrawerOpen = false;
    },
    toggleAccPanel3() {
      this.panel = this.settings;
      this.leftDrawerOpen = false;
    },
    toggleAccPanel4() {
      this.panel = this.Address;
      this.leftDrawerOpen = false;
    },
    toggleAccPanel5() {
      this.panel = this.favourites;
      this.leftDrawerOpen = false;
    },

  },
});
