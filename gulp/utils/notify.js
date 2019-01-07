import notifier from 'node-notifier';

function message(error) {
  notifier.notify({
    title: 'Gulp Error',
    message: error.message,
    timeout: 3
  });
  // eslint-disable-next-line no-console
  console.error('\x1b[31m', error.message ,'\x1b[0m');
  this.emit('end');
}

export default message;
