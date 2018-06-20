process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {
  let cmd = data.toString().trim();

  console.log(process.argv[cmd]);
  process.stdout.write('\nprompt > ');
});
