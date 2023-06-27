<template>
    <div  v-if="dead">
            <div class="grid-item">
                <form @submit="submit" style="width: 100%;">
                    <button type="button" class="action-button" value="Send me Love ❤️" name="Send message" :disabled="isLoading">Send me Love ❤️</button>
                </form>
            </div>
    </div>
    <div v-if="ok">
        <div class="grid-item">
            {{ messageSend }}
        </div>
    </div>
</template>

<script>

  export default {
    name: "Telegram Button",
    data() {
        return {
            dead: true,
            ok: false,
            message: "I love you bro! ❤️",
            messageSend: '',
            apiUrl: 'http://api.textcaptcha.com/mirror.json',
            isLoading: null,
            botkey: botkey,
            chatid: chatid,
        }
    },
    methods: {
        async submit(e) {
            e.preventDefault()
            const requestOptions = {
                method: "POST"
            };
            console.log(this.botkey)
            const response = await fetch(`https://api.telegram.org/bot${this.botkey}/sendMessage?chat_id=${this.chatid}&text=${this.message}`, requestOptions)
            .then( function( response ){
                if( !response.ok ){
                    this.fetchError = response.status;
                    this.messageSend = "Error Bro! ☠️";
                    this.dead = false;
                    this.ok = true;
                }else{
                    response.json().then( function( data ){
                        this.fetchResponse = data;
                        this.messageSend = "Many Thanks Bro! 😘";
                        this.dead = false;
                        this.ok = true;
                        setTimeout(() => {
                            this.isLoading = false
                        }, 1000)
                    }.bind(this));
                }
            }.bind(this));
        }
    },
}
</script>