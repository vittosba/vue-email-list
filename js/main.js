/**
 * Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
 */

const app = new Vue({
    el: '#app',
    data: {
        apiURL: 'https://flynn.boolean.careers/exercises/api/random/mail',
        emails: [],
    },
    computed: {
        dataOk() {
            return (this.emails.length === 10) ? true : false;
        },
    },
    created() {
        for(let i = 0; i < 10; i++) {
            this.getEmails();
        }
        console.log(this.emails);
    },
    methods: {
        getEmails() {
            axios.get(this.apiURL)
            .then( response => {
              // handle success
              console.log(response.data.response);

              this.emails.push(response.data.response);
            })
            .catch( error => {
              // handle error
              console.log(error);
            });
        },
    }

})