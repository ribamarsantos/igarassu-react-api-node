const app = require('./api/app')
const port = process.env.PORT || 3003;
app.listen(port, () => console.log(`Listening on port ${port}, on ${app.get('env')}`));