
//const { YoutubeTranscript } = require('youtube-transcript');
const { YoutubeTranscript } = require('../dist/youtube-transcript.common.js');


YoutubeTranscript.fetchTranscript(process.argv[2])
  .then(console.log)
  .catch(console.error);
