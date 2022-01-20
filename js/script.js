new Vue({
    el: '#app',
    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        modalShow: false,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent',
                        modalShow: false,
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received',
                        modalShow: false,
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent',
                        modalShow: false,
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        modalShow: false,
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent',
                        modalShow: false,
                    }
                ],
            },
        
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received',
                        modalShow: false,
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        modalShow: false,
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received',
                        modalShow: false,
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                        modalShow: false,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                        modalShow: false,
                    }
                ],
            },
        ],
        userData: {
            name: 'Nome  Utente',
            avatar: '_io',
        },
        currentContact: 0,
        newMessageText: '',
        searchChat: '',
        desktopNotifications: false,
    },

    methods: {
        getAvatar(contact) {
            return `./img/avatar${contact.avatar}.jpg`;
        },
        showChat: function(index){
            this.currentContact = index;
        },
        newMessage: function(currentMessages){
            currentMessages.push({
                date: this.getCurrentDate(),
                text: this.newMessageText,
                status: 'sent',
                modalShow: false,
            });
            this.newMessageText = '';
            setTimeout(() => {
                this.answerFunction(currentMessages);
            }, 1000);
        },
        answerFunction(array){
            array.push({
                date: this.getCurrentDate(),
                text: 'ok',
                status: 'received',
                modalShow: false,
            });
        },
        messageOptionsShow: function(index, currentMessages){
            currentMessages[index].modalShow = !currentMessages[index].modalShow;
        },
        deleteMessage: function(index, currentMessages){
            currentMessages.splice(index, 1);
        },
        lastMessage(contact){
            return contact.messages[contact.messages.length - 1].text;
        },
        lastAcces(contact){
            return contact.messages[contact.messages.length - 1].date;
        },
        getCurrentDate(){
            return dayjs().format("DD/MM/YYYY HH:mm:ss");
        },
        desktopNotificationsOnOff(){
            this.desktopNotifications = !this.desktopNotifications;
        }
    },

    // computed mi permette di richiamare le sue proprietà nell html come fossero dei data,
    //la loro funzionalità è data dal fatto che si tratta di funzioni che restituiscono qualcosa che vue si preoccupa di tenere sempre aggiornato dei cambiamenti
    computed: {
        // soluzione alternativa perché i computed piacciono solo a me
        // filteredContactList(){
        //     return this.contacts.filter((contact) => {
        //         return contact.name.toLowerCase().includes(this.searchChat.toLowerCase());
        //     });
        // },
        currentMessages(){
            return this.contacts[this.currentContact].messages;
        },
    },
});