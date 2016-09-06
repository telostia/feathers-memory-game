import io from 'socket.io-client';
import feathers from 'feathers-client';

class API {
  constructor() {
    // Establish a Socket.io connection
    const socket = io();
    // Initialize our Feathers client application through Socket.io
    // with hooks and authentication.
    this.app = feathers()
      .configure(feathers.socketio(socket))
      .configure(feathers.hooks())
      // Use localStorage to store our login token
      .configure(feathers.authentication({
        type: 'local',
        storage: window.localStorage,
      }));
  }

  service(serviceName) {
    return this.app.service(serviceName)
  }

  authenticate(user) {
    const { email, password } = user
    debugger
    return this.app.authenticate({
      email,
      password,
    })
  }
}

export default API
