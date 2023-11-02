console.log("Ciao a tutti");

const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello Vue!",
      email: "",
      emailsArray: [],
    };
  },
  methods: {
    fetchEmail() {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((res) => {

          for (let i = 0; i < 10; i++) {
            const currentEmail = res.data.response;
            this.emailsArray.push(currentEmail);
          }

          console.log(this.emailsArray);
          //  Questa è la risposta del server
        });
    },
  },
  created() {
    this.fetchEmail();
  },
}).mount("#app");

// axios
//   .get("https://flynn.boolean.careers/exercises/api/random/mail")
//   .then((res) => {
//     //  console.log(res, res.data.response)
//     const userEmail = res.data.response;
//     this.email = userEmail;
//     console.log(this.email);
//     //  Questa è la risposta del server
//   });

