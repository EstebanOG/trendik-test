import app from './app'
import './database'

app.listen(app.get('port'),() => {
    console.log('serve on port ', app.get('port'));
})
