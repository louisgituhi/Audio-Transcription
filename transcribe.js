const { AssemblyAI } = require('assemblyai');
require('dotenv').config()

const secret_key = process.env.API_KEY


const client = new AssemblyAI({
    apiKey: secret_key,
})

const audioUrl = 
'https://storage.googleapis.com/aai-web-samples/5_common_sports_injuries.mp3'

const config = {
    audio_url: audioUrl,
    speaker_labels: true,
}

const run = async () => {
    const transcript = await client.transcripts.create(config)
    

    for (const utterance of transcript.utterances) {
        console.log(`Speaker ${utterance.speaker}: ${utterance.text}`)
    }
}

run()