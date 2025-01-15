const { express } = require('./common');
const app = express();
app.use(express.json());
const PORT = 3002;

app.use('/', require('./UserPlaylistTracks'));

app.listen(PORT, () => {
  console.log(`I am listening on PORT ${PORT}`);
});
