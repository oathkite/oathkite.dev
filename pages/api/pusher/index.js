import Pusher from 'pusher'

export const pusher = new Pusher({
    appId: process.env.PUSHER_APP_ID,
    key: process.env.PUSHER_API_KEY,
    secret: process.env.PUSHER_APP_SECRET,
    cluster: process.env.PUSHER_APP_CLUSTER,
    useTLS: true
})

export default async function handler(req, res) {
    const {message, sender} = req.body
    const response = await pusher.trigger("chat", "chat-event", {
        message,
        sender,
    })

    console.log(response)

    res.json({message: "completed"})
}